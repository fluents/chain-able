const ObjectKeys = require('../../util/keys')

/**
 * Creates an array of values by running each property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 *
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Array} Returns the new mapped array.
 *
 * @func
 * @category Object
 *
 * {@link https://github.com/lodash/lodash/blob/master/map.js lodash-map}
 * @see {@link lodash-map}
 *
 * @example
 *
 *   const square = n => n * n
 *   map({ 'a': 4, 'b': 8 }, square)
 *   // => [16, 64] (iteration order is not guaranteed)
 *
 */
function mapObject(object, iteratee) {
  const props = ObjectKeys(object)
  const result = new Array(props.length)

  for (let index = 0; index < props.length; index++) {
    const key = props[index]
    const value = object[key]
    result[index] = iteratee(value, key, object)
  }

  return result
}

module.exports = mapObject
