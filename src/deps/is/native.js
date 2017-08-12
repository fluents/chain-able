const funcToString = require('../native/functionToString')
const matchNative = require('../regexp/matchNative')

/**
 * @desc based on isNative from react-fibers, based on isNative() from Lodash
 * @since 4.0.6
 * @memberOf is
 * @func isNative
 *
 * @param {*} x value to check
 * @return {boolean}
 *
 * {@link https://esdiscuss.org/topic/spec-feedback-on-rev-6#content-2 esdiscuss-functiontostring}
 * {@link https://github.com/lodash/lodash/issues/2185 lodash-functiontostring-issue}
 * {@link http://tc39.github.io/Function-prototype-toString-revision/ functiontostring-emca}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString Function.toString}
 *
 * @see {@link Function.toString}
 * @see {@link functiontostring-emca}
 * @see {@link lodash-functiontostring-issue}
 * @see {@link esdiscuss-functiontostring}
 *
 * @example
 *
 * isNative(Array.prototype.push)
 * //=> true
 *
 * isNative(function normalFunction() {})
 * //=> false
 *
 */
module.exports = function isNative(x) {
  try {
    const source = funcToString.call(x)
    return matchNative.test(source)
  }
  catch (err) {
    return false
  }
}
