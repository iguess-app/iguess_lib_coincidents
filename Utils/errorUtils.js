'use Strict';

const mongoErrors = {
  _idAlreadyUsed: 11000
}

const userErrors = {
  passwordInvalid: {
    code: 20000
  }
}

module.exports = {
  mongoErrors,
  userErrors
}