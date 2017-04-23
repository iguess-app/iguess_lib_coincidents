'use strict';

const mongoose = require('mongoose');

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

module.exports = () => {
  const Schema = mongoose.Schema;

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

  return db.model('guessesleagues', guessesLeaguesSchema);
}