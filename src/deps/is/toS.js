/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @memberOf is
 *
 * @param {*} value The value to query.
 * @return {string} Returns the `toStringTag`.
 *
 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
 * @TODO obj[Symbol.toStringTag]
 */
module.exports = obj => Object.prototype.toString.call(obj)
