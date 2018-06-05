'use strict'

const bcrypt = require('bcrypt')

const userErrors = require('./errorUtils.js').userErrors
const config = require('../config/config')

const MIN_SIZE_PASSWORD = 8

const checkPasswordRestrict = (password) => {
  if (password.length < MIN_SIZE_PASSWORD || password.includes(' ')) {
    return userErrors.passwordInvalid
  }

  return true
}

const cryptPassword = (password) =>
  bcrypt.hash(password, config.salt)
  .then((hash) => hash)
  .catch((err) => err)

const checkPassword = (password, cryptedPassword) =>
  bcrypt.compare(password, cryptedPassword)
  .then((booleanResponse) => booleanResponse)
  .catch((err) => err)

module.exports = {
  checkPasswordRestrict,
  cryptPassword,
  checkPassword
}