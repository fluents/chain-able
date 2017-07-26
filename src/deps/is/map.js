const toS = require('./toS')

/**
 * @desc Checks if `value` is classified as a `Map` object.
 * @since 3.0.0
 * @memberOf is
 *
 * @param  {*} x value
 * @return {boolean} isMap
 *
 * @func
 * @name isMap
 *
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L210 mobx-is-map}
 * {@link https://github.com/jonschlinkert/kind-of kind-of}
 * @see {@link kind-of}
 * @see {@link mobx-is-map}
 *
 * @example
 *
 *  isMap(new Map())
 *  //=> true
 *  isMap(new Map.entries())
 *  //=> false
 *  isMap(new Set())
 *  //=> false
 *  isMap({})
 *  //=> false
 *  isMap('')
 *  //=> false
 *  isMap(1)
 *  //=> false
 *  isMap(new WeakMap)
 *  // => false
 *
 * @example
 *
 *  const e = {}
 *  eh[Symbol.toStringTag] = '[object Map]'
 *  isMap(eh)
 *
 * @example
 *
 *  class Eh extends Map()
 *  isMap(new Eh())
 *  //=> true
 *
 */
module.exports = function isMap(x) {
  // return x instanceof Map ||
  return toS(x) === '[object Map]'
}
