const dopemerge = require('./deps/dopemerge')
const Chainable = require('./Chainable')

/**
 * @since 1.0.0
 * @type {Map}
 */
class MergeChain extends Chainable {
  /**
   * @param  {Chainable} parent required, for merging
   * @return {MergeChain} @chainable
   */
  static init(parent) {
    return new MergeChain(parent)
  }

  /**
   * @inheritdoc
   */
  constructor(parent) {
    super(parent)
    this.store = new Map()
    this.set = (name, val) => {
      this.store.set(name, val)
      return this
    }
    this.get = name => this.store.get(name)
  }

  /**
   * @since 1.0.0
   * @desc can pass in a function same as .merge,
   *       but say, .set instead of merge
   *
   * @param  {Function} cb
   * @return {MergeChain} @chainable
   */
  onExisting(cb) {
    return this.set('onExisting', cb)
  }

  /**
   * @since 1.0.1
   * @desc can pass in a function to check values, such as ignoring notReal
   * @example .onValue(val => val !== null && val !== undefined)
   * @param  {Function} cb
   * @return {MergeChain} @chainable
   */
  onValue(cb) {
    return this.set('onValue', cb)
  }

  /**
   * @since 1.0.2
   * @desc for using custom callback
   * @param  {Object} obj
   * @return {MergeChain} @chainable
   */
  obj(obj) {
    return this.set('obj', obj)
  }

  /**
   * @since 1.0.2
   * @desc options for merging with dopemerge
   *       @modifies this.merger | this.opts
   * @param  {Object | Function} opts
   * @return {MergeChain} @chainable
   *
   * @example
   * {
   *   stringToArray: true,
   *   boolToArray: false,
   *   boolAsRight: true,
   *   ignoreTypes: ['null', 'undefined', 'NaN'],
   *   debug: false,
   * }
   *
   * @example
   *  .merger(require('lodash.mergewith')())
   */
  merger(opts) {
    if (typeof opts === 'function') return this.set('merger', opts)
    return this.set('opts', opts)
  }

  /**
   * @since 1.0.0
   * @desc merges object in, goes through all keys, checks cbs, dopemerges
   * @param  {Object} obj2 object to merge in
   * @return {MergeChain} @chainable
   */
  merge(obj2) {
    let onValue = this.get('onValue')
    let onExisting = this.get('onExisting')

    const opts = this.get('opts') || {}
    const merger =
      this.get('merger') ||
      ((existing, value) => dopemerge(existing, value, opts))

    let obj = obj2
    if (this.has('obj') === true && !obj) {
      obj = this.get('obj')
    }

    // @TODO do this
    // if (obj2 instanceof Chainable) {
    //   // is map
    //   if (obj2.entries) obj2 = obj2.entries()
    //   // set, much easier to merge
    //   // else if (obj2.values)
    // }

    // const onChildChain = this.get('onChildChain') (is just .merge)
    // const onDefault = this.get('onDefault') (is .set)
    const shorthands = this.parent.shorthands

    // for (let i = 0; i < keys.length; i++) const key = keys[i]
    const keys = Object.keys(obj)
    for (let k = 0, len = keys.length; k < len; k++) {
      const key = keys[k]
      const value = obj[key]

      // use onValue when set
      if (onValue !== undefined && onValue(obj[key], key) === false) {
        continue
      }
      else if (this.parent[key] && this.parent[key] instanceof Chainable) {
        // when property itself is a Chainable
        this.parent[key].merge(value)
      }
      else if (shorthands !== undefined && shorthands.includes(key)) {
        // check if it is shorthanded
        // has a value already
        if (this.parent.has(key) === true) {
          // get that value
          const existing = this.parent.get(key)

          // setup vars
          let merged = existing

          // if we have a cb, call it
          // default to dopemerge
          if (onExisting === undefined) {
            merged = merger(existing, value)
          }
          else {
            merged = onExisting(existing, value)
          }

          this.parent[key](merged)
        }
        else {
          this.parent[key](value)
        }
      }
      else if (this.parent[key] !== undefined) {
        // when fn is a full method, not an extended shorthand
        // console.log({key})
        this.parent[key](value)
      }
      else {
        // default to .set on the store
        this.parent.set(key, value)
      }
    }

    return this.parent
  }
}

module.exports = MergeChain
