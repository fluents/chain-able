const isNullOrUndefined = require('../is/nullOrUndefined')
const curry = require('./curry')

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 *
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 *
 * @see https://github.com/ramda/ramda/blob/master/src/path.js
 * @see R.prop
 *
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *
 */
module.exports = curry(2, function path(paths, obj) {
  let value = obj
  let index = 0

  while (index < paths.length) {
    if (isNullOrUndefined(value)) return
    value = value[paths[index++]]
  }

  return value
})
