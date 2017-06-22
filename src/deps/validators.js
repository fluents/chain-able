/**
 * @since 4.0.0 <- moved out of the store, into scoped
 * @since 1.0.0
 * @desc library of validators to use by name
 *       @modifies this.validators
 * @param  {Object} validators
 */

// const isString = require('../deps/is/string')
// const isObj = require('../deps/is/pureObj')
// const isNumber = require('../deps/is/number')
// const traverse = require('../deps/traverse')
const isArray = require('../deps/is/array')
const isReal = require('../deps/is/real')
const isFunction = require('../deps/is/function')
const ObjectKeys = require('../deps/util/keys')

const ChainedMap = require('../ChainedMap')
const DotProp = require('../compose/DotProp')(ChainedMap)
let validators = new DotProp()

const is = require('../deps/is')
/* prettier-ignore */
ObjectKeys(is).forEach(key => (is[key.toLowerCase().replace('is', '')] = is[key]))
validators.from(is)

// @TODO: can use these to return noops with error logging on development
const has = key => validators.has(key)
const set = (key, value) => validators.set(key, value)
const get = key => validators.get(key)
const merge = x => validators.merge(x)

/**
 * @since 4.0.0
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @TODO split into fns
 * @param  {string | Function | Primitive} fullKey
 * @return {Function}
 */
const factory = fullKey => {
  // opinionated: if it's a function, it's a validator...
  if (isFunction(fullKey)) {
    return fullKey
  }

  // enum
  if (isArray(fullKey)) {
    const key = 'enum:' + fullKey.join('|')
    if (!has(key)) {
      set(key, x => fullKey.includes(x))
    }
    return get(key)
  }

  // eslint-disable-next-line
  const key = fullKey.replace(/[?\[\]!\|]/gm, '')

  // @NOTE if key is number, iterating the array
  if (fullKey.includes('|')) {
    // already have it
    if (has(fullKey)) {
      return get(fullKey)
    }

    // ensure we have all validators
    let validTypes = fullKey.split('|')
    validTypes.map(type => factory(type))

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

  let fn = get(key)

  if (!has(`?${key}`)) {
    set(`?${key}`, v => fn(v) || !isReal(v) || v === '')
  }

  if (!has(`${key}[]`)) {
    set(
      `${key}[]`,
      v => fn(v) || (isArray(v) && v.map(nested => fn(nested)).includes(true))
    )
  }

  if (!has(`!${key}`)) {
    set(`!${key}`, v => !get(key[key])(v))
  }

  return get(fullKey)
}

factory.has = has
factory.get = get
factory.set = set
factory.merge = merge
module.exports = factory
