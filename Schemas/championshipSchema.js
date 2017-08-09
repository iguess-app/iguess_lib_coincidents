'use strict'

const mongoose = require('mongoose');

const Managers = require('../Managers/export');

const Schema = mongoose.Schema;
const db = Managers.mongoManager;
const ObjectId = Schema.Types.ObjectId

const optionsSchema = {
  versionKey: false
}

const championshipSchema = new Schema({
  league: {
    type: ObjectId,
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
}, optionsSchema)

module.exports = db.model('championships', championshipSchema);