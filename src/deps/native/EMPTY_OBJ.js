const freeze = require('../util/freeze')

/**
 * @desc frozen empty object
 * @name EMPTY_OBJ
 * @alias emptyObject
 * @alias emptyObj
 * @type {Object}
 */
const EMPTY_OBJ = {}
freeze(EMPTY_OBJ)
module.exports = EMPTY_OBJ
