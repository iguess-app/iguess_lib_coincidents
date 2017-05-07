'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Utils = require('./../Utils/export');
const Managers = require('./../Managers/export');

const userErrors = Utils.errorUtils.userErrors
const db = Managers.mongoManager
const USERNAME_MAX_SIZE = 20
const NAME_MAX_SIZE = 20

const checkUserNameSize = (name) => name.length <= USERNAME_MAX_SIZE
const checkNameSize = (name) => name.length <= NAME_MAX_SIZE

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
    unique: true,
    validate: [checkUserNameSize, String(userErrors.userNameSizeExplode)]
  },
  name: {
    type: String,
    required: true,
    validate: [checkNameSize, String(userErrors.nameSizeExplode)]
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