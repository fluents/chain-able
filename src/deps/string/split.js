const ENV_PERF = require('../env/preferPerf')
const FROZEN_ARRAY = require('../native/EMPTY_ARRAY')
const MAX_ARRAY_LENGTH = require('../native/MAX_ARRAY_LENGTH')
const stringToArray = require('../cast/stringToArray')
const castSlice = require('../fp/slice')
const isString = require('../is/stringPrimitive')
const isRegExp = require('../is/regexp')
const isUndefined = require('../is/undefined')
const isNill = require('../is/nullOrUndefined')
const hasUnicode = require('./hasUnicode')

/**
 * Splits `string` by `separator`.
 * @symb 🤸
 *
 * @NOTE This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @curried 2
 * @since 4.0.0
 * @category String
 *
 *
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limitArg] The length to truncate results to.
 * @return {Array} Returns the string segments.
 *
 * @see http://speakingjs.com/es5/ch24.html
 *
 * @example
 *
 *   split('a-b-c', '-', 2)
 *   //=> ['a', 'b']
 *
 */
function split(string, separator, limitArg) {
  const limit = isUndefined(limitArg) ? MAX_ARRAY_LENGTH : limitArg >>> 0

  // @TODO EMPTY_ARRAY?
  if (!limit) {
    return ENV_PERF ? FROZEN_ARRAY : []
  }

  // split the unicode string into an array, then slice it
  if (string &&
    // isString, or nill && !regexp
    (
      isString(separator) ||
      (isNill(separator) && !isRegExp(separator))
    )
  ) {
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit)
    }
  }

  // normal...
  return string.split(separator, limit)
}

module.exports = split
