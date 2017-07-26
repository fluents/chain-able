const stringPrimitive = require('../is/stringPrimitive')
const isFunction = require('../is/function')
const newRegExp = require('../construct/regexp')
const toBoolean = require('../cast/boolean')
const pipe = require('../fp/pipe')
const esc = require('./escape-string-regex')

// @TODO use in matcher
const constructEscRegExp = pipe(esc, newRegExp)

/**
 * @desc like matcher, but .isMatch
 * @since  3.0.0
 *
 * @param {Matchable} matchable any matchable
 * @param {any} [arg1=undefined] arg to match with
 * @param {any} [arg2=undefined] optional second arg to pass into tester
 * @return {boolean} is a match, passes the test
 *
 * @NOTE as else-if for easier ternary uglification
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
function toTest(matchable, arg1, arg2) {
  if (stringPrimitive(matchable)) return constructEscRegExp(matchable).test(arg1)
  else if (isFunction(matchable) && !matchable.test) return matchable(arg1)
  else return matchable.test(arg1, arg2)
}

module.exports = pipe(toTest, toBoolean)
