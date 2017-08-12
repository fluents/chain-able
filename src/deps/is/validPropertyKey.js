const matchDeepProp = require('../regexp/matchDeepProp')
const matchPlainProp = require('../regexp/matchPlainProp')
const isSymbol = require('./symbol')
const isPrimitive = require('./primitive')
const isArray = require('./array')
const hasIn = require('./hasIn')

/**
 * @desc Checks if `value` is a valid PROPERTY/KEY
 * @since 5.0.0-beta.7
 * @memberOf is
 *
 * @param {*} value The value to check.
 * @param {Object} [obj] The object to query keys on.
 * @return {boolean} Returns `true` if `value` is a property name, else `false`.
 *
 * @name isValidPropertyKey
 * @alias isProp
 * @alias isValidProp
 * @alias isKey
 * @alias isValidKey
 * @alias isValidPropKey
 *
 * {@link https://tc39.github.io/ecma262/#sec-ispropertykey emca-ispropertykey}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/isKey.js lodash-iskey}
 * @see {@link emca-ispropertykey}
 * @see {@link lodash-iskey}
 *
 * @example
 *
 *    isValidPropertyKey(100)           //=> true
 *    isValidPropertyKey('100')         //=> true
 *    isValidPropertyKey('100.1')       //=> true
 *    isValidPropertyKey('ehoh')        //=> true
 *    isValidPropertyKey(Symbol('eh'))  //=> true
 *    isValidPropertyKey(null)          //=> true
 *
 *    // try in browser
 *    // var obj = {}
 *    // obj[new Array(10)] = []
 *    isValidPropertyKey([])            //=> false
 *    isValidPropertyKey('deep.prop')   //=> false
 *
 */
module.exports = function isValidPropertyKey(x, obj) {
  if (isPrimitive(x) || isSymbol(x)) {
    return true
  }
  else if (isArray(x)) {
    return false
  }
  else {
    return matchPlainProp.test(x) || !matchDeepProp.test(x) || hasIn(obj, x)
  }
}
