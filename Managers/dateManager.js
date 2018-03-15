'use strict'

const moment = require('moment-timezone')

const config = require('../config/config')

const UTC_ALIAS = 'UTC'
const API_FOOTBALL_TIME_ZONE = config.apiFootball.timezone

const getUTCDate = (date, dateFormat = '', dateOutput = '', language = 'en-us') => {
  moment.locale(language)

  return moment.tz(date, dateFormat, UTC_ALIAS).format(dateOutput)
}

const convertAPIFootballToUTC = (date, dateFormat = '', dateOutput = '') => {
  const APIFootballTimeObj = moment.tz(date, dateFormat, API_FOOTBALL_TIME_ZONE)

  return moment.tz(APIFootballTimeObj, UTC_ALIAS).format(dateOutput)
}


const getUTCToday = (dateOutput = '') => moment().utc().format(dateOutput)

module.exports = {
  getUTCDate,
  getUTCToday,
  convertAPIFootballToUTC
}

/*eslint max-params: 0 */