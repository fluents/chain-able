// frisbee
// Copyright (c) 2015- Nick Baugh <niftylettuce@gmail.com>
// MIT Licensed
// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/frisbee>
// # frisbee

// eslint-disable-next-line
'use strict'

// https://davidwalsh.name/fetch

const {Buffer} = require('buffer')
const qs = require('qs')
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
  isJSON,
  merge,
  encase,
  enhanceError,
} = require('./chains')

const fetch = typeof window === 'object' ? window.fetch : global.fetch
const mergeOpts = {clone: true}

/* @TODO should wildcard fliplog in with logchain internal debugging for debug levels in dev build system thing */
function isJSONSafe(json, debug = false) {
  let valid = json
  try {
    valid = JSON.parse(json)
    return valid
  }
  catch (e) {
    if (debug === true) {
      console.log('JSON is not JSON', e)
    }
    return false
  }
}

// base URI for everything
global._options = {
  baseURI: 'http://localhost:8080',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

// scope the old function to the new one like .has .get since they are common
// have a requireable fn
//
// @IMPORTANT TO UPGRADE THE EXPORTING SO EVERYTHING IS FLAT
// NEEDS SOLID CHAIN-ABLE-FS
function renameMethod(originalMethodName, newMethodName) {
  this[newMethodName] = this[originalMethodName]
}

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

if (!fetch) throwWithMsg('req_fetch')

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

// @TODO could copy in the typed version to generate comments to generate docs too
// and allows backwards parsing thinking for creating typedefs
//
// clone() - Creates a clone of a Response object.
// error() - Returns a new Response object associated with a network error.
// redirect() - Creates a new response with a different URL.
// arrayBuffer() - Returns a promise that resolves with an ArrayBuffer.
// blob() - Returns a promise that resolves with a Blob.
// formData() - Returns a promise that resolves with a FormData object.
// json() - Returns a promise that resolves with a JSON object.
// text()

// determine whether we're returning text or json for body
// or attempt to parse json body to use as error message
async function parseFrisbeeResponseBody(res, contentTypeJSON) {
  // for (var originalProp in res.originalResponse) {
  //   // if (!isUndefined(res[originalProp])) {
  //   const has = originalProp in res
  //   if (has) continue
  //   Object.defineProperty(res, originalProp, Object.getOwnPropertyDescriptor(res.originalResponse, originalProp) || {})
  //   // }
  // }
  try {
    if (contentTypeJSON) {
      // console.log('is contentTypeJSON')
      if (isFunction(res.json)) {
        // console.log('is json on response')
        try {
          // @TODO encase()
          res.body = await res.json()
        }
        catch (e) {
          // console.log('errored parsing json on response', e)
          // return e
          res.err = e
          res.originalResponse.statusText = e ? e.message : e

          // res.originalResponse.err = e
          // res.statusText = e.message
          // console.log({res})
        }
        // console.log('parsed json on response, done')
      }
      else {
        // console.log('is isFoshoJSON - calling text')

        res.body = await res.text()
        // console.log('is isFoshoJSON -pre')
        const isFoshoJSON = isJSONSafe(res.body)
        // console.log('is isFoshoJSON - pre parse')

        // @TODO another fn here could do
        // @NOTE good thing to test solidly
        if (isJSON(res.body)) {
          res.body = encase(JSON.parse(res.body)).onInvalid((error) => res.err = error)
          // console.log('error?')
        }
        else {
          // console.log('handling it, on own')
          res.err = this.handleError('json')
        }
      }
      return res
    }
    else {
      // console.log('LAST ELSE')
      res.body = await res.text()
    }
  }
  catch (e) {
    res.err = e
    // console.log('ERROR PARSING', e)
  }

  // console.log('parsed response')
  return res
}

/**
 * @TODO needs more features that make axios viable
 * easy middleware for local storage & jwt retry que
 */

/* prettier-ignore */
function formatFrisbeeResponseError(res, contentTypeJSON, baseURI) {
  // res.err = new Error(res.statusText)
  const FrisbeeResponse = res
  // new Response(res)

  // type - basic, cors
  // url
  // useFinalURL - Boolean for if url is the final URL
  // status - status code (ex: 200, 404, etc.)
  // ok - Boolean for successful response (status in the range 200-299)
  // statusText - status code (ex: OK)
  // headers


  // check if the response was JSON, and if so, better the error
  if (contentTypeJSON) {
    // @TODO Glazed?
    // attempt to use Glazed error messages
    if (isObj(FrisbeeResponse.body) && isString(FrisbeeResponse.body.message)) {
      // @TODO these are the same...?
      // FrisbeeResponse.err = new Error(FrisbeeResponse.body.message)
      FrisbeeResponse.err = FrisbeeResponse.body
    }
    // attempt to utilize Stripe-inspired error messages
    if (!(isArray(FrisbeeResponse.body) && isObj(FrisbeeResponse.body.error))) {
      // was here
      res.err = FrisbeeResponse.body.error
    }
    // if (isObj(res.err)) {
    //   if (res.err.message) res.err = new Error(res.err.message)
    //   if (res.err.stack) res.err.stack = (res.err.stack)
    //   if (res.err.code) res.err.code = (res.err.code)
    //   if (res.err.param) res.err.param = (res.err.param)
    // }
  }
  return FrisbeeResponse
}

// enhanceError

function createFrisbeeResponse(origResp) {
  const resp = {
    originalResponse: origResp,
  }

  // curry
  // const define = (prop, value) => Object.defineProperty(resp, prop, value)

  // console.log('creating frisbee response', {resp})

  respProperties.readOnly.forEach(prop =>
    Object.defineProperty(resp, prop, {
      value: origResp[prop],
    })
    //&& console.log({ prop })
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
    //&& console.log({ prop })
  )

  let callable = null
  respProperties.callable.forEach(prop => {
    Object.defineProperty(resp, prop, {
      // enumerable: true,
      value: (
        (callable = origResp[prop]),
        isFunction(callable) && callable.bind(origResp)
      ),
    })
    // && console.log({ prop })
  })

  // easy vanilla access headers
  const headersObj = {}
  origResp.headers.forEach(pair => {
    headersObj[pair[0]] = pair[1]
  })
  Object.defineProperty(resp, 'headersObj', {
    value: headersObj,
  })

  // const descriptors = obj => {
  //   const descs = []
  //   for (let prop in obj) {
  //     descs.push({ [prop]: Object.getOwnPropertyDescriptor(obj, prop) })
  //   }
  //   return descs
  // }

  // .body
  // descriptors(resp.originalResponse).forEach(desc => {
  //   const prop = Object.keys(desc)[0]
  //   if (resp[prop]) return
  //   Object.defineProperty(resp, prop, desc[prop])
  //   console.log({ prop })
  // })

  // console.log('created frisbee response')
  // console.log(descriptors(resp.originalResponse))

  return resp
}

function copySetToMethodPlugin(name, parent) {
  const copySetOntoMethod = arg => {
    if (isUndefined(arg)) {
      parent.get(name)
    }
    else {
      parent.set(name, arg)
      Object.assign(parent[name], arg)
    }
    return parent
  }

  // so we know if we defaulted them
  copySetOntoMethod.copySetOntoMethod = true

  return this.onSet(copySetOntoMethod)
    .onGet(copySetOntoMethod)
    .onCall(copySetOntoMethod)
}

const makeBody = () => {

}
const makeRequest = (url, opts) => {
  const requestConfig = {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'text/plain',
    }),
  }
  Object.assign(requestConfig, opts)

  return new Request(url, requestConfig)
}


/**
 * @TODO formData (use util)
 */
// const blob = () => {
//   fetch('https://davidwalsh.name/submit', {
// 	method: 'post',
// 	body: new FormData(document.getElementById('comment-form'))
// });
//
//   .then(function(response) {
// 	  return response.blob();
// 	})
// 	.then(function(imageBlob) {
// 	  document.querySelector('img').src = URL.createObjectURL(imageBlob);
// 	});
// }

// easy destructure err
const fetchIt = async(url, opts) => {
  let error = null
  try {
    const request = makeRequest(url, opts)
    // console.log({request})
    // url, opts
    const result = await fetch(request)
    // console.log(result)
    return [error, result]
  }
  catch (e) {
    return [e, null]
  }
}

/* prettier-ignore */
class Frisbee extends Chain {
  constructor(opts = {}) {
    //('frisbee'
    super()

    // because conflicting names
    this._get = this.get.bind(this)

    // @default
    // wish you could make better stack traces once thrown? extend error??
    this.onError(function defaultErrorThrower(error) {
      console.log('throwing...', {error})
      throw error
    })

    // try {
    //   this.method('_setup').encase().onInvalid((error) => {
    //     require('fliplog').quick(error)
    //   }).build()
    // }
    // catch (e) {
    //   console.log('ugh', e)
    // }


    this
      .method('headers')
      .plugin(copySetToMethodPlugin)
      .build()
      .extend(['arrayFormat'])
      // .autoGetSet()
      // .getSet()
      // .build()

      .auth(opts.auth)
      .opts(opts)
      .headers(opts.headers)
      .arrayFormat(opts.arrayFormat || 'indices')
    // .when(opts.auth, () => this.auth(opts.auth))

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
    // console.log('onerror')
    return this.set('onError', handler)
  }
  handleError(msg, data) {
    const messageForIndex = isString(msg) ? errMsg(msg) : msg
    // console.log('handleerror')
    const errorPlus = new Error(messageForIndex)
    errorPlus.data = data

    // isError [object Object] FetchError {
    // name: 'FetchError',
    // message: 'invalid json response body at http://localhost:8080/404-with-invalid-json reason: Unexpected token o in JSON at position 1',
    // type: 'invalid-json'

    // console.log(error.message, error.stack)
    // throw error


    // try {
    // const errorPlus = new Error(messageForIndex)
    // newest at top, remove this line
    // errorPlus.stack = errorPlus.stack.split('\n')
    // errorPlus.stack.shift()
    // errorPlus.stack = errorPlus.stack.join('\n')
    // throw errorPlus
    const onerr = this._get('onError')
    // console.log({onerr})
    // console.log(this.store)
    onerr(errorPlus)
    // }
    // // when onerr throws an error
    // catch (errorError) {
    //   console.log(errorError.message)
    //   console.log(errorError.stack)
    //   throw errorError
    // }
    // this._get('onError').call(this, error, this)
    return errorPlus
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
      if (!isString(path)) return this.handleError('str_path')

      // otherwise check if its an object
      if (!isObjPure(options)) return this.handleError('obj_opts', options)

      // console.log('about to get', this)
      // require('fliplog').quick(this)

      // setup data ---
      const {baseURI} = this._get('opts')

      // swappable/placeholder var to use existing them update with merged
      let headers = this._get('headers')

      // console.log({baseURI, headers}, this)

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
        if (opts.method === 'POST') {
          opts.body = ''
        }
      }
      else if (isObj(opts.body)) {
        if (opts.method === 'GET' || opts.method === 'DELETE') {
          let qsOpts = null
          if (this.has('arrayFormat')) {
            qsOpts = {arrayFormat: this._get('arrayFormat')}
          }

          console.log('QS', qs.stringify(opts.body))

          path += `?${qs.stringify(opts.body, qsOpts)}`
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
              this.handleError(err)
            }
          }
        }
      }

      // @TODO does this part here ever throw to wrap try catch?
      const dofetch = async() => {
        // console.log('do fetch', {path, opts})

        const [error, ogRes] = await fetchIt(baseURI + path, opts)

        // console.log('do fetch - PASS')

        // simple error
        if (!isNill(error)) {
          // @TODO @DEV
          // console.log('has error', {error})
          return this.handleError(error)
          // return Promise.reject(error)
        }

        let res = createFrisbeeResponse(ogRes)
        const contentType = res.headers.get('Content-Type')
        const contentTypeJSON =
          isString(contentType) &&
          contentType.includes('application/json')

        // console.log('enhanced contentType')
        const encasedParse = encase(parseFrisbeeResponseBody)
        res = await encasedParse(res, contentTypeJSON)

        // console.log('parsed response body')

        if (!res.ok) res = formatFrisbeeResponseError(res, contentTypeJSON, baseURI)

        // console.log('formatted')

        return Promise.resolve(res)
      }

      return dofetch()
    }
  }

  /**
   * @TODO have option to allow .setEh .getEh & access as normal properties so never `eh()`
   */
  delAuth() {
    // @TODO this is kind of weird
    delete this.headers.Authorization
    return this.delete('headers.Authorization')
  }
  setAuth(Authorization) {
    this.headers.Authorization = Authorization
    return this.set('headers.Authorization', Authorization)
  }

  auth(creditStringOrArray) {
    let creds = creditStringOrArray
    console.log({creditStringOrArray})
    // if it has :, split into array
    if (isString(creds)) {
      const index = creds.indexOf(':')
      if (index !== -1) {
        // aka creds.split(':')
        creds = [creds.substr(0, index), creds.substr(index + 1)]
      }
    }

    // @TODO argumentor undefined, else array
    // @TODO this is no good...
    if (!isArray(creds)) creds = [].slice.call(arguments)

    // essentially padd out our credentials with empty
    if (creds.length === 0) creds = ['', '']
    else if (creds.length === 1) creds.push('')
    else if (creds.length !== 2) this.handleError('auth_keys')
    creds = creds.map(cred => (isReal(cred) ? cred : ''))

    // console.log({creds})

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
  // console.log({opts})
  return new Frisbee(opts)
}
