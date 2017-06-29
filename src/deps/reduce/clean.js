const isNotEmptyArray = require('../is/notEmptyArray')
const isReal = require('../is/real')
const isObjWithKeys = require('../is/objWithKeys')
const ObjectKeys = require('../util/keys')

/**
 * @desc goes through the maps,
 *       and the map values,
 *       reduces them to array
 *       then to an object using the reduced values
 *
 * @memberOf reduce
 * @since 4.0.0 <- moved as a dep function
 * @since 0.4.0
 *
 * @param {Object} obj object to clean, usually .entries()
 * @return {Object} reduced object, without `notReal` values
 *
 * @see reduce
 * @see isObjWithKeys
 * @see isNotEmptyArray
 * @see isReal
 *
 * @example
 *
 *   const map = new ChainedMap()
 *
 *   map
 *    .set('emptyArr', [])
 *    .set('arr', [1])
 *    .set('nill', null)
 *    .set('emptyObj', {})
 *    .set('obj', {keys: true})
 *
 *   clean(map.entries())
 *   //=> {arr: [1], obj: {keys: true}}
 *
 */
module.exports = function clean(obj) {
  return ObjectKeys(obj).reduce(function(acc, key) {
    const val = obj[key]

    if (isReal(val) && (isNotEmptyArray(val) || isObjWithKeys(val))) {
      acc[key] = val
    }

    return acc
  }, {})
}
