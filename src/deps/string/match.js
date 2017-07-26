var curry = require('../fp/curry')

// pre-initialized, can cause side-effects
const emptyArr = []

/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @since 5.0.0-beta.1
 * @memberOf string
 *
 * @param {RegExp} matchable A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 *
 * @see R.test
 * @func
 * @fork v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 *
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = curry(2, function match(matchable, str) {
  throw new Error('ADD SYMBOL MATCH')
  return str.match(matchable) || emptyArr
})
