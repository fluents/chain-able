/* eslint dot-notation: "OFF" */

/**
 * @since 2.0.0
 */
const isUndefined = require('../deps/is/undefined')
const isFunction = require('../deps/is/function')
const hasOwnPropertyFlipped = require('../deps/flipped/hasOwnPropertyFlipped')
const constant = require('../deps/fp/return')
const defaultToNoop = require('../deps/flipped/defaultToNoop')

const hasMeta = hasOwnPropertyFlipped('meta')

/**
 * @class Shorthands
 * @member Shorthands
 * @extends {ChainedMap}
 * @extends {DotProp}
 * @memberOf compose
 * @category Chainable
 *
 * @param  {Class | Composable} Target composable class
 * @return {Shorthands} class
 *
 * @tests Shorthands
 * @types Shorthands
 *
 * @see ChainedMap
 * @see DotProp
 * @see deps/matcher
 * @see deps/traversers/eq
 * @see deps/traverse
 * @see DotProp
 *
 * {@link https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts reactivex}
 * {@link https://github.com/sindresorhus/awesome-observables awesome-observables}
 * {@link https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 building-observables}
 * @see {@link reactivex}
 * @see {@link awesome-observables}
 * @see {@link building-observables}
 *
 * @example
 *
 *    const {compose} = require('chain-able')
 *    const {DotProp} = compose
 *    new DotProp()
 *    //=> DotProp
 *
 */
module.exports = Target => {
  const constructs = defaultToNoop(Target.prototype.construct)

  /**
   * @version 2.0.0 <- was constructor
   * @version 5.0.0 <- made as construct, meta check as call method > set
   *
   * @param  {*} parent @see Chainable
   * @return {void}
   */
  Target.prototype.construct = function(parent) {
    constructs.call(this, parent)
    this.debug(hasMeta(parent) ? parent.meta.debug : false)
  }

  /**
   * @desc sets on store not this.set for easier extension
   *
   * @since 4.0.0 <- moved from Extend to Shorthands
   * @since 0.2.0
   *
   * @param {boolean} [should=true] shouldDebug
   * @return {Chainable} @chainable
   *
   * @NOTE is inherited by any chain with a parent with .meta.debug
   *
   *  @example
   *
   *    const Chain = require('chain-able')
   *    const chain = new Chain()
   *    chain.debug()
   *
   *    chain.get('debug')
   *    //=> true
   *
   *    // not in entries
   *    chain.entries()
   *    //=> {}
   *
   */
  Target.prototype.debug = function(should) {
    this.meta.debug = isUndefined(should) ? true : should
    return this
  }

  /**
   * @desc sets a value **only** when .has is false
   *       aka set if the value has not been set
   *
   * @memberOf ShorthandChain
   * @since 1.0.2
   * @version 4.0.0 <- changed to be prototype method (not extension prototype)
   * @version 3.0.0 <- changed to use `this.has` vs `isFalse(this.has)`
   * @version 2.0.0 <- fixed but forgot to return conditionally
   *
   * @param {Primitive} name key to set if it has not been done so already
   * @param {any} value value to set when key has not been already set
   * @return {ShorthandChain} @chainable
   *
   * @see ChainedMapBase.set
   *
   * @example
   *
   *    const chain = new Chain()
   *
   *    chain.set('eh', true)
   *
   *    // eh is already set ^, ignored
   *    chain.setIfEmpty('eh', false)
   *
   *    chain.get('eh')
   *    //=> true
   *
   * @example
   *
   *   new Chain().setIfEmpty('canada', true).entries()
   *   //=> {canada: true}
   *
   * @example
   *
   *   // longhand way to do the same thing
   *   if (chain.has('eh') === false) {
   *     chain.set('eh', false)
   *   }
   *
   *   // or using .when
   *   chain.when(!chain.has('eh'), instance => instance.set('eh', false))
   *
   */
  Target.prototype.setIfEmpty = function(name, value) {
    if (this.has(name)) return this
    else return this.set(name, value)
  }

  /**
   * @desc returns any value passed in
   *       return a value at the end of a chain regardless
   *
   * @memberOf ShorthandChain
   * @since 3.0.0
   *
   * @see fp/return
   * @param  {any} value value to return at the end of a chain
   * @return {any} value
   *
   * @example
   *
   *    const chain = new Chain()
   *
   *    const saveAndDebug = env => chain
   *      .from({env: env.NODE_ENV})
   *      .return(JSON.stringify(env))
   *
   *    console.log(saveAndDebug(process.env))
   *    //=> value of process.env
   *
   */
  Target.prototype['return'] = constant

  /**
   * @desc wrap a value, if it's a Function call it, return this
   *       aka execute something and return this
   *
   * @memberOf ShorthandChain
   * @since 2.0.0
   * @param  {Function | any} fn function to call, or just any value
   * @return {ShorthandChain} @chainable
   *
   * @example
   *
   *    const {eh} = chain.wrap(chain => chain.eh = true)
   *    //=> true
   *
   * @example
   *
   *    new Chain()
   *      .wrap(encased => encased.fn = arg => {
   *        throw new Error('encased yo')
   *      })
   *      .method('fn')
   *      .encase()
   *      .catch(error => {
   *        //=> Error('encasedYo')
   *      })
   *      .build()
   *      .fn(true)
   *
   */
  Target.prototype.wrap = function(fn) {
    if (isFunction(fn)) fn.call(this, this)
    return this
  }

  return Target
}
