var assert = require('assert')
var req = require('request')
var defaults = require('./defaults')

/*
* Make requests to the wzrd.in server
*/
module.exports = function request (opts, callback) {
  return req(createOptions(opts), function (err, res, body) {
    if (err) return callback(err)
    if (res.statusCode >= 400) return callback(body)
    return callback(null, res, body)
  })
}

/*
* turn fragments into the full url of the request
*/
function createOptions (opts) {
  assert(opts.endpoint, 'opts.endpoint is required')
  var host = opts.host || defaults.host
  var name = opts.moduleName
  var version = opts.version || 'latest'
  var endpoint = opts.endpoint
  var method = 'GET'
  var json = true

  if (opts.debug) {
    if (endpoint === 'bundle' || endpoint === 'standalone') {
      endpoint = 'debug-' + endpoint
    }
  }

  if (endpoint === 'multi') {
    assert(opts.body, 'multi requires opts.body')
    method = 'POST'
    json = opts.body
    name = ''
  } else {
    assert(opts.moduleName, 'opts.moduleName is required')
  }

  if (name && name.indexOf('@') < 0) name = name + '@' + version
  var url = host + '/' + endpoint + '/' + name
  return { url: url, method: method, json: json }
}
