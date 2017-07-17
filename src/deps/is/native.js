/**
 * @desc based on isNative from react-fibers, based on isNative() from Lodash
 * @since 4.0.6
 * @memberOf is
 * @func isNative
 *
 * @param {*} x value to check
 * @return {boolean}
 *
 * @example
 *
 * isNative(Array.prototype.push)
 * // => true
 *
 * isNative(function normalFunction() {})
 * // => false
 *
 */
module.exports = function isNative(x) {
  //
  var funcToString = Function.prototype.toString

  var reIsNative = RegExp(
    '^' +
      funcToString
        // Take an example native function source for comparison
        .call(Object.prototype.hasOwnProperty)
        // Strip regex characters so we can use it for regex
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        // Remove hasOwnProperty from the template to make it generic
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )

  try {
    var source = funcToString.call(x)
    return reIsNative.test(source)
  }
  catch (err) {
    return false
  }
}
