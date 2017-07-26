const newMap = require('../construct/map')
const hasOwnProperty = require('../util/hasOwnProperty')

/**
 * Object into a Map
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name objToMap
 * @alias objectToMap
 *
 * @param  {*} obj cast to Map
 * @return {Map} Map(x)
 *
 * Object.keys(obj).forEach(key => map.set(key, obj[key]))
 * @TODO use `forOwn`
 * @TODO can just use obj.hasOwnProperty again?
 */
const objToMap = obj => {
  const map = newMap()

  const objHasProp = hasOwnProperty(obj)
  for (let prop in obj) {
    if (objHasProp(prop)) map.set(prop, obj[prop])
  }

  return map
}

module.exports = objToMap
