// const curry = require('../fp/curry')

/**
 * @desc typeof x === type
 * @since 5.0.0-beta.6
 * @name tagEq
 * @alias isTagEq
 * @alias tagEquals
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
const symbolToString = require('../symbols/toString')
const toStringTag = require('./toS')
const hasIn = require('./hasIn')

// const hasOwnProperty = require('../util/hasOwnProperty')
// if (value === null || value === undefined) {
//   return value === undefined ? '[object Undefined]' : '[object Null]'
// }

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @curried 2
 *
 * @param {*} x The value to query.
 * @param {*} value getTag(x) === value
 * @return {string} Returns the `toStringTag`.
 */
module.exports = function tagEquals(x, value) {
  let type

  if (value === undefined) {
    type = '[object Undefined]'
  }
  else if (value === null) {
    type = '[object Null]'
  }
  else if (hasIn(symbolToString, value)) {
    // typeof value[symbolToString] === 'function' ? value[symbolToString]() : value[symbolToString]
    let atSymbol = value[symbolToString]

    // @NOTE not sure if we really need this
    if (typeof atSymbol === 'function') {
      atSymbol = atSymbol()
    }
    if (typeof atSymbol === 'string') {
      type = value
    }
  }

  if (type === null || typeof type !== 'string') {
    type = toStringTag(value)
  }

  return type === value
}

// module.exports = curry(2, tagEquals)

// const xIsType = flip2(isType)
