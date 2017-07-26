const curry = require('../fp/curry')
const isString = require('../is/string')

/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 *
 * @memberOf fp
 *
 * @since 5.0.0-beta.1
 * @fork 4.11.0
 * @category Array
 * @param {Array|Object|String} array The array|obj|string to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 *
 * @name nth
 * @alias at
 * @alias atIndex
 * @alias atPosition
 *
 * {@link http://documentcloud.github.io/underscore-contrib/#nth underscore-contrib-nth}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/baseAt.js lodash-base-at}
 * {@link https://github.com/lodash/lodash/blob/master/at.js lodash-at}
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/nth.js ramda-nth}
 *
 * @see {@link ramda-nth}
 * @see {@link lodash-base-at}
 * @see {@link lodash-at}
 * @see {@link underscore-contrib-nth}
 *
 * @example
 *
 *   const array = ['a', 'b', 'c', 'd']
 *
 *   nth(array, 1)
 *   // => 'b'
 *
 *   nth(array, -2)
 *   // => 'c'
 *
 */
function nth(list, offset) {
  // isNill(array) return

  // @TODO from 0
  const index = offset < 0 ? list.length + offset : offset
  // return list[index]
  return isString(list) ? list.charAt(index) : list[index]
}

module.exports = curry(2, nth)

/**
 * @ignore
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Array|Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
// const isIndex = require('./isValidIndex')
// const isNill = require('../is/nill')
// function baseAt(object, paths) {
//   let index = -1
//   const length = paths.length
//   const result = new Array(length)
//   const skip = object == null
//
//   while (++index < length) {
//     result[index] = skip ? undefined : get(object, paths[index])
//   }
//   return result
// }
