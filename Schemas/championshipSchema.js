'use strict'

const mongoose = require('mongoose');

const Managers = require('../Managers/export');
const Utils = require('../Utils/export')
const mongo = require('../config').mongo

const Schema = mongoose.Schema;
const db = Managers.mongoManager;
const serverErrors = Utils.errorUtils.serverErrors


const optionsSchema = {
  versionKey: false
}

const championshipSchema = new Schema({
  league: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
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