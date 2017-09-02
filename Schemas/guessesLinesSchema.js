'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const Utils = require('../Utils/export')
const validateFixture = require('./subValidations/fixture')
const championshipFixtureUserKeyValidator = require('./subValidations/championshipFixtureUserKey')
const mongo = require('../config').mongo

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const db = Managers.mongoManager
const serverErrors = Utils.errorUtils.serverErrors
const userErrors = Utils.errorUtils.userErrors

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
  fixture: {
    type: Mixed,
    required: true,
    validate: [validateFixture, String(userErrors.notValidFixture)]
  },
  usersWhoAlreadySentGuesses: {
    type: [{
      type: String,
      validate: [championshipFixtureUserKeyValidator, String(serverErrors.notchampionshipFixtureUserKeyValid)]
    }]
  }
}

const guessesLinesSchema = new Schema({
  championship: {
    type: championshipSchema,
    required: true
  },  
  guessLineActive: {
    type: Boolean,
    required: true
  },
  fixtures: {
    type: [fixturesSchema],
    required: true
  },
  usersAddedAtGuessLine: {
    type: [{
      type: String,
      validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
    }]
  }
}, optionsSchema)

module.exports = db.model('guesseslines', guessesLinesSchema)