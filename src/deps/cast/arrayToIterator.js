/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values mozilla-array-values}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries mozilla-array-entries}
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/iterable.ts mobx-array-to-iteratable}
 * {@link https://github.com/leebyron/iterall/ mobx-inspiration-iterall}
 * @see {@link mozilla-array-values}
 * @see {@link mozilla-array-entries}
 * @see {@link mobx-array-to-iteratable}
 * @see {@link mobx-inspiration-iterall}
 * @memberOf cast
 *
 * @see Chainable[Symbol.Iterator] much preferred
 *
 * @TODO `Array.prototype.values ? x => Array.prototype.values.call(x)`
 * @TODO examples
 * @TODO tests
 */

const ENV_COMPAT = require('../env/compat')

if (ENV_COMPAT) {
  const SymbolIterator = require('../symbols/iterator')
  const addHiddenFinalProp = require('../util/defineFinal')

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
}
else {
  const invoke = require('../fp/invoke')
  const ArrayEntries = require('../native/arrayEntries')

  module.exports = invoke(ArrayEntries, 'call')
}
