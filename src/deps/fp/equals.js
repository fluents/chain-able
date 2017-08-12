const eq = require('../traversers/eq')
const curry = require('./curry')

/**
 * @name equals
 * @curried 2
 * @memberOf fp
 * @since 5.0.0-beta.6
 * @see traversers/eq
 * @type {Function}
 */
module.exports = curry(2, eq)
