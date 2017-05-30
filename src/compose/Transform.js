const TraverseChain = require('../TraverseChain')

module.exports = (SuperClass, opts) => {
  return class Transform extends SuperClass {
    // -------------------------------------------

    /**
     * @since 1.0.2
     * @desc traverse `this`, or `this.entries`
     * @see TraverseChain
     * @see js-traverse
     * @param  {boolean} [useThis=false]
     * @return {ChainedMapExtendable} @chainable
     */
    traverse(useThis = false) {
      /* prettier-ignore */
      return new TraverseChain(this)
        .obj(useThis === false ? this.entries(true) : this)
    }

    // but could specify the key
    // could .tap methods with like .decorate
    // this is super expensive
    // afterNext(cb) {
    //   // loop each fn
    //   // wrap
    // }

    /**
     * @since 1.0.2
     * @TODO handle transformers with an array...
     * @see obj-chain
     *
     * @example
     *   this
     *     .transform('dis', val => (typeof val === 'string' ? val : val.id))
     *     .set('dis', 'eh') // .get('dis') === 'eh'
     *     .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
     *
     * @param  {string | Function} key currently just string
     * @param  {any | Function} value
     * @return {This} @chainable
     */
    transform(key, value) {
      if (this.transformers === undefined) this.transformers = {}
      this.transformers[key] = value
      return this
    }

    /**
     * @inheritdoc
     * @see this.observe, this.transform
     * @since 1.0.0
     */
    set(key, val) {
      let value = val
      /* prettier-ignore */
      if (this.transformers !== undefined && this.transformers[key] !== undefined) {
        value = this.transformers[key](value, this)
      }

      super.set(key, value)

      if (this.observers !== undefined) {
        this.observers.values().forEach(observer => observer({key, value}))
      }

      return this
    }

    /**
     * @TODO add to .set
     * @inheritdoc
     * @override
     * @since 1.0.0
     * @desc if we have a keymap, remap, otherwise, just normal .from
     * @see FlipChain.from
     * @example chain.from({eh: true}) === chain.merge({eh: true})
     * @param  {Object} obj
     * @return {Chain} @chainable
     */
    from(obj) {
      if (this.has('keymap') === false) {
        return super.from(obj)
      }

      const keymap = this.get('keymap')
      const keys = Object.keys(obj)
      const mappedKeys = keys.map(key => {
        if (keymap[key]) return keymap[key]
        return key
      })

      for (let i = 0; i < keys.length; i++) {
        const key = mappedKeys[i]
        // skip if we already have it
        if (obj[key]) continue
        // otherwise, set it, can delete the old one
        obj[key] = obj[keys[i]]
      }

      return super.from(obj)
    }

    // --- remap ---

    /**
     * @TODO could also be an array of `from` and corresponds to an array of `to`
     * @since 1.0.0
     * @example
     *  this
     *    .remapKeys()
     *    .remapKey('dis', 'dat')
     *    .from({dis: true})
     *  == {dat: true}
     *
     * @param  {string} from property name
     * @param  {string} to property name to change key to
     * @return {Chain} @chainable
     */
    remapKey(from, to) {
      if (this.has('keymap') === false) this.set('keymap', {})
      this.get('keymap')[from] = to
      return this
    }
  }
}
