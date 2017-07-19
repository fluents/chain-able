const ObjectKeys = require('./keys')
const getPrototypeOf = require('./getPrototypeOf')

const getOwnPropertyNames = Object.getOwnPropertyNames
const getOwnPropertySymbols = Object.getOwnPropertySymbols

// @TODO https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
// const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors

/**
 * @desc properties, property symbols, object keys
 *       ^ all again for prototype
 *
 * @param  {Object} obj object to get properties & symbols from
 * @return {Array<string>} properties
 *
 * @example
 *    var obj = {key: true}
 *    allProperties(obj)
 *    //=> ['key']
 *
 * @example
 *    class One {
 *      method() {}
 *    }
 *    class Two extends One {
 *      eh() {}
 *    }
 *    allProperties(new Two())
 *    //=> ['eh', 'method']
 *
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
