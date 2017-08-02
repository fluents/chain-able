const tester = require('../cast/toTestable')

/**
 * the original simple to-test matcher for traversable,
 * will be merged into, or simplified as simplified into matcher
 *
 * @since 2.0.0
 *
 * @TODO should use matcher,
 * @TODO should inprove the callback data...
 *
 * @types matcher
 *
 * @param  {Matchable[]} keys matchable keys
 * @param  {Matchable[]} vals matchable values
 * @return {boolean} matched or not
 *
 * @example
 *
 *  anyKeyVal([], [])(0, 0)
 *  //=> false
 *
 *  anyKeyVal([() => true], [])(0, 0)
 *  //=> true
 *
 */
module.exports = (keys, vals) => (prop, val) => {
  for (let i = 0; i < keys.length; i++) {
    if (tester(keys[i], prop, val)) return true
  }
  for (let i = 0; i < vals.length; i++) {
    if (tester(vals[i], val, prop)) return true
  }
  return false
}
