const isArray = require('../../is/array')
const objOrArrayKeys = require('../../util/keysObjOrArray')
const curry = require('../../fp/curry')

/**
 * @alias mapAnyKeys
 * @memberOf loop
 * @since 5.0.0-beta.6
 */
function mapObjOrArrayKeys(obj, iteratee, result = {}) {
  const isArrayObj = isArray(obj)
  const keys = objOrArrayKeys(obj)

  for (let index = 0; index < keys.length; index++) {
    const key = isArrayObj ? index : keys[index]
    const value = obj[key]

    result[iteratee(value, key, obj)] = value
  }

  return result
}

module.exports = curry(2, mapObjOrArrayKeys)
