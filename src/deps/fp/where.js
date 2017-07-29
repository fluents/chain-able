const hasOwnProperty = require('../util/hasOwnProperty')
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
 * @memberOf fp
 * @curried 2
 *
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 *
 * {@link https://github.com/ramda/ramda/blob/v0.24.1/src/where.js ramda-where}
 * @see {@link ramda-where}
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
  for (let prop in spec) {
    if (hasOwnProperty(spec, prop) && !spec[prop](testObj[prop])) {
      return false
    }
  }
  return true
})
