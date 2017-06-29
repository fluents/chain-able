const ArrayFrom = require('../util/from')

/**
 * @desc Map -> Object
 * @since 4.0.0
 *
 * @param  {Map} map map to reduce, calls entries, turns into an array, then object
 * @return {Object} reduced object
 *
 * @see ArrayFrom
 *
 * @example
 *
 *    var emptyMap = new Map()
 *    reduce(emptyMap)
 *    // => {}
 *
 * @example
 *
 *    var map = new Map()
 *    map.set('eh', 1)
 *    reduce(map)
 *    // => {eh: 1}
 *
 */
module.exports = map => {
  let reduced = {}

  // only need to do this if we actually have values in our Map
  if (map.size !== 0) {
    reduced = ArrayFrom(map.entries()).reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {})
  }

  return reduced
}
