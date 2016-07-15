var test = require('tape')

test('bundle latest', function (t) {
  var bundle = require('../bundle')

  bundle('bunny', function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.end()
  })
})

test('bundle specific version', function (t) {
  var bundle = require('../bundle')

  bundle('bunny', { version: '1.0.0' }, function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.end()
  })
})

test('multi', function (t) {
  var multi = require('../multi')

  var body = {
    options: { debug: true },
    dependencies: {
      bunny: 'latest',
      regl: 'latest',
      resl: 'latest'
    }
  }

  multi(body, function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.ok(body.regl)
    t.ok(body.resl)
    t.ok(body.bunny)
    t.end()
  })
})

test('standalone', function (t) {
  var standalone = require('../standalone')

  standalone('bunny', function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.end()
  })
})

test('standalone specific version', function (t) {
  var standalone = require('../standalone')

  standalone('bunny', function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.end()
  })
})

test('status', function (t) {
  var status = require('../status')

  status('bunny', function (err, res, body) {
    t.notOk(err)
    t.ok(res)
    t.ok(body)
    t.end()
  })
})
