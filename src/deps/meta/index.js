// without it, the arguments & caller are uglier when drbugging
'use strict'

const isSet = require('../is/set')
const ArrayFrom = require('../util/from')
const isUndefined = require('../is/undefined')
const concat = require('../concat')
const toarr = require('../to-arr')
const TRANSFORMERS_KEY = require('./transformers')
const OBSERVERS_KEY = require('./observers')
const SHORTHANDS_KEY = require('./shorthands')
const DECORATED_KEY = require('./decorated')

// @NOTE: using `[]` deopts o.o
// eslint-disable-next-line
// this.shorthands = new Array()
// @TODO for wrapping methods to force return `this`
// this.chainableMethods = []

function getMeta(_this) {
  // if we already have it, keep it
  if (_this.meta) return _this.meta

  // the store
  // shorthands: key -> method
  const store = {}

  // --- uglifiable functions

  /** @desc initialize the store maps when we need them */
  /* eslint-disable */
  /* prettier-ignore */
  const ensureInitialized = (name, value) => {
    if (!isUndefined(store[name])) return

    if (
      name === TRANSFORMERS_KEY ||
      name === SHORTHANDS_KEY ||
      name === DECORATED_KEY
    ) {
      store[name] = new Map()
    }
    else if (name === OBSERVERS_KEY) {
      store[name] = new Set()
    }
    else {
      store[name] = new Map()
    }
  }

  /**
   * @since  4.0.0
   * @param  {Primitive} key
   * @param  {Primitive | undefined} [prop=undefined]
   * @return {boolean}
   */
  const has = (key, prop) => {
    if (isUndefined(prop)) return !!store[key].size
    return store[key].has(prop)
  }
  /**
   * @since  4.0.0
   * @param  {Primitive} key
   * @param  {Primitive | undefined} [prop=undefined]
   * @return {any}
   */
  const get = (key, prop) => {
    return has(key, prop) ? store[key].get(prop) : []
  }
  /**
   * @since  4.0.0
   * @param  {Primitive} key
   * @param  {Primitive | undefined} [prop=undefined]
   * @param  {Primitive | undefined} [value=undefined]
   * @return {void}
   */
  const set = (key, prop, value) => {
    const storage = store[key]
    // when it's a set, we have no `prop`, we just have .add
    // so `prop = value` && `value = undefined`
    if (isSet(storage)) {
      storage.add(prop)
    } else {
      // if (!has(key, prop)) return
      const existing = storage.get(prop)
      const val = concat(existing, value)
      storage.set(prop, val)
    }
  }

  /**
   * THIS IS BEST!!! A SINGLE MINIFIABLE FUNCTION, NO PROPERTY NESTING
   * @param {Primitive} key
   * @param {Primitive | undefined} [prop=undefined]
   * @param {undefined | any} [value=undefined] (when no value, it's a getter)
   */
  function meta(key, prop, value) {
    ensureInitialized(key)

    // if (process.env.NODE_ENV !== 'production') {
    //  console.log('USING META', {key, prop, value})
    // }

    if (isUndefined(value)) {
      // when we want to just access the property, return an array
      // @example `.meta('transformers')`
      if (isUndefined(prop)) {
        return store[key].size === 0 ? [] : ArrayFrom(store[key].values())
      } else if (!isSet(store[key])) {
        // @TODO: !!!!!! if (get(key, prop)) isSet?
        //
        // otherwise, we want to return the key for that specific property
        // @example `.meta('transformers', 'eh')`
        return toarr(get(key, prop))
      } else {
        set(key, prop)
      }
    } else {
      // we have a value, let's add it
      set(key, prop, value)
    }
    return _this
  }
  // for debugging
  meta.store = store
  // meta.debug = false

  return meta
}

module.exports = getMeta
