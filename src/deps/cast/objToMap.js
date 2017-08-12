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
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Converting_an_Object_to_a_Map mozilla-obj-to-map}
 * @see {@link mozilla-obj-to-map}
 *
 * @example
 *
 *    const obj = {eh: 0}
 *    const map = objToMap(obj)
 *
 *    map.has('eh')
 *    //=> true
 *
 *    map.get('eh')
 *    //=> 0
 *
 *    map.size
 *    //=> 1
 *
 */
const objToMap = obj => {
  const map = newMap()

  // eslint-disable-next-line
  for (let prop in obj) hasOwnProperty(obj, prop) && map.set(prop, obj[prop]);

  return map
}

/**
 * @TODO
 * const map = pipe(entries, newMap)
 * const map = newMap(Object.entries(obj))
 */

module.exports = objToMap
