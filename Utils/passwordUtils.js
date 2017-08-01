'use strict'

const bcrypt = require('bcrypt');

const errorUtils = require('./errorUtils.js');
const config = require('../config');
const userErrors = errorUtils.userErrors;

const checkPasswordRestrict = (password) => {
  //TO DO
  //Make Sure that this Regex is working well
  const passwordRegex = new RegExp(/(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}/);
  if (passwordRegex.test(password)) {
    return true;
  }
  return true; // (HEHE-HE he)
  //return userErrors.passwordInvalid;
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