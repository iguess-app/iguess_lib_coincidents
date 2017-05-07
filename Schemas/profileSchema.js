'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const notificationsSchema = new Schema({
  messageType: {
    type: Number,
    required: true
  },
  messageUserRef: {
    type: String
  },
  messageGuessLeagueRef: {
    type: String
  },
  saw: {
    type: Boolean,
    required: true
  }
});

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: String,
    required: true
  },
  pontuation: {
    type: Number,
    required: true
  }
})

const profileSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  teamsSupported: {
    type: Array
  },
  description: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  confirmedEmail: {
    type: Boolean
  },
  guessesLines: [guessesLinesSchema],
  guessesLeagues: {
    type: Array
  },
  notifications: [notificationsSchema],
  friendList: {
    type: Array
  }
})

module.exports = db.model('profiles', profileSchema);