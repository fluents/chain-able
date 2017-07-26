const Chainable = require('../../Chainable')
const isMap = require('./map')

/**
 * @func isMapish
 *
 * @memberOf is
 * @since 3.0.0
 * @extends isMap
 * @alias isMapLike
 * @variation also checks `instanceof Chainable`
 *
 * @param  {*} x value to check
 * @return {boolean} isMapish
 *
 * @example
 *
 *    isMapish(new Map)
 *    //=> true
 *
 *    isMapish(new Chain)
 *    //=> true
 *
 *    isMapish({})
 *    //=> false
 *
 *    isMapish(1)
 *    //=> false
 *
 */
module.exports = x => isMap(x) || x instanceof Chainable
