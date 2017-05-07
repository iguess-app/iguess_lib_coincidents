'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export')
const db = Managers.mongoManager

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
});

const notificationsSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  notifications: [notificationsArraySchema]
});


module.exports = db.model('profilenotifications', notificationsSchema);