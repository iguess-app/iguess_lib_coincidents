'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const championshipSchema = new Schema({
  _id: {
    type: String,
    required: true    
  },
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
})

const guessesLeaguesSchema = new Schema({
  administrator: {
    type: String,
    required: true
  },
  guessLeagueName: {
    type: String,
    required: true
  },
  players: {
    type: Array,
    required: true
  },
  championship: championshipSchema,
  inviteads: {
    type: Array,
    required: true
  }
})

module.exports = db.model('guessesleagues', guessesLeaguesSchema);