/* eslint no-confusing-arrow: "OFF" */
const isNil = require('../is/nullOrUndefined')
const curry = require('./curry')

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @version 3.0.0 <- checks isNill
 * @since v5.0.0
 * @memberOf fp
 *
 * @param {String} key The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj[key]`.
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/prop.js ramda-prop}
 * @see {@link ramda-prop}
 *
 * @TODO could toKey here
 *
 * @func
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 *
 * @types fp
 * @tests fp/prop
 *
 * @example
 *
 *      prop('x', {x: 100}); //=> 100
 *      prop('x', {}); //=> undefined
 *
 */
module.exports = curry(2, (key, obj) => isNil(obj) ? undefined : obj[key])
