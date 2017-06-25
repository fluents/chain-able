const MethodChain = require('./MethodChain')
const ChainedMapBase = require('./ChainedMapBase')
const dopemerge = require('./deps/dopemerge')
const isFunction = require('./deps/is/function')
const isUndefined = require('./deps/is/undefined')
const isTrue = require('./deps/is/true')
const isMapish = require('./deps/is/mapish')
const ObjectKeys = require('./deps/util/keys')
const SHORTHANDS_KEY = require('./deps/meta/shorthands')

const ON_EXISTING_KEY = 'onExisting'
const ON_VALUE_KEY = 'onValue'
const MERGER_KEY = 'merger'
const MERGER_OPTIONS_KEY = 'opts'
const OBJ_KEY = 'obj'

/**
 * @since 1.0.0
 * @type {Map}
 */
class MergeChain extends ChainedMapBase {
  /**
   * @param  {Chainable} parent required, for merging
   * @return {MergeChain} @chainable
   */
  static init(parent) {
    return new MergeChain(parent)
  }

  /**
   * @inheritdoc
   */
  constructor(parent) {
    super(parent)

    /* prettier-ignore */
    this
      .extend([ON_EXISTING_KEY, ON_VALUE_KEY, OBJ_KEY])
      .set(ON_VALUE_KEY, () => true)
      .set(MERGER_KEY, dopemerge)
  }

  /**
   * @since 1.0.2
   * @desc options for merging with dopemerge
   *       @modifies this.merger | this.opts
   * @param  {Object | Function} opts
   * @return {MergeChain} @chainable
   *
   * @example
   * {
   *   stringToArray: true,
   *   boolToArray: false,
   *   boolAsRight: true,
   *   ignoreTypes: ['null', 'undefined', 'NaN'],
   *   debug: false,
   * }
   *
   * @example
   *  .merger(require('lodash.mergewith')())
   */
  merger(opts) {
    if (isFunction(opts)) return this.set(MERGER_KEY, opts)
    return this.set(MERGER_OPTIONS_KEY, opts)
  }

  /**
   * @since 1.0.0
   *
   * @TODO issue here if we extend without shorthands &
   *       we want to merge existing values... :s
   *
   * @desc merges object in, goes through all keys, checks cbs, dopemerges
   * @param  {Object} obj2 object to merge in
   * @return {MergeChain} @chainable
   */
  merge(obj2) {
    // better uglifying
    const parent = this.parent
    const get = key => this.get(key)

    const onExisting = get(ON_EXISTING_KEY)
    const onValue = get(ON_VALUE_KEY)
    const opts = get(MERGER_OPTIONS_KEY)
    const obj = obj2 || get(OBJ_KEY) // @TODO: else, throw error on dev
    const merger = get(MERGER_KEY)
    const shorthands = parent.meta(SHORTHANDS_KEY)
    const keys = ObjectKeys(obj)

    // @TODO do this
    // if (obj2 instanceof Chainable) {
    //   // is map
    //   if (obj2.entries) obj2 = obj2.entries()
    //   // set, much easier to merge
    //   // else if (obj2.values)
    // }
    // @TODO isEqual here?
    //
    // @NOTE
    // since this would be slower
    // if I want to not have a speedy default when using .onExisting
    // need to note to use .extend
    // when using chains without a class & doing .merge (edge-case)
    const handleExisting = (key, value) => {
      // when fn is a full method, not an extended shorthand
      const hasFn = isFunction(parent[key])
      const hasKey = parent.has(key)
      const set = (k, v) => (hasFn ? parent[k](v) : parent.set(k, v))

      // check if it is shorthanded
      // has a value already
      if (isTrue(hasKey)) {
        // get that value
        const existing = parent.get(key)

        // if we have a cb, call it
        // default to dopemerge
        if (isUndefined(onExisting)) {
          // console.log('no onExisting', {existing, value, key})
          set(key, merger(existing, value, opts))
        }
        else {
          // maybe we should not even have `.onExisting`
          // since we can just override merge method...
          // and then client can just use a custom merger...
          //
          // could add and remove subscriber but that's overhead and ug
          // tricky here, because if we set a value that was just set...
          // console.log('has onExisting', {existing, value, key, onExisting})
          set(key, onExisting(existing, value, opts))
        }
      }
      else {
        set(key, value)
      }
    }

    for (let k = 0, len = keys.length; k < len; k++) {
      const key = keys[k]
      const value = obj[key]
      const method = parent[key]

      /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
      // use onValue when set
      if (!onValue(value, key, this)) {
        continue
      }
      else if (isMapish(method)) {
        // when property itself is a Chainable
        parent[key].merge(value)
      }
      else if (method || shorthands[key]) {
        // console.log('has method or shorthand')
        handleExisting(key, value)
      }
      else {
        // console.log('went to default')
        // default to .set on the store
        parent.set(key, value)
      }
    }

    return parent
  }
}

module.exports = MergeChain

// @TODO re-enable this later
// module.exports = new MethodChain(MergeChain.prototype)
//   .methods(['onExisting', 'onValue', 'obj'])
//   .build(MergeChain)
