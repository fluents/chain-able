const curry = require('../fp/curry')

/**
 * Determines whether a given string matches a given regular expression.
 * @memberOf matcher
 * @since 5.0.0-beta.5
 *
 * @curried 2
 * `const toTest = x => y => x.test(y)`
 *
 * @param {RegExp|Matchable} pattern call .test on this
 * @param {string} x value to test with pattern
 * @return {boolean} test result
 *
 * @func
 * @fork v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 *
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/test.js ramda-test}
 * @see {@link ramda-test}
 *
 * @example
 *
 *      test(/^x/, 'xyz') //=> true
 *      test(/^y/, 'xyz') //=> false
 *
 */
function test(pattern, x) {
  return pattern.test(x)
}

module.exports = curry(2, test)
