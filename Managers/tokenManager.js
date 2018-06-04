'use strict'

const Jwt = require('jsonwebtoken')

const config = require('../config/config')
const tokenConfig = config.token

const generate = (dataToJwt) => {
  const objectToJwt = {
    valid: true,
    userRef: dataToJwt.userRef
  }

  const optionsToJwt = {
    expiresIn: tokenConfig.expirationTime
  }

  return Jwt.sign(objectToJwt, tokenConfig.cert, optionsToJwt)
}

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