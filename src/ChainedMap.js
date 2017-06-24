const isUndefined = require('./deps/is/undefined')
const MergeChain = require('./MergeChain')
const MethodChain = require('./MethodChain')
const ChainedMapCore = require('./ChainedMapBase')

// CM = ComposeMap
const CM = SuperClass => {
  const Composed = SuperClass === ChainedMapCore
    ? SuperClass
    : ChainedMapCore.compose(SuperClass)

  class ChainedMap extends Composed {
    /* prettier-ignore */
    methods(names) { return this.method(names) }

    /**
     * @since 4.0.0
     * @alias methods
     * @param  {string | Array<string> | Primitive} names
     * @return {MethodChain}
     */
    method(names) {
      return new MethodChain(this).name(names)
    }

    /**
     * @TODO needs to pass in additional opts somehow...
     * @see dopemerge, MergeChain
     * @since 0.4.0
     *       ...as second arg? on instance property?
     * @example chain.set('eh', [1]).merge({eh: [2]}).get('eh') === [1, 2]
     * @desc merges an object with the current store
     * @param {Object} obj object to merge
     * @param {Function | null} cb return the merger to the callback
     * @return {ChainedMap} @chainable
     */
    merge(obj, cb) {
      const merger = MergeChain.init(this)
      if (isUndefined(cb)) {
        merger.merge(obj)
      }
      else {
        cb(merger.obj(obj))
      }
      return this
    }
  }
  return ChainedMap
}

const cm = CM(ChainedMapCore)
cm.compose = CM

module.exports = cm
