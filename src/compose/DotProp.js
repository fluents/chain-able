/**
 * @since 2.0.0
 */
const dot = require('../deps/dot')
const isDot = require('../deps/is/dot')

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
 * @param  {Class | Composable} SuperClass composable class
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
module.exports = SuperClass => {
  return class DotProp extends SuperClass {
    /**
     * @method dot
     * @methodChain DotProp
     * @since 3.0.1
     *
     * @param  {boolean} [useDot=undefined] use dot prop or not
     * @return {DotProp} @chainable
     *
     * @see deps/meta
     *
     * @example
     *
     *     const chain = new Chain()
     *     chain.dot(false)
     *     chain.set('moose.simple', 1)
     *
     *     toArr(chain.store.keys())
     *     //=> ['moose.simple']
     *
     */
    dot(useDot) {
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
     * @see ChainedMap.set
     * @see .dot
     *
     * @example
     *    const chain = new Chain()
     *
     *    chain.set('moose.simple', 1)
     *    //=> Chain store:Map:  { moose: { simple: 1 } }
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
    get(key, fallback) {
      return shouldDot(key, this)
        ? dot.get(super.entries(), key, fallback)
        : super.get(key)
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
    has(key) {
      return shouldDot(key, this)
        ? dot.has(super.entries(), key)
        : super.has(key)
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
    delete(key) {
      return shouldDot(key, this)
        ? dot.delete(super.entries(), key)
        : super.delete(key)
    }
  }
}
