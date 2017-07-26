'use strict'

const mongoose = require('mongoose');

const Config = require('./../config')
const Managers = require('./../Managers/export');

const Schema = mongoose.Schema;
const db = Managers.mongoManager;

const optionsSchema = {
  versionKey: false
}

/*
  TODO:
  Colocar NotAIdSize num padrao de erro do projeto
*/
const checkIdSize = (id) => id.length === Config.mongo.idStringSize

const teamSchema = new Schema({
  league: {
    type: String,
    required: true,
    validate: [checkIdSize, 'NotAIdSize']
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