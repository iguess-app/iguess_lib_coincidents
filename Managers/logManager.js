'use strict'

const pino = require('pino')

const config = require('../config/config')
let log = pino({ safe: true })

const pretty = pino.pretty()
pretty.pipe(process.stdout)

const isPrettyLogEnv = config.isLocal()

if (isPrettyLogEnv) {
  log = pino({ safe: true }, pretty)
}

module.exports = {
  info: (message) => log.info(message),
  error: (message) => log.error(message),
  warn: (message) => log.warn(message),
  isPrettyLogEnv
}