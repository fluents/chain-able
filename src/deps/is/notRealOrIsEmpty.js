const and = require('../conditional/and')
const not = require('../conditional/not')
const isReal = require('./real')
const isEmpty = require('./empty')

/**
 * @SIZE: another 10bytes for these fns
 * @name isNotRealOrIsEmpty
 *
 * @see is/isReal
 * @see is/isEmpty
 * @see conditional/and
 * @see conditional/not
 *
 * @type {Function}
 */
module.exports = and(not(isReal), isEmpty)
