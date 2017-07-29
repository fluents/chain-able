const invoke = require('../fp/invoke')
const objectToString = require('../native/objectToString')

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @memberOf is
 * @since 3.0.0
 * @alias getTag
 * @alias toStringTag
 * @alias toS
 *
 * @param {*} obj The value to `Object.prototype.toString.call(obj)`.
 * @return {string} Returns the `toStringTag`.
 *
 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
 * @see https://github.com/jonschlinkert/kind-of
 * @see https://github.com/substack/js-traverse/blob/master/index.js#L285
 * @see http://luxiyalu.com/object-prototype-tostring-call/
 *
 * @TODO obj[Symbol.toStringTag]
 * @TODO run deopt check on this invoking see how many invocations... are needed to inline
 *
 * @example
 *
 *    toS({})
 *    //=> '[object Object]'
 *
 *    toS(function() {})
 *    //=> '[Object Function]'
 *
 *    getTag([])
 *    //=> '[object Array]'
 *
 */
// module.exports = obj => objectToString.call(obj)
module.exports = invoke(objectToString, 'call')
