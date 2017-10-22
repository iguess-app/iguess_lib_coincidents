'use strict'

const moment = require('moment')

const _getArrayofDays = {
  'pt-br': ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  'en-us': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

const getWeekDay = (language) => {
  moment.updateLocale(language, {
    weekdays: _getArrayofDays[language]
  })
}

module.exports = getWeekDay