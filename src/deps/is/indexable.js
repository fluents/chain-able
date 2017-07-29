const or = require('../conditional/or')
const isStringPrimitive = require('./stringPrimitive')
const isObjNotNull = require('./objNotNull')

/**
 * @desc check whether a value can be indexed
 * @since 5.0.0-beta.6
 * @name isIndexable
 * @memberOf is
 *
 * @param {Object|string|*} x value to check
 * @return {boolean} !isNill x & x isString or & x isObj
 *
 * @example
 *
 *   isIndexable({})           //=> true
 *   isIndexable('eh')         //=> true
 *   isIndexable([])           //=> true
 *   isIndexable(null)         //=> false
 *   isIndexable(undefined)    //=> false
 *   isIndexable(-1)           //=> false
 *
 */
module.exports = or(isStringPrimitive, isObjNotNull)
