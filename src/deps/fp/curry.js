// var _isPlaceholder = require('./isPlaceholder')
function _isPlaceholder(x) {
  return x === '_'
}

/* prettier-ignore */
/**
 * @desc just for `.length` of a function?
 * @memberOf fp
 *
 * @since       5.0.0
 * @param       {number}   n number of arguments
 * @param       {Function} fn function to wrap
 * @return      {Function} function with params
 *
 * @TODO keeping this means change uglify...
 *
 * @example
 *  const wan = one => console.log(one)
 *  arity(1, wan)
 *  => function(one => wan(one))
 */
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  if (n === 0) return function() { return fn.apply(this, arguments) }
  else if (n === 1) return function(a0) { return fn.apply(this, arguments) }
  else if (n === 2) return function(a0, a1) { return fn.apply(this, arguments) }
  else if (n === 3) return function(a0, a1, a2) { return fn.apply(this, arguments) }
  else if (n === 4) return function(a0, a1, a2, a3) { return fn.apply(this, arguments) }
  else if (n === 5) return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments) }
  else if (n === 6) return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
  else if (n === 7) return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments) }
  else if (n === 8) return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments) }
  else if (n === 9) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments) }
  else if (n === 10) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments) }
  // else {
  //   throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  // }
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf fp
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 *
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 *
 * @see R.curry
 *
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 *
 */
function _curryN(length, received, fn) {
  return function() {
    const combined = []
    let argsIdx = 0
    let left = length
    let combinedIdx = 0

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      let result

      if (
        combinedIdx < received.length &&
        (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)
      ) {
        result = received[combinedIdx]
      }
      else {
        result = arguments[argsIdx++]
        // argsIdx += 1
      }
      combined[combinedIdx++] = result
      if (!_isPlaceholder(result)) {
        left -= 1
      }
      // combinedIdx += 1
    }
    return left <= 0
      ? fn.apply(this, combined)
      : _arity(left, _curryN(length, combined, fn))
  }
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf fp
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 *
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 *
 * @see ramda
 *
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 *
 */
module.exports = function curryN(length, fn) {
  return _arity(length, _curryN(length, [], fn))
}