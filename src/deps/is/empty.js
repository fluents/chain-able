const keys = require('../util/keysObjOrArray')
const isNullOrUndefined = require('./nullOrUndefined')
const isObj = require('./obj')
const isArray = require('./array')

/* prettier-ignore */
/**
 * Returns `true` if the given value is its type's empty value;
 * `false` otherwise.
 *
 * @func
 * @memberOf is
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 *
 * @param {*} x value to check if empty
 * @return {boolean}
 *
 * @see empty
 * @see https://github.com/ramda/ramda/issues/1228
 *
 * @example
 *
 *      isEmpty([1, 2, 3]);   //=> false
 *      isEmpty([]);          //=> true
 *      isEmpty('');          //=> true
 *      isEmpty(null);        //=> false
 *      isEmpty({});          //=> true
 *      isEmpty({length: 0}); //=> false
 *
 */
module.exports = function isEmpty(x) {
  if (x === '') return true
  else if (isNullOrUndefined(x)) return false
  else if (isObj(x) || isArray(x)) return keys(x).length === 0
  else return false

  // else return (
  //   // null|undefined = empty
  //   // isNullOrUndefined(x) ||
  //   // '' = empty
  //   // [] | {} = empty
  //   keys(x).length === 0
  // )
}
