'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const Utils = require('../Utils/export')
const validateFixture = require('./subValidations/fixture')
const championshipFixtureUserKeyValidator = require('./subValidations/championshipFixtureUserKey')
const championshipEmbeddedSchema = require('./subValidations/championshipEmbeddedSchema')
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

const fixturesSchema = new Schema({
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
}, optionsSchemaNoIdNoVersion)

const guessesLinesSchema = new Schema({
  championship: {
    type: championshipEmbeddedSchema,
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