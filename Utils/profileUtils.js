'use strict'

const Boom = require('boom');
const Errors = require('./errorUtils.js');
const userErrors = Errors.userErrors;

const isEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email)) {
    return true
  }

  return userErrors.notEmail;
}

const treatErrors = (err, dictionary) => {
  switch (err.code) {
    case Errors.mongoErrors._idAlreadyUsed:
      if (err.message.includes('userName')) {
        throw Boom.notAcceptable(`${dictionary.userNameAlreadyUsed}.`);
      }
      if (err.message.includes('email')) {
        throw Boom.notAcceptable(`${dictionary.emailAlreadyUsed}.`);
      }
      throw Boom.badData(err.message)
    case userErrors.userNameSizeExplode:
      throw Boom.notAcceptable(`${dictionary.tooLongUserName}.`);
    case userErrors.nameSizeExplode:
      throw Boom.notAcceptable(`${dictionary.tooLongName}.`);
    case userErrors.descriptionSizeExplode:
      throw Boom.notAcceptable(`${dictionary.tooLongDescription}.`);
    default:
      throw Boom.badData(err.message)
  }
}

module.exports = {
  isEmail,
  treatErrors
}