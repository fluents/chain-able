const isArray = require('../is/array')
const objOrArrayKeys = require('../util/keysObjOrArray')
const curry = require('../fp/curry')

/**
 * Creates an array of values by running each property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 *
 * @memberOf fp
 * @since 5.0.0
 * @category Object
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @return {Array} Returns the new mapped array.
 *
 *
 * {@link https://github.com/lodash/lodash/blob/master/mapObject.js lodash-map-obj}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1021 underscore-map-obj}
 * {@link https://github.com/lodash/lodash/blob/master/map.js lodash-map}
 * @see {@link lodash-map}
 * @see {@link underscore-map}
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
