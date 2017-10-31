const statusCode = {
  ok: 200,
  created: 201,
  unauthorized: 401,
  notFound: 404,
  forbidden: 403,
  notAcceptable: 406,
  conflict: 409
}

module.exports = Object.freeze(statusCode);