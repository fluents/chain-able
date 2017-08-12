const isFunction = require('../is/function')
const isObjNotNull = require('../is/objNotNull')
const curry = require('./curry')

/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @icon 🦎
 * @alias evolve
 * @alias transform
 * @alias transformWith
 * @since 5.0.0-beta.6
 * @curried 2
 * @memberOf fp
 *
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 *
 * @tests fp/evolve
 *
 * @func
 * @fork v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 *
 * {@link https://github.com/bahmutov/change-by-example change-by-example}
 * {@link https://github.com/lodash/lodash/blob/master/transform.js lodash-transform}
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/evolve.js ramda-evolve}
 * @see {@link lodash-transform}
 * @see {@link ramda-evolve}
 * @see {@link change-by-example}
 *
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123}
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      }
 *      evolve(transformations, tomato)
 *      //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 *
 */
module.exports = curry(2, function evolve(transformations, object) {
  const result = {}
  let transformation
  let key

  // eslint-disable-next-line
  for (key in object) {
    transformation = transformations[key]
    result[key] = isFunction(transformation)
      ? transformation(object[key])
      : isObjNotNull(transformation)
        ? evolve(transformation, object[key])
        : object[key]
  }

  return result
})
