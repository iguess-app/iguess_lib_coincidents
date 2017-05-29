'use strict';

const Managers = require('./Managers/export');
const Translate = require('./Translate/export');
const Utils = require('./Utils/export');
const Config = require('./config')
let Schemas;
if(Config.mongo.needConnection){
  Schemas = require('./Schemas/export');
}

module.exports = {
  Managers,
  Translate,
  Utils,
  Schemas,
  Config
}