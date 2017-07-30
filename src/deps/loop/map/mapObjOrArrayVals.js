const isArray = require('../../is/array')
const objOrArrayKeys = require('../../util/keysObjOrArray')
const curry = require('../../fp/curry')

/**
 * Creates an array of values by running each property of `object`
 * or index of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, key, object).
 *
 * @alias mapAnyVals
 * @memberOf loop
 * @since 5.0.0
 * @category Object
 *
 * @param {Object|Array} obj The object or array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Object} [result = {}] initial value, accumulated, output
 * @return {Array|Object} Returns the new mapped array or object
 *
 * @example
 *
 *   const square = n => n * n
 *   map({ 'a': 4, 'b': 8 }, square)
 *   //=> [16, 64] (iteration order is not guaranteed)
 *
 */
function mapObjOrArrayVals(obj, iteratee, result = {}) {
  const isArrayObj = isArray(obj)
  const keys = objOrArrayKeys(obj)

  for (let index = 0; index < keys.length; index++) {
    const key = isArrayObj ? index : keys[index]
    const value = obj[key]

    result[key] = iteratee(value, key, obj)
  }

  return result
}

module.exports = curry(2, mapObjOrArrayVals)
