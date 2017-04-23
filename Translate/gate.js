'use Strict'

const americanEnglish = require('./enUS');
const brazilianPortuguese = require('./ptBR');

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