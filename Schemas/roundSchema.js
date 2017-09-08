'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const validateFixture = require('./subValidations/fixture')
const Utils = require('../Utils/export')
const mongo = require('../config').mongo

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const db = Managers.mongoManager

const userErrors = Utils.errorUtils.userErrors
const serverErrors = Utils.errorUtils.serverErrors

const optionsSchema = {
  versionKey: false
}

const teamSchema = new Schema({
  teamRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  league: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  fullName: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
}, optionsSchema)

const gamesSchema = new Schema({
  homeTeam: {
    type: teamSchema,
    required: true
  },
  awayTeam: {
    type: teamSchema,
    required: true
  },
  homeTeamScore: {
    type: Number
  },
  awayTeamScore: {
    type: Number
  },
  initTime: {
    type: Date,
    required: true
  },
  stadium: {
    type: String,
    required: true
  }
}, optionsSchema)

const roundSchema = new Schema({
  championshipRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  fixture: {
    type: Mixed,
    required: true,
    validate: [validateFixture, String(userErrors.notValidFixture)]
  },
  games: {
    type: [gamesSchema],
    required: true
  },
  started: {
    type: Boolean,
    required: true
  },
  ended: {
    type: Boolean,
    required: true
  }
}, optionsSchema)

module.exports = db.model('rounds', roundSchema)