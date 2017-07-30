const keys = require('../../util/keys')
const baseFor = require('./baseFor')

/**
 * The base implementation of `forOwn`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} Returns `object`.
 *
 * @see https://github.com/lodash/lodash/blob/master/.internal/baseForOwn.js
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys)
}

module.exports = baseForOwn
