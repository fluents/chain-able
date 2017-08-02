/* eslint guard-for-in: "OFF" */
/* eslint no-unused-expressions: "OFF" */
const isNil = require('../is/nullOrUndefined')
const isNumberPrimitive = require('../is/numberPrimitive')
const toLength = require('../cast/toLength')
const hasOwnProperty = require('../util/hasOwnProperty')
const hasIn = require('../is/hasIn')

/**
 * @desc returns .length, .size, or a number with the length from `for in` hasOwn
 * @name size
 * @memberOf util
 * @since 5.0.0-beta.6
 *
 * @param  {Object|Array|Map|*} x value to check length | size
 * @return {number} size
 *
 * {@link http://whereswalden.com/2010/04/06/more-changes-coming-to-spidermonkey-the-magical-__count__-property-of-objects-is-being-removed/ spidermonkey__count__}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size mozilla-map-size}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size mozilla-set-size}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length mozilla-function-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length mozilla-array-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length mozilla-arguments-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length mozilla-string-length}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L476 underscore-size}
 * {@link https://github.com/lodash/lodash/blob/master/size.js lodash-size}
 * {@link https://stackoverflow.com/questions/31014793/is-lodash-size-faster-than-js-length-property stack-overflow-size}
 * @see {@link spidermonkey__count__}
 * @see {@link underscore-size}
 * @see {@link stack-overflow-size}
 * @see {@link lodash-size}
 * @see {@link mozilla-string-length}
 * @see {@link mozilla-array-length}
 * @see {@link mozilla-arguments-length}
 * @see {@link mozilla-function-length}
 * @see {@link mozilla-set-size}
 * @see {@link mozilla-map-size}
 *
 * @example
 *    size(new Set([0, 1]))                     //=> 2
 *    size(new Map(Object.entries({eh: true}))) //=> 1
 *    size({eh: 0})                             //=> 1
 *    size({})                                  //=> 0
 *    size([])                                  //=> 0
 *    size([0, 1, 2])                           //=> 3
 *    size(($1, $2) => {})                      //=> 2
 *    size(() => {})                            //=> 0
 *    size(null)                                //=> 0
 */
module.exports = function size(x) {
  // --- safety all around
  // decision tree, but sadly, bigger size :,-(
  if (isNil(x)) {
    return 0
  }
  // @NOTE could put `isPrimitive` after the length and size checks...
  // but not really needed because look at `toNumber` & +false = 0 etc so
  else if (isNumberPrimitive(x)) {
    return toLength(x)
  }
  // --- main checks .length, .size, or for-in
  else if (hasIn(x, 'length')) {
    return x.length
  }
  else if (hasIn(x, 'size')) {
    return x.size
  }
  else {
    let count = 0
    for (let property in x) hasOwnProperty(x, property) && ++count
    return count
  }
}
