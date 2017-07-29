// eslint-disable-next-line
'use strict'

// @see compose note on looping, this solves that
const isUndefined = require('../deps/is/undefined')
const setToArray = require('../deps/cast/setToArray')
const reduceArray = require('../deps/loop/reduce/reduceArray')

const ENV_DEBUG = false

// .codePointAt(0).toString()

// '🎼'
const COMPOSER_KEY = '127932'

// '🎩'
const TOP_BASE_CLASS_KEY = '127913'

const callCurrent = (accumulated, current) => current(accumulated)

// @NOTE 'top' is a global property o.o
module.exports = function addCompose(fn, defaultTop) {
  if (ENV_DEBUG) {
    console.log('composer_args', {fn, defaultTop})
  }

  let composed = fn(defaultTop)

  if (ENV_DEBUG) {
    console.log('composer_add_compose_composed', {composed})
  }

  if (isUndefined(composed.composer)) {
    // only one compose fn
    composed.composer = function(SuperClass, options) {
      if (ENV_DEBUG) {
        console.log('composer_composer', {composed, SuperClass})
      }

      // @NOTE scoping issues if this is only set once
      // if (!composed[TOP_BASE_CLASS_KEY]) {
      composed[TOP_BASE_CLASS_KEY] = SuperClass

      let arr = setToArray(composed[COMPOSER_KEY])
      const composition = reduceArray(arr, callCurrent, composed[TOP_BASE_CLASS_KEY])

      if (ENV_DEBUG) {
        console.log('composer_composed', {arr, composition})
      }

      return composition
    }

    composed[COMPOSER_KEY] = new Set()
  }

  composed[COMPOSER_KEY].add(fn)

  return composed
}
