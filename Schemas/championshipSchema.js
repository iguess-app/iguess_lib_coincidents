'use strict';

const mongoose = require('mongoose');

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

module.exports = () => {
  const Schema = mongoose.Schema;

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

  return db.model('championships', championshipSchema);
}