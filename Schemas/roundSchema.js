'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const validateFixture = require('./subValidations/fixture')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId
const db = Managers.mongoManager

const userErrors = Utils.errorUtils.userErrors

const optionsSchema = {
  versionKey: false
}

const teamSchema = new Schema({
  teamRef: {
    type: ObjectId,
    required: true
  },
  league: {
    type: ObjectId,
    required: true
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
    type: ObjectId,
    required: true
  },
  fixture: {
    type: Mixed,
    required: true,
    validate: [validateFixture, String(userErrors.notValidFixture)]
  },
  games: [gamesSchema]
}, optionsSchema)

module.exports = db.model('rounds', roundSchema)