'use strict'

const Boom = require('boom')

const Errors = require('./errorUtils.js')
const errorCode = require('./errorCodeUtils')

const userErrors = Errors.userErrors
const boom = Errors.boom

const isEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email)) {
    return true
  }

  return userErrors.notEmail
}

const treatErrors = (err, dictionary) => {
  switch (err.code) {
    case Errors.mongoErrors._idAlreadyUsed:
      if (err.message.includes('userName')) {
        throw boom('notAcceptable', dictionary.userNameAlreadyUsed, errorCode.userNameAlreadyUsed)
      }
      if (err.message.includes('email')) {
        throw boom('notAcceptable', dictionary.emailAlreadyUsed, errorCode.emailAlreadyUsed)
      }
      throw Boom.badData(err.message)      
    case userErrors.userNameSizeExplode:
        throw boom('notAcceptable', dictionary.tooLongUserName, errorCode.tooLongUserName)
    case userErrors.nameSizeExplode:
        throw boom('notAcceptable', dictionary.tooLongName, errorCode.tooLongName)
    case userErrors.descriptionSizeExplode:
        throw boom('notAcceptable', dictionary.tooLongDescription, errorCode.tooLongDescription)
    default:
      throw Boom.badData(err.message)
  }
}

module.exports = {
  isEmail,
  treatErrors
}