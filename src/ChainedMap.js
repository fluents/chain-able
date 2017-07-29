const isUndefined = require('./deps/is/undefined')
const MergeChain = require('./MergeChain')
const MethodChain = require('./MethodChain')
const ChainedMapBase = require('./ChainedMapBase')
const composer = require('./compose/composer')

/**
 * @desc ChainedMap composer
 * @category Chainable
 * @category Map
 * @memberOf ChainedMapBase
 * @class ChainedMap
 * @since 0.0.1
 * @alias ComposeMap
 * @extends {ChainedMapBase}
 *
 * @param {Class | Object | Composable} [Target=ChainedMapBase] class to extend
 * @return {Class} ChainedMap
 *
 * @see ChainedMapBase
 * @tests ChainedMap
 * @types ChainedMap
 *
 * @example
 *
 *    const heh = class {}
 *    const composed = ChainedMap.compose(heh)
 *    const hehchain = new Composed()
 *    hehchain instanceof heh
 *    //=> true
 *
 */

const ComposeChainedMap = Target => {
  let Composed = Target

  // @NOTE compose now does this
  // const Composed =
  //   Target === ChainedMapBase || Target.constructor.name === ChainedMapBase.constructor.name
  //     ? Target
  //     : ChainedMapBase.compose(Target)

  class ChainedMap extends Composed {
    /* prettier-ignore */
    /* @private */
    methods(names) { return this.method(names) }

    /**
     * @desc the way to easily start building methods when using chainable instances
     *
     * @since 4.0.0
     * @category methods
     * @alias methods
     *
     * @param  {string | Array<string> | Primitive} names method names to add to the object
     * @return {MethodChain} @chainable
     *
     * @see MethodChain
     *
     * @example
     *
     *   const chain = new Chain()
     *   chain.method('eh').build()
     *   chain.eh(true)
     *   chain.get('eh')
     *   //=> true
     *
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
     * @see deps/dopemerge
     * @see MergeChain
     *
     * @example
     *
     *    const chain = new Chain()
     *    chain.set('eh', [1])
     *    chain.merge({eh: [2]})
     *    chain.get('eh')
     *    //=> [1, 2]
     *
     * @example
     *
     *   const chain = new Chain()
     *   chain.set('emptyArr', [])
     *   chain.merge({emptyArr: []}, mergeChain =>
     *     mergeChain.onExisting((a, b) => []).merger((a, b) => []).merge()
     *   )
     *   chain.get('emptyArr').length)
     *   //=> 0
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


const composed = composer(ComposeChainedMap, ChainedMapBase)

module.exports = composed
