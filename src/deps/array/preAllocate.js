const LARGE_ARRAY_SIZE = require('../native/LARGE_ARRAY_SIZE')
const isNumberPrimitive = require('../is/numberPrimitive')
const isArray = require('../is/array')
const size = require('../util/size')
const from0 = require('../util/numberFromZero')
// const lengthMinusOne = require('../util/lengthMinusOne')
// const lengthFrom0 = require('../util/lengthFromZero')

// @NOTE calls from0 twice but inlined makes less diff than adding pointer
const arrFrom0 = x => new Array(from0(x) > LARGE_ARRAY_SIZE ? 0 : from0(x))

/**
 * @desc make a new empty Array filled with a pre-allocated-length-from-zero
 * @memberOf array
 * @name preAllocate
 * @since 5.0.0
 * @func
 *
 * @param {Object|Array|number} x array or object to return an empty array.of.fill (pre-allocated)
 * @return {Array} preallocated array full of undefined
 *
 * @TODO not sure about pre-allocating objects?
 *
 * {@link https://github.com/facebook/react/blob/8f4d30737def9fa3456149826414643b5cbbe4bf/docs/docs/optimizing-performance.md react-opt}
 * {@link https://thewayofcode.wordpress.com/tag/array-pre-allocation/ the-way-of-code-array}
 * {@link https://www.html5rocks.com/en/tutorials/speed/v8/#toc-topic-numbers html-5-rocks-v8}
 * @see {@link html5-rocks-v8}
 * @see {@link the-way-of-code-array}
 * @see {@link react-opt}
 * @see is/numberPrimitive
 * @see is/array
 * @see util/size
 *
 * @NOTE could be an `||` but it's annoying how it deopts sometimes (arr checks)
 *
 * @example
 *
 *    preAllocate({eh: true})
 *    //=> {}
 *
 *    preAllocate([1, 2, 10])
 *    //=> [undefined, undefined, undefined]
 *
 *    preAllocate(2)
 *    //=> [undefined, undefined]
 *
 */
module.exports = function preAllocate(x) {
  return isNumberPrimitive(x)
    ? arrFrom0(x)
    : isArray(x)
      ? arrFrom0(x)
      : arrFrom0(size(x))
}
