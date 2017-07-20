/* istanbul ignore next: metadata, one is covered, all are covered */
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
module.exports = function _arity(n, fn) {
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
}
