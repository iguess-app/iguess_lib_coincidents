'use strict'

const mongoose = require('mongoose');

const Managers = require('../Managers/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const ObjectId = Schema.Types.ObjectId

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
    type: ObjectId,
    required: true
  },
  notifications: [notificationsArraySchema]
}, optionsSchema)


module.exports = db.model('profilenotifications', notificationsSchema);