'use strict'

const requestPromise = require('request-promise')
const qs = require('querystring')

const log = require('../Managers/logManager')
const config = require('../config/config')
const env = config.env
const _checkIfEnvIsLoggable = () => env === 'local' || env === 'development' || env === 'homolog' || env === 'staging'

const _log = (response, request) => {
  if (_checkIfEnvIsLoggable()) {
    log.info({request, response})
  }
}

const _doTheRequest = (options) => 
  requestPromise(options)
    .then((response) => {
      _log(response, options)

      return response
    })

const requestManager = {
  post: (uri, reqHeaders, body) => {
    const headers = _itIsMicroserviceReq(uri) ? _buildDefaultHeader(reqHeaders) : {}

    const options = {
      method: 'POST',
      uri,
      headers,
      body,
      json: true
    }

    return _doTheRequest(options)
  },

  put: (uri, reqHeaders, body) => {
    const headers = _itIsMicroserviceReq(uri) ? _buildDefaultHeader(reqHeaders) : {}

    const options = {
      method: 'PUT',
      uri,
      headers,
      body,
      json: true
    }

    return _doTheRequest(options)
  },

  patch: (uri, reqHeaders, body) => {
    const headers = _itIsMicroserviceReq(uri) ? _buildDefaultHeader(reqHeaders) : {}

    const options = {
      method: 'PATCH',
      uri,
      headers,
      body,
      json: true
    }

    return _doTheRequest(options)
  },

  get: (url, reqHeaders, querystring) => {
    const headers = _itIsMicroserviceReq(url) ? _buildDefaultHeader(reqHeaders) : {}
    let uri = url
    if (querystring) {
      uri = url + _buildQueryString(querystring)
    }

    const options = {
      method: 'GET',
      uri,
      headers,
      json: true
    }

    return _doTheRequest(options)
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

const _itIsMicroserviceReq = (url) => {
  const microServicesAddress = Object.values(config.apis)
  
  return Boolean(microServicesAddress.find((microServiceAddress) => url.includes(microServiceAddress)))
}

const _buildDefaultHeader = (reqHeaders = {}) => ({
  'token': reqHeaders.token,
  'language': reqHeaders.language,
  'request_id': reqHeaders.request_id,
  'hardware_fingerprint': reqHeaders.hardware_fingerprint,
  'platform': reqHeaders.platform,
  'os_version': reqHeaders.os_version,
  'app_version': reqHeaders.app_version,
  'phone_model': reqHeaders.phone_model,
  'phone_fabricator': reqHeaders.phone_fabricator
})

module.exports = requestManager