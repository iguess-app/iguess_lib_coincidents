'use Strict';

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
  numberOfAppreciatedTeamsExplode: 20007
})

const _errDictionary = () => ({
  [mongoErrors._idAlreadyUsed]: (dictionary) => {
    throw Boom.notAcceptable(`${dictionary.alreadyAdd}.`)
  }
})

const treatErrors = (err, dictionary) => {
  try {
    return _errDictionary()[err.code](dictionary)
  } catch (err) {
    throw Boom.badData(err)
  }
}

module.exports = {
  mongoErrors,
  userErrors,
  treatErrors
}