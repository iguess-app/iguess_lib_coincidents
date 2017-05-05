'use strict';

const mongoose = require('mongoose');
const promise = require('bluebird');

const config = require('./../config');
const mongo = config.mongo;

let uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`;

if(mongo.atlas) {
  uri = `mongodb://${mongo.user}:${mongo.password}@${mongo.address}/${mongo.database}?ssl=true&replicaSet=ZeroCluster-shard-0&authSource=admin`;
}

const options = {
  promiseLibrary: promise
};
const db = mongoose.createConnection(uri, options);

db.on('open', () => {
  console.info(`Mongo (database:${db.name}) Connected`)
});

module.exports = db;