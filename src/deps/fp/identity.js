/**
 * Returns whatever was passed in, thus named return
 *
 * @memberOf fp
 * @since 3.0.0
 * @version 5.0.0-beta.7 <- renamed identity for standards
 * @version 5.0.0-beta.6 <- moved out into a function
 * @version 2.0.0 <- was named `flipReturn`
 *
 * @name identity
 * @alias return
 * @alias inputOutput
 * @alias sameInSameOut
 * @alias io
 *
 * @param {*} value The value to return
 * @return {*} always `value`
 *
 * @tests fp/identity
 *
 * @NOTE lodash has fn in `tests` that does the same named identity, maybe in /fp too
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1395 underscore-identity}
 * {@link https://github.com/medikoo/es5-ext/blob/master/function/identity.js es5-ext-identity}
 * {@link https://github.com/ramda/ramda/blob/master/src/identity.js ramda-identity}
 * @see {@link underscore-identity}
 * @see {@link ramda-identity}
 * @see {@link es5-ext-identity}
 *
 * @func
 * @category Function
 * @sig a -> (* -> a)
 *
 * @types fp
 * @tests fp/return
 *
 * @example
 *
 *      var t = identity(1)
 *      t //=> 1
 *
 */
module.exports = function identity(value) {
  return value
}
