/* eslint-disable */

const ObjectId = require('mongoose').Types.ObjectId;

const configObject = {
  env: process.env.ENV || 'local',
  isEnv: (envSent) => process.env.ENV === envSent,
  serverPort: Number(process.env.SERVER_PORT) || 8080,
  token: {
    cert: process.env.TOKEN_SEED || 'asdawUGDQ&@ET*@&GUGDASU89yHdausdg231', //Open just before send the project to Prod
    expirationTime: parseInt(process.env.TOKEN_EXPIRATION_TIME) || 3600 //1hour (in Seconds)
  },
  salt: process.env.SALT || '$2a$10$5PMJupkGGUJ22DxQC4UoUe', //Open just before send the project to Prod
  redis: {
    needConnection: process.env.REDIS_CONNECTION ? parseInt(process.env.REDIS_CONNECTION) : 1,
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 6379,
    key: process.env.REDIS_KEY || '',
    defaultExpireTime: parseInt(process.env.REDIS_EXPIRE_TIME) || 60 //1Minute (in Seconds)
  },
  mongo: {
    needConnection: process.env.MONGO_CONNECTION ? parseInt(process.env.MONGO_CONNECTION) : 1,
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_KEY || '',
    address: process.env.MONGO_ADDRESS || '',
    database: process.env.MONGO_DB || 'iguess',
    holiDB: process.env.HOLI_DB || 'holiDB',
    atlas: process.env.MONGO_ATLAS || false,
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || '127.0.0.1',
    idStringSize: 24,
    checkObjectId: (id) => ObjectId.isValid(id)
  },
  apis: {
    holiUrl: process.env.HOLI_URL || 'http://127.0.0.1:9001',
    personalUrl: process.env.PERSONAL_URL || 'http://127.0.0.1:9002',
    guessUrl: process.env.GUESS_URL || 'http://127.0.0.1:9003'
  },
  apiFootball: {
    APIKey: process.env.APIFOOTBAL_API_KEY || '6f60688e08d2657cb247eaa636b1604425ddd76ee4bacfd007f909442ea06404',
    url: process.env.APIFOOTBAL_URL || 'http://apifootball.com/api'
  }
}

const businessRules = require('./businessRules')

module.exports = Object.assign({}, configObject, businessRules)