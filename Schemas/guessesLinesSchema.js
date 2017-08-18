'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const validateFixture = require('./subValidations/fixture')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const Mixed = Schema.Types.Mixed
const userErrors = Utils.errorUtils.userErrors

const mongo = require('../config').mongo
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
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
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

const userGuessSchema = new Schema({
  userRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
  },
  guesses: {
    type: [guessSchema],
    required: true
  },
  totalPontuation: {
    type: Number
  }
}, optionsSchemaNoIdNoVersion)

const championshipSchema = new Schema({
  championshipRef: {
    type: String,
    unique: true,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
  },
  league: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
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