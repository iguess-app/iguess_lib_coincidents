'use strict'

const mongoose = require('mongoose');

const Managers = require('../Managers/export');

const db = Managers.mongoManager;
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const optionsSchema = {
  versionKey: false
}

const championshipSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  league: {
    type: ObjectId,
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
}, optionsSchema)

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
  championship: {
    type: championshipSchema,
    required: true
  },
  inviteads: {
    type: Array,
    required: true
  }
}, optionsSchema)

module.exports = db.model('guessesleagues', guessesLeaguesSchema);