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

// will expand this later
const isInKeyMapAsSet = x => x === OBSERVERS_KEY

// @NOTE: using `[]` deopts o.o
// eslint-disable-next-line
// this.shorthands = new Array()

/**
 * @since  4.0.0
 * @param  {Chain} _this
 * @return {Chain}
 */
function getMeta(_this) {
  // if we already have it, keep it
  if (_this.meta) return _this.meta

  // the store
  // shorthands: key -> method
  const store = {}

  // --- uglifiable functions

  /** @desc initialize the store maps when we need them */
  /* prettier-ignore */
  const ensureInitialized = (name, value) => {
    if (!isUndefined(store[name])) return

    // if (
    //   name === TRANSFORMERS_KEY ||
    //   name === SHORTHANDS_KEY ||
    //   name === DECORATED_KEY
    // ) {
    //   store[name] = new Map()
    // }
    // else
    if (isInKeyMapAsSet(name)) {
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
    else return store[key].has(prop)
  }
  /**
   * @since  4.0.0
   * @param  {Primitive} key
   * @param  {Primitive | undefined} [prop=undefined]
   * @return {any}
   */
  const get = (key, prop) => (has(key, prop) ? store[key].get(prop) : [])

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
    }
    else {
      // if (!has(key, prop)) return
      const existing = storage.get(prop)
      const val = concat(existing, value)
      storage.set(prop, val)
    }
  }

  /**
   * @since 4.0.0
   *
   * @desc a single easily minifiable function,
   *       dynamically setting & getting depending on arguments
   *       to avoid nested property accessing
   *       only instantiating when values are **addded**
   *
   * @param {Primitive} key
   * @param {Primitive | undefined} [prop=undefined]
   * @param {undefined | any} [value=undefined] (when no value, it's a getter)
   * @return {Array | Chain} depending on args
   */
  function meta(key, prop, value) {
    if (process.env.NODE_ENV === 'DEBUG') {
      console.log('USING META', {key, prop, value})
    }

    /* prettier-ignore */
    if (isUndefined(value)) {
      // when we want to just access the property, return an array
      // @example `.meta('transformers')`
      if (isUndefined(prop)) {
        if (isUndefined(store[key])) return []
        else return store[key].size === 0 ? [] : ArrayFrom(store[key].values())
      }
      // we have `key, prop`
      //
      // 1: should `prop` be a value, (isSet?)
      else if (isInKeyMapAsSet(key)) {
        ensureInitialized(key)
        set(key, prop)
      }
      // 2: prop is a key, we want to return the [..] for that specific property
      // @example `.meta('transformers', 'eh')`
      else if (isUndefined(store[key])) return []
      else return toarr(get(key, prop))
    }
    // we have `key, prop, value`
    else {
      ensureInitialized(key)
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
