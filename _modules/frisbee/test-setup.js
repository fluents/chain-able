const log = require('fliplog')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const extended = {extended: false}

// log.registerCatch()
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded(extended))

// parse application/json
app.use(bodyParser.json(extended))

app.all('/', (req, res, next) => {
  /*
  // HEAD request body must be 0 in length
  if (req.method === 'HEAD' || req.method === 'OPTIONS') {
    res.send(200, '');
    return;
  }
  */

  res.json({
    message: 'OK',
  })
})

app.get('/400-with-message', (req, res, next) => {
  res.status(400).json({message: 'Oops!'})
})

app.get('/querystring', (req, res, next) => {
  res.json(req.query)
})

app.delete('/querystring', (req, res, next) => {
  res.json(req.query)
})

app.get('/404', (req, res, next) => {
  // console.log('404...', {req, res, next})
  // throw new Error('404')
  res.sendStatus(404)
})

app.get('/404-with-valid-json', (req, res, next) => {
  res.set('Content-Type', 'application/json').status(400).send({foo: 'baz'})
})

app.get('/404-with-invalid-json', (req, res, next) => {
  console.log('404')
  res.set('Content-Type', 'application/json').status(404).send('foobaz')
})

app.get('/404-with-stripe-error', (req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Some error happened',
      stack: {},
      code: 23,
      param: 'hello_world',
    },
  })
})

global.app = {}
global._server = {
  start() {
    global.app = app.listen(8080)
  },
  stop() {
    return global.app.close()
  },
}

// base URI for everything
global._options = {
  baseURI: 'http://localhost:8080',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

// setup global chai methods
// import chai from 'chai';
// import dirtyChai from 'dirty-chai';
// chai.config.includeStack = true;
// chai.config.showDiff = true;
// // chai.use(dirtyChai);
// global.chai = chai;
// global.AssertionError = chai.AssertionError;
// global.Assertion = chai.Assertion;
// global.expect = chai.expect;
// global.assert = chai.assert;

// setTimeout(() => {
//   global._server.close
// }, 10000)
