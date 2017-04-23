'use strict';

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

module.exports = {
  useNicknameLikeID,
  useIDLikeNickname
}