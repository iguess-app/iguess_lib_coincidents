'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const ObjectId = Schema.Types.ObjectId

const optionsSchema = {
  versionKey: false
}

const teamSchema = new Schema({
  league: {
    type: ObjectId,
    required: true
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