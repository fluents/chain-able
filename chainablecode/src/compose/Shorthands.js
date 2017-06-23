/**
 * @since 2.0.0
 */

module.exports = (SuperClass, opts) => {
  return class Shorthands extends SuperClass {
    // --- helpers  ---
    constructor(parent) {
      super(parent)

      if (parent && parent.meta) {
        this.meta.debug = parent.meta.debug
      }
      else {
        this.debug(false)
      }
    }

    /**
     * @since 4.0.0 <- moved from Extend to Shorthands
     * @since 0.2.0
     * @NOTE sets on store not this.set for easier extension
     * @param {boolean} [should=true]
     * @return {Chainable} @chainable
     */
    debug(should) {
      this.meta.debug = should === undefined ? true : should
      return this
    }

    /**
     * @since 4.0.0 <- moved into .methods
     * @since 3.0.0
     * @desc encase a method with try-catch easy chain
     * @param  {string}  method
     * @param  {boolean} [rethrow=false] or 1 to rechain?
     * @return {Shorthands} @chainable
     */
    // encase(method, rethrow = false) {
    //   return this.method(method)
    //     .encase()
    //     .decorateParent(['then', 'catch'])
    //     .build()
    // }

    /**
     * @desc set if the value has not been set
     * @since 1.0.2
     * @see this.set
     * @param {string} name
     * @param {any} value
     * @return {This} @chainable
     */
    setIfEmpty(name, value) {
      if (this.has('name') === false) this.set(name, value)
      return this
    }

    // --- added new ChainedMapExtendable stuff ---

    /**
     * @desc return a value at the end of a chain regardless
     * @param  {any} value value to return at the end of a chain
     * @return {any}
     */
    return(value) {
      return value
    }

    /**
     * @desc execute something and return this
     * @param  {any} fn
     * @return {This} @chainable
     */
    wrap(fn) {
      if (typeof fn === 'function') fn.call(this, this)
      return this
    }
  }
}
