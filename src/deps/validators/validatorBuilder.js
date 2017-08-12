/**
 * @since 4.0.0 <- moved out of the store, into scoped
 * @since 1.0.0
 * @desc library of validators to use by name
 *       @modifies this.validators
 * @param  {Object} validators
 */
const ChainedMap = require('../../ChainedMapBase')
const ENV_DEBUG = require('../env/debug')
const is = require('../is/_core')
const isString = require('../is/string')
const isFunction = require('../is/function')
const dopemerge = require('../dopemerge')
const camelCase = require('../string/camelCase')
const not = require('../conditional/not')
const or = require('../conditional/or')
const isArrayOf = require('../is/arrayOf')
const isNotRealOrIsEmpty = require('../is/notRealOrIsEmpty')
const replace = require('../fp/replace')

let validators = new ChainedMap()

// eslint-disable-next-line
const stripArithmeticSymbols = replace(/[?\[\]!\|]/g, '')
const escapedKey = x => camelCase('is-' + x)
const enummy = enums => x => enums === x || enums.includes(x)

// @TODO: .remap!!!
// @TODO: can use these to return noops with error logging on development
const get = key =>
  validators.get(key) || validators.get(escapedKey(key)) || enummy(key)
const has = key => validators.has(key) || validators.get(escapedKey(key))
const set = (key, value) => validators.set(key, value)
const doesNotHave = not(has)

/**
 * @desc add custom types for validation
 * @category types
 * @category schema
 * @types schema
 *
 * @since 4.0.0 <- used with schema, used in method chain
 * @since 3.0.0 <- took out
 * @since 1.0.0
 *
 * @param  {Object} types custom Types
 *
 * @see deps/validators/validatorFactory
 *
 * @example
 *
 *   addTypes({yaya: x => typeof x === 'string'})
 *
 *   const chain = new Chain().methods('eh').type('yaya').build()
 *
 *   chain.eh('good')
 *   //=> chain
 *
 *   chain.eh(!!'throws')
 *   //=> TypeError(false != {yaya: x => typeof x === 'string'})
 *
 * @example
 *
 *   const custom = {}
 *   custom.enums = enums => x => enums.includes(x)
 *   custom['*'] = x => true
 *   addTypes(custom)
 *   //-> void
 *
 *   new Chain().methods('eh').type('*').build().eh
 *   //=> validateType(custom['*'])
 *
 */
const addTypes = types =>
  validators.from(dopemerge(validators.entries(), types))

addTypes(is)

const includesAndOr = x => x.includes('|') || x.includes('&')

/**
 * @memberOf schema
 * @category types
 *
 * @param  {string} fullKey a key with `|` and/or '&'
 * @return {Function} validator
 *
 * @example
 *
 *    const isStringOrNumber = typeListFactory('string|number')
 *
 *    isStringOrNumber(1)
 *    //=> true
 *    isStringOrNumber('one')
 *    //=> true
 *    isStringOrNumber(Object)
 *    //=> false
 *
 */
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

/**
 * @desc transform arithmetic strings into types
 * @since 4.0.0-alpha.1
 * @category types
 *
 * @param  {Matchable} fullKey arithmetic type key
 * @return {Matchable} function to match with, with .inspect for easy debugging
 *
 * @types schema
 * @test typed
 * @test schema
 * @see is
 * @todo coercing values to certain types: arithmeticTypeFactory('<value>')
 *
 * @example
 *
 *   arithmeticTypeFactory('?string')
 *   //=> x => !isReal(x) || isString(x)
 *
 * @example
 *
 *   arithmeticTypeFactory('?string|string[]')
 *   //=> x => isString(x) || isArrayOf(isString)(x)
 *
 * @example
 *
 *   arithmeticTypeFactory('!string')
 *   //=> x => not(isString)(x)
 *
 * @example
 *
 *   types.addTypes({star: x => true})
 *   arithmeticTypeFactory('object|function|star')
 *   //=> x => isObj(x) || isFunction(x) || isStar(x)
 *
 * @example
 *
 *   arithmeticTypeFactory('===')
 *   //=> x => (['===']).includes(x)
 */
function arithmeticTypeFactory(fullKey) {
  const key = stripArithmeticSymbols(fullKey)
  let fn = get(key)
  const optionalType = `?${key}`
  const typeOrArrayOrType = `${key}[]`
  const notType = `!${key}`

  const isValidOrNotRealOrEmptyStr = or(fn, isNotRealOrIsEmpty)
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
 * @desc @pattern @builder -> builds using multiple factories depending on conditons
 *       or abstractFactory whatever
 *       opinionated: if it's a function, it's a validator...
 *
 * @category types
 * @since 4.0.0
 * @param  {string | Function | Primitive} fullKey arithmetic key to the validator
 * @return {Function} validator
 *
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @NOTE if/else is for uglifying ternaries, even though else if is not needed
 * @NOTE if key is number, iterating the array
 *
 * @example
 *
 *    // functionType
 *    const isString = x => typeof x === 'string'
 *    builder(isString)
 *    //=> isString
 *
 * @example
 *
 *    // stringType (built in, or custom-keyed validator, or eqeqeq)
 *    builder('string')
 *    //=> isString
 *
 *    const enummy = builder('enum')
 *    //=> x => ['enum'].includes(x)
 *
 * @example
 *
 *    // arithmeticType
 *    builder('string|string[]')
 *    //=> isString || isArrayOf(isString)
 *
 */
function builder(fullKey) {
  if (isFunction(fullKey)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('functionType', {fullKey})
    }
    return fullKey
  }
  else if (isString(fullKey) && includesAndOr(fullKey)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('andOrType', {fullKey})
    }
    return typeListFactory(fullKey)
  }
  else {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('arithmeticType', {fullKey}, arithmeticTypeFactory(fullKey))
    }
    return arithmeticTypeFactory(fullKey)
  }
}

builder.has = has
builder.get = get
builder.set = set
builder.addTypes = addTypes // was merge
builder.map = validators
module.exports = builder
