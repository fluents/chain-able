const newSet = require('../construct/set')

/**
 * Object or Array into a Set
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name arrayToSet
 * @alias arrToSet
 *
 * @param  {Array} array cast to Set
 * @return {Set} Set(x)
 *
 */
const arrayToSet = array => {
  const aSet = newSet()
  for (let key = 0; key < array.length; key++) aSet(array[key])
  return aSet
}

module.exports = arrayToSet
