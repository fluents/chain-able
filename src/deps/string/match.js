const curry = require('../fp/curry')
// const hasOwnProperty = require('../is/nullOrUndefined')
const isIn = require('../is/in')
const ENV_PERF = require('../env/strict')
const FROZEN_ARRAY = require('../native/EMPTY_ARRAY')
// const SymbolMatch = require('../symbols/match')

// could use `EMPTY_ARRAY` but being frozen may mess the matches...
// pre-initialized, can cause side-effects
const emptyArr = ENV_PERF ? FROZEN_ARRAY : []

/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @since 5.0.0-beta.1
 * @memberOf string
 * @curried 2
 *
 * @param {RegExp} matchable A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 *
 * @see match/test
 * @func
 * @fork v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match mozilla-string-match}
 * @see {@link mozilla-string-match}
 *
 * @NOTE returned value from `match` is an ARRAY LIKE OBJECT
 *
 * @NOTE previously would throw
 *       match(/a/, null)
 *       //=> TypeError: null does not have a method named "match"
 *       now returns empty array if nill
 *
 *
 * @example
 *
 *     match(/([a-z]a)/g, 'bananas')
 *     //=> ['ba', 'na', 'na']
 *
 *     match(/a/, 'b')
 *     //=> []
 *
 * @example
 *
 *     var re = /foo/
 *     re[Symbol.match] = false
 *
 *     '/foo/'.startsWith(re)
 *     //=> true
 *
 *     '/baz/'.endsWith(re)
 *     //=> false
 *
 */
function match(matchable, str) {
  return isIn(str, 'match')
    ? str.match(matchable) || emptyArr
    : emptyArr
}

module.exports = curry(2, match)
