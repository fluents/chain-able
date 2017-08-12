const stringPrimitive = require('../is/stringPrimitive')
const isFunction = require('../is/function')
const isFalsy = require('../is/falsy')
const isNil = require('../is/nullOrUndefined')
const hasIn = require('../is/hasIn')
const toRegExp = require('../cast/toRegExp')
const always = require('../fp/always')

const testableFactory = matcher => x => matcher.test(x)

/**
 * @desc like matcher, but .isMatch
 * @since 3.0.0
 * @version 5.0.0 <- big change, changed to toTestable, and split `test.js`
 * @memberOf cast
 * @memberOf matcher
 *
 * @param {Matchable} matchable any matchable
 * @return {boolean} is a match, passes the test
 *
 * @NOTE as else-if for easier ternary uglification
 *
 * @ param {any} [arg1=undefined] arg to match with
 * @ param {any} [arg2=undefined] optional second arg to pass into tester
 *
 * @example
 *
 *   matcher('kinga')('kinga')
 *   //=> true
 *   matcher('k*nga')('kinga')
 *   //=> true
 *   matcher('kinga')('nope')
 *   //=> false
 *
 *   matcher(new RegExp(/kinga/))('kinga')
 *   //=> true
 *   matcher(new RegExp(/kinga/))('nope')
 *   //=> false
 *
 *   matcher(x => x === 'kinga')('kinga')
 *   //=> true
 *   matcher(x => x === 'kinga')('nope')
 *   //=> false
 *
 *   matcher({test: x => x === 'kinga'})('kinga')
 *   //=> true
 *   matcher({test: x => x === 'kinga'})('nope')
 *   //=> false
 *
 */
function _toTestable(matchable) {
  if (stringPrimitive(matchable)) {
    return toRegExp(matchable)
  }
  else if (isFalsy(matchable)) {
    return {test: always(false)}
  }
  else if (hasIn(matchable, 'test')) {
    return matchable
  }
  else if (isFunction(matchable)) {
    // could be arity, this keeps it still callable
    // const matchableFn = $0 => matchable($0)
    // matchableFn.test = matchableFn

    return {test: matchable}
  }
  else {
    return {test: always(false)}
  }
}

// better for always returning the same, the following is just compat
// function toTestable(matchable, arg) {
//   return testableFactory(_toTestable(matchable))
// }

function toTestable(matchable, arg, arg2) {
  const testable = _toTestable(matchable)
  if (!isNil(arg2)) return testable.test(arg, arg2)
  if (!isNil(arg)) return testable.test(arg)
  else return testableFactory(testable)
}

module.exports = toTestable
