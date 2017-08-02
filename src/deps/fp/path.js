const isNil = require('../is/nullOrUndefined')
const curry = require('./curry')

/**
 * @desc retrieve the value at a given path.
 * @since v5.0.0
 * @memberOf fp
 * @curried 2
 *
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 *
 * @func
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/path.js ramda-path}
 * @see {@link ramda-path}
 * @see fp/prop
 *
 * @example
 *
 *      path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *
 */
module.exports = curry(2, function path(paths, obj) {
  let value = obj
  let index = 0

  while (index < paths.length) {
    if (isNil(value)) return
    value = value[paths[index++]]
  }

  return value
})
