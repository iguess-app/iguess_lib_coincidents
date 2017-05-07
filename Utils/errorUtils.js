'use Strict';

const mongoErrors = Object.freeze({
  _idAlreadyUsed: 11000
})

const userErrors = Object.freeze({
  passwordInvalid: 20000,
  notEmail: 20001,
  tooManyPasswordsWrong: 20003,
  userNameSizeExplode: 20004,
  nameSizeExplode: 20005
})

module.exports = {
  mongoErrors,
  userErrors
}