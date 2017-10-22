'use strict'

const pino = require('pino')

const env = require('../config/config').env
let log = {}

const pretty = pino.pretty()
pretty.pipe(process.stdout)

const isLoggableEnv = () => env === 'dev' || env === 'homolog' || env === 'local'

if (isLoggableEnv()) {
  log = pino({
    safe: true
  }, pretty)
}

module.exports = {
  info: (message) => {
    if (isLoggableEnv()) {
      log.info(message)
    }
  },
  error: (message) => {
    if (isLoggableEnv()) {
      log.error(message)
    }
  },
  warn: (message) => {
    if (isLoggableEnv()) {
      log.warn(message)
    }
  },
  isLoggableEnv
}

/**
 * @function isLoggableEnv
 * @return {boolean}
*/