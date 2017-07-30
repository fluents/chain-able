const isArray = require('../../is/array')
const objOrArrayKeys = require('../../util/keysObjOrArray')
const curry = require('../../fp/curry')
const emptyTarget = require('../../dopemerge/emptyTarget')
const defaultTo = require('../../cast/defaultTo')

// const always = require('../../fp/always')
// pipe(nthArg(2), always)
const defaultKeyTransformer = (value, key) => key
const defaultValTransformer = value => value

/**
 * @desc maps keys and vals
 *       probably needs a `mapArrayKeyVal` & `mapObjKeyVal`
 *       maybe `mapMap` haha
 *
 * @alias mapAny
 * @memberOf loop
 * @since 5.0.0-beta.6
 */
function mapObjOrArray(obj, onValue, onKey, init) {
  const result = defaultTo(emptyTarget(obj), init)
  const valTransformer = defaultTo(defaultValTransformer, onValue)
  const keyTransformer = defaultTo(defaultKeyTransformer, onKey)

  const isArrayObj = isArray(obj)
  const keys = objOrArrayKeys(obj)

  for (let index = 0; index < keys.length; index++) {
    const key = isArrayObj ? index : keys[index]
    const value = obj[key]

    result[keyTransformer(value, key, obj)] = valTransformer(value, key, obj)
  }

  return result
}

module.exports = curry(2, mapObjOrArray)
