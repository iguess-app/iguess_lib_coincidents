'use Strict';

const bcrypt = require('bcrypt');

const errorUtils = require('./errorUtils.js');
const config = require('./../config');
const userErrors = errorUtils.userErrors;

module.exports = () => {
  const checkPasswordRestrict = (userData) =>
    new Promise((resolve, reject) => {
      //TO DO
      //Make Sure that this Regex is working well
      const passwordRegex = new RegExp(/(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}/);
      if (passwordRegex.test(userData.password)) {
        resolve(userData)
      }
      resolve(userData)
      reject(userErrors.passwordInvalid);
    })

  const cryptPassword = (userData) =>
    bcrypt.hash(userData.password, config.salt)
    .then((hash) => {
      userData.password = hash;

      return userData;
    })
    .catch((err) => err)

  const checkPassword = (password, cryptedPassword) =>
    bcrypt.compare(password, cryptedPassword)
    .then((booleanResponse) => booleanResponse)
    .catch((err) => err)

  return {
    checkPasswordRestrict,
    cryptPassword,
    checkPassword
  }
}