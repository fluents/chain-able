const Chainable = require('./Chainable')
const toarr = require('./deps/to-arr')

/**
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
    toarr(arr).forEach(v => this.store.add(v))
    return this
  }
}

// @NOTE: not really helping
// http://2ality.com/2015/09/well-known-symbols-es6.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
// const d = objs => symbol => v =>
//   objs.map(obj =>
//     Object.defineProperty(obj, symbol, {
//       configurable: true,
//       enumerable: false,
//       get() {
//         return v
//       },
//     })
//   )
//
// const set = d([ChainedSet.prototype, ChainedSet])
// set(Species)(Set)
// set(Spreadable)(true)

module.exports = ChainedSet
