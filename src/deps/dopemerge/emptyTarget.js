const isArray = require('../is/array')

/**
 * @desc make a new empty Array or Object for cloning
 * @memberOf dopemerge
 * @since 2.0.0
 *
 * @param {*} val array or object to return an empty one of
 * @return {Object | Array} depending on the data type of val
 *
 * @example
 *
 *    emptyTarget({eh: true})
 *    //=> {}
 *
 *    emptyTarget([1])
 *    //=> []
 */
module.exports = function emptyTarget(val) {
  return isArray(val) ? [] : {}
}
