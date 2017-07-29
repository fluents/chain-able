const preAllocate = require('./array/preAllocate')

/**
 * @desc turns arguments into an array, used as a util, for opt
 *
 * @name argumentor
 * @version 2.0.0 <- use preAllocate
 * @since 3.0.0
 * @return {Array<Arguments>}
 *
 * {@link http://mrale.ph/blog/2015/11/02/crankshaft-vs-arguments-object.html crankshaft-vs-arguments}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L109 underscore-rest-arts}
 * {@link https://github.com/aretecode/awesome-deopt awesome-deopt}
 * {@link https://github.com/petkaantonov/bluebird/wiki/Optimization-killers bluebird-optimization-killers}
 * @see {@link crankshaft-vs-arguments}
 * @see {@link bluebird-optimization-killers}
 * @see {@link underscore-rest-arts}
 * @see deps/util/lengthFromZero
 * @see deps/array/preAllocate
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
  const args = preAllocate(len)
  for (let i = 0; i < len; ++i) args[i] = arguments[i]
  return args
}
