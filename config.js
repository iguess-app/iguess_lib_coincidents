module.exports = {
  env: process.env.ENVIRONMENT || 'local',
  token: {
    cert: process.env.TOKEN_SEED || 'asdawUGDQ&@ET*@&GUGDASU89yHdausdg231',
    expirationTime: parseInt(process.env.TOKEN_EXPIRATION_TIME) || 3600 //1hour (in Seconds)
  },
  salt: process.env.SALT || '$2a$10$5PMJupkGGUJ22DxQC4UoUe',
  redis: {
    host: process.env.REDIS_HOST || '130.211.171.212',
    port: process.env.REDIS_PORT || 6379,
    key: process.env.REDIS_KEY || 'wAMK4Hig',
    defaultExpireTime: parseInt(process.env.REDIS_EXPIRE_TIME) || 60 //1Minute (in Seconds)
  },
  mongo: {
    user: process.env.MONGO_USER || 'luhalvesbr',
    password: process.env.MONGO_KEY || 'xSxotVAFrlegS2yJ',
    address: process.env.MONGO_ADDRESS || 'zerocluster-shard-00-00-mfooh.mongodb.net:27017,zerocluster-shard-00-01-mfooh.mongodb.net:27017,zerocluster-shard-00-02-mfooh.mongodb.net:27017',
    database: process.env.MONGO_DB || 'iguess',
    atlas: process.env.MONGO_ATLAS || false,
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || '127.0.0.1'
  },
  apis: {
    holiUrl: process.env.HOLI_URL || 'http://0.0.0.0:9001',
    personalUrl: process.env.PERSONAL_URL || 'http://0.0.0.0:9002',
    guessUrl: process.env.GUESS_URL || 'http://0.0.0.0:9003'
  },
  facebook: {
    clientSecret: '4bea584f60c0cf37b5b037b1c4bc8590',
    clientID: '1839068873039445'
  },
  maxTeamToAppreciateAllowed: 2,
  notificationTypes: {
    friendShipRequest: 1,
    guessLeagueRequest: 2
  }
}