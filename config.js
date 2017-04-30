//TO DO
//PUT EVERYTHING ON ENV VARIABLES

module.exports = {
  token: {
    cert: 'asdawUGDQ&@ET*@&GUGDASU89yHdausdg231',
    expirationTime: 3600 //1hour (in Seconds)
  },
  salt: '$2a$10$5PMJupkGGUJ22DxQC4UoUe',
  facebook: {
    clientSecret: '4bea584f60c0cf37b5b037b1c4bc8590',
    clientID: '1839068873039445'
  },
  redis: {
    host: '104.196.159.131',
    port: 6379,
    key: 'GDdoLu6N',
    defaultExpireTime: 60 //1Minute (in Seconds)
  },
  mongo: {
    user: 'luhalvesbr',
    password: 'xSxotVAFrlegS2yJ',
    address: 'zerocluster-shard-00-00-mfooh.mongodb.net:27017,zerocluster-shard-00-01-mfooh.mongodb.net:27017,zerocluster-shard-00-02-mfooh.mongodb.net:27017',
    port: null,
    database: 'iguess'
  },
  // mongo: {
  //   host: 'localhost',
  //   port: '27017',
  //   database: 'iguess'
  // },
  routes: []
}