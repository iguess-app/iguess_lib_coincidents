'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const guessesLeaguesSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  administrator: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  players: {
    type: Array,
    required: true
  }
})

module.exports = db.model('guessesleagues', guessesLeaguesSchema);