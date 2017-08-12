const ArrayFrom = require('../../util/from')
const reduceArrayToObj = require('./reduceArrayToObj')

// @TODO cask index if needed
const keyValReducer = (acc, [key, value]) => {
  acc[key] = value
  return acc
}

/**
 * @desc Map -> Object
 * @since 4.0.0
 * @version 5.0.0 <- moved from /reduce to loop/reduce
 *
 * @param {Map} map map to reduce, calls entries, turns into an array, then object
 * @return {Object} reduced object
 *
 * @see ArrayFrom
 *
 * @example
 *
 *    var emptyMap = new Map()
 *    reduce(emptyMap)
 *    //=> {}
 *
 * @example
 *
 *    var map = new Map()
 *    map.set('eh', 1)
 *    reduce(map)
 *    //=> {eh: 1}
 *
 */
module.exports = map => {
  // only need to do this if we actually have values in our Map
  if (map.size === 0) {
    return {}
  }
  else {
    return reduceArrayToObj(
      ArrayFrom(map.entries()),
      keyValReducer
    )
  }
}
