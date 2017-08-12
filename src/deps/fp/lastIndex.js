const ObjectKeys = require('../util/keys')
const lengthMinusOne = require('../util/lengthMinusOne')
const isArray = require('../is/array')
const isObj = require('../is/objNotNull')
const isString = require('../is/stringPrimitive')

/**
 * @desc get last index in a list
 * @since 5.0.0-beta.2
 * @memberOf fp
 *
 * @name lastIndex
 * @alias findLastIndex
 *
 * @param  {Array | Object | string | *} x item to find the last index of
 * @return {number|string|*} last index, usually number/string
 *
 * @tests fp/last
 *
 * @TODO could have support for map...
 * @NOTE works for strings too eh
 * @extends deps/util/keysObjOrArray
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L667 underscore-last-index}
 * {@link https://github.com/lodash/lodash/tree/npm-packages/lodash.findlastindex lodash-find-last-index}
 * {@link https://github.com/ramda/ramda/tree/v0.24.1/src/findLastIndex.js ramda-find-last-index}
 * @see {@link ramda-find-last-index}
 * @see {@link lodash-find-last-index}
 * @see {@link underscore-last-index}
 * @see deps/fp/last
 *
 * @example
 *
 *   lastIndex([0, 'one'])       //=> 1
 *   lastIndex({one: 1, two: 2}) //=> 'two'
 *
 */
function lastIndex(x) {
  if (isString(x) || isArray(x)) return lengthMinusOne(x)
  else if (isObj(x)) return ObjectKeys(x).pop()
  else return -1

  // @TODO if (isString(x)) return x.lastIndexOf()
  // else if (isObj(x)) return toNumber(lengthMinusOne(keys(x)))
  // else if (isObj(x)) return lastIndex(ObjectKeys(x))
  // const xKeys = isArray(x) ? x : keys(x)
  // return xKeys[lengthMinusOne(xKeys)]
  // const last = xKeys[xKeys.length - 1]
  // return last
}

module.exports = lastIndex
