'use Strict';

const makeObject = (queryResult) => queryResult.toObject();

const makeJSON = (queryResult) => queryResult.toJSON();

module.exports = {
  makeObject,
  makeJSON
}