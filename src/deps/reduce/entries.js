const isFunction = require('../is/function')
const ignored = require('../ignored')
const ObjectKeys = require('../util/keys')
const ObjectAssign = require('../util/assign')

/**
 * @desc recursively reduce maps and objects that include reducable data
 * @since 4.0.0
 *
 * @sig reduced => object => isMap(object) -> reduced; merge(object, reduced)
 *
 * @param {Object | any} reduced merged object and reduced
 * @return {Function} Function(values: Object)
 *
 * @see ChainedMap
 *
 * @example
 *
 *   const map = new Map()
 *   map.set('eh', true)
 *   const nested = new Map()
 *   nested.set('reduced', true)
 *
 *   const chain = {
 *     entries() {
 *       return {
 *         nested: reduce(nested),
 *         key: true,
 *       }
 *     },
 *   }
 *   const reduced = reduce(map)
 *   reduceEntries(reduced)({chain})
 *   // => {
 *     eh: true,
 *     chain: {
 *       nested: {
 *         reduced: true,
 *         key: true,
 *       },
 *     },
 *   }
 *
 * @example
 *
 *   const reducedIgnored = {
 *     canada: {
 *       store: chain,
 *     },
 *   }
 *   const ignored = reduceEntries(reduced)(reducedIgnored)
 *   //=> {
 *     eh: true,
 *     chain: {
 *       nested: {
 *         reduced: true,
 *       },
 *       key: true,
 *     },
 *   }
 *
 */
module.exports = reduced => obj => {
  const keys = ObjectKeys(obj)

  for (let k = 0; k < keys.length; k++) {
    const key = keys[k]

    if (ignored(key)) {
      continue
    }

    const val = obj[key]
    if (val && isFunction(val.entries)) {
      ObjectAssign(reduced, {[key]: val.entries(true) || {}})
    }
  }

  return reduced
}
