'use strict'

const mongoose = require('mongoose')
const promise = require('bluebird')
const log = require('./logManager')

const config = require('../config/config')
const mongo = config.mongo

const connect = (uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`) => {

  if (mongo.atlas) {
    uri = `mongodb://${mongo.user}:${mongo.password}@${mongo.address}/${mongo.database}?ssl=true&replicaSet=ZeroCluster-shard-0&authSource=admin`
  }

  const options = {
    promiseLibrary: promise
  }

  const db = mongoose.createConnection(uri, options)

  db.on('open', () => {
    log.info(`Mongo at ${uri} Connected`)
  })

  if (log.isLoggableEnv()) {
    mongoose.set('debug', true)
  }

  return db
}

module.exports = connect

/*eslint no-param-reassign: 0 */