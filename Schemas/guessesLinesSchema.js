'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

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
    required: true
  },
  homeTeam: {
    type: String,
    required: true
  },
  awayTeam: {
    type: String,
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
    type: String,
    required: true
  },
  guesses: [guessSchema],
  totalPontuation: {
    type: Number
  }
}, optionsSchemaNoIdNoVersion);

const championshipSchema = new Schema({
  league: {
    type: String,
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
    type: Number,
    required: true
  },
  users: [userGuessSchema],
  pontuationSetted: {
    type: Boolean
  }
}, optionsSchemaNoIdNoVersion)

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: String,
    unique: true,
    required: true
  },
  championship: championshipSchema,
  fixtures: [fixturesSchema]
}, optionsSchema)

module.exports = db.model('guesseslines', guessesLinesSchema);