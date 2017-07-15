/**
 * @desc turns arguments into an array, used as a util, for opt
 *
 * @since 3.0.0
 * @return {Array<Arguments>}
 *
 * @see https://github.com/aretecode/awesome-deopt
 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
 *
 * @example
 *
 *    function eh() {
 *      const args = argumentor.apply(null, arguments).slice(1)
 *
 *      console.log(args)
 *      //=> [1, 10, 100]
 *    }
 *    eh(0, 1, 10, 100)
 *
 */
module.exports = function() {
  const len = arguments.length
  const args = new Array(len > 1 ? len - 1 : 0)
  for (let i = 0; i < len; ++i) args[i] = arguments[i]
  return args
}
