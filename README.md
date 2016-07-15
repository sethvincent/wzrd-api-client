# wzrd-api-client

Make requests to browserify CDN [wzrd.in](https://wzrd.in).

## Usage

bundle a module: 

```js
var bundle = require('wzrd-api-client/bundle')

bundle('bunny', function (err, res, body) {
  console.log(body)
})
```

bundle specific version:

```js
var bundle = require('wzrd-api-client/bundle')

bundle('bunny', { version: '1.0.0' }, function (err, res, body) {
  console.log(body)
})
```

bundle multiple dependencies:

```js
var multi = require('wzrd-api-client/multi')

var body = {
  options: { debug: true },
  dependencies: {
    bunny: 'latest',
    regl: 'latest',
    resl: 'latest'
  }
}

multi(body, function (err, res, body) {
  console.log(body.regl)
  console.log(body.resl)
  console.log(body.bunny)
})
```

create a standalone bundle:

```js
var standalone = require('wzrd-api-client/standalone')

standalone('bunny', function (err, res, body) {
  console.log(body)
})
```

check the status of a module

```js
var status = require('wzrd-api-client/status')

status('bunny', function (err, res, body) {
  console.log(body)
})
```

## License
[MIT](LICENSE.md)
