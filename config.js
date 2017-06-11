module.exports = {
  env: process.env.ENV || 'local',
  token: {
    cert: process.env.TOKEN_SEED || 'asdawUGDQ&@ET*@&GUGDASU89yHdausdg231', //Open just before send the project to Prod
    expirationTime: parseInt(process.env.TOKEN_EXPIRATION_TIME) || 3600 //1hour (in Seconds)
  },
  salt: process.env.SALT || '$2a$10$5PMJupkGGUJ22DxQC4UoUe', //Open just before send the project to Prod
  redis: {
    needConnection: parseInt(process.env.REDIS_CONNECTION) || 1,
    host: process.env.REDIS_HOST || '',
    port: process.env.REDIS_PORT || 6379,
    key: process.env.REDIS_KEY || '',
    defaultExpireTime: parseInt(process.env.REDIS_EXPIRE_TIME) || 60 //1Minute (in Seconds)
  },
  mongo: {
    needConnection: parseInt(process.env.MONGO_CONNECTION) || 1,
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_KEY || '',
    address: process.env.MONGO_ADDRESS || '',
    database: process.env.MONGO_DB || 'iguess',
    atlas: process.env.MONGO_ATLAS || false,
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || '127.0.0.1',
    idStringSize: 24
  },
  apis: {
    holiUrl: process.env.HOLI_URL || 'http://127.0.0.1:9001',
    personalUrl: process.env.PERSONAL_URL || 'http://127.0.0.1:9002',
    guessUrl: process.env.GUESS_URL || 'http://127.0.0.1:9003'
  },
  profile: {
    maxTeamToAppreciateAllowed: 2,
    userNameMaxSize: 20,
    nameMaxSize: 20,
    descriptionMaxSize: 100
  },
  guess: {
    minPossibleScore: 0
  },
  holi: {
    minRoundRobinFixtures: 1,
    maxRoundRobinFixtures: 50,
    knockoutTournamentRoundNames: [
      'Final',
      'SemiFinals',
      'Quarterfinals',
      'Round of 16',
      'Round of 32',
      'Round of 64',
      'Round of 128'
    ]
  },
  notificationTypes: {
    friendShipRequest: 1,
    guessLeagueRequest: 2,
    nowFriendsResponse: 3,
    nowGuessLeagueAdded: 4
  }
}