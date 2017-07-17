// eslint-disable-next-line
'use strict'
// frisbee
// Copyright (c) 2015- Nick Baugh <niftylettuce@gmail.com>
// MIT Licensed
// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/frisbee>
// # frisbee

const {Buffer} = require('buffer')
const qs = require('qs')
const isJSON = require('./isJSON')
const {
  Chain,
  isFunction,
  isString,
  isObjPure,
  isReal,
  isUndefined,
  isObj,
  isArray,
  isNull,
  isNill,
  merge,
} = require('./chains')

const fetch = typeof window === 'object' ? window.fetch : global.fetch
const mergeOpts = {clone: true}

const validations = [
  // 0 fatal.fetch
  'A global `fetch` method is required as either `window.fetch` ' +
    'for browsers or `global.fetch` for node runtime environments. ' +
    'Please add `require(\'isomorphic-fetch\')` before importing `frisbee`. ' +
    'You may optionally `require(\'es6-promise\').polyfill()` before you ' +
    'require `isomorphic-fetch` if you want to support older browsers.' +
    '\n\nFor more info: https://github.com/niftylettuce/frisbee#usage',
  // 1 validate.fatal.baseuri*
  'baseURI option is required',
  // 2 validate.path.string
  '`path` must be a string',
  // 3 validate.opts.obj
  '`options` must be an object',
  // 4 validate.auth.keys
  'auth option can only have two keys `[user, pass]`',
  // 5 validate.auth.user.string
  'auth option `user` must be a string',
  // 6 validate.auth.pass.string
  'auth option `pass` must be a string',
  // 7 validate.auth.jwt.string
  'jwt token must be a string',
  `Invalid JSON received from`,
]

// @TODO could also just put strings here but then they are allocated each time
// using `_` instead of dot for easier selection
// could also assign to variables but array isn't so bad for order and the eyes and ease
// smaller this way, but changes stack...
const errMsg = msg => {
  if (msg === 'req_fetch') return validations[0]
  else if (msg === 'req_base') return validations[1]
  else if (msg === 'str_path') return validations[2]
  else if (msg === 'obj_opts') return validations[3]
  else if (msg === 'auth_keys') return validations[4]
  else if (msg === 'str_user') return validations[5]
  else if (msg === 'str_pass') return validations[6]
  else if (msg === 'str_jwt') return validations[7]
  else if (msg === 'json') return validations[8]
}
const throwWithMsg = msg => {
  throw new Error(errMsg(msg))
}

if (!fetch) throw new Error(errMsg('req_fetch'))

const methods = ['get', 'head', 'post', 'put', 'del', 'options', 'patch']

const respProperties = {
  readOnly: [
    'headers',
    'ok',
    'redirected',
    'status',
    'statusText',
    'type',
    'url',
    'bodyUsed',
  ],
  writable: ['useFinalURL'],
  callable: [
    'clone',
    'error',
    'redirect',
    'arrayBuffer',
    'blob',
    'formData',
    'json',
    'text',
  ],
}

const getContentType = headers => {
  if (isNill(headers)) {
    return null
  }
  else if (isFunction(headers.get)) {
    return headers.get('Content-Type') || headers.get('content-type')
  }
  else if (isObj(headers)) {
    return headers['Content-Type'] || headers['content-type']
  }
}

// determine whether we're returning text or json for body
// or attempt to parse json body to use as error message
async function parseFrisbeeResponseBody(res, contentTypeJSON) {
  if (contentTypeJSON) {
    if (isFunction(res.json)) {
      res.body = await res.json()
    }
    else {
      res.body = await res.text()

      // @NOTE good thing to test solidly
      if (isJSON(res.body)) {
        res.body = JSON.parse(res.body)
      }
      else {
        res.err = this.handleError('json')
      }
    }
    return res
  }
  else {
    res.body = await res.text()
  }
  return res
}

/* prettier-ignore */
function formatFrisbeeResponseError(res, contentTypeJSON, baseURI) {
  res.err = new Error(res.statusText)

  // check if the response was JSON, and if so, better the error
  if (contentTypeJSON) {
    // @TODO Glazed?
    // attempt to use Glazed error messages
    if (isObj(res.body) && isString(res.body.message)) {
      res.err = new Error(res.body.message)
    }
    // attempt to utilize Stripe-inspired error messages
    else if (!(isArray(res.body) && isObj(res.body.error))) {
      if (res.body.error.message) res.err = new Error(res.body.error.message)
      if (res.body.error.stack) res.err.stack = res.body.error.stack
      if (res.body.error.code) res.err.code = res.body.error.code
      if (res.body.error.param) res.err.param = res.body.error.param
    }
  }
}

function createFrisbeeResponse(origResp) {
  const resp = {
    originalResponse: origResp,
  }

  respProperties.readOnly.forEach(prop =>
    Object.defineProperty(resp, prop, {
      value: origResp[prop],
    })
  )

  respProperties.writable.forEach(prop =>
    Object.defineProperty(resp, prop, {
      get() {
        return origResp[prop]
      },
      set(value) {
        origResp[prop] = value
      },
    })
  )

  let callable = null
  respProperties.callable.forEach(prop => {
    Object.defineProperty(resp, prop, {
      value: (
        (callable = origResp[prop]),
        isFunction(callable) && callable.bind(origResp)
      ),
    })
  })

  // easy vanilla access headers
  const headersObj = {}
  origResp.headers.forEach(pair => {
    headersObj[pair[0]] = pair[1]
  })
  Object.defineProperty(resp, 'headersObj', {
    value: headersObj,
  })

  return resp
}

// easy destructure err
const fetchIt = async(url, opts) => {
  let error = null
  try {
    const result = await fetch(url, opts)
    return [error, result]
  }
  catch (e) {
    return [e, null]
  }
}

/* prettier-ignore */
class Frisbee extends Chain {
  constructor(opts = {}) {
    super()

    this
      .extend(['headers', 'arrayFormat'])
      // .autoGetSet()
      // .getSet()
      // .build()

      .opts(opts)
      .headers(opts.headers)
      .arrayFormat(opts.arrayFormat || 'indices')
      .when(opts.auth, () => this.auth(opts.auth))

    // @default
    // wish you could make better stack traces once thrown? extend error??
    this.onError(function defaultErrorThrower(error) {
      console.log('throwing...')
      // throw error
    })

    // because conflicting names
    this._get = this.get.bind(this)

    methods.forEach(method => {
      this[method] = this._setup(method)
    })

    // already bound
    // this.httpGet = this._get
    // this._get = (arg1, arg2) => {
    //   if (isUndefined(arg2))
    // }
  }
  opts(opts) {
    // validate
    if (!opts.baseURI) this.handleError('req_base')
    this.set('opts', opts)
    return this
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
  // can have arrays of handlers, middleware, this is baby steps
  onError(handler) {
    return this.set('onError', handler)
  }
  handleError(msg, data) {
    const error = new Error(msg)
    error.data = data
    console.log({data})
    throw error

    try {
      const error = new Error(msg)
      // newest at top, remove this line
      // error.stack = error.stack.split('\n')
      // error.stack.shift()
      // error.stack = error.stack.join('\n')
      const onerr = this._get('onError')
      onerr(error)
    }
    catch (e) {
      console.log({e})
    }
    console.log('wut in the fuck')
    // this._get('onError').call(this, error, this)
  }

  /**
   * @methodFactory
   * @method
   * @memberOf frisbee
   * @protected
   * @param  {string} method enum
   * @return {Frisbee} @chainable
   */
  _setup(methodKeyword) {
    return (path = '/', options = {}) => {
      // validate ---

      // path must be string
      if (!isString(path)) this.handleError('str_path')

      // otherwise check if its an object
      if (!isObjPure(options)) this.handleError('obj_opts', options)

      // console.log('about to get', this)
      // require('fliplog').quick(this)

      // setup data ---
      const baseURI = this._get('opts').baseURI

      // swappable/placeholder var to use existing them update with merged
      let headers = this._get('headers')

      // --- here down is not tied to any instance ---

      // don't want to override param,
      // and it's easier to read as a descriptive variable
      // @NOTE would be a good transform
      const method =
        methodKeyword === 'del' ? 'DELETE' : methodKeyword.toUpperCase()

      // merge headers when we have them
      if (isObj(options) && options.headers) {
        headers = merge(headers, options.headers, mergeOpts)
      }
      const opts = merge(options, {headers, method}, mergeOpts)

      // remove any nil or blank headers
      // (e.g. to automatically set Content-Type with `FormData` boundary)
      Object.keys(opts.headers).forEach(key => {
        if (!isReal(opts.headers[key])) delete opts.headers[key]
      })


      /**
       * in order to support Android POST requests
       * we must allow an empty body to be sent
       * @see https://github.com/facebook/react-native/issues/4890
       */
      if (isUndefined(opts.body)) {
        if (opts.method === 'POST') opts.body = ''
      }
      else if (isObj(opts.body)) {
        if (opts.method === 'GET' || opts.method === 'DELETE') {
          path += `?${qs.stringify(opts.body, {arrayFormat: this._get('arrayFormat')})}`
          delete opts.body
        }
        // @TODO: better stringify here
        else {
          /*
           * @NOTE using caseless means checking
           * permutations of casings
           * encouraging bad practice
           * and doing a massive amount of loops
           * when it just simply isn't in the headers
           */
          const reqContentType = opts.headers ? getContentType(opts.headers) : false

          if (reqContentType && reqContentType.split(';')[0] === 'application/json') {
            try {
              opts.body = JSON.stringify(opts.body)
            }
            catch (err) {
              throw err
            }
          }
        }
      }

      // @TODO does this part here ever throw to wrap try catch?
      const dofetch = async() => {
        const [error, ogRes] = await fetchIt(baseURI + path, opts)

        // simple error
        if (!isNill(error)) {
          // @TODO @DEV
          console.log('has error', {error})
          return Promise.reject(error)
        }

        const res = createFrisbeeResponse(ogRes)
        const contentType = res.headers.get('Content-Type')
        const contentTypeJSON =
          isString(contentType) &&
          contentType.includes('application/json')

        await parseFrisbeeResponseBody(res, contentTypeJSON)
        if (!res.ok) formatFrisbeeResponseError(res, contentTypeJSON, baseURI)

        return Promise.resolve(res)
      }

      return dofetch()
    }
  }

  delAuth() {
    return this.delete('headers.Authorization')
  }
  setAuth(Authorization) {
    return this.set('headers.Authorization', Authorization)
  }

  auth(creds) {
    // if it has :, split into array
    if (isString(creds)) {
      const index = creds.indexOf(':')
      if (index !== -1) {
        creds = [creds.substr(0, index), creds.substr(index + 1)]
      }
    }

    // @TODO this is no good...
    if (!isArray(creds)) creds = [].slice.call(arguments)

    // essentially padd out our credentials with empty
    if (creds.length === 0) creds = ['', '']
    else if (creds.length === 1) creds.push('')
    else if (creds.length !== 2) this.handleError('auth_keys')

    // @TODO can do 1 step further with validation as in split plugin
    if (!isString(creds[0])) this.handleError('str_user')
    if (!isString(creds[1])) this.handleError('str_pass')

    if (!creds[0] && !creds[1]) this.delAuth()
    else this.setAuth(`Basic ${new Buffer(creds.join(':')).toString('base64')}`)

    return this
  }

  jwt(token) {
    if (isNull(token)) return this.delAuth()
    else if (isString(token)) return this.setAuth(`Bearer ${token}`)
    else return this.handleError('str_jwt')
  }
}

module.exports = function Frisbees(opts) {
  return new Frisbee(opts)
}
