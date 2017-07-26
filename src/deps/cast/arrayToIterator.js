const SymbolIterator = require('../symbols/iterator')
const addHiddenFinalProp = require('../util/defineFinal')

/**
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/iterable.ts mobx-array-to-iteratable}
 * {@link https://github.com/leebyron/iterall/ mobx-inspiration-iterall}
 * @see {@link mobx-array-to-iteratable}
 * @see {@link mobx-inspiration-iterall}
 *
 * @memberOf cast
 *
 * @TODO examples
 * @TODO tests
 */

// @@iterating
const IS_ITERATING_MARKER = '__$$iterating'

function arrayToIterator(array) {
  // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
  // yet it is quite convenient to be able to use the response both as array directly and as iterator
  // it is suboptimal, but alas...
  // invariant(array[IS_ITERATING_MARKER] !== true, 'Illegal state: cannot recycle array as iterator')
  addHiddenFinalProp(array, IS_ITERATING_MARKER, true)

  let idx = -1
  addHiddenFinalProp(array, 'next', function next() {
    idx++
    return {
      done: idx >= this.length,
      value: idx < this.length ? this[idx] : undefined,
    }
  })
  return array
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, SymbolIterator, iteratorFactory)
}

// @TODO improve
module.exports = {declareIterator, arrayToIterator}
