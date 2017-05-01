'use Strict'

const americanEnglish = require('./enUS.js');
const brazilianPortuguese = require('./ptBR.js');

const selectLanguage = (language) => {
  switch (language) {
    case 'en-us':
      return americanEnglish;
      break;

    case 'pt-br':
      return brazilianPortuguese;
      break;

    default:
      return americanEnglish;
  }
}

module.exports = {
  selectLanguage
};