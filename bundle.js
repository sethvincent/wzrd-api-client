var request = require('./request')

module.exports = function bundle (moduleName, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  return request({
    endpoint: 'bundle',
    moduleName: moduleName,
    host: options.host,
    debug: options.debug
  }, callback)
}
