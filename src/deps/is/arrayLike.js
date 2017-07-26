const lengthMinusOne = require('../util/lengthMinusOne')
const length = require('../util/length')
const isArray = require('./array')
const isString = require('./string')
const isPureObj = require('./objPure')
const isReal = require('./real')
// const isElement = require('./element')

/**
 * @desc Tests whether or not an object is similar to an array.
 * @name isArrayLike
 * @memberOf is
 * @since 5.0.0-beta.5
 * @alias isArrayIsh
 *
 * @param {Array | Object | *} arg object to test
 * @return {boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 *
 * @func
 * @type {Function}
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_isArrayLike.js ramda-is-array-like}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L165 underscore-is-array-like}
 * {@link https://github.com/lodash/lodash/blob/master/isArrayLike.js lodash-is-array-like}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L210 mobx-is-array-like}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js immutables-is-array-like}
 * @see {@link immutables-is-array-like}
 * @see {@link mobx-is-array-like}
 * @see {@link lodash-is-array-like}
 * @see {@link underscore-is-array-like}
 * @see {@link ramda-is-array-like}
 *
 * @category Type
 * @category List
 * @sig * -> Boolean
 *
 * @example
 *
 *      isArrayLike([]); //=> true
 *      isArrayLike(true); //=> false
 *      isArrayLike({}); //=> false
 *      isArrayLike({length: 10}); //=> false
 *      isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *
 */
module.exports = function isArrayLike(x) {
  if (!isReal(x)) {
    return false
  }
  else if (isArray(x)) {
    return true
  }
  else if (!isPureObj(x)) {
    return false
  }
  else if (isString(x)) {
    return false
  }
  // ignoring because it's pretty big
  // else if (isElement(x)) {
  //   return !!x.length
  // }
  else if (length(x) === 0) {
    return true
  }
  // has [0] & [1]
  else if (length(x) > 0) {
    return hasOwnProperty(x, 0) && hasOwnProperty(x, lengthMinusOne(x))
  }
  else {
    return false
  }
}

// from underscore
// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
// var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
// var getLength = shallowProperty('length')
// var isArrayLike = function(collection) {
//   var length = getLength(collection)
//   return isNumber(length) && length >= 0 && length <= MAX_ARRAY_INDEX
// }
//
