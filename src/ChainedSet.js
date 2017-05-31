const Chainable = require('./Chainable')
const {Species, Spreadable} = require('./deps/symbols')
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

Object.defineProperty(ChainedSet.prototype, Spreadable, {
  configurable: true,
  enumerable: false,
  get() {
    return true
  },
})

const desc = {
  configurable: true,
  enumerable: false,
  get() {
    return Set
  },
}
Object.defineProperty(ChainedSet.prototype, Species, desc)
Object.defineProperty(ChainedSet, Species, desc)

module.exports = ChainedSet
