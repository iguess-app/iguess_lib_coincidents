'use strict'

const mongoose = require('mongoose')

const Managers = require('../Managers/export')
const Utils = require('../Utils/export')
const mongo = require('../config').mongo
const validateFixture = require('./subValidations/fixture')
const championshipUserKeyValidator = require('./subValidations/championshipUserKey')
const championshipEmbeddedSchema = require('./subValidations/championshipEmbeddedSchema')

const Schema = mongoose.Schema
const db = Managers.mongoManager
const Mixed = Schema.Types.Mixed
const serverErrors = Utils.errorUtils.serverErrors
const userErrors = Utils.errorUtils.userErrors

const optionsSchema = {
  versionKey: false
}
const optionsSchemaNoIdNoVersion = {
  versionKey: false,
  _id: false
}

const pontuationByFixtureSchema = new Schema({
  fixture: {
    type: Mixed,
    required: true,
    validate: [validateFixture, String(userErrors.notValidFixture)]
  },
  pontuation: {
    type: Number,
    required: true
  }
}, optionsSchemaNoIdNoVersion)

const pontuationsSchema = new Schema({
  championshipUserKey: {
    type: String,
    required: true,
    unique: true,
    validate: [championshipUserKeyValidator, String(serverErrors.notchampionshipUserKeyValid)]
  },
  userRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdValid)]
  },
  championship: {
    type: championshipEmbeddedSchema,
    required: true
  },
  totalPontuation: {
    type: Number,
    required: true
  },
  pontuationByFixture: {
    type: [pontuationByFixtureSchema]
  }
}, optionsSchema)

module.exports = db.model('pontuations', pontuationsSchema);