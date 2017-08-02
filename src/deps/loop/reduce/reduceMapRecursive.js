const hasIn = require('../../is/in')
const ignored = require('../../meta/ignored')
const ObjectKeys = require('../../util/keys')
const ObjectAssign = require('../../util/assign')

/**
 * @desc recursively reduce maps and objects that include reducable data
 * @since 4.0.0
 * @version 5.0.0 <- moved from /reduce to loop/reduce
 *
 * @param {Object | any} reduced merged object and reduced
 * @return {Function} Function(values: Object)
 *
 * @sig reduced => object => isMap(object) -> reduced; merge(object, reduced)
 *
 * @see https://www.airpair.com/javascript/javascript-array-reduce
 * @see ChainedMap
 * @NOTE could curry, but this is super hot function
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
 *   //=> {
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

  // const filter = (value, key) =>
  //   !ignored(key) && hasIn(value, 'entries')
  // const transform = (value, key) =>
  //   ObjectAssign(reduced, {[key]: value.entries(true) || {}})
  // mapFilterWhere(obj, filter, transform)

  for (let k = 0; k < keys.length; k++) {
    const key = keys[k]

    if (ignored(key)) {
      continue
    }

    const value = obj[key]

    if (hasIn(value, 'entries')) {
      ObjectAssign(reduced, {[key]: value.entries(true) || {}})
    }
  }

  return reduced
}
