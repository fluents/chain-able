/**
 * @desc prop is in Object(obj)
 * @since 5.0.0
 * @memberOf is
 *
 * @func
 * @type {Function}
 * @name isIn
 *
 * @param  {Object} obj object to check property of
 * @param  {Primitive} prop property in obj
 * @return {boolean} property
 *
 * @example
 *
 *  isIn({eh: true}, 'eh') //=> true
 *  isIn({eh: true}, 'oh') //=> false
 *
 */
module.exports = (obj, prop) => prop in Object(obj)
