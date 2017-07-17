require('isomorphic-fetch')
const log = require('fliplog')
const Frisbee = require('../../src/frisbee')

const standardMethods = ['get', 'post', 'put', 'del', 'patch']
const methods = [].slice.call(standardMethods).concat(['head', 'options'])
const server = global._server

// log.registerCatch()

// describe('node runtime', () => {
let api

server.start()
// afterEach(() => server.start())
// beforeEach(() => server.stop())

test('should have `fetch` defined', done => {
  expect(fetch).toBeTruthy()
  done()
})

// <https://github.com/niftylettuce/node-react-native-fetch-api>
test('should throw an error if we fail to pass baseURI', done => {
  // expect(new Frisbee).toThrow(new Error('baseURI option is required'));
  expect(() => new Frisbee()).toThrow(/baseURI option is required/)
  done()
})

test('should create Frisbee instance with all methods', done => {
  console.log(global._options)
  api = new Frisbee(global._options)
  expect(typeof api).toBe('object')
  methods.forEach(method => expect(typeof api[method]).toBe('function'))
  done()
})

test('should throw errors for incorrect auth() usage', done => {
  api = new Frisbee(global._options)
  expect(() => api.auth({})).toThrow(/auth option `user` must be a string/)
  expect(() => api.auth(new Array(3))).toThrow(
    /auth option can only have two keys/
  )
  expect(() => api.auth([{}, ''])).toThrow(
    /auth option `user` must be a string/
  )
  expect(() => api.auth(['', {}])).toThrow(
    /auth option `pass` must be a string/
  )
  done()
})

test('should accept valid auth("user:pass") usage', done => {
  api = new Frisbee(global._options)
  const creds = 'foo:bar'
  api.auth('foo:bar')
  const basicAuthHeader = `Basic ${new Buffer(creds).toString('base64')}`
  expect(api.headers.Authorization).toEqual(basicAuthHeader)
  done()
})

test('should allow chaining of `auth` and an HTTP method', async done => {
  api = new Frisbee(global._options)
  try {
    await api.auth('foo', 'bar').get('/')
  }
  catch (err) {
    throw err
  }
  done()
})

test('should allow removal of auth() header', done => {
  api = new Frisbee(global._options)

  api.auth('foo').auth()
  expect(api.headers.Authorization).toBeFalsy()
  done()
})

test.only(
  'should throw an error if we fail to pass a string `path`',
  async done => {
    api = new Frisbee(global._options)

    try {
      await api.get({})
    }
    catch (err) {
      expect(err.message).toEqual('`path` must be a string')
    }

    done()
  }
)

test('should throw an error if we fail to pass an object `options`', async done => {
  api = new Frisbee(global._options)

  try {
    await api.get('', [])
  }
  catch (err) {
    expect(err.message).toEqual('`options` must be an object')
  }
  try {
    await api.get('', 1)
  }
  catch (err) {
    expect(err.message).toEqual('`options` must be an object')
  }
  done()
})

test('should throw an error if we pass a non object `options`', async done => {
  api = new Frisbee(global._options)
  try {
    await api.get('', false)
  }
  catch (err) {
    expect(err.message).toEqual('`options` must be an object')
  }
  done()
})

test('should automatically set options to an empty object if not set', async done => {
  api = new Frisbee(global._options)

  try {
    await api.get('')
  }
  catch (err) {
    throw err
  }

  done()
})

standardMethods.forEach(method => {
  const methodName = method === 'del' ? 'DELETE' : method.toUpperCase()

  test(`should return 200 on ${methodName}`, async done => {
    api = new Frisbee(global._options)

    const opts = {}

    if (method === 'post') opts.body = {foo: 'bar'}

    try {
      const res = await api[method]('/', opts)
      expect(typeof res).toBe('object')
      expect(typeof res.body).toBe('object')
    }
    catch (err) {
      throw err
    }

    done()
  })
})

standardMethods.forEach(method => {
  const methodName = method === 'del' ? 'DELETE' : method.toUpperCase()

  test(`should return 200 on ${methodName}`, async done => {
    api = new Frisbee(global._options)

    const opts = {}
    if (method === 'post') opts.body = {foo: 'bar'}

    try {
      const res = await api[method]('/', opts)
      expect(typeof res).toBe('object')
      expect(typeof res.body).toBe('object')
    }
    catch (err) {
      throw err
    }

    done()
  })
})

test('should stringify querystring parameters for GET and DELETE requests', async done => {
  api = new Frisbee(global._options)
  const querystring = {
    a: 'blue',
    b: 'cyan',
    c: 'pink',
  }
  const getRes = await api.get('/querystring', {
    body: querystring,
  })

  expect(typeof getRes.body).toBe('object')
  expect(getRes.body).toEqual(querystring)

  const delRes = await api.get('/querystring', {
    body: querystring,
  })
  expect(typeof delRes.body).toBe('object')
  expect(delRes.body).toEqual(querystring)

  done()
})

test('should stringify querystring parameters with arrayFormat for GET and DELETE requests', async done => {
  api = new Frisbee(
    Object.assign({}, global._options, {formatArray: 'brackets'})
  )
  const querystring = {
    a: 'blue',
    b: 'cyan',
    c: 'pink',
    d: ['1', '2', '3'],
  }
  const getRes = await api.get('/querystring', {
    body: querystring,
  })
  expect(typeof getRes.body).toBe('object')
  expect(getRes.body).toEqual(querystring)

  const delRes = await api.get('/querystring', {
    body: querystring,
  })
  expect(typeof delRes.body).toBe('object')
  expect(delRes.body).toEqual(querystring)

  done()
})

test('should URL encode querystring parameters for GET and DELETE requests', async done => {
  api = new Frisbee(global._options)
  const querystring = {
    a: '   ',
    b: '&foo&',
    c: '$$%%%%',
  }
  const getRes = await api.get('/querystring', {
    body: querystring,
  })
  expect(typeof getRes.body).toBe('object')
  expect(getRes.body).toEqual(querystring)

  const delRes = await api.del('/querystring', {
    body: querystring,
  })
  expect(typeof delRes.body).toBe('object')
  expect(delRes.body).toEqual(querystring)

  done()
})

test('should return 404', async done => {
  api = new Frisbee(global._options)
  const res = await api.get('/404')
  expect(res.err).toBe('error')
  expect(res.err.message).toEqual('Not Found')
  done()
})

test('should return 404 with valid json', async done => {
  api = new Frisbee(global._options)
  const res = await api.get('/404-with-valid-json')
  expect(res.err).toBe('error')
  expect(res.err.message).toEqual('Bad Request')
  done()
})

test('should return 404 with invalid json', async done => {
  api = new Frisbee(global._options)
  const res = await api.get('/404-with-invalid-json')
  expect(res.err).toBe('error')
  expect(res.err.message).toEqual(
    `Invalid JSON received from ${global._options.baseURI}`
  )
  done()
})

test('should return 404 with stripe error', async done => {
  api = new Frisbee(global._options)
  const res = await api.get('/404-with-stripe-error')
  expect(res.err).toBe('error')
  expect(typeof res.err.message).toBe('string')
  expect(typeof res.err.stack).toBe('object')
  expect(typeof res.err.code).toBe('number')
  expect(typeof res.err.param).toBe('string')
  done()
})

test('should return 400 with message', async done => {
  api = new Frisbee(global._options)
  const res = await api.get('/400-with-message')
  expect(res.err).toBe('error')
  expect(res.err.message).toEqual('Oops!')
  done()
})
// })
