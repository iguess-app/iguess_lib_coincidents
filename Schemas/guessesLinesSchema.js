'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const validateFixture = require('./subValidations/fixture')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId
const userErrors = Utils.errorUtils.userErrors

const optionsSchema = {
  versionKey: false
}
const optionsSchemaNoIdNoVersion = {
  versionKey: false,
  _id: false
}

const guessSchema = new Schema({
  matchRef: {
    type: ObjectId,
    required: true
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
  userId: {
    type: ObjectId,
    required: true
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
  league: {
    type: ObjectId,
    required: true
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

const fixturesSchema = new Schema({
  fixtureNumber: {
    type: Mixed,
    required: true,
    validate: [validateFixture, String(userErrors.notValidFixture)]
  },
  users: [userGuessSchema],
  pontuationSetted: {
    type: Boolean
  }
}, optionsSchemaNoIdNoVersion)

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: ObjectId,
    unique: true,
    required: true
  },
  championship: {
    type: championshipSchema,
    required: true
  },
  fixtures: [fixturesSchema],
  users: {
    type: Array
  }
}, optionsSchema)

module.exports = db.model('guesseslines', guessesLinesSchema)