'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const teamSchema = new Schema({
  league: {
    type: String,
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
})

module.exports = db.model('teams', teamSchema);