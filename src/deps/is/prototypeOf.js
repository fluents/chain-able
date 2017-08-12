const isNill = require('./nullOrUndefined')

const isPrototypeOf = Object.prototype.isPrototypeOf

/**
 * check if arg 1 is prototype of arg 2
 *
 * @TODO curry2
 * @memberOf is
 * @name isPrototypeOf
 * @since 3.0.0
 *
 * @param  {Object | *} haystack check needle against
 * @param  {Object | *} needle is prototype of haystack
 * @return {boolean} needle isPrototypeOf haystack
 *
 * {@link https://tc39.github.io/ecma262/#sec-object.prototype.isprototypeof emca-is-prototype-of}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf mozilla-obj-isprototypeof}
 * @see {@link mozilla-obj-isprototypeof}
 * @see {@link emca-is-prototype-of}
 *
 * @example
 *
 *    class Eh extends Function {}
 *    class Canada extends Eh {}
 *    isPrototypeOf(Eh, Function) //=> true
 *    isPrototypeOf(Canada, Function) //=> true
 *    isPrototypeOf(Eh, Date) //=> false
 *
 *    isPrototypeOf({}, Object) //=> true
 *    isPrototypeOf({}, Array) //=> false
 *
 */
module.exports = (haystack, needle) =>
  !isNill(haystack) && isPrototypeOf.call(haystack, needle)
