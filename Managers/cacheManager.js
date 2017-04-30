'use strict';

const redis = require('redis');
const md5 = require('md5');

const config = require('./../config');

const clientOptions = {
  'auth_pass': config.redis.key,
  'retry_strategy': (options) => {
    if (options.error) {
      console.error(options.error.message);
    }
  }
};
const redisClient = redis.createClient(config.redis.port, config.redis.host, clientOptions);

redisClient.on('connect', () => {
  if (redisClient.connected === true) {
    console.info(`Redis at ${redisClient.address} Connected`)
  }
});

redisClient.on('error', (err) => {
  return true;
});

const CacheManager = {

  get: (key) => {
    if (!key) {
      throw 'key is a mandatory field to get on Cache.'
    }
    const md5Key = _generateKey(key);

    return new Promise((resolve, reject) =>
      redisClient.get(md5Key, (err, value) =>
        resolve(value)
      )
    )
  },

  set: (key, value, expireTime) => {
    if (!key || !value) {
      throw 'key and value are mandatory fields to set on Cache.'
    }

    const expire = expireTime || config.redis.defaultExpireTime;
    const md5Key = _generateKey(key);
    redisClient.setex(md5Key, expire, value)
  }

};

const _generateKey = (key) => md5(key)

module.exports = CacheManager;