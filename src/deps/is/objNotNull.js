const isObjTypeof = require('./objTypeof')
const isNullOrUndef = require('./nullOrUndefined')

/**
 * name says it all
 *
 * @param {*} x value
 * @return {boolean} isObjNotNull
 *
 * @since 3.0.0
 * @memberOf is
 * @func isObjNotNull
 * @alias isObjectLike
 * @alias isObjectNotNull
 *
 * {@link https://github.com/lodash/lodash/blob/master/isObjectLike.js lodash-is-object-like}
 * {@link https://github.com/sindresorhus/is-obj/blob/master/index.js is-obj}
 * @see is/obj
 * @see is/objWithKeys
 * @see is/objTypeof
 * @see is/null
 * @see {@link is-obj}
 * @see {@link lodash-is-object-like}
 *
 * @TODO !Array.isArray
 *
 * @extends isObjTypeof
 * @variation null will not count as an object
 *
 * @example
 *
 *  isObjNotNull(new Object())
 *  //=> true
 *  isObjNotNull({})
 *  //=> true
 *  isObjNotNull(Object.create(null))
 *  //=> true
 *  isObjNotNull(null)
 *  //=> false
 *
 *  isObjNotNull(new Set())
 *  //=> false
 *  isObjNotNull(function() {})
 *  //=> false
 *  isObjNotNull('')
 *  //=> false
 *  isObjNotNull(1)
 *  //=> false
 *
 */
module.exports = x => !isNullOrUndef(x) && isObjTypeof(x)
