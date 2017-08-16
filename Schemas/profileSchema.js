'use strict'

const mongoose = require('mongoose')

const Config = require('../config')
const Utils = require('../Utils/export')
const Managers = require('../Managers/export')
const mongo = require('../config').mongo

const Schema = mongoose.Schema
const db = Managers.mongoManager
const userErrors = Utils.errorUtils.userErrors
const serverErrors = Utils.errorUtils.serverErrors

const USERNAME_MAX_SIZE = Config.profile.userNameMaxSize
const NAME_MAX_SIZE = Config.profile.nameMaxSize
const DESCRIPTION_MAX_SIZE = Config.profile.descriptionMaxSize
const TEAM_TO_APPRECIATE_MAX_SIZE = Config.profile.maxTeamToAppreciateAllowed

const checkUserNameSize = (name) => name.length <= USERNAME_MAX_SIZE
const checkNameSize = (name) => name.length <= NAME_MAX_SIZE
const checkDescriptionSize = (name) => name.length <= DESCRIPTION_MAX_SIZE
const checkAppreciatedTeamsArraySize = (array) => array.length <= TEAM_TO_APPRECIATE_MAX_SIZE

const optionsEmbbededDocsSchema = {
  versionKey: false,
  _id: false
}

const guessesLinesSchema = new Schema({
  championshipRef: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
  },
  pontuation: {
    type: Number,
    required: true
  }
}, optionsEmbbededDocsSchema)

const teamSchema = new Schema({
  teamId: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
  },
  league: {
    type: String,
    required: true,
    validate: [mongo.checkObjectId, String(serverErrors.notMongoIdSize)]
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
}, optionsEmbbededDocsSchema)

const optionsProfileSchema = {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt'
  }
}

const profileDefinitionSchema = {
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
    type: [Schema.Types.ObjectId]
  },
  invitedFriendList: {
    type: [Schema.Types.ObjectId]
  },
  lastSignInAt: {
    type: Date
  }
}


const profileSchema = new Schema(profileDefinitionSchema, optionsProfileSchema)

module.exports = db.model('profiles', profileSchema);