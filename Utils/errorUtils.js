'use strict'

const Boom = require('boom');

const mongoErrors = Object.freeze({
  _idAlreadyUsed: 11000
})

const userErrors = Object.freeze({
  passwordInvalid: 20000,
  notEmail: 20001,
  tooManyPasswordsWrong: 20003,
  userNameSizeExplode: 20004,
  nameSizeExplode: 20005,
  descriptionSizeExplode: 20006,
  numberOfAppreciatedTeamsExplode: 20007,
  notValidFixture: 20008
})

const serverErrors = Object.freeze({
  notMongoIdValid: 30000,
  notchampionshipMatchUserKeyValid: 30001,
  notchampionshipUserKeyValid: 30002,
  notAssociationValid: 30003
})

const _errDictionary = () => ({
  [mongoErrors._idAlreadyUsed]: (dictionary) => {
    throw Boom.notAcceptable(`${dictionary.alreadyAdd}.`)
  }
})

const treatErrors = (err, dictionary) => _errDictionary()[err.code](dictionary)

module.exports = {
  mongoErrors,
  userErrors,
  treatErrors,
  serverErrors
}