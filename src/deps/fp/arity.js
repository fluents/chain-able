/* eslint complexity: "OFF" */
/* eslint consistent-return: "OFF" */
/* eslint max-len: "OFF" */
/* eslint no-unused-vars: "OFF" */

/* istanbul ignore next: metadata, one is covered, all are covered */
/* prettier-ignore */
/**
 * @desc just for `.length` of a function, to know how many args
 * @memberOf fp
 *
 * @since 5.0.0
 * @param {number} n number of arguments
 * @param {Function} fn function to wrap
 * @return {Function} function with params
 *
 * {@link https://github.com/blakeembrey/nary nary}
 * {@link https://www.npmjs.com/package/util-arity util-arity}
 * {@link https://docs.microsoft.com/en-us/scripting/javascript/reference/length-property-function-javascript microsoft-func-length}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity mozilla-func-arity}
 * @see {@link mozilla-func-arity}
 * @see {@link microsoft-func-length}
 * @see {@link util-arity}
 * @see {@link nary}
 *
 * @NOTE keeping this means uglify `keep_func_args: false`
 *
 * @example
 *
 *  const wan = one => console.log(one)
 *  arity(1, wan)
 *  => function(one => wan(one))
 *
 *  const five = ($1, $2, $3, $4, $5) => console.log.apply(console, arguments)
 *  arity(5, five).length
 *  //=> 5
 *
 */
module.exports = function _arity(n, fn) {
  // if (n === 0 || n > 5)
  if (n === 1) return function($0) { return fn.apply(this, arguments) }
  else if (n === 2) return function($0, $1) { return fn.apply(this, arguments) }
  else if (n === 3) return function($0, $1, $2) { return fn.apply(this, arguments) }
  else if (n === 4) return function($0, $1, $2, $3) { return fn.apply(this, arguments) }
  else if (n === 5) return function($0, $1, $2, $3, $4) { return fn.apply(this, arguments) }
  else return function() { return fn.apply(this, arguments) }

  // @NOTE ignoring
  // else if (n === 6) return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
  // else if (n === 7) return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments) }
  // else if (n === 8) return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments) }
  // else if (n === 9) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments) }
  // else if (n === 10) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments) }
}
