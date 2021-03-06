/* eslint-disable */

const ObjectId = require('mongoose').Types.ObjectId

const configObject = {
  env: process.env.ENV || 'local',
  isEnv: (envSent) => process.env.ENV === envSent,
  isProd: () => process.env.ENV === 'production',
  isTest: () => process.env.ENV === 'test',
  isLocal: () => process.env.ENV === 'local',
  serverPort: Number(process.env.SERVER_PORT) || 8080,
  token: {
    cert: process.env.TOKEN_SEED,
    expirationTime: parseInt(process.env.TOKEN_EXPIRATION_TIME) || 5.256e+6 //2 months
  },
  salt: process.env.SALT,
  redis: {
    needConnection: process.env.REDIS_CONNECTION ? parseInt(process.env.REDIS_CONNECTION) : 1,
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 6379,
    key: process.env.REDIS_KEY || '',
    defaultExpireTime: parseInt(process.env.REDIS_EXPIRE_TIME) || 60, //1Minute (in Seconds),
    sessionTime: parseInt(process.env.SESSION_REDIS_EXPIRE_TIME) || 2628e+6 //1 month
  },
  mongo: {
    needConnection: process.env.MONGO_CONNECTION ? parseInt(process.env.MONGO_CONNECTION) : 1,
    personalAddress: process.env.MONGO_PERSONALDB_ADDRESS || '',
    holiAddress: process.env.MONGO_HOLIDB_ADDRESS || '',
    guessAddress: process.env.MONGO_GUESSDB_ADDRESS || '',
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_KEY || '',
    database: process.env.MONGO_DB || 'iguess',
    holiDB: process.env.HOLI_DB || 'holiDB',
    atlas: process.env.MONGO_ATLAS ? parseInt(process.env.MONGO_ATLAS) : 0,
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || '127.0.0.1',
    idStringSize: 24,
    checkObjectId: (id) => ObjectId.isValid(id)
  },
  apis: {
    personalUrl: process.env.PERSONAL_URL || 'http://localhost:9002',
    guessUrl: process.env.GUESS_URL || 'http://localhost:9003',
    paymentsUrl: process.env.PAYMENTS_URL || 'http://localhost:9004',
  },
  apiFootball: {
    APIKey: process.env.APIFOOTBAL_API_KEY,
    url: process.env.APIFOOTBAL_URL || 'http://apifootball.com/api',
    intervalBetweenRequests: parseInt(process.env.INTERVAL_BETWEEN_REQUESTS_APIFOOTBAL) || 15000, //15 seconds (in Seconds)
    timezone: process.env.APIFOOTBAL_TIMEZONE || 'Europe/London'
  },
  footballApi: {
    APIKey: process.env.FOOTBALL_API_KEY,
    url: process.env.FOOTBALLL_URL || 'http://api.football-api.com/2.0/matches',
    intervalBetweenRequests: parseInt(process.env.INTERVAL_BETWEEN_REQUESTS_APIFOOTBAL) || 15000, //15 seconds (in Seconds)
    timezone: process.env.FOOTBALL_API_KEY || 'UTC'
  },
  updateMatchResultRoutine: {
    dateFromForced: process.env.MATCH_RESULT_DATE_FROM_FORCED, //Expected format: YYYY-MM-DD
    dateToForced: process.env.MATCH_RESULT_DATE_TO_FORCED //Expected format: YYYY-MM-DD
  },
  updatePontuationRoutine: {
    dayForced: process.env.PONTUATION_DAY_FROM_FORCED, //Expected format: ISO_DATE with UTC
  }
}

const businessRules = require('./businessRules')

module.exports = Object.assign({}, configObject, businessRules)