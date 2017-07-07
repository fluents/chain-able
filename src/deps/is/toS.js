/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @memberOf is
 * @since 3.0.0
 *
 * @param {*} obj The value to `Object.prototype.toString.call(obj)`.
 * @return {string} Returns the `toStringTag`.
 *
 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
 * @see https://github.com/jonschlinkert/kind-of
 * @see https://github.com/substack/js-traverse/blob/master/index.js#L285
 *
 * @TODO obj[Symbol.toStringTag]
 *
 * @example
 *
 *    toS({})
 *    //=> '[Object object]'
 *
 *    toS(function() {})
 *    //=> '[Object function]'
 *
 */
module.exports = obj => Object.prototype.toString.call(obj)
