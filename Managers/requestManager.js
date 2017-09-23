'use strict'

const requestPromise = require('request-promise')
const qs = require('querystring')

const requestManager = {
  post: (uri, reqHeaders, body) => {
    const headers = {};
    if (reqHeaders) {
      headers.language = reqHeaders.language
    }

    const options = {
      method: 'POST',
      uri,
      headers,
      body,
      json: true
    };

    return requestPromise(options)
  },

  put: (uri, reqHeaders, body) => {
    const headers = {};
    if (reqHeaders) {
      headers.language = reqHeaders.language
    }

    const options = {
      method: 'PUT',
      uri,
      headers,
      body,
      json: true
    };

    return requestPromise(options)
  },

  patch: (uri, reqHeaders, body) => {
    const headers = {};
    if (reqHeaders) {
      headers.language = reqHeaders.language
    }

    const options = {
      method: 'PATCH',
      uri,
      headers,
      body,
      json: true
    };

    return requestPromise(options)
  },

  get: (uri, reqHeaders, querystring) => {
    const headers = {}
    if (reqHeaders) {
      headers.language = reqHeaders.language
    }
    if (querystring) {
      _buildQueryString(querystring)
    }

    const options = {
      method: 'GET',
      uri,
      headers,
      json: true
    }

    return requestPromise(options)
  }

}

const _buildQueryString = (obj) => {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  
  const qsBuilded = keys.reduce((acumulator, key, index) => {
    const qsObj = {}
    qsObj[key] = values[index]
    const partialQS = qs.stringify(qsObj)
    
    if (acumulator.length) {
      return `${acumulator}&${partialQS}` 
    }
    
    return acumulator + partialQS
  }, '?')
  
  
  return qsBuilded
}


module.exports = requestManager