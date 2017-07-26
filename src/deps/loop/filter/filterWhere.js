const isArray = require('../../is/array')
const objOrArrayKeys = require('../../util/keysObjOrArray')
const curry = require('../../fp/curry')

/**
 * filters an object or array
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 * @memberOf loop
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @return {Array} Returns the new mapped array.
 *
 * @name filterWhere
 * @since 5.0.0
 * @category Object
 *
 * {@link https://github.com/lodash/lodash/blob/master/mapObject.js lodash-map-obj}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1021 underscore-map-obj}
 * {@link https://github.com/lodash/lodash/blob/master/map.js lodash-map}
 * @see {@link lodash-map}
 * @see {@link underscore-map}
 *
 * @TODO add `key first` sig option
 *
 * @example
 *
 *   map([1, 2, 3, 'nope'], isNumber)
 *   //=> [1, 2, 3]
 *
 * @example
 *
 *   /// because `value` is first
 *   map({'1': 1, 'nope': 'nope'}, isNumber)
 *   //=> [1, 2, 3]
 *
 */
function filterWhere(obj, predicate) {
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

module.exports = curry(2, filterWhere)
