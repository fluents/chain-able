const ENV_DEBUG = require('../../env/debug')
const isArray = require('../../is/array')
const curry = require('../../fp/curry')
const identity = require('../../fp/identity')
const emptyTarget = require('../../dopemerge/emptyTarget')
const defaultTo = require('../../cast/defaultTo')
const objOrArrayKeys = require('../../util/keysObjOrArray')
const size = require('../../util/size')

// const always = require('../../fp/always')
// pipe(nthArg(2), always)
const defaultKeyTransformer = (value, key) => key
const defaultValTransformer = identity

/**
 * @desc maps keys and vals
 *       probably needs a `mapArrayKeyVal` & `mapObjKeyVal`
 *       maybe `mapMap` haha
 *
 * @TODO this is huge perf killer just super easy util
 *
 * https://github.com/jashkenas/underscore/blob/master/underscore.js#L1021 underscore-map-obj
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

  if (ENV_DEBUG) {
    console.log('loop_mapObjOrArray', {keys, result, isArrayObj, obj, init})
  }

  for (let index = 0; index < keys.length; index++) {
    const key = isArrayObj ? index : keys[index]
    const value = obj[key]

    if (ENV_DEBUG) {
      console.log('loop_mapObjOrArray', {key, value, obj, index})
    }

    result[keyTransformer(value, key, obj)] = valTransformer(value, key, obj)
  }

  return result
}

module.exports = curry(2, mapObjOrArray)
