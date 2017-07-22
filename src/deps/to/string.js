// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring

// import map from './map.js'
// import isSymbol from './isSymbol.js'
//
// /** Used as references for various `Number` constants. */
// const INFINITY = 1 / 0
//
// /** Used to convert symbols to primitives and strings. */
// const symbolProto = Symbol ? Symbol.prototype : undefined
// const symbolToString = symbolProto ? symbolProto.toString : undefined
//
// /**
//  * Converts `value` to a string. An empty string is returned for `null`
//  * and `undefined` values. The sign of `-0` is preserved.
//  *
//  * @since 4.0.0
//  * @category Lang
//  * @param {*} value The value to convert.
//  * @returns {string} Returns the converted string.
//  * @example
//  *
//  * toString(null)
//  * // => ''
//  *
//  * toString(-0)
//  * // => '-0'
//  *
//  * toString([1, 2, 3])
//  * // => '1,2,3'
//  */
// function toString(value) {
//   if (value == null) {
//     return ''
//   }
//   // Exit early for strings to avoid a performance hit in some environments.
//   if (typeof value === 'string') {
//     return value
//   }
//   if (Array.isArray(value)) {
//     // Recursively convert values (susceptible to call stack limits).
//     return `${map(value, (other) => (other == null ? other : toString(other)))}`
//   }
//   if (isSymbol(value)) {
//     return symbolToString ? symbolToString.call(value) : ''
//   }
//   const result = `${value}`
//   return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
// }
//
// export default toString
