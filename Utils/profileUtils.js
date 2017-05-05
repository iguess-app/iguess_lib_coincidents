'use strict';

const errorUtils = require('./errorUtils.js');
const userErrors = errorUtils.userErrors;

const useNicknameLikeID = (user) => {
  Reflect.set(user, '_id', user.nickName)
  Reflect.deleteProperty(user, 'nickName');

  return user;
}

const useIDLikeNickname = (user) => {
  Reflect.set(user, 'nickName', user._id)
  Reflect.deleteProperty(user, '_id');

  return user;
}

const isEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email)) {
    return true
  }
  return userErrors.notEmail;
}

module.exports = {
  useNicknameLikeID,
  useIDLikeNickname,
  isEmail
}