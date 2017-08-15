'use strict'

const mongoose = require('mongoose')

const makeObject = (queryResult) => {
  if (queryResult) {
    return queryResult.toObject();
  }

  throw new Error('Arquivo não encontrado no DB');
}

const makeJSON = (queryResult) => queryResult.toJSON()

const makeObjectId = (stringId) => new mongoose.mongo.ObjectId(stringId) 

module.exports = {
  makeObject,
  makeJSON,
  makeObjectId
}