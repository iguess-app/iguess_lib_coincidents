'use strict';

const mongoose = require('mongoose');

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

module.exports = () => {
  const Schema = mongoose.Schema;

  const leagueSchema = new Schema({
    country: {
      type: String,
      required: true
    },
    countryInitials: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    serie: { type: Number }
  })

  return db.model('leagues', leagueSchema);
}