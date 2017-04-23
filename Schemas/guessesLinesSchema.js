'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const guessSchema = new Schema({
  homeTeam: {
    type: String,
    required: true
  },
  awayTeam: {
    type: String,
    required: true
  },
  finalScore: {
    type: String,
    required: true
  },
  pontuation: {
    type: Number
  }
})

const userGuessSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  guesses: [guessSchema],
  totalPontuation: {
    type: Number
  }
});

const guessesLinesSchema = new Schema({
  championship: {
    type: String,
    required: true
  },
  fixture: {
    type: Number,
    required: true
  },
  users: [userGuessSchema],
  pontuationSetted: {
    type: Boolean
  }
})

module.exports = db.model('guesseslines', guessesLinesSchema);