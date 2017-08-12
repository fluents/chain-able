// const forOwn = require('../loop/each/forOwn')
const hasOwnProperty = require('../util/hasOwnProperty')
const hasIn = require('../is/hasIn')
const isObj = require('../is/obj')
const isObjPure = require('../is/objPure')
const isFunction = require('../is/function')
const isArray = require('../is/array')
const curry = require('./curry')

/**
 * Takes a spec object and a test object returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @since 5.0.0-beta.6
 * @version 5.0.0-beta.9 <- added safety https://github.com/fluents/chain-able/issues/61
 * @memberOf fp
 * @curried 2
 *
 * @param {Object} spec specification
 * @param {Object} testObj object to test specification on
 * @return {Boolean}
 *
 * @tests fp/where
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L323 underscore-where}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/baseConformsTo.js lodash-conformsto}
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/where.js ramda-where}
 * @see {@link underscore-where}
 * @see {@link ramda-where}
 * @see {@link lodash-conformsto}
 *
 * @func
 * @fork v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 *
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = where({
 *        a: equals('foo'),
 *        b: not(equals('bar')),
 *        x: gt('_', 10),
 *        y: lt('_', 20)
 *      })
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}) //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}) //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}) //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}) //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}) //=> false
 *
 */
module.exports = curry(2, function where(spec, testObj) {
  // forOwn(spec, (test, prop) => hasOwnProperty(testObj, prop) && !spec[prop](testObj[prop]) })

  /**
   * cannot really test an object vs a non object, unless spec is a function
   */
  if (!isObj(testObj)) {
    if (isFunction(spec)) return spec(testObj)
    else return false
  }

  /* prettier-ignore */
  for (let prop in spec) {
    /**
     * @NOTE we are allowing checks on inherited TESTOBJ,
     *       but not on inherited SPEC
     *
     * !hasIn(testObj, prop)
     */
    if (!hasOwnProperty(spec, prop)) {
      // continue
    }
    /**
     * when we have a nested object, recursively check
     */
    else if (isObjPure(spec[prop]) || isArray(spec[prop])) {
      if (!where(spec[prop], testObj[prop])) {
        return false
      }
    }
    /**
     * if the test object does not have the same property
     * or our value in the testObje does not satisfy the specification
     */
    else if (!spec[prop](testObj[prop])) {
      return false
    }
  }

  // good to go!
  return true
})
