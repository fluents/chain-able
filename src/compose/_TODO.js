// but could specify the key
// could .tap methods with like .decorate
// this is super expensive
// afterNext(cb) {
//   // loop each fn
//   // wrap
// }
/**
 * @since 1.0.2
 * @desc traverse `this`, or `this.entries`
 * @see TraverseChain
 * @see js-traverse
 * @param  {Function[]} funcs functions to flow left to right
 * @return {Function} passes args through the functions, bound to this
 */
// flow(...funcs) {
//   const length = funcs ? funcs.length : 0
//   return (...args) => {
//     let index = 0
//     // eslint-disable-next-line
//     let result = length ? funcs[index].apply(this, args) : args[0]
//     for (; index < length; ++index) {
//       // eslint-disable-next-line
//       result = funcs[index].call(this, result)
//     }
//     return result
//   }
// }

// @TODO: this
// sponge(useThis = true) {
//   ObjectKeys(this).forEach(key => {
//     if (!isFunction(this[key])) {
//       this.set(key, this[key])
//       delete this[key]
//     }
//   })
// }
/**
 * @TODO: do this...
 * @param  {Primitive} key
 * @param  {Function} fn
 * @return {This} @chainable
 */
// compute(key, fn) {
//   return this.transform(key, value => {
//     fn(value, this)
//     return value
//   })
// }

/**
     * @NOTE could just do chain.values().forEach...
     * @desc loop over values
     * @since 1.0.2
     * @param {Function} cb
     * @return {Chainable} @chainable
     */
// forEach(cb) {
//   this.values().forEach(cb, this)
//   return this
// }
//

/**
     * @since 1.0.2
     * @desc
     *      checks mixins,
     *      checks prototype,
     *      checks if it has a store
     *      or parent or className
     *
     * @example new Chainable() instanceof Chainable
     * @type {Symbol.wellknown}
     * @param {Chainable | Object | any} instance
     * @return {boolean} instanceof
     */
// [Instance](instance) {
//   return Chainable[Instance](instance, this)
// }
