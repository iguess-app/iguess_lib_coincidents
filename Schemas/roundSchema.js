'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const Config = require('./../config')
const Managers = require('./../Managers/export')

const db = Managers.mongoManager
const MAX_ROUND_ROBIN_FIXTURES = Config.holi.maxRoundRobinFixtures
const MIN_ROUND_ROBIN_FIXTURES = Config.holi.minRoundRobinFixtures
const KNOCKOUT_TOURNAMENT_ROUND_NAMES = Config.holi.knockoutTournamentRoundNames

const _ifIsKnockoutTournament = (fixture) => KNOCKOUT_TOURNAMENT_ROUND_NAMES.includes(fixture)
const _ifIsRoundRobinTournament = (fixture) => fixture >= MIN_ROUND_ROBIN_FIXTURES && fixture <= MAX_ROUND_ROBIN_FIXTURES

const validateFixture = (fixture) => _ifIsKnockoutTournament || _ifIsRoundRobinTournament

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
    type: Number,
  },
  awayTeamScore: {
    type: Number,
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
  championship: {
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