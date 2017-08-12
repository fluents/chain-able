const EMPTY_STRING = require('../native/EMPTY_STRING')
const size = require('../util/size')
const isNullOrUndefined = require('./nullOrUndefined')
const isObj = require('./objTypeof')

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
 * {@link https://github.com/js-data/js-data/blob/v2/src/utils.js#L98 js-data-is-empty}
 * {@link https://github.com/wycats/handlebars.js/blob/master/lib/handlebars/utils.js#L85 handlebars-is-empty}
 * {@link https://github.com/bitovi/u/blob/master/js/object/isEmptyObject.js can-u-is-empty-object}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1293 underscore-is-empty}
 * {@link https://github.com/ramda/ramda/issues/1228 ramda-is-empty}
 * @see {@link can-u-is-empty-object}
 * @see {@link underscore-is-empty}
 * @see {@link ramda-is-empty}
 * @see {@link handlebars-is-empty}
 * @see {@link js-data-is-empty}
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
  if (x === EMPTY_STRING) {
    return true
  }
  else if (isNullOrUndefined(x)) {
    return false
  }
  else if (isObj(x)) {
    // @NOTE
    // for (const property in x)
    //   return true
    // return false
    return size(x) === 0
  }
  else {
    return false
  }

  // @NOTE old version
  // else return (
  //   // null|undefined = empty
  //   // isNullOrUndefined(x) ||
  //   // '' = empty
  //   // [] | {} = empty
  //   keys(x).length === 0
  // )
}
