'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const optionsSchema = {
  versionKey: false
}

const guessSchema = new Schema({
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
}, optionsSchema)

const userGuessSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  guesses: [guessSchema],
  totalPontuation: {
    type: Number
  }
});

const optionsChampionshipSchema = {
  versionKey: false,
  _id: false
}

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
}, optionsChampionshipSchema)

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: String,
    unique: true,
    required: true
  },
  championship: championshipSchema,
  fixtures: [{
    fixtureNumber: {
      type: Number,
      required: true
    },
    users: [userGuessSchema],
    pontuationSetted: {
      type: Boolean
    }
  }]
}, optionsSchema)

module.exports = db.model('guesseslines', guessesLinesSchema);