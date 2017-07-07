/* eslint complexity: "OFF" */
const MethodChain = require('./MethodChain')
const ChainedMapBase = require('./ChainedMapBase')
const dopemerge = require('./deps/dopemerge')
const isFunction = require('./deps/is/function')
const isUndefined = require('./deps/is/undefined')
const isTrue = require('./deps/is/true')
const isMapish = require('./deps/is/mapish')
const ObjectKeys = require('./deps/util/keys')
const SHORTHANDS_KEY = require('./deps/meta/shorthands')
const ENV_DEVELOPMENT = require('./deps/env/dev')
const ENV_DEBUG = require('./deps/env/debug')

const ON_EXISTING_KEY = 'onExisting'
const ON_VALUE_KEY = 'onValue'
const MERGER_KEY = 'merger'
const MERGER_OPTIONS_KEY = 'opts'
const OBJ_KEY = 'obj'

/**
 * @since 1.0.0
 * @type {Map}
 * @extends {ChainedMapBase}
 * @member MergeChain
 * @memberOf Chainable
 *
 * @types MergeChain
 * @tests MergeChain
 * @see deps/dopemerge
 *
 * {@link https://sourcemaking.com/design_patterns/visitor visitor-pattern}
 *
 * @TODO consider just making this a function,
 *       because 80/20 onValue merger & onExisting
 *       are rarely used & are easily overridable with .merge
 */
class MergeChain extends ChainedMapBase {
  /**
   * @static
   * @param  {Chainable | ParentType} parent ParentType required, for merging
   * @return {MergeChain} @chainable
   *
   * @example
   *
   *    let map = new Map()
   *    map.set('eh', 1)
   *    map.set('coo', 'oo')
   *
   *    MergeChain.init(map).merge({eh: 2})
   *    console.dir(map)
   *    //=> Map { 'eh' => 2, 'coo' => 'oo' }
   *
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
   * @desc options for merging with dopemerge
   *       @modifies this.merger | this.opts
   *
   * @memberOf MergeChain
   * @since 1.0.2
   * @param  {Object | Function} opts when object: options for the merger. when function: is the merger
   * @return {MergeChain} @chainable
   * @see dopemerge
   *
   * @example
   *   {
   *     stringToArray: true,
   *     boolToArray: false,
   *     boolAsRight: true,
   *     ignoreTypes: ['null', 'undefined', 'NaN'],
   *     debug: false,
   *   }
   *
   * @example
   *    .merger(require('lodash.mergewith')())
   */
  merger(opts) {
    if (isFunction(opts)) return this.set(MERGER_KEY, opts)
    return this.set(MERGER_OPTIONS_KEY, opts)
  }

  // [v] messes comments on conditional brace style
  /* prettier-ignore */
  /**
   * @desc merges object in, goes through all keys, checks cbs, dopemerges
   *
   * @since 1.0.0
   *
   * @param  {Object} [obj2=undefined] object to merge in, defaults to this.get('obj')
   * @return {MergeChain} @chainable
   *
   * @see ChainedMap
   * @TODO issue here if we extend without shorthands &
   *       we want to merge existing values... :s
   *
   *
   * @example
   *
   *  const chain = new Chain()
   *  chain.merge({canada: {eh: true}})
   *  chain.merge({canada: {arr: [0, {'1': 2}], eh: {again: true}}})
   *  chain.entries()
   *  //=> {canada:{ eh: {again: true}, arr: [0, {'1': 2}] }}
   *
   */
  merge(obj2) {
    // better uglifying
    const parent = this.parent
    const get = key => this.get(key)

    const onExisting = get(ON_EXISTING_KEY)
    const onValue = get(ON_VALUE_KEY)
    const opts = get(MERGER_OPTIONS_KEY)
    const obj = obj2 || get(OBJ_KEY)
    const merger = get(MERGER_KEY)
    const shorthands = parent.meta ? parent.meta(SHORTHANDS_KEY) : {}
    const keys = ObjectKeys(obj)

    // @@debugger

    /* istanbul ignore next: devs */
    if (ENV_DEVELOPMENT) {
      if (!obj) {
        console.log({onExisting, opts, obj, merger, shorthands, keys, parent})
        throw new Error('must provide an object to merge')
      }
    }

    /**
     * @private
     *
     * since this would be slower
     * if I want to not have a speedy default when using .onExisting
     * should @note to use .extend
     * when using chains without a class & doing .merge (edge-case)
     *
     * @param  {Primitive} key key (shorthands[key] or just key)
     * @param  {*} value obj[key]
     * @return {void}
     *
     * @TODO could use .eq here
     * @TODO if (isMapish(obj)) obj = obj.entries()
     *
     * @example
     *  var obj = {key: 1}
     *
     *  MergeChain.init(obj).merge({key: ['value']})
     *
     *  // goes to this internal scoped function
     *  handleExisting('key', ['value'])
     *  // if there is .onValue or .onExisting, use them, default deepmerge
     *
     *  obj
     *  //=> {key: [1, 'value']}
     *
     */
    const handleExisting = (key, value) => {
      /**
       * @desc when fn is a full method, not an extended shorthand
       * @since 0.5.0
       *
       * @param {Primitive} keyToSet key we chose to set
       * @param {*} valueToSet value we chose to set (merged, existing, new)
       * @return {Parent | Chain | *} .set or [keyToSet] return
       *
       * @example
       *
       *    MergeChain.init(new Chain().extend(['eh']))
       *
       *    //isFunction: true => call parent[keyToSet](valueToSet)
       *    setChosen('eh', 1)
       *    //=> parent
       *    parent.get('eh')
       *    //=> 1
       *
       *    //=>isFunction: false => parent.set(keyToSet, valueToSet)
       *    setChosen('oh', 1)
       *    //=> parent //<- unless .set is overriden
       *    parent.get('oh')
       *    //=> 1
       *
       */
      const setChosen = (keyToSet, valueToSet) =>
        (isFunction(parent[key])
          ? parent[keyToSet](valueToSet)
          : parent.set(keyToSet, valueToSet))

      /**
       * check if it's shorthanded
       * -> check if it has a value already
       */
      if (isTrue(parent.has(key))) {
        // get that value
        const existing = parent.get(key)

        /**
         * if we have onExisting, call it
         * else default to dopemerge
         */
        if (isUndefined(onExisting)) {
          /* istanbul ignore next: devs */
          if (ENV_DEBUG) {
            console.log(
              'parent has: no onExisting',
              {existing, [key]: value}
            )
          }
          setChosen(key, merger(existing, value, opts))
        }
        else {
          /* istanbul ignore next: devs */
          if (ENV_DEBUG) {
            console.log(
              'parent has: has onExisting',
              {existing, onExisting, [key]: value}
            )
          }
          /**
           * maybe we should not even have `.onExisting`
           * since we can just override merge method...
           * and then client can just use a custom merger...
           *
           * could add and remove subscriber but that's overhead and
           * tricky here, because if we set a value that was just set...
           */
          setChosen(key, onExisting(existing, value, opts))
        }
      }
      else {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log('parent does not have', {[key]: value})
        }
        setChosen(key, value)
      }
    }

    for (let k = 0, len = keys.length; k < len; k++) {
      // key to the current property in the data being merged
      let key = keys[k]

      // we have our value, no we can change the key if needed for shorthands
      const value = obj[key]

      // @NOTE: when shorthands is an object, key is the method it should call
      if (!isUndefined(shorthands[key]) && shorthands[key] !== key) {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log(
            'had a shorthand with a diff key than the object (likely @alias)',
            {shorthandMethod: shorthands[key], key, value}
          )
        }
        key = shorthands[key]
      }

      // method for the key
      const method = parent[key]

      /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
      // use onValue when set
      if (!onValue(value, key, this)) {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log('had onValue, was false, ignored', {onValue, key, value})
        }
        continue
      }
      // when property itself is a Chainable
      else if (isMapish(method)) {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log('has method or shorthand')
        }
        parent[key].merge(value)
      }
      // we have a method or shorthand
      else if (method) {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log('has method or shorthand', {method, key, value})
        }
        handleExisting(key, value)
      }
      // default to .set on the store
      else {
        /* istanbul ignore next: devs */
        if (ENV_DEBUG) {
          console.log('went to default', {method, key, value})
        }
        parent.set(key, value)
      }
    }

    return parent
  }
}

/**
 * @memberOf MergeChain
 * @method onExisting
 * @since 0.9.0
 * @example
 *
 *    const {Chain, MergeChain} = require('chain-able')
 *
 *    const chain = new Chain().set('str', 'stringy')
 *
 *    MergeChain.init(chain)
 *      .onExisting((a, b) => a + b)
 *      .merge({str: '+'})
 *
 *    chain.get('str')
 *    //=> 'stringy+'
 *
 */

module.exports = MergeChain

// @TODO re-enable this later
// module.exports = new MethodChain(MergeChain.prototype)
//   .methods(['onExisting', 'onValue', 'obj'])
//   .build(MergeChain)
