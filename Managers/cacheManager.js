'use strict'

const redis = require('redis');
const md5 = require('md5');

const pino = require('./logManager')
const config = require('../config/config');

const THREE_SECONDS = 3000

const clientOptions = {
  'auth_pass': config.redis.key,
  'retry_strategy': (options) => {
    if (options.error) {
      pino.error(options.error.message);
    }

    return THREE_SECONDS
  }
};

const redisClient = redis.createClient(config.redis.port, config.redis.host, clientOptions);

const connect = () => {
  redisClient.on('connect', () => {
    if (redisClient.connected === true) {
      pino.info(`Redis at ${redisClient.address} Connected`)
    }
  })
}
connect()

redisClient.on('error', (err) => {
  pino.error(err);
  connect()

  return true;
});

const isConnected = () => {
  if (!redisClient.connected) {
    pino.error(`Redis ${redisClient.address} not connected`)
    connect()
    
    return false
  }

  return true
}

const CacheManager = {
  get: (key) => {
    if (!key) {
      throw new Error('key is a mandatory field to get on Cache.')
    }
    const md5Key = _generateKey(key);

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
    const md5Key = _generateKey(key);

    return new Promise((resolve) => {
      if (!isConnected(redisClient)) {
        return resolve(null)
      }

      resolve(redisClient.del(md5Key))
    })
  }
};

const _generateKey = (key) => md5(key)

module.exports = CacheManager