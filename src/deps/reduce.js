const ArrayFrom = require('./util/from')

/**
 * @since 4.0.0
 * @desc Map -> Object
 * @param  {Map} map
 * @return {Object}
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
