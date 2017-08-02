// const curry = require('../fp/curry')

/**
 * @desc typeof x === type
 * @since 5.0.0-beta.6
 * @name tagEq
 * @alias isTagEq
 * @alias tagEquals
 * @alias isA
 *
 * @curried 2
 *
 * @param  {string} type to match
 * @param  {string} x object to match `typeof x === type`
 * @return {boolean}
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/common.js#L66 sugar-tags}
 * {@link https://github.com/jasmine/jasmine.github.io/blob/master/lib/jasmine-1.3.1/jasmine.js#L171 jasmine-isA}
 * {@link https://github.com/gcanti/tcomb/blob/master/lib/isType.js tcomb-istype}
 * {@link https://github.com/yesvods/sanife/blob/master/src/type.js#L3 sanife-type}
 * @see {@link sanife-type}
 * @see {@link tcomb-istype}
 * @see {@link jasmine-isA}
 * @see {@link sugar-tags}
 *
 * @example
 *    isType('string')('eh') //=> true
 *
 */
const symbolToString = require('../symbols/toString')
const symbolToStringTag = require('../symbols/toStringTag')
const toStringTag = require('./toS')
const hasIn = require('./hasIn')

// const hasOwnProperty = require('../util/hasOwnProperty')
// if (value === null || value === undefined) {
//   return value === undefined ? '[object Undefined]' : '[object Null]'
// }

function getForSymbol(symbolToGet, value) {
  // typeof value[symbolToString] === 'function' ? value[symbolToString]() : value[symbolToString]
  let atSymbol = value[symbolToString]

  // @NOTE not sure if we really need this
  if (typeof atSymbol === 'function') {
    atSymbol = atSymbol()
  }
  if (typeof atSymbol === 'string') {
    return atSymbol
  }

  return undefined
}

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
  else if (hasIn(symbolToStringTag, value)) {
    let atSymbol = getForSymbol(symbolToStringTag, value)
    if (atSymbol !== undefined) type = atSymbol
  }

  // @NOTE not sure if we would really need to call a toString symbol
  //       ...when there is toStringTag?
  // else if (hasIn(symbolToString, value)) {}

  if (type === null || typeof type !== 'string') {
    type = toStringTag(value)
  }

  return type === value
}

// module.exports = curry(2, tagEquals)

// const xIsType = flip2(isType)
