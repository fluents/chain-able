const curry = require('../fp/curry')

/**
 * @desc typeof x === type
 * @since 5.0.0-beta.6
 * @name isType
 * @alias typeEq
 *
 * @curried 2
 *
 * @param  {string} type to match
 * @param  {string} x object to match `typeof x === type`
 * @return {boolean}
 *
 * {@link https://github.com/yesvods/sanife/blob/master/src/type.js#L3 sanife-type}
 * @see {@link sanife-type}
 *
 * @example
 *    isType('string')('eh') //=> true
 *
 */
function isType(type, x) {
  return typeof x === type
}

module.exports = curry(2, isType)

// const xIsType = flip2(isType)
