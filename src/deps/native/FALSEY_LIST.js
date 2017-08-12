const freeze = require('../util/freeze')

/**
 * @desc used to provide falsey values to methods.
 * @frozen
 * @name FALSEY_LIST
 * @type {Array}
 */
// eslint-disable-next-line
var falsey = freeze([, null, undefined, false, 0, NaN, ''])
