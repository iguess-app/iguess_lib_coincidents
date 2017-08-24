'use strict'

const mongoose = require('mongoose')
const Managers = require('../Managers/export')
const Utils = require('../Utils/export')
const mongo = require('../config').mongo
const championshipFixtureUserKeyValidator = require('./subValidations/championshipFixtureUserKey')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const serverErrors = Utils.errorUtils.serverErrors


const optionsSchema = {
  versionKey: false
}
const optionsSchemaNoIdNoVersion = {
  versionKey: false,
  _id: false
}

const guessSchema = new Schema({
  matchRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  homeTeamScore: {
    type: Number,
    required: true
  },
  awayTeamScore: {
    type: Number,
    required: true
  },
  pontuation: {
    type: Number
  }
}, optionsSchemaNoIdNoVersion)

const predictionsSchema = new Schema({
  championshipFixtureUserKey: {
    type: String,
    required: true,
    unique: true,
    validate: [championshipFixtureUserKeyValidator, String(serverErrors.notchampionshipFixtureUserKeyValid)]
  },
  fixturePontuation: {
    type: Number
  },
  guesses: {
    type: [guessSchema],
    required: true
  }
}, optionsSchema)

module.exports = db.model('predictions', predictionsSchema);