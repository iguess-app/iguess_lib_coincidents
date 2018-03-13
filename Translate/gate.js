'use strict'

const americanEnglishDictionary = require('./enUS.js')
const brazilianPortugueseDictionary = require('./ptBR.js')

const dictionaryObject = {
  'en-us': americanEnglishDictionary,
  'pt-br': brazilianPortugueseDictionary
}

const selectLanguage = (language) => {
  const dictionarySelected = dictionaryObject[language]

  return dictionarySelected ? dictionarySelected : americanEnglishDictionary
}

module.exports = {
  selectLanguage
}