/* eslint eqeqeq: "OFF" */

const INFINITY = require('../native/INFINITY')

/**
 * @name isNegativeInfinity
 * @since 5.0.0-beta.6
 *
 * @param  {*} x == -INFINITY
 * @return {boolean}
 *
 * @example
 *
 *   Infinity / -1 == -INFINITY //= true -> '-0'
 *
 */
module.exports = x => 1 / x == -INFINITY
