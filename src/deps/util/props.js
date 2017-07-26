const ObjectKeys = require('./keys')
const getPrototypeOf = require('./getPrototypeOf')

const getOwnPropertyNames = Object.getOwnPropertyNames
const getOwnPropertySymbols = Object.getOwnPropertySymbols

/**
 * @desc properties, property symbols, object keys
 *       ^ all again for prototype
 * @memberOf util
 * @since 3.0.0
 * @version 5.0.0-beta.4 only used in gc (as of 5.0.0-beta.4)
 *
 * @param  {Object} obj object to get properties & symbols from
 * @return {Array<string>} properties
 *
 * @see deps/gc
 * @see deps/utils/nonEnumerableTypes
 * @see http://2ality.com/2011/07/js-properties.html
 * @TODO https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
 * `const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors`
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
  return getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj))

  // const result = []
  // for (const prop in obj) result.push(prop)
  // return result

  // flatten(getOwnPropertyNames, getOwnPropertySymbols)
  // const proto = getPrototypeOf(obj)
  // return [].concat(
  //   getOwnPropertyNames(obj),
  //   getOwnPropertySymbols(obj)
  //   // ObjectKeys(obj),
  //   // proto ? allProperties(proto) : []
  // )
}

module.exports = allProperties
