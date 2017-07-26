/**
 * @since 2.0.0
 */
const dot = require('../deps/dot')
const isDot = require('../deps/is/dot')

// const accessor = x => x.split('.')[0]

/**
 * @desc checks if this.meta.dot != false & isDot(key) - scoped
 *
 * @private
 * @since 3.0.1
 *
 * @param  {string} key key in .get/.has/.delete/set
 * @param  {DotProp} thisArg Chain
 * @return {boolean} shouldDot
 *
 * @see DotProp.dot
 * @see deps/is/dot
 * @see deps/meta
 * @see https://lodash.com/docs/#get
 * @see https://github.com/sindresorhus/dot-prop
 *
 * @example
 *
 *  const chain = new DotProp()
 *  shouldDot('me.me', chain)
 *  //=> true
 *
 *  const chain = new DotProp()
 *  shouldDot('me', chain)
 *  //=> false
 *
 *  const chain = new DotProp()
 *  chain.dot(false)
 *  shouldDot('me.me', chain)
 *  //=> false
 *
 */
const shouldDot = (key, thisArg) => thisArg.meta.dot !== false && isDot(key)

/**
 * @class DotProp
 * @member Observe
 * @extends {ChainedMap}
 * @memberOf compose
 * @category Chainable
 *
 * @param  {Class | Composable} Target composable class
 * @return {DotProp} class
 *
 * @tests DotProp
 * @types DotProp
 *
 * @see deps/dot
 *
 * @example
 *
 *    const {compose} = require('chain-able')
 *    const {DotProp} = compose
 *    new DotProp()
 *    //=> DotProp
 *
 * @example
 *
 *    const chain = new Chain()
 *
 *    chain.set('moose.simple', 1)
 *    //=> Chain
 *
 *    chain.get('moose.simple')
 *    //=>1
 *
 *    chain.get('moose')
 *    //=> {simple: 1}
 *
 *    chain.set('moose.canada.eh', true).set('moose.canada.igloo', true)
 *    //=> Chain
 *
 *    //set, has, get, delete :-)
 *    chain.delete('moose.canada.eh')
 *    //=> Chain
 *
 *    //also works with an array (moose.canada.igloo)
 *    chain.get(['moose', 'canada', 'igloo'])
 *    //=> true
 *
 */
module.exports = Target => {
  // is this any better?
  const entries = Target.prototype.entries
  const set = Target.prototype.set
  const has = Target.prototype.has
  const get = Target.prototype.get
  const del = Target.prototype.delete

  /**
   * @method dot
   * @methodTarget DotProp
   * @since 3.0.1
   *
   * @param  {boolean} [useDot=undefined] use dot prop or not
   * @return {DotProp} @chainable
   *
   * @see deps/meta
   *
   * @example
   *
   *     const chain = new Target()
   *     chain.dot(false)
   *     chain.set('moose.simple', 1)
   *
   *     toArr(chain.store.keys())
   *     //=> ['moose.simple']
   *
   */
  Target.prototype.dot = function enableDisableDot(useDot) {
    this.meta.dot = useDot
    return this
  }

  /**
   * @desc since we have a map,
   *       we need to ensure the first property is available
   *       otherwise we have an empty map.entries obj
   *       which does nothing by reference
   * @since 3.0.1
   * @memberOf DotProp
   *
   * @override
   * @inheritdoc
   *
   * @see TargetedMap.set
   * @see .dot
   *
   * @example
   *    const chain = new Target()
   *
   *    chain.set('moose.simple', 1)
   *    //=> Target store:Map:  { moose: { simple: 1 } }
   */
  Target.prototype.set = function dotSet(key, val) {
    if (shouldDot(key, this)) {
      // first accessor
      // @example: `canada` in `canada.eh`
      // @TODO could use `first`
      // @NOTE was `.shift` but this is the only `.shift` anywhere
      const prop = key.split('.')[0]

      // we already know it is .dot, call super instead
      // if (!super.has(prop)) super.set(prop, {})

      // spread
      const data = entries.call(this)

      // set on the spread data
      dot.set(data, key, val)

      // is already by ref, but be extra safe, + observables
      return set.call(this, prop, data[prop], key)
    }

    return set.call(this, key, val)
  }

  /**
   * @desc dot-prop enabled get
   * @method get
   * @memberOf DotProp
   *
   * @since 3.0.1
   * @override
   * @inheritdoc
   *
   * @param {Primitive} key dot prop key, or any primitive key
   * @param {any} [fallback=undefined] fallback value, if it cannot find value with key path
   * @return {any} value for path, or fallback value if provided
   *
   * @see ChainedMap.get
   * @see deps/dot
   * @see deps/is/dot
   *
   * @TODO dot-prop on non-store instance.property when using nested chains...
   *
   * @example
   *
   *    chain.set('moose.simple', 1)
   *    //=> Chain
   *
   *    chain.get('moose.simple')
   *    //=>1
   *
   *    chain.get('moose')
   *    //=> {simple: 1}
   *
   * @example
   *
   *    //also works with an array (moose.simple)
   *    chain.get(['moose', 'simple'])
   *    //=> 1
   *
   */
  Target.prototype.get = function dotGet(key, fallback) {
    return shouldDot(key, this)
      ? dot.get(entries.call(this), key, fallback)
      : get.call(this, key)
  }

  /**
   * @method has
   * @methodOf DotProp
   * @since 3.0.1
   * @override
   * @inheritdoc
   *
   * @see deps/dot
   * @see deps/is/dot
   *
   * @example
   *
   *  chain.set('one.two', 3)
   *  chain.has('one.two')
   *  //=> true
   *
   */
  Target.prototype.has = function dotHas(key) {
    return shouldDot(key, this)
      ? dot.has(entries.call(this), key)
      : has.call(this, key)
  }

  /**
   * @method delete
   * @methodOf DotProp
   * @since 3.0.1
   *
   * @override
   * @inheritdoc
   * @see deps/dot
   * @see deps/is/dot
   *
   * @example
   *
   *    chain.set('moose.canada.eh', true)
   *    chain.set('moose.canada.igloo', true)
   *    //=> Chain
   *
   *    chain.delete('moose.canada.eh')
   *    //=> Chain
   *
   *    chain.has('moose.canada.eh')
   *    //=> true
   *
   *    //still has moose.canada.igloo
   *    chain.has('moose.canada')
   *    //=> true
   *
   */
  Target.prototype.delete = function dotDelete(key) {
    return shouldDot(key, this)
      ? dot.delete(entries.call(this), key)
      : del.call(this, key)
  }

  return Target
}
