const isFunction = require('../is/function')
const ignored = require('../ignored')
const ObjectKeys = require('../util/keys')
const ObjectAssign = require('../util/assign')

/**
 * @since 4.0.0
 * @see ChainedMap
 * @param {Object | any} reduced
 * @return {Function} Function(values: Object)
 */
module.exports = reduced => self => {
  const keys = ObjectKeys(self)

  for (let k = 0; k < keys.length; k++) {
    const key = keys[k]

    if (ignored(key)) {
      continue
    }

    const val = self[key]
    if (val && isFunction(val.entries)) {
      ObjectAssign(reduced, {[key]: val.entries(true) || {}})
    }
  }

  return reduced
}
