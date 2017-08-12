const toS = require('./toS')

/**
 * @param  {*} x value
 * @return {boolean} isIterator
 *
 * @since 3.0.0
 * @memberOf is
 * @func
 * @name isIterator
 * @see https://github.com/jonschlinkert/kind-of/pull/12
 * @see https://github.com/facebook/immutable-js/blob/master/src/Iterator.js#L59
 *
 * @example
 *
 *  isIterator(new Set().values())
 *  //=> true
 *  isIterator(new Map.entries())
 *  //=> true
 *  isIterator(new Map())
 *  //=> false
 *  isIterator('')
 *  //=> false
 *  isIterator(1)
 *  //=> false
 *
 * @example
 *
 *  const e = {}
 *  eh[Symbol.toStringTag] = '[Map Iterator]'
 *  isIterator(eh)
 *  //=> true
 *  eh[Symbol.toStringTag] = '[Set Iterator]'
 *  isIterator(eh)
 *  //=> true
 *
 * @example
 *
 *  class Eh extends Set()
 *  isIterator(new Eh().values())
 *  //=> true
 *
 */
// eslint-disable-next-line
module.exports = x => ~toS(x).indexOf('Iterator')
