'use strict'

const makeObject = (queryResult) => {
  if (queryResult) {
    return queryResult.toObject();
  }

  throw new Error('Arquivo não encontrado no DB');
}

const makeJSON = (queryResult) => queryResult.toJSON();

module.exports = {
  makeObject,
  makeJSON
}