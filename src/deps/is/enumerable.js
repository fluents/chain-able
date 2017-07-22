const propertyIsEnumerable = require('../native/propertyIsEnumerable')
const curry = require('../fp/curry')

/**
 * @desc object at property is enumerable
 * @memberOf is
 * @since 3.0.0
 *
 * @param {Object | *} obj
 * @param {string | *} prop
 * @return {boolean} obj[prop] is enumerable
 *
 * @func
 * @name isEnumerable
 * @type {Function}
 *
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable mozilla-propertyisenumerable}
 * @see {@link mozilla-propertyisenumerable}
 *
 * @TODO use fp/call
 *
 * @example
 *
 *   const obj = {eh: true}
 *   isEnumerable(obj, 'eh')
 *   //=> true
 *
 *   const objPropEnumerable = isEnumerable(obj)
 *   objPropEnumerable('eh')
 *   //=> true
 *
 *   Object.defineProperty(obj, 'length', {
 *      enumerable: false,
 *      value: () => Object.keys(obj).length,
 *   })
 *   isEnumerable(obj, 'length')
 *   //=> false
 *
 */
module.exports = curry(2, (obj, prop) => propertyIsEnumerable.call(obj, prop))
