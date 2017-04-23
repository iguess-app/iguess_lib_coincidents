'use strict';

const mongoose = require('mongoose');

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

module.exports = () => {
  const Schema = mongoose.Schema;

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
  })

  return db.model('rounds', roundSchema);
}