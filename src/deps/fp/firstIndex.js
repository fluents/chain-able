const keys = require('../util/keysObjOrArray')
const isArray = require('../is/array')

/**
 * get first index in a list
 * @memberOf fp
 * @since 5.0.0-beta.2
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
  // if (isNill(x)) return x
  // else if (isArray(x)) return x[0]
  // else return x[0]

  return (isArray(x) ? x : keys(x))[0]
  // const xKeys = isArray(x) ? x : keys(x)
  // const first = xKeys[0]
  // return first
}

module.exports = firstIndex
