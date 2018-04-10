'use strict'

const americanEnglishDictionary = require('./enUK')
const brazilianPortugueseDictionary = require('./ptBR')

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