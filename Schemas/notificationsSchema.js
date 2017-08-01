'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('../Managers/export')
const db = Managers.mongoManager

const optionsSchema = {
  versionKey: false
}

const notificationsArraySchema = new Schema({
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
}, optionsSchema)

const notificationsSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  notifications: [notificationsArraySchema]
}, optionsSchema)


module.exports = db.model('profilenotifications', notificationsSchema);