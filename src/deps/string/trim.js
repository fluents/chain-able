/**
 * Removes (strips) whitespace from both ends of the string.
 * @since 5.0.0-beta.5
 * @memberOf string
 * @symb ✂️
 *
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 *
 * @func
 * @fork v0.6.0
 * @category String
 * @sig String -> String
 *
 * {@link https://github.com/processing-js/processing-js/blob/master/src/P5Functions/commonFunctions.js#L18 processing-js-trim}
 * {@link https://github.com/madrobby/zepto/blob/master/src/zepto.js#L357 zepto-trim}
 * {@link https://github.com/ramda/ramda/blob/master/src/trim.js ramda-trim}
 * {@link https://github.com/lodash/lodash/blob/master/trim.js lodash-trim}
 * @see {@link processing-js-trim}
 * @see {@link lodash-trim}
 * @see {@link ramda-trim}
 * @see {@link zepto-trim}
 *
 * @example
 *
 *      trim('   xyz  ')
 *      //=> 'xyz'
 *
 *      map(trim, split(',', 'x, y, z'))
 *      //=> ['x', 'y', 'z']
 *
 */
module.exports = function trim(str /*, characters */) {
  return str.trim()
}

// polyfill
// (function() {
//   var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
//            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
//            '\u2029\uFEFF'
//   var zeroWidth = '\u200b'
//   var hasProtoTrim = (typeof String.prototype.trim === 'function')
//   if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
//     return _curry1(function trim(str) {
//       var beginRx = new RegExp('^[' + ws + '][' + ws + ']*')
//       var endRx = new RegExp('[' + ws + '][' + ws + ']*$')
//       return str.replace(beginRx, '').replace(endRx, '')
//     })
//   }
// })()
