'use strict';

const mongoose = require('mongoose');
const promise = require('bluebird');

const config = require('./../config');
const mongo = config.mongo;

const uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`;
const options = {
  promiseLibrary: promise
};
const db = mongoose.createConnection(uri, options);

db.on('open', () => {
  console.log('Mongo Running')
});

module.exports = db;