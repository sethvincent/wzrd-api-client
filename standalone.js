var request = require('./request')

module.exports = function standalone (moduleName, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  return request({
    endpoint: 'standalone',
    moduleName: moduleName,
    host: options.host,
    debug: options.debug
  }, callback)
}
