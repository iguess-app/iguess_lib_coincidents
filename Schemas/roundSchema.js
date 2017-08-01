'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const validateFixture = require('./subValidations/fixture')

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const db = Managers.mongoManager

const optionsSchema = {
  versionKey: false
}

const teamSchema = new Schema({
  teamRef: {
    type: String,
    required: true
  },
  league: {
    type: String,
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
  homeTeam: teamSchema,
  awayTeam: teamSchema,
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
    required: true
  },
  fixture: {
    type: Mixed,
    required: true,
    validate: [validateFixture, 'Not a valid fixture type']
  },
  games: gamesSchema
}, optionsSchema)

module.exports = db.model('rounds', roundSchema)