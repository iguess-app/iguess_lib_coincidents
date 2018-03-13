'use strict'

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const makeObject = (queryResult) => {
  if (queryResult) {
    return queryResult.toObject()
  }

  throw new Error('Arquivo não encontrado no DB')
}

const makeJSON = (queryResult) => queryResult.toJSON()

const makeObjectId = (stringId) => new mongoose.mongo.ObjectId(stringId) 

const isValidId = (id) => ObjectId.isValid(id)

module.exports = {
  makeObject,
  makeJSON,
  makeObjectId,
  isValidId
}