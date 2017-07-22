const curry = require('./curry')

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 *
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 *
 * @types fp
 * @tests fp/prop
 * 
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *
 */
module.exports = curry(2, (p, obj) => obj[p])
