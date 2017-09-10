'use strict'

const Jwt = require('jsonwebtoken');

const config = require('../config/config');
const tokenConfig = config.token;

const generate = () => Jwt.sign({
  valid: true
}, tokenConfig.cert, {
  expiresIn: tokenConfig.expirationTime
})

const isValid = (token) =>
  new Promise((resolve, reject) => {
    Jwt.verify(token, tokenConfig.cert, (err, decoded) => {
      if (err) {
        reject(err)
      }
      resolve(decoded)
    })
  })

module.exports = {
  generate,
  isValid
}