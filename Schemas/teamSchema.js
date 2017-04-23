'use strict';

const mongoose = require('mongoose');

const Managers = require('./../Managers/export');
const db = Managers.mongoManager;

module.exports = () => {
  const Schema = mongoose.Schema;

  const teamSchema = new Schema({
      league: {
        type: String,
        required: true
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
  })

  return db.model('teams', teamSchema);
}