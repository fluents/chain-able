const toS = require('./toS')

/**
 * @desc is a Promise
 * @param  {*} x value
 * @return {boolean} x isPromise
 *
 * @since 4.0.0-beta.2
 * @memberOf is
 * @func isPromise
 *
 * @see https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66
 * @see https://github.com/sindresorhus/promise-fun
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
