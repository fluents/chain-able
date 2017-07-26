const Chainable = require('./Chainable')
const toarr = require('./deps/to-arr')
const newSet = require('./deps/construct/set')

/**
 * @class
 * @category Chainable
 * @category Set
 * @memberOf Chainable
 * @member ChainedSet
 *
 * @TODO could add .first .last ?
 * @NOTE had Symbol.isConcatSpreadable but it was not useful
 *
 * @tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @see http://2ality.com/2015/09/well-known-symbols-es6.html
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
 * @see Chainable
 * @tests ChainedSet
 * @types ChainedSet
 *
 * @extends {Chainable}
 * @prop {Set} store
 * @type {Set}
 */
class ChainedSet extends Chainable {
  /**
   * @param {ChainedSet | Chainable | ParentType} parent ParentType
   * @example
   *
   *   const set = new ChainedSet()
   *   set.store instanceof Set
   *   //=> true
   *
   */
  constructor(parent) {
    super(parent)
    this.store = new Set()
  }

  /**
   * @desc appends a new element with a specified value to the end of the .store
   * @memberOf ChainedSet
   * @since 0.4.0
   *
   * @param {any} value any value to add to **end** of the store
   * @return {ChainedSet} @chainable
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add mozilla-set-add}
   * {@link https://github.com/lodash/lodash/blob/master/.internal/addSetEntry.js#L9 lodash-add-set-entry}
   * @see {@link mozilla-set-add}
   * @see {@link lodash-add-set-entry}
   *
   * @example
   *
   *   const people = new ChainedSet()
   *   people
   *     .add('sam')
   *     .add('sue')
   *
   *   for (let name of people) console.log(name)
   *   //=> sam, sue
   *
   */
  add(value) {
    this.store.add(value)
    return this
  }

  /**
   * @desc inserts the value at the **beginning** of the Set
   * @memberOf ChainedSet
   * @since 0.4.0
   *
   * @param {any} value any value to add to **beginning** the store
   * @return {ChainedSet} @chainable
   *
   * @example
   *
   *   const people = new ChainedSet()
   *   people
   *     .add('sue')
   *     .prepend('first')
   *
   *   for (let name of people) console.log(name)
   *   //=> first, sue
   *
   */
  prepend(value) {
    this.store = new Set([value].concat(super.values()))
    return this
  }

  /**
   * @desc merge any Array/Set/Iteratable/Concatables into the array, at the end
   * @since 0.4.0
   * @memberOf ChainedSet
   *
   * @param {Array | Set | Concatable} arr values to merge in and append
   * @return {ChainedSet} @chainable
   *
   * @example
   *
   *   const people = new ChainedSet()
   *   people
   *     .add('sam')
   *     .add('sue')
   *     .prepend('first')
   *     .merge(['merged'])
   *
   *   for (let name of people) console.log(name)
   *   //=> first, sam, sue, merged
   *
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
