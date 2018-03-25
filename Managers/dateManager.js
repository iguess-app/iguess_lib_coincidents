'use strict'

const moment = require('moment-timezone')

const config = require('../config/config')

const UTC_ALIAS = 'UTC'
const FORMAT_TO_FORCE_DATE_WITHOUT_HOUR = 'YYYY-MM-DDZ'
const API_FOOTBALL_TIME_ZONE = config.apiFootball.timezone

const getDate = (date, dateFormat = '', dateOutput = '', timeZone = UTC_ALIAS, language = 'en-us') => {
  moment.locale(language)

  return moment.tz(date, dateFormat, timeZone).format(dateOutput)
}

const convertAPIFootballToUTC = (date, dateFormat = '', dateOutput = '') => {
  const APIFootballTimeObj = moment.tz(date, dateFormat, API_FOOTBALL_TIME_ZONE)

  return moment.tz(APIFootballTimeObj, UTC_ALIAS).format(dateOutput)
}

const getUTCNow = (dateOutput = '') => moment().utc().format(dateOutput)

const finalDayObj = {
  hour: 23,
  minute: 59
}

const getISODateFinalDay = (timeZone = UTC_ALIAS, date) => {
  const dateWithoutHour = moment.tz(date, timeZone).format(FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
  const isoDateWithFinalHour = moment.tz(dateWithoutHour, FORMAT_TO_FORCE_DATE_WITHOUT_HOUR, timeZone).add(finalDayObj).format()

  return isoDateWithFinalHour
}

const getISODateInitDay = (timeZone = UTC_ALIAS, date) => {
  const dateWithoutHour = moment.tz(date, timeZone).format(FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
  const isoDateWithMidNight = moment.tz(dateWithoutHour, FORMAT_TO_FORCE_DATE_WITHOUT_HOUR, timeZone).format()

  return isoDateWithMidNight
}

module.exports = {
  getDate,
  getUTCNow,
  convertAPIFootballToUTC,
  getISODateFinalDay,
  getISODateInitDay
}

/*eslint max-params: 0 */