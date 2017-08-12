/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @icon ☝
 * @alias always
 * @alias constant
 * @alias const
 *
 * @tests fp/always
 *
 * @func
 * @memberOf fp
 * @since v5.0.0
 * @category Function
 * @sig a -> (* -> a)
 *
 * @param {*} value The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1399 underscore-src-constant}
 * {@link http://underscorejs.org/#constant underscore-constant}
 * {@link https://github.com/lodash/lodash/issues/1010 lodash-constant}
 * {@link https://github.com/ramda/ramda/issues/1038 ramda-constant-docs-issue}
 * {@link https://github.com/ramda/ramda/blob/master/src/always.js ramda-always}
 * @see {@link ramda-constant-docs-issue}
 * @see {@link ramda-always}
 * @see {@link lodash-constant}
 * @see {@link underscore-constant}
 *
 * @types fp
 * @tests fp/always
 *
 * @example
 *
 *      var t = always('Tee')
 *      t() //=> 'Tee'
 *
 */
module.exports = function constant(value) {
  return function() {
    return value
  }
}
