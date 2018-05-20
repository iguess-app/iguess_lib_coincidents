'use strict'

const redis = require('redis')
const md5 = require('md5')

const pino = require('./logManager')
const config = require('../config/config')

const THREE_SECONDS = 3000
let CacheManager = {}

if (config.redis.needConnection) {
  const clientOptions = {
    'auth_pass': config.redis.key,
    'retry_strategy': (options) => {
      if (options.error) {
        pino.error(options.error.message)
      }

      return THREE_SECONDS
    }
  }

  const redisClient = redis.createClient(config.redis.port, config.redis.host, clientOptions)

  redisClient.on('connect', () => {
    if (redisClient.connected === true) {
      pino.info(`Redis at ${redisClient.address} Connected`)
    }
  })

  redisClient.on('error', (err) => {
    pino.error(err)

    return true
  })

  const isConnected = () => {
    if (!redisClient.connected) {
      pino.error(`Redis ${redisClient.address} not connected`)

      return false
    }

    return true
  }

  CacheManager = {
    get: (key) => {
      if (!key) {
        const errMsg = 'key is a mandatory field to get on Cache.'
        pino.error(errMsg)
        throw new Error(errMsg)
      }
      const md5Key = _generateKey(key)

      return new Promise((resolve) => {
        if (!isConnected(redisClient)) {
          return resolve(null)
        }

        return redisClient.get(md5Key, (err, value) => {
          if (err) {
            pino.error(err)

            return resolve(null)
          }
          resolve(JSON.parse(value))
        })
      })
    },
    set: (key, value, expireTime = config.redis.defaultExpireTime) => {
      if (!isConnected(redisClient)) {
        return null
      }
      if (!key || !value) {
        throw new Error('key and value are mandatory fields to set on Cache.')
      }

      const md5Key = _generateKey(key)

      return redisClient.setex(md5Key, expireTime, JSON.stringify(value))
    },
    del: (key) => {
      if (!key) {
        throw new Error('key is a mandatory field to get on Cache.')
      }
      const md5Key = _generateKey(key)

      return new Promise((resolve) => {
        if (!isConnected(redisClient)) {
          return resolve(null)
        }

        resolve(redisClient.del(md5Key))
      })
    }
  }
}

const _generateKey = (key) => md5(key)

module.exports = CacheManager