const EMPTY_STRING = require('../native/EMPTY_STRING')
const mapArray = require('../loop/map/mapArray')
const symbolToString = require('../symbols/toString')
const isSymbol = require('../is/symbol')
const isNill = require('../is/nullOrUndefined')
const isArray = require('../is/array')
const isString = require('../is/stringPrimitive')
const castToKey = require('./toKey')

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 * @memberOf cast
 * @since 5.0.0-beta.6
 *
 * @param {*} value The value to convert.
 * @return {string} Returns the converted string.
 *
 * @fork 4.0.0
 * @category Lang
 *
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
 * @see https://github.com/svaarala/duktape/issues/204
 * @see https://github.com/substack/json-stable-stringify
 * @see https://github.com/nickyout/fast-stable-stringify
 * @see https://hacks.mozilla.org/2012/12/performance-with-javascript-string-objects/
 *
 * @example
 *
 *   toString(null)
 *   //=> ''
 *
 *   toString(-0)
 *   //=> '-0'
 *
 *   toString([1, 2, 3])
 *   //=> '1,2,3'
 *
 */
function castToString(value) {
  if (isNill(value)) {
    return EMPTY_STRING
  }
  // Exit early for strings to avoid a performance hit in some environments.
  else if (isString(value)) {
    return value
  }
  else if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${mapArray(value, other =>
      (isNill(other) ? other : castToString(other)))}`
  }
  else if (isSymbol(value)) {
    return symbolToString.call(value)
  }
  // e.g. isNumber
  else {
    return castToKey(value)
  }
}

module.exports = castToString
