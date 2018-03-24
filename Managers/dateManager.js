'use strict'

const moment = require('moment-timezone')

const config = require('../config/config')

const UTC_ALIAS = 'UTC'
const DAY_ALIAS = 'day'
const FORMAT_TO_FORCE_DATE_WITHOUT_HOUR = 'YYYY-MM-DDZ'
const API_FOOTBALL_TIME_ZONE = config.apiFootball.timezone

const dateDictionary = {
  YESTERDAY: -1,
  TODAY: 0,
  TOMMORROW: 1
}

const getDate = (date, dateFormat = '', dateOutput = '', timeZone = UTC_ALIAS, language = 'en-us') => {
  moment.locale(language)

  return moment.tz(date, dateFormat, timeZone).format(dateOutput)
}

const convertAPIFootballToUTC = (date, dateFormat = '', dateOutput = '') => {
  const APIFootballTimeObj = moment.tz(date, dateFormat, API_FOOTBALL_TIME_ZONE)

  return moment.tz(APIFootballTimeObj, UTC_ALIAS).format(dateOutput)
}

const getUTCNow = (dateOutput = '') => moment().utc().format(dateOutput)

const getISODateWithMidNight = (chosenDay) => {
  const dateWithoutHour = moment.tz(UTC_ALIAS).format(FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
  const isoDateWihiMidNight = moment(dateWithoutHour, FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
    .add(dateDictionary[chosenDay], DAY_ALIAS)
    .utc()
    .format()

  return isoDateWihiMidNight
}

module.exports = {
  getDate,
  getUTCNow,
  convertAPIFootballToUTC,
  getISODateWithMidNight,
  dateDictionary
}

/*eslint max-params: 0 */