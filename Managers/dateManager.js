'use strict'

const moment = require('moment-timezone')

const config = require('../config/config')

const UTC_ALIAS = 'UTC'
const FORMAT_TO_FORCE_DATE_WITHOUT_HOUR = 'YYYY-MM-DDZ'
const MOMENT_INCLUSIVITY_ALIAS = '[]'
const API_FOOTBALL_TIME_ZONE = config.apiFootball.timezone

const manipulateSupportObj = {
  finalDayObj: {
    hour: 23,
    minute: 59
  },
  tomorrow: {
    day: 1
  },
  yesterday: {
    day: -1
  }
}

const getDate = (date, dateFormat = '', dateOutput = '', timezone = UTC_ALIAS, language = 'en-us') => {
  moment.locale(language)

  return moment.tz(date, dateFormat, timezone).format(dateOutput)
}

const convertAPIFootballToUTC = (date, dateFormat = '', dateOutput = '') => {
  const APIFootballTimeObj = moment.tz(date, dateFormat, API_FOOTBALL_TIME_ZONE)

  return moment.tz(APIFootballTimeObj, UTC_ALIAS).format(dateOutput)
}

const getUTCNow = (dateOutput = '') => moment().utc().format(dateOutput)

const addOneDayMore = (date, dateFormat = '', dateOutput = '', timezone = UTC_ALIAS) => 
  moment.tz(date, dateFormat, timezone).add(manipulateSupportObj.tomorrow).format(dateOutput)

const getISODateFinalDay = (timezone = UTC_ALIAS, date) => {
  const dateWithoutHour = moment.tz(date, timezone).format(FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
  const isoDateWithFinalHour = moment.tz(dateWithoutHour, FORMAT_TO_FORCE_DATE_WITHOUT_HOUR, timezone).add(manipulateSupportObj.finalDayObj).format()

  return isoDateWithFinalHour
}

const getISODateInitDay = (timezone = UTC_ALIAS, date) => {
  const dateWithoutHour = moment.tz(date, timezone).format(FORMAT_TO_FORCE_DATE_WITHOUT_HOUR)
  const isoDateWithMidNight = moment.tz(dateWithoutHour, FORMAT_TO_FORCE_DATE_WITHOUT_HOUR, timezone).format()

  return isoDateWithMidNight
}

const getNicknameDay = (timezone = UTC_ALIAS, date) => {
  switch (true) {
    case _isToday(date, timezone):
      return 'today'
    case _isTomorrow(date, timezone):
      return 'tomorrow'
    case _isYesterday(date, timezone):
      return 'yesterday'
    default:
      return false
  }
}

const _isToday = (date, timezone) => {
  const startOfTheDayIsoDate = getISODateInitDay(timezone)
  const endOfTheDayIsoDate = getISODateFinalDay(timezone)

  return moment(date).isBetween(startOfTheDayIsoDate, endOfTheDayIsoDate, null, MOMENT_INCLUSIVITY_ALIAS)
}

const _isTomorrow = (date, timezone) => {
  const startOfTheDayIsoDate = moment(getISODateInitDay(timezone)).add(manipulateSupportObj.tomorrow).format()
  const endOfTheDayIsoDate = moment(getISODateFinalDay(timezone)).add(manipulateSupportObj.tomorrow).format()

  return moment(date).isBetween(startOfTheDayIsoDate, endOfTheDayIsoDate, null, MOMENT_INCLUSIVITY_ALIAS)
}

const _isYesterday = (date, timezone) => {
  const startOfTheDayIsoDate = moment(getISODateInitDay(timezone)).add(manipulateSupportObj.yesterday).format()
  const endOfTheDayIsoDate = moment(getISODateFinalDay(timezone)).add(manipulateSupportObj.yesterday).format()

  return moment(date).isBetween(startOfTheDayIsoDate, endOfTheDayIsoDate, null, MOMENT_INCLUSIVITY_ALIAS)
}

module.exports = {
  getDate,
  getUTCNow,
  convertAPIFootballToUTC,
  getISODateFinalDay,
  getISODateInitDay,
  getNicknameDay,
  addOneDayMore
}

/*eslint max-params: 0 */

//TODO: Procurar sobre startOf e endOf para não precisar usar o add para pegar final/comeco do dia