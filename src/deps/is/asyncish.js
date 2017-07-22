const or = require('../conditional/or')
const isAsync = require('./async')
const isPromise = require('./promise')

/**
 * @desc async function or promise
 * @since 4.0.0-beta.2
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} x isAsyncish
 *
 * @category Lang
 * @func
 * @name isAsyncish
 * @extends isAsyncish
 * @extends isPromise
 * @variation isAsyncish OR isPromise
 *
 * @example
 *
 *  isAsyncish(async function() {})   //=> true
 *  isAsyncish(new Promise(r => r())) //=> true
 *
 *  isAsyncish({})                    //=> false
 *  isAsyncish(function() {})         //=> false
 *
 */
module.exports = or(isAsync, isPromise)
