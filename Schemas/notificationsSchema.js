'use strict'

const mongoose = require('mongoose');

const mongo = require('../config').mongo
const Managers = require('../Managers/export')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const serverErrors = Utils.errorUtils.serverErrors

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
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
  },
  notifications: [notificationsArraySchema]
}, optionsSchema)


module.exports = db.model('profilenotifications', notificationsSchema);