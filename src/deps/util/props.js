const ObjectKeys = require('./keys')
const getPrototypeOf = require('./getPrototypeOf')

const getOwnPropertyNames = Object.getOwnPropertyNames
const getOwnPropertySymbols = Object.getOwnPropertySymbols

/**
 * @desc properties, property symbols, object keys
 *       ^ all again for prototype
 *
 * @param  {Object} obj
 * @return {[type]}
 */
function allProperties(obj) {
  const proto = getPrototypeOf(obj)
  return [].concat(
    getOwnPropertyNames(obj),
    getOwnPropertySymbols(obj),
    ObjectKeys(obj),
    proto ? allProperties(proto) : []
  )
}

module.exports = allProperties
