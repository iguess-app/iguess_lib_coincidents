'use strict'

const mongoose = require('mongoose');

const Managers = require('../Managers/export');
const Utils = require('../Utils/export')
const mongo = require('../config').mongo
const validateFixture = require('./subValidations/fixture')

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const db = Managers.mongoManager
const serverErrors = Utils.errorUtils.serverErrors
const userErrors = Utils.errorUtils.userErrors

const optionsSchema = {
  versionKey: false
}

const fixtureName = {
  type: Mixed,
  required: true,
  validate: [validateFixture, String(userErrors.notValidFixture)]
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
  },
  championshipActive: {
    type: Boolean,
    required: true
  },
  fixturesNames: {
    type: [fixtureName],
    required: true
  }
}, optionsSchema)

module.exports = db.model('championships', championshipSchema);