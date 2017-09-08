'use strict'

const mongoose = require('mongoose')

const Utils = require('../../Utils/export')
const mongo = require('../../config').mongo

const Schema = mongoose.Schema
const serverErrors = Utils.errorUtils.serverErrors

const optionsSchemaNoIdNoVersion = {
  versionKey: false,
  _id: false
}

const championshipSchema = new Schema({
  championshipRef: {
    type: String,
    unique: true,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  league: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  season: {
    type: String,
    required: true
  },
  championship: {
    type: String,
    required: true
  }
}, optionsSchemaNoIdNoVersion)

module.exports = championshipSchema