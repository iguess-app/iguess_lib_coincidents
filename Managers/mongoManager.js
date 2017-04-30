'use strict';

const mongoose = require('mongoose');
const promise = require('bluebird');

const config = require('./../config');
const mongo = config.mongo;

const uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`;
//const uri = `mongodb://${mongo.user}:${mongo.password}@${mongo.address}/${mongo.database}?ssl=true&replicaSet=ZeroCluster-shard-0&authSource=admin`;
const options = {
  promiseLibrary: promise
};
const db = mongoose.createConnection(uri, options);

db.on('open', () => {
  console.info(`Mongo at ${db.host} (database:${db.name}) Connected`)
});

module.exports = db;