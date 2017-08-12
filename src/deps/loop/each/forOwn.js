/* eslint no-unused-expressions: "OFF" */
/* eslint guard-for-in: "OFF" */
const toObj = require('../../cast/toObj')
const hasOwnProperty = require('../../util/hasOwnProperty')

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @since 5.0.0-beta.6
 * @memberOf loop
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} object passed in originally
 *
 * @fork 0.3.0
 * @category Object
 *
 * @NOTE for array, object, and string, iterates over property/index/key
 * @TODO !!! did not return object, consistently the others do, why?
 *
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * {@link https://github.com/lodash/lodash/blob/master/forOwn.js lodash-forown}
 * @see {@link lodash-forown}
 *
 * @example
 *
 *     function Foo() {
 *       this.a = 1
 *       this.b = 2
 *     }
 *
 *     Foo.prototype.c = 3
 *
 *     forOwn(new Foo, (value, key) => console.log(key))
 *     //=> Logs 'a' then 'b' (iteration order is not guaranteed).
 *
 */
function forOwn(object, iteratee) {
  const obj = toObj(object)

  for (const key in obj)
    hasOwnProperty(obj, key) && iteratee(obj[key], key, obj)

  return obj
}

module.exports = forOwn
