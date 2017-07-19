const keys = require('../util/keysObjOrArray')
const isArray = require('../is/array')

/**
 * get first index in a list
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
  const xKeys = isArray(x) ? x : keys(x)
  const first = xKeys[0]
  return first
}

module.exports = firstIndex
