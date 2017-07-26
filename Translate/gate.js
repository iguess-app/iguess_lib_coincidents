'use strict'

const americanEnglish = require('./enUS.js')
const brazilianPortuguese = require('./ptBR.js')

const selectLanguage = (language) => {
  switch (language) {
    case 'en-us':
      return americanEnglish
    case 'pt-br':
      return brazilianPortuguese
    default:
      return americanEnglish
  }
}

module.exports = {
  selectLanguage
}