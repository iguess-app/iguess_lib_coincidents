'use strict'

const mongoose = require('mongoose')
const promise = require('bluebird')
const pino = require('./logManager')

const config = require('../config/config')
const mongo = config.mongo

let DB_GLOBAL_CONNECTION = null

const connect = (uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`) => {
  if (DB_GLOBAL_CONNECTION) {
    return DB_GLOBAL_CONNECTION
  }

  if (mongo.atlas) {
    uri = `mongodb://${mongo.user}:${mongo.password}@${mongo.address}/${mongo.database}?ssl=true&replicaSet=ZeroCluster-shard-0&authSource=admin`
  }

  const options = {
    promiseLibrary: promise
  }

  DB_GLOBAL_CONNECTION = mongoose.createConnection(uri, options)

  DB_GLOBAL_CONNECTION.on('open', () => {
    pino.info(`Mongo at ${uri} Connected`)
  })

  mongoose.set('debug', true)

  return DB_GLOBAL_CONNECTION
}

module.exports = connect

/*eslint no-param-reassign: 0 */