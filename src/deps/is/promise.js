const ENV_COMPAT = require('../env/compat')
const toS = require('./toS')

/**
 * @desc is a Promise
 * @since 4.0.0-beta.2
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} x isPromise
 *
 * @func
 * @name isPromise
 *
 * {@link https://tc39.github.io/ecma262/#sec-ispromise emca-ispromise}
 * {@link  https://github.com/sindresorhus/promise-fun promise-fun}
 * {@link https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66 kind-of-promise}
 * @see {@link emca-ispromise}
 * @see {@link kind-of-promise}
 * @see {@link promise-fun}
 *
 * @example
 *
 *  isPromise(new Promise(r => r))
 *  //=> true
 *  isPromise(async function() {})
 *  //=> false // on some environments, true
 *
 *  isPromise({})
 *  //=> false
 *  isPromise(Object.create(null))
 *  //=> false
 *  isPromise(null)
 *  //=> false
 *  isPromise(new Set())
 *  //=> false
 *  isPromise(function() {})
 *  //=> false
 *  isPromise('')
 *  //=> false
 *  isPromise(1)
 *  //=> false
 *
 */
module.exports = x => toS(x) === '[object Promise]'

if (ENV_COMPAT) {
  const isObj = require('./obj')
  const isFunction = require('./function')
  module.exports = x => isObj(x) && isFunction(x.then)
}
