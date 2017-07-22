const keys = require('../util/keysObjOrArray')
const lengthMinusOne = require('../util/lengthMinusOne')
const isArray = require('../is/array')

/**
 * get last index in a list
 * @memberOf fp
 *
 * @param  {Array | Object | string | *} x item to find the last index of
 * @return {*} last index, usually number/string
 *
 * @NOTE works for strings too eh
 * @extends deps/util/keysObjOrArray
 * @see deps/fp/last
 *
 * @example
 *
 *   lastIndex([0, 'one']) //=> 1
 *   lastIndex({one: 1, two: 2}) //=> 'two'
 *
 */
function lastIndex(x) {
  const xKeys = isArray(x) ? x : keys(x)
  return xKeys[lengthMinusOne(xKeys)]
  // const last = xKeys[xKeys.length - 1]
  // return last
}

module.exports = lastIndex
