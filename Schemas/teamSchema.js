'use strict'

const mongoose = require('mongoose')

const mongo = require('../config').mongo
const Managers = require('../Managers/export')
const Utils = require('../Utils/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const serverErrors = Utils.errorUtils.serverErrors

const optionsSchema = {
  versionKey: false
}

const teamSchema = new Schema({
  league: {
    type: String,
    required: true,
    validate: [mongo.checkMongoIdSize, String(serverErrors.notMongoIdSize)]
  },
  fullName: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
}, optionsSchema)

module.exports = db.model('teams', teamSchema);