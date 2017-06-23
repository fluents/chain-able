const TraverseChain = require('../TraverseChain')
const isObj = require('../deps/is/obj')
const ObjectKeys = require('../deps/util/keys')
const dotPropPaths = require('../deps/dot-prop-paths')
const TRANSFORMERS_KEY = require('../deps/meta/transformers')
const OBSERVERS_KEY = require('../deps/meta/observers')

module.exports = (SuperClass, opts) => {
  return class Transform extends SuperClass {
    // -------------------------------------------

    /**
     * @since 1.0.2
     * @desc traverse `this`, or `this.entries`
     * @see TraverseChain
     * @see js-traverse
     * @param  {boolean | traversable} [useThis=false]
     * @return {ChainedMapExtendable} @chainable
     */
    traverse(useThis = false) {
      /* prettier-ignore */
      return new TraverseChain(this)
        .obj(useThis === false
          ? this.entries(true)
          : useThis === true
            ? this
            : useThis
        )
    }

    /**
     * @TODO dot-prop here
     * @since 1.0.2
     * @TODO handle[transformers] with an array...
     * @see obj-chain
     *
     * @example
     *   this
     *     .transform('dis', val => (typeof val === 'string' ? val : val.id))
     *     .set('dis', 'eh') // .get('dis') === 'eh'
     *     .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
     *
     * @param  {string | Function} key currently just string
     * @param  {Function} value
     * @return {This} @chainable
     */
    transform(key, value) {
      return this.meta(TRANSFORMERS_KEY, key, value)
    }

    /**
     * @override
     * @inheritdoc
     * @see this.observe, this.transform
     * @since 1.0.0
     */
    set(key, val, dotPropKey = undefined) {
      let value = val

      /* prettier-ignore */
      const transformers = this.meta(TRANSFORMERS_KEY, key)
      for (let t = 0; t < transformers.length; t++) {
        value = transformers[t].call(this, value, this)
      }

      super.set(key, value)

      const data = {key: dotPropKey, value}
      if (dotPropKey === undefined) {
        data.key = isObj(value) ? dotPropPaths(key, value) : key
      }

      const observers = this.meta(OBSERVERS_KEY)
      for (let o = 0; o < observers.length; o++) {
        observers[o](data)
      }

      return this
    }

    // --- remap ---

    /**
     * @TODO: could also be a function, but then might as well use .transform
     * @since 1.0.0
     * @example
     *  this
     *    .remap('dis', 'dat')
     *    .remap({dis: 'dat'})
     *    .from({dis: true})
     *  == {dat: true}
     *
     * @param  {string} from property name
     * @param  {string} to property name to change key to
     * @return {Chain} @chainable
     */
    remap(from, to) {
      let remap = from
      if (!isObj(from)) remap = {[from]: to}

      /* prettier-ignore */
      ObjectKeys(remap).forEach(key => this.transform(key, val => {
        this.set(remap[key], val)
        return val
      }))

      return this
    }
  }
}
