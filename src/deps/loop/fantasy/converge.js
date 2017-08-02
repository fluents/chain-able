const ENV_DEBUG = require('../../env/debug')
const argumentor = require('../../cast/argumentor')
const curry = require('../../fp/curry')
const max = require('../../math/max')
const reduce = require('./_reduce')
const pluck = require('./pluck')
const map = require('./_map')

/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 * @since 5.0.0-beta.6
 * @memberOf fp
 *
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 *
 * @NOTE important to use 2+ functions in functions param
 *
 * @func
 * @fork v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @symb converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 *
 * @see useWith
 *
 * @example
 *
 *      var average = converge(divide, [sum, length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = converge(concat, [toUpper, toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 */
function _converge(after, fns) {
  const num = reduce(max, 0, pluck('length', fns))
  return curry(num, function() {
    const args = argumentor.apply(null, arguments)
    const self = this
    let index = 0

    return after.apply(self, map(function(fn) {
      fn = fn || fns[index++]
      
      // console.log({fn, args, fns, after, index, i: fns[index++]})
      return fn.apply(self, args)
    }, fns))
  })
}

const converge = curry(2, _converge)
module.exports = converge
