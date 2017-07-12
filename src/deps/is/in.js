/**
 * @func
 * @type {Function}
 * @typedef Function() {}
 */

/**
 * @param  {Object} obj object to check property of
 * @param  {Primitive} prop property in obj
 * @return {boolean} property
 */
module.exports = (obj, prop) => prop in Object(obj)
