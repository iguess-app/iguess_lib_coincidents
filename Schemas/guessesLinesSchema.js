'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager

const mongo = require('../config').mongo
const serverErrors = Utils.errorUtils.serverErrors

const optionsSchema = {
  versionKey: false
}
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

const fixturesSchema = {
  type: Object,
  required: true
}

const guessesLinesSchema = new Schema({
  championship: {
    type: championshipSchema,
    required: true
  },
  fixtures: fixturesSchema,
  users: {
    type: [String]
  }
}, optionsSchema)

module.exports = db.model('guesseslines', guessesLinesSchema)