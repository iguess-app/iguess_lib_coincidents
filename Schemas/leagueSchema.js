'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('../Managers/export');
const db = Managers.mongoManager;

const optionsSchema = {
  versionKey: false
}

const leagueSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  countryInitials: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  serie: {
    type: Number
  }
}, optionsSchema)

module.exports = db.model('leagues', leagueSchema);