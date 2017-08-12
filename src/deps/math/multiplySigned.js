/**
 * @name multiplySigned
 * @alias imul
 *
 * @desc multiply signed integers
 * @see math/signed
 *
 * @see https://stackoverflow.com/questions/21052816/why-would-i-use-math-imul
 * @see https://github.com/facebook/immutable-js/blob/master/src/Math.js#L10
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
 */
module.exports = Math.imul

// @TODO polyfil
// typeof Math.imul === 'function' &&
//   Math.imul(0xffffffff, 2) === -2
//   ? Math.imul
//   :
//   /**
//    * @param {number} a
//    * @param {number} b
//    * @return {int}
//    *
//    */
//   function imul(a, b) {
//     a |= 0 // int
//     b |= 0 // int
//     const c = a & 0xffff
//     const d = b & 0xffff
//     // Shift by 0 fixes the sign on the high part.
//     // eslint-disable-next-line
//     return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0
//   }
