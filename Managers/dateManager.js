'use strict'

const moment = require('moment-timezone')

const UTC_ALIAS = 'UTC'

const getUTCDate = (date, dateFormat = '', dateOutput = '', language = 'en-us') => {
  moment.locale(language)

  return moment.tz(date, dateFormat, UTC_ALIAS).format(dateOutput)
}

const getUTCToday = (dateOutput = '') => moment().utc().format(dateOutput)

module.exports = {
  getUTCDate,
  getUTCToday
}

/*eslint max-params: 0 */