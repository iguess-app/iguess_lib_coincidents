'use strict'

const pino = require('pino')

const env = require('../config/config').env
let log = {}

const pretty = pino.pretty()
pretty.pipe(process.stdout)

const isPrettyLogEnv = () => env === 'dev' || env === 'homolog' || env === 'local'

if (isPrettyLogEnv()) {
  log = pino({
    safe: true
  }, pretty)
}

module.exports = {
  info: (message) => log.info(message),
  error: (message) => log.error(message),
  warn: (message) => log.warn(message),
  isPrettyLogEnv
}