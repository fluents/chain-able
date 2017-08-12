const freeze = require('../util/freeze')

/**
 * @desc Used to provide primitive values to methods.
 * @type {Array}
 * @frozen
 */
module.exports = freeze([null, undefined, false, true, 1, NaN, 'a'])
