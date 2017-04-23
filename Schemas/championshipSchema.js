'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const championshipSchema = new Schema({
  league: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  championship: {
    type: String,
    required: true
  }
})

module.exports = db.model('championships', championshipSchema);