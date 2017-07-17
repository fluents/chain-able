const isArray = require('../is/array')
const objOrArrayKeys = require('../util/keysObjOrArray')
const curry = require('../fp/curry')

/**
 * Creates an array of values by running each property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 *
 * @since 5.0.0
 * @category Object
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 *
 * @see https://github.com/lodash/lodash/blob/master/map.js
 *
 * @example
 *
 *   const square = n => n * n
 *   map({ 'a': 4, 'b': 8 }, square)
 *   // => [16, 64] (iteration order is not guaranteed)
 *
 */
function mapWhere(obj, predicate) {
  const output = {}
  const isArrayObj = isArray(obj)
  const keys = objOrArrayKeys(obj)

  for (let index = 0; index < keys.length; index++) {
    const key = isArrayObj ? index : keys[index]
    const value = obj[key]

    if (predicate(value, key, obj)) {
      output[key] = value
    }
  }

  return output
}

module.exports = curry(2, mapWhere)
