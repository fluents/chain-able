const isNotEmptyArray = require('./is/notEmptyArray')
const isReal = require('./is/real')
const isObjWithKeys = require('./is/objWithKeys')
const ObjectKeys = require('./util/keys')

/**
 * @since 4.0.0 <- moved as a dep function
 * @since 0.4.0
 * @desc goes through the maps,
 *       and the map values,
 *       reduces them to array
 *       then to an object using the reduced values
 *
 * @param {Object} obj object to clean, usually .entries()
 * @return {Object}
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
