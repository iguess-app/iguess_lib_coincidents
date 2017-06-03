'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

const optionsSchema = {
  versionKey: false
}

const roundSchema = new Schema({
  championship: {
    type: String,
    required: true
  },
  fixture: {
    type: Number,
    required: true
  },
  results: {
    type: Array,
    required: true
  }
}, optionsSchema)

module.exports = db.model('rounds', roundSchema)