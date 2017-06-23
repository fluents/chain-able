const Chainable = require('./Chainable')
const toarr = require('./deps/to-arr')

/**
 * @NOTE had Symbol.isConcatSpreadable but it was not useful
 * @see http://2ality.com/2015/09/well-known-symbols-es6.html
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
 *
 * @TODO could add .first .last ?
 * @tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @prop {Set} store
 * @type {Set}
 */
class ChainedSet extends Chainable {
  /**
   * @param {ChainedSet | Chainable | any} parent
   */
  constructor(parent) {
    super(parent)
    this.store = new Set()
  }

  /**
   * @since 0.4.0
   * @param {any} value
   * @return {ChainedSet} @chainable
   */
  add(value) {
    this.store.add(value)
    return this
  }

  /**
   * @since 0.4.0
   * @desc inserts the value at the beginning of the Set
   * @param {any} value
   * @return {ChainedSet} @chainable
   */
  prepend(value) {
    this.store = new Set([value].concat(super.values()))
    return this
  }

  /**
   * @since 0.4.0
   * @param {Array | Set | Concatable} arr
   * @return {ChainedSet} @chainable
   */
  merge(arr) {
    const mergeable = toarr(arr)
    for (let i = 0; i < mergeable.length; i++) {
      this.store.add(mergeable[i])
    }
    return this
  }
}

module.exports = ChainedSet
