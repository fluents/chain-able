const ENV_PERF = require('../env/preferPerf')
const EMPTY_OBJ = require('../native/EMPTY_OBJ')
const preAllocate = require('../array/preAllocate')
const isObj = require('../is/obj')
const isArray = require('../is/array')
const ObjectKeys = require('./keys')

/**
 * Creates an array of the own enumerable property names of `object`.
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @name keysObjOrArray
 *
 * @param {Object|Array|Map|Set} obj The object to query, or value to pre-allocate with
 * @return {Array} Returns the array of property names, or preallocated array
 *
 * @see deps/util/lengthFromZero
 * @see deps/util/props
 * @see util/values
 * @see util/valuesIn
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L988 underscore-all-keys}
 * {@link https://github.com/ramda/ramda/blob/master/src/keys.js ramda-keys}
 * {@link https://github.com/lodash/lodash/blob/master/keys.js lodash-keys}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/getAllKeys.js lodash-get-all-keys}
 * @see {@link lodash-keys}
 * @see {@link lodash-get-all-keys}
 * @see {@link ramda-keys}
 * @see {@link underscore-all-keys}
 *
 * @TODO https://github.com/lodash/lodash/blob/master/.internal/arrayLikeKeys.js
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
 *     keys(new Foo)
 *     //=> ['a', 'b'] (iteration order is not guaranteed)
 *
 *     keys('hi')
 *     //=> ['0', '1']
 *
 */
module.exports = function keys(obj) {
  return isArray(obj)
    // preAllocate(obj)
    ? obj
    : isObj(obj)
      ? ObjectKeys(obj)
      // @TODO
      // ? hasOwnProperty(obj, 'keys')
      //   ? castIteratorToArray(obj.keys())
      //   : ObjectKeys(obj)
      : ENV_PERF
        ? EMPTY_OBJ
        : []
}
