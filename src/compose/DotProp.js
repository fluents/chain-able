/**
 * @since 2.0.0
 */
const dot = require('../deps/dot')
const isDot = require('../deps/is/dot')

/**
 * @since 3.0.1
 * @desc checks if this._dot != false & isDot(key)
 * @see this.dot
 * @param  {string} key
 * @param  {DotProp} thisArg
 * @return {boolean}
 */
const shouldDot = (key, thisArg) => thisArg.meta.dot !== false && isDot(key)

module.exports = (SuperClass, opts) => {
  return class DotProp extends SuperClass {
    /**
     * @param  {boolean} [useDot=true]
     * @return {DotProp} @chainable
     */
    dot(useDot) {
      this.meta.dot = useDot
      return this
    }

    /**
     * @since 3.0.1
     * @override
     * @inheritdoc
     * @see .dot
     * @desc since we have a map,
     *       we need to ensure the first property is available
     *       otherwise we have an empty map.entries obj
     *       which does nothing by reference
     */
    set(key, val) {
      if (shouldDot(key, this)) {
        // first accessor
        // @example: `canada` in `canada.eh`
        const prop = key.split('.').shift()

        // we already know it is .dot, call super instead
        // if (!super.has(prop)) super.set(prop, {})

        // spread
        const data = super.entries()

        // set on the spread data
        dot.set(data, key, val)

        // is already by ref, but be extra safe, + observables
        return super.set(prop, data[prop], key)
      }
      return super.set(key, val)
    }

    /**
     * @TODO !!! dot-prop on .property when using nested chains...
     * @since 3.0.1
     * @override
     * @inheritdoc
     * @see .dot
     * @param {Primitive} key
     * @param {any} fallback
     */
    get(key, fallback) {
      return shouldDot(key, this)
        ? dot.get(super.entries(), key, fallback)
        : super.get(key)
    }

    /**
     * @since 3.0.1
     * @override
     * @inheritdoc
     * @see .dot
     */
    has(key) {
      return shouldDot(key, this)
        ? dot.has(super.entries(), key)
        : super.has(key)
    }

    /**
     * @since 3.0.1
     * @override
     * @inheritdoc
     * @see .dot
     */
    delete(key) {
      return shouldDot(key, this)
        ? dot.delete(super.entries(), key)
        : super.delete(key)
    }
  }
}
