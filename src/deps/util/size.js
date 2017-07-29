/* eslint guard-for-in: "OFF" */
/* eslint no-unused-expressions: "OFF" */

const hasOwnProperty = require('./hasOwnProperty')

/**
 * @desc returns .length, .size, or a number with the length from `for in` hasOwn
 * @name size
 * @memberOf util
 * @since 5.0.0-beta.6
 *
 * @param  {Object|Array|Map|*} x value to check length | size
 * @return {number} size
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size mozilla-map-size}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size mozilla-set-size}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length mozilla-function-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length mozilla-array-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length mozilla-arguments-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length mozilla-string-length}
 * {@link https://github.com/lodash/lodash/blob/master/size.js lodash-size}
 * {@link https://stackoverflow.com/questions/31014793/is-lodash-size-faster-than-js-length-property stack-overflow-size}
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
 */
module.exports = function size(x) {
  if (hasOwnProperty(x, 'length')) {
    return x.length
  }
  else if (hasOwnProperty(x, 'size')) {
    return x.size
  }
  else {
    let count = 0
    for (let property in x) hasOwnProperty(x, property) && ++count
    return count
  }
}
