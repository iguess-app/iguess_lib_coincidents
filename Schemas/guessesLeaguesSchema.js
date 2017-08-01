'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongo = require('../config').mongo
const Managers = require('../Managers/export');
const Utils = require('../Utils/export')

const db = Managers.mongoManager;
const serverErrors = Utils.errorUtils.serverErrors

const optionsSchema = {
  versionKey: false
}

const championshipSchema = new Schema({
  _id: {
    type: String,
    required: true,
    validate: [mongo.checkMongoIdSize, String(serverErrors.notMongoIdSize)]
  },
  league: {
    type: String,
    required: true,
    validate: [mongo.checkMongoIdSize, String(serverErrors.notMongoIdSize)]
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