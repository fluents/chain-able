const isString = require('../is/string')
const isFunction = require('../is/function')
const esc = require('./escape-string-regex')

/**
 * @desc like matcher, but .isMatch
 * @since  3.0.0
 *
 * @param  {Matchable} matchable any matchable
 * @param  {any} [arg1=undefined] arg to match with
 * @param  {any} [arg2=undefined] optional second arg to pass into tester
 * @return {boolean} is a match, passes the test
 *
 * @NOTE   as else-if for easier ternary uglification
 *
 * @example
 *
 *   matcher('kinga', 'kinga')
 *   //=> true
 *   matcher('k*nga', 'kinga')
 *   //=> true
 *   matcher('kinga', 'nope')
 *   //=> false
 *
 *   matcher(new RegExp(/kinga/), 'kinga')
 *   //=> true
 *   matcher(new RegExp(/kinga/), 'nope')
 *   //=> false
 *
 *   matcher(x => x === 'kinga', 'kinga')
 *   //=> true
 *   matcher(x => x === 'kinga', 'nope')
 *   //=> false
 *
 *   matcher({test: x => x === 'kinga'}, 'kinga')
 *   //=> true
 *   matcher({test: x => x === 'kinga'}, 'nope')
 *   //=> false
 *
 */
module.exports = (matchable, arg1, arg2) => {
  if (isString(matchable)) return !!new RegExp(esc(matchable)).test(arg1)
  else if (isFunction(matchable) && !matchable.test) return !!matchable(arg1)
  else return !!matchable.test(arg1, arg2)
}
