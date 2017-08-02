const hasOwnProperty = require('../util/hasOwnProperty')
const isEnumerable = require('./enumerable')
const toS = require('./toS')

/**
 * @desc check if toString on object is Arguments
 * @since 4.0.0
 * @memberOf is
 *
 * @param {Object | *} x value to check if isArguments
 * @return {boolean} isArguments
 *
 * @see is/toS
 * @name isArguments
 * @func
 *
 * {@link https://tc39.github.io/ecma262/#prod-ArgumentList emca-isarguments}
 * {@link https://github.com/medikoo/es5-ext/blob/master/function/is-arguments.js es5-ext-is-arguments}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1325 underscore-is-arguments}
 * {@link https://github.com/substack/node-deep-equal/blob/master/lib/is_arguments.js node-deep-equals-is-arguments}
 * {@link https://github.com/lodash/lodash/blob/master/isArguments.js lodash-is-arguments}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments mozilla-func-arguments}
 * @see {@link emca-isarguments}
 * @see {@link mozilla-func-arguments}
 * @see {@link node-deep-equals-is-arguments}
 * @see {@link lodash-is-arguments}
 * @see {@link underscore-is-arguments}
 * @see {@link es5-ext-is-arguments}
 *
 * @example
 *
 *    isArguments({}) //=> false
 *
 *     (function() {
 *      isArguments(arguments)
 *      //=> true
 *    })()
 *
 */
const isArguments = x => toS(x) === '[object Arguments]'

module.exports = isArguments

// function unsupported(object) {
//   return (
//     (object &&
//       typeof object === 'object' &&
//       typeof object.length === 'number' &&
//       hasOwnProperty(object, 'callee') &&
//       !isEnumerable.call(object, 'callee')) ||
//     false
//   )
// }
//
// const supportsArgumentsClass =
//   (function() {
//     return toS(arguments)
//   })() === '[object Arguments]'
//
// module.exports = supportsArgumentsClass ? supported : unsupported
