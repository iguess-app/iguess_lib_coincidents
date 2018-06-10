'use strict'

const about = require('./about')
const messages = require('./messages')
const words = require('./words')
const championships = require('./championships')
const countries = require('./countries')
const forgotMyPassEmail = require('./forgotMyPassEmail')

module.exports = Object.assign(about, messages, words, championships, countries, forgotMyPassEmail)