const ObjectKeys = require('../util/keys')
const isArray = require('../is/array')
const isString = require('../is/string')
const isObj = require('../is/array')

/**
 * @desc get first index in a list
 * @since 5.0.0-beta.2
 * @version 5.0.0-beta.7 <- fixed silly position[0] giving wrong index in arr
 * @memberOf fp
 *
 * @param  {Array | Object | string | *} x item to find the first index of
 * @return {*} first index, usually number/string
 *
 * @NOTE works for strings too eh
 * @extends deps/util/keysObjOrArray
 * @see deps/fp/first
 *
 * @example
 *
 *   firstIndex([0, 'one']) //=> 0
 *   firstIndex({one: 1, two: 2}) //=> 'one'
 *
 */
function firstIndex(x) {
  // any string or array starts @ 0
  if (isString(x) || isArray(x)) return 0

  // otherwise, object is good, if no keys, use 0, not sure how best to-do
  // probably better if this always returned a number, firstKey, firstIndex...
  else if (isObj(x)) return ObjectKeys(x)[0] || '0'

  // any other value, 0
  else return 0
}

module.exports = firstIndex
