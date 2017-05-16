'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Config = require('./../config')
const Utils = require('./../Utils/export');
const Managers = require('./../Managers/export');

const userErrors = Utils.errorUtils.userErrors
const db = Managers.mongoManager
const USERNAME_MAX_SIZE = 20
const NAME_MAX_SIZE = 20
const DESCRIPTIONS_MAX_SIZE = 100
const TEAM_TO_APPRECIATE_MAX_SIZE = Config.maxTeamToAppreciateAllowed

const checkUserNameSize = (name) => name.length <= USERNAME_MAX_SIZE
const checkNameSize = (name) => name.length <= NAME_MAX_SIZE
const checkDescriptionSize = (name) => name.length <= DESCRIPTIONS_MAX_SIZE
const checkAppreciatedTeamsArraySize = (array) => array.length <= TEAM_TO_APPRECIATE_MAX_SIZE

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: String,
    required: true
  },
  pontuation: {
    type: Number,
    required: true
  }
})

const teamSchema = new Schema({
  teamId: {
    type: String,
    required: true
  },
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

const profileSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    validate: [checkUserNameSize, String(userErrors.userNameSizeExplode)]
  },
  name: {
    type: String,
    validate: [checkNameSize, String(userErrors.nameSizeExplode)]
  },
  avatar: {
    type: String
  },
  footballSupportedTeams: {
    supportedTeam: teamSchema,
    appreciatedTeams: {
      type: [teamSchema],
      validate: [checkAppreciatedTeamsArraySize, String(userErrors.numberOfAppreciatedTeamsExplode)]
    }
  },
  description: {
    type: String,
    validate: [checkDescriptionSize, String(userErrors.descriptionSizeExplode)]
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  confirmedEmail: {
    type: Boolean
  },
  guessesLines: [guessesLinesSchema],
  guessesLeagues: {
    type: Array
  },
  friendList: {
    type: Array
  },
  invitedFriendList: {
    type: Array
  }
})

module.exports = db.model('profiles', profileSchema);