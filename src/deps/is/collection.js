const or = require('../conditional/or')
const isMap = require('./map')
const isSet = require('./set')

/**
 * @name isCollection
 * @alias isMapOrSet
 * @type {Function}
 * @since 5.0.0-beta.9
 */
module.exports = or(isMap, isSet)
