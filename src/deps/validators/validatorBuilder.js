/**
 * @since 4.0.0 <- moved out of the store, into scoped
 * @since 1.0.0
 * @desc library of validators to use by name
 *       @modifies this.validators
 * @param  {Object} validators
 */

const ChainedMap = require('../../ChainedMapBase')
const is = require('../is')
const isArray = require('../is/array')
const isReal = require('../is/real')
const isString = require('../is/string')
const isFunction = require('../is/function')
const dopemerge = require('../dopemerge')
const camelCase = require('../camel-case')
const not = require('../conditional/not')
const and = require('../conditional/and')
const or = require('../conditional/or')
const all = require('../conditional/all')

let validators = new ChainedMap()

// eslint-disable-next-line
const stripArithmeticSymbols = x => x.replace(/[?\[\]!\|]/g, '')
const escapedKey = x => camelCase('is-' + x)
const enummy = enums => x => enums === x || enums.includes(x)

// @TODO: .remap!!!
// @TODO: can use these to return noops with error logging on development
const get = key =>
  validators.get(key) || validators.get(escapedKey(key)) || enummy(key)
const merge = x => validators.from(dopemerge(validators.entries(), x))
const has = key => validators.has(key) || validators.get(escapedKey(key))
const set = (key, value) => validators.set(key, value)
const doesNotHave = not(has)

merge(is)

// ----
// @NOTE: putting these as functions increased size 20 bytes: worth it
// ----

// @SIZE: another 10bytes for these fns
const isNotRealOrIsEmptyString = and(not(isReal), x => x === '')

// const isArrayOf = predicate => x => isArray(x) && x.every(predicate)
const isArrayOf = predicate => and(isArray, all(predicate))
const includesAndOr = x => x.includes('|') || x.includes('&')

function typeListFactory(fullKey) {
  // already have it
  if (has(fullKey)) {
    return get(fullKey)
  }

  // get all types
  let orTypes = fullKey.split('|')
  let andTypes = fullKey.split('&')

  // ensure we have all validators - sets up conditionals
  for (let v = 0; v < orTypes.length; v++) {
    builder(orTypes[v])
  }

  // go through all valid options, if any are true, good to go
  set(fullKey, x => {
    for (let v = 0; v < orTypes.length; v++) {
      if (get(orTypes[v])(x)) {
        return true
      }
    }
    return false
  })

  return get(fullKey)
}

// @TODO how to iterate properly with the bitwise fn + AND
//       add another param? ignore overly complex |& things? just allow 1?
//       just show how to use these shorthand fn builders
function arithmeticTypeFactory(fullKey) {
  const key = stripArithmeticSymbols(fullKey)
  let fn = get(key)
  const optionalType = `?${key}`
  const typeOrArrayOrType = `${key}[]`
  const notType = `!${key}`

  const isValidOrNotRealOrEmptyStr = or(fn, isNotRealOrIsEmptyString)
  const isValidOrArrayOfValid = or(fn, isArrayOf(fn))
  if (doesNotHave(optionalType)) {
    set(optionalType, isValidOrNotRealOrEmptyStr)
  }
  if (doesNotHave(typeOrArrayOrType)) {
    set(typeOrArrayOrType, isValidOrArrayOfValid)
  }
  if (doesNotHave(notType)) {
    set(notType, not(fn))
  }

  return get(fullKey)
}

// ----
// ; function split
// ----

// v- annoying on comments with ifs
/* prettier-ignore */
/**
 * @since 4.0.0
 * @desc @pattern @builder -> builds using multiple factories depending on conditons
 *       or abstractFactory whatever
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @param  {string | Function | Primitive} fullKey
 * @return {Function}
 */
function builder(fullKey) {
  // @NOTE: else is for uglifying ternaries, even though else if is not needed
  // @NOTE if key is number, iterating the array
  // opinionated: if it's a function, it's a validator...
  if (isFunction(fullKey)) {
    if (process.env.DEBUG === true) {
      console.log('IS FUNCTION', {fullKey})
    }
    return fullKey
  }
  else if (isString(fullKey) && includesAndOr(fullKey)) {
    if (process.env.DEBUG === true) {
      console.log('has and or', {fullKey})
    }
    return typeListFactory(fullKey)
  }
  else {
    if (process.env.DEBUG === true) {
      console.log('is arithmetic type', {fullKey}, arithmeticTypeFactory(fullKey))
    }
    return arithmeticTypeFactory(fullKey)
  }
}

builder.has = has
builder.get = get
builder.set = set
builder.merge = merge
builder.map = validators
module.exports = builder
