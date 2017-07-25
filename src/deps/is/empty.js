const keys = require('../util/keysObjOrArray')
const ObjectKeys = require('../util/keys')
const isNullOrUndefined = require('./nullOrUndefined')
const isObj = require('./obj')
const isArray = require('./array')

/* prettier-ignore */
/**
 * Returns `true` if the given value is its type's empty value;
 * `false` otherwise.
 *
 * @since 5.0.0-beta.1
 * @memberOf is
 *
 * @param {*} x value to check if empty
 * @return {boolean}
 *
 * @func
 * @fork v0.1.0
 * @category Logic
 * @sig a -> Boolean
 *
 * {@link https://github.com/bitovi/u/blob/master/js/object/isEmptyObject.js can-u-is-empty-object}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1293 underscore-is-empty}
 * {@link https://github.com/ramda/ramda/issues/1228 ramda-is-empty}
 * @see {@link can-u-is-empty-object}
 * @see {@link underscore-is-empty}
 * @see {@link ramda-is-empty}
 * @see empty
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
  else if (isArray(x)) return x.length === 0
  else if (isObj(x)) return ObjectKeys(x).length === 0
  else return false

  // else return (
  //   // null|undefined = empty
  //   // isNullOrUndefined(x) ||
  //   // '' = empty
  //   // [] | {} = empty
  //   keys(x).length === 0
  // )
}
