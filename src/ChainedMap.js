const isUndefined = require('./deps/is/undefined')
const MergeChain = require('./MergeChain')
const MethodChain = require('./MethodChain')
const ChainedMapCore = require('./ChainedMapBase')

/**
 * @desc ChainedMap composer
 * @alias ComposeMap
 * @param {Class | Object | Composable} [SuperClass=ChainedMapBase] class to extend
 * @return {Class} ChainedMap
 * @see ChainedMapBase
 *
 * @example
 *    const heh = class {}
 *    const composed = ChainedMap.compose(heh)
 *    const hehchain = new Composed()
 *    hehchain instanceof heh
 *    //=> true
 */
const CM = SuperClass => {
  const Composed = SuperClass === ChainedMapCore
    ? SuperClass
    : ChainedMapCore.compose(SuperClass)

  class ChainedMap extends Composed {
    /* prettier-ignore */
    /* @private */
    methods(names) { return this.method(names) }

    /**
     * @since 4.0.0
     * @category methods
     * @alias methods
     * @see MethodChain
     * @param  {string | Array<string> | Primitive} names method names to add to the object
     * @return {MethodChain} @chainable
     *
     * @example
     *
     *   const chain = new Chain()
     *   chain.method('eh').build()
     *   chain.eh(true)
     *   chain.get('eh')
     *   // => true
     */
    method(names) {
      return new MethodChain(this).name(names)
    }

    /**
     * @desc merges an object with the current store
     * @since 0.4.0
     * @category merge
     *
     * @param {Object} obj object to merge
     * @param {Function | null} [handleMergeFn=undefined] return the merger to the callback
     * @return {ChainedMap} @chainable
     *
     * @TODO needs to pass in additional opts somehow...
     * @see dopemerge
     * @see MergeChain
     *
     * @example
     *
     *    chain.set('eh', [1])
     *    chain.merge({eh: [2]})
     *    chain.get('eh')
     *    // => [1, 2]
     *
     */
    merge(obj, handleMergeFn) {
      const merger = MergeChain.init(this)
      if (isUndefined(handleMergeFn)) {
        merger.merge(obj)
      }
      else {
        handleMergeFn(merger.obj(obj))
      }
      return this
    }
  }
  return ChainedMap
}

const cm = CM(ChainedMapCore)
cm.compose = CM

module.exports = cm
