const isAsync = require('./async')
const isPromise = require('./promise')

/**
 * @desc async function or promise
 * @category Lang
 *
 * @param  {*} x value
 * @return {boolean} x isAsyncish
 * @since 4.0.0-beta.2
 *
 * @memberOf is
 * @func isAsyncish
 * @extends isAsyncish
 * @extends isPromise
 * @variation isAsyncish OR isPromise
 *
 * @example
 *
 *  isAsyncish(async function() {})
 *  //=> true
 *  isAsyncish(new Promise(r => r()))
 *  //=> true
 *
 *  isAsyncish({})
 *  //=> false
 *  isAsyncish(function() {})
 */
module.exports = x => isAsync(x) || isPromise(x)
