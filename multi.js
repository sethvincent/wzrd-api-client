var assert = require('assert')
var request = require('./request')

module.exports = function multi (body, options, callback) {
  assert(body.dependencies, 'body.dependencies is required')

  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  return request({
    endpoint: 'multi',
    body: body,
    host: options.host
  }, callback)
}
