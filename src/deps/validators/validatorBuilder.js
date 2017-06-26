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
const isFunction = require('../is/function')
const not = require('../util/not')
const dopemerge = require('../dopemerge')
const camelCase = require('../camel-case')

let validators = new ChainedMap()

// eslint-disable-next-line
const stripArithmeticSymbols = x => x.replace(/[?\[\]!\|]/g, '')

// @NOTE isNull & isUndefined to lowercase is no good...
//       one way to do it, but not as good
// const TYPES = ['null', 'undefined']
// const REPLACE = ['nill', 'undef']
// .replace(TYPES[0], REPLACE[0])
// .replace(TYPES[1], REPLACE[1])
//
// @NOTE: removed this in favor of escaping the key
//        plus this 2x the map size
//
// const ObjectKeys = require('../util/keys')
// const validationKeys = ObjectKeys(is)
// for (let i = 0; i < validationKeys.length; i++) {
//   const key = validationKeys[i]
//   const transformedKey = key.toLowerCase().replace('is', '')
//   is[transformedKey] = is[key]
// }

// s.charAt(0).toUpperCase()
const escapedKey = x => camelCase('is-' + x)

// @TODO: can use these to return noops with error logging on development
const has = key => validators.has(key) || validators.get(escapedKey(key))
const set = (key, value) => validators.set(key, value)
const get = key => validators.get(key) || validators.get(escapedKey(key))
const merge = x => validators.from(dopemerge(validators.entries(), x))

merge(is)

// ----
// @NOTE: putting these as functions increased size 20 bytes: worth it
// ----

// @TODO: bitwise fn crazyness for this
// @SIZE: another 10bytes for these fns
const isNotRealOrIsEmptyString = x => !isReal(x) || x === ''

// @NOTE: @TODO: this doesn't follow our opinionated `valid == !false | Error`
const isArrayOf = fn => x =>
  isArray(x) && x.map(nested => fn(nested)).includes(true)

function typeListFactory(fullKey) {
  // already have it
  if (has(fullKey)) {
    return get(fullKey)
  }

  // get all types
  let validTypes = fullKey.split('|')

  // ensure we have all validators - sets up conditionals
  for (let v = 0; v < validTypes.length; v++) {
    builder(validTypes[v])
  }

  // go through all valid options, if any are true, good to go
  set(fullKey, x => {
    for (let v = 0; v < validTypes.length; v++) {
      if (get(validTypes[v])(x)) {
        return true
      }
    }
    return false
  })

  return get(fullKey)
}

function enumTypeFactory(fullKey) {
  const key = 'enum:' + fullKey.join('|')
  if (!has(key)) {
    set(key, x => fullKey.includes(x))
  }
  return get(key)
}

function arithmeticTypeFactory(fullKey) {
  const key = stripArithmeticSymbols(fullKey)
  let fn = get(key)
  const optionalType = `?${key}`
  const typeOrArrayOrType = `${key}[]`
  const notType = `!${key}`

  if (!has(optionalType)) {
    set(optionalType, x => fn(x) || isNotRealOrIsEmptyString(x))
  }
  if (!has(typeOrArrayOrType)) {
    set(typeOrArrayOrType, x => fn(x) || isArrayOf(fn)(x))
  }
  if (!has(notType)) {
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

  // opinionated: if it's a function, it's a validator...
  if (isFunction(fullKey)) {
    return fullKey
  }
  else if (isArray(fullKey)) {
    return enumTypeFactory(fullKey)
  }
  // @NOTE if key is number, iterating the array
  else if (fullKey.includes('|')) {
    return typeListFactory(fullKey)
  }
  else {
    return arithmeticTypeFactory(fullKey)
  }
}

builder.has = has
builder.get = get
builder.set = set
builder.merge = merge
builder.map = validators
module.exports = builder
