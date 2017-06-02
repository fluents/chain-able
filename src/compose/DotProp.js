/**
 * @since 2.0.0
 */
const dot = require('../deps/dot-prop')
const isDot = k => typeof k === 'string' && k.includes('.')

module.exports = (SuperClass, opts) => {
  return class DotProp extends SuperClass {
    set(key, val) {
      return isDot(key)
        ? super.set(
            key.split('.').shift(),
            dot.set(super.entries(this), key, val) || val
          )
        : super.set(key, val)
    }
    get(key) {
      return isDot(key) ? dot.get(super.entries(this), key) : super.get(key)
    }
    has(key) {
      return isDot(key) ? dot.has(super.entries(this), key) : super.has(key)
    }
    delete(key) {
      return isDot(key)
        ? dot.delete(super.entries(this), key)
        : super.delete(key)
    }

    /**
     * @desc returns a dot chain
     * @since 1.0.0
     * @param {string | null} [name=null]
     * @return {Object}
     */
    dotter(name = null) {
      if (name !== null) {
        // if (this.get('debug') === true) {
        //   console.log('chain:dotter:used-name', {name})
        // }
        return this._dotter(name)
      }

      return {
        name: dotName => this._dotter(dotName),
      }
    }

    /**
     * @protected
     * @since 1.0.0
     * @TODO split into a class
     * @see FlipChain.when
     * @desc take a dot-prop (or normal string) name
     *       returns an object with `.dotted` & `.otherwise`
     * @param  {string} name
     * @return {Object}
     */
    _dotter(name) {
      let accessor = name
      let first = name
      let hasDot = isDot(name)
      let value

      if (hasDot) {
        accessor = name.split('.')
        first = accessor.shift()
      }

      const dotted = {}

      dotted.dotted = cb => {
        if (hasDot === false) return dotted
        value = cb(first, accessor, name)
        return dotted
      }

      dotted.otherwise = cb => {
        if (hasDot === true) return dotted
        value = cb(name)
        return dotted
      }

      // chain it
      dotted.dotted.otherwise = dotted.otherwise

      dotted.value = () => {
        return value
      }

      return dotted
    }
  }
}
