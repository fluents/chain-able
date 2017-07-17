const isReal = require('../is/real')
const isObj = require('../is/obj')
const isArray = require('../is/array')
const isEmpty = require('../is/empty')
const ObjectKeys = require('../util/keys')
const curry = require('../fp/curry')
const mapWhere = require('../fp/mapWhere')
const prop = require('../fp/prop')
const not = require('../conditional/not')
const or = require('../conditional/or')
const reduceToObj = require('./toObj')

// const [isNotReal, isNotEmpty] = [isReal, isEmpty].map(not)
// const isNotEmptyOrNotReal = or(isNotReal, isNotEmpty)
const mapNotEmpty = mapWhere('_', x => isReal(x) && !isEmpty(x))

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
 * @TODO seems to be overkill with reducing mapping just copy & ignore or delete?
 *
 * @see reduce
 * @see isObjWithKeys
 * @see isNotEmptyArray
 * @see isReal
 * @see http://underscorejs.org/#reduce
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
  const mapped = mapNotEmpty(obj)
  const keys = ObjectKeys(mapped)
  const iterator = (reduced, key) => (reduced[key] = mapped[key])

  return reduceToObj(keys, iterator)
}
