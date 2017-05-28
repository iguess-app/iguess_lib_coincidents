'use strict';

const requestPromise = require('request-promise');

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

  get: (uri, reqHeaders) => {
    const headers = {};
    if (reqHeaders) {
      headers.language = reqHeaders.language
    }

    const options = {
      method: 'GET',
      uri,
      headers,
      json: true
    };

    return requestPromise(options)
  }

}

module.exports = requestManager