const esc = require('./escape-string-regex')
const isString = require('./is/string')
const isFunction = require('./is/function')

/**
 * @since  3.0.0
 * @NOTE   as else-if for easier ternary uglification
 * @param  {Matchable} matchable
 * @param  {any} arg1
 * @param  {any} arg2
 * @return {boolean}
 */
module.exports = (matchable, arg1, arg2) => {
  if (isString(matchable)) return !!new RegExp(esc(matchable)).test(arg1)
  else if (isFunction(matchable) && !matchable.test) return !!matchable(arg1)
  else return !!matchable.test(arg1, arg2)
}
