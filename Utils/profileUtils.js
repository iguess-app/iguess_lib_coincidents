'use strict';

const errorUtils = require('./errorUtils.js');
const userErrors = errorUtils.userErrors;

const isEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email)) {
    return true
  }

  return userErrors.notEmail;
}

module.exports = {
  isEmail
}