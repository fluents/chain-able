const argumentor = require('../cast/argumentsToArray')
const curryN = require('./curry')
const nth = require('./nth')

/**
 * @desc Returns a function which returns its nth argument.
 * @memberOf fp
 * @since 5.0.0-beta.6
 *
 * @param {Number} n arg to get
 * @return {Function}
 * @see deps/argumentor
 *
 * @curried 1
 * @tests fp/nthArg
 *
 * @func
 * @fork v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 *
 * @symb nthArg(-1)(a, b, c) = c
 * @symb nthArg(0)(a, b, c) = a
 * @symb nthArg(1)(a, b, c) = b
 *
 * @example
 *
 *      nthArg(1)('a', 'b', 'c')  //=> 'b'
 *      nthArg(-1)('a', 'b', 'c') //=> 'c'
 *
 */
const nthArg = function(n) {
  const arity = n < 0 ? 1 : n + 1
  return curryN(arity, function() {
    // return nth(n, argumentor.apply(null, arguments))
    return nth(argumentor.apply(null, arguments), n)
  })
}

module.exports = nthArg