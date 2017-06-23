// without it, the arguments & caller are uglier when drbugging
'use strict'

var isSet = require('../is/set')
var ArrayFrom = require('../util/from')
var concat = require('../concat')
var toarr = require('../to-arr')
var TRANSFORMERS_KEY = require('./transformers')
var OBSERVERS_KEY = require('./observers')
var SHORTHANDS_KEY = require('./shorthands')
var DECORATED_KEY = require('./decorated')

// @NOTE: using `[]` deopts o.o
// eslint-disable-next-line
// this.shorthands = new Array()
// @TODO for wrapping methods to force return `this`
// this.chainableMethods = []

function getMeta(_this) {
  // if we already have it, keep it
  if (_this.meta) { return _this.meta }

  // the store
  // shorthands: key -> method
  var store = {}

  // --- uglifiable functions

  /** @desc initialize the store maps when we need them */
  /* eslint-disable */
  /* prettier-ignore */
  var ensureInitialized = function (name, value) {
    if (store[name] !== undefined) { return }

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
    /* istanbul ignore next: dev */
    else if (process.env.NODE_ENV !== 'production') {
      console.log({name: name, value: value})
      throw new Error('must use a valid .meta key')
    }
  }

  var has = function (key, prop) {
    if ( prop === void 0 ) prop = undefined;

    if (prop === undefined) { return !!store[key].size }
    return store[key].has(prop)
  }
  var get = function (key, prop) {
    if ( prop === void 0 ) prop = undefined;

    return has(key, prop) ? store[key].get(prop) : []
  }
  var set = function (key, prop, value) {
    var storage = store[key]
    // when it's a set, we have no `prop`, we just have .add
    // so `prop = value` && `value = undefined`
    if (isSet(storage)) {
      storage.add(prop)
    } else {
      // if (!has(key, prop)) return
      var existing = storage.get(prop)
      var val = concat(existing, value)
      storage.set(prop, val)
    }
  }

  /**
   * THIS IS BEST!!! A SINGLE MINIFIABLE FUNCTION, NO PROPERTY NESTING
   * @param {Primitive} key
   * @param {Primitive | undefined} prop
   * @param {undefined | any} value (when no value, it's a getter)
   */
  function meta(key, prop, value) {
    if ( prop === void 0 ) prop = undefined;
    if ( value === void 0 ) value = undefined;

    ensureInitialized(key)

    // if (process.env.NODE_ENV !== 'production') {
    //  console.log('USING META', {key, prop, value})
    // }

    if (value === undefined) {
      // when we want to just access the property, return an array
      // @example `.meta('transformers')`
      if (prop === undefined) {
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
  meta.debug = false

  return meta
}

module.exports = getMeta

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHdpdGhvdXQgaXQsIHRoZSBhcmd1bWVudHMgJiBjYWxsZXIgYXJlIHVnbGllciB3aGVuIGRyYnVnZ2luZ1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGlzU2V0ID0gcmVxdWlyZSgnLi4vaXMvc2V0JylcbmNvbnN0IEFycmF5RnJvbSA9IHJlcXVpcmUoJy4uL3V0aWwvZnJvbScpXG5jb25zdCBjb25jYXQgPSByZXF1aXJlKCcuLi9jb25jYXQnKVxuY29uc3QgdG9hcnIgPSByZXF1aXJlKCcuLi90by1hcnInKVxuY29uc3QgVFJBTlNGT1JNRVJTX0tFWSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJylcbmNvbnN0IE9CU0VSVkVSU19LRVkgPSByZXF1aXJlKCcuL29ic2VydmVycycpXG5jb25zdCBTSE9SVEhBTkRTX0tFWSA9IHJlcXVpcmUoJy4vc2hvcnRoYW5kcycpXG5jb25zdCBERUNPUkFURURfS0VZID0gcmVxdWlyZSgnLi9kZWNvcmF0ZWQnKVxuXG4vLyBATk9URTogdXNpbmcgYFtdYCBkZW9wdHMgby5vXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vIHRoaXMuc2hvcnRoYW5kcyA9IG5ldyBBcnJheSgpXG4vLyBAVE9ETyBmb3Igd3JhcHBpbmcgbWV0aG9kcyB0byBmb3JjZSByZXR1cm4gYHRoaXNgXG4vLyB0aGlzLmNoYWluYWJsZU1ldGhvZHMgPSBbXVxuXG5mdW5jdGlvbiBnZXRNZXRhKF90aGlzKSB7XG4gIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBpdCwga2VlcCBpdFxuICBpZiAoX3RoaXMubWV0YSkgcmV0dXJuIF90aGlzLm1ldGFcblxuICAvLyB0aGUgc3RvcmVcbiAgLy8gc2hvcnRoYW5kczoga2V5IC0+IG1ldGhvZFxuICBjb25zdCBzdG9yZSA9IHt9XG5cbiAgLy8gLS0tIHVnbGlmaWFibGUgZnVuY3Rpb25zXG5cbiAgLyoqIEBkZXNjIGluaXRpYWxpemUgdGhlIHN0b3JlIG1hcHMgd2hlbiB3ZSBuZWVkIHRoZW0gKi9cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgLyogcHJldHRpZXItaWdub3JlICovXG4gIGNvbnN0IGVuc3VyZUluaXRpYWxpemVkID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgaWYgKHN0b3JlW25hbWVdICE9PSB1bmRlZmluZWQpIHJldHVyblxuXG4gICAgaWYgKFxuICAgICAgbmFtZSA9PT0gVFJBTlNGT1JNRVJTX0tFWSB8fFxuICAgICAgbmFtZSA9PT0gU0hPUlRIQU5EU19LRVkgfHxcbiAgICAgIG5hbWUgPT09IERFQ09SQVRFRF9LRVlcbiAgICApIHtcbiAgICAgIHN0b3JlW25hbWVdID0gbmV3IE1hcCgpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUgPT09IE9CU0VSVkVSU19LRVkpIHtcbiAgICAgIHN0b3JlW25hbWVdID0gbmV3IFNldCgpXG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBkZXYgKi9cbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyh7bmFtZSwgdmFsdWV9KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHVzZSBhIHZhbGlkIC5tZXRhIGtleScpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFzID0gKGtleSwgcHJvcCA9IHVuZGVmaW5lZCkgPT4ge1xuICAgIGlmIChwcm9wID09PSB1bmRlZmluZWQpIHJldHVybiAhIXN0b3JlW2tleV0uc2l6ZVxuICAgIHJldHVybiBzdG9yZVtrZXldLmhhcyhwcm9wKVxuICB9XG4gIGNvbnN0IGdldCA9IChrZXksIHByb3AgPSB1bmRlZmluZWQpID0+IHtcbiAgICByZXR1cm4gaGFzKGtleSwgcHJvcCkgPyBzdG9yZVtrZXldLmdldChwcm9wKSA6IFtdXG4gIH1cbiAgY29uc3Qgc2V0ID0gKGtleSwgcHJvcCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gc3RvcmVba2V5XVxuICAgIC8vIHdoZW4gaXQncyBhIHNldCwgd2UgaGF2ZSBubyBgcHJvcGAsIHdlIGp1c3QgaGF2ZSAuYWRkXG4gICAgLy8gc28gYHByb3AgPSB2YWx1ZWAgJiYgYHZhbHVlID0gdW5kZWZpbmVkYFxuICAgIGlmIChpc1NldChzdG9yYWdlKSkge1xuICAgICAgc3RvcmFnZS5hZGQocHJvcClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgKCFoYXMoa2V5LCBwcm9wKSkgcmV0dXJuXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN0b3JhZ2UuZ2V0KHByb3ApXG4gICAgICBjb25zdCB2YWwgPSBjb25jYXQoZXhpc3RpbmcsIHZhbHVlKVxuICAgICAgc3RvcmFnZS5zZXQocHJvcCwgdmFsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUSElTIElTIEJFU1QhISEgQSBTSU5HTEUgTUlOSUZJQUJMRSBGVU5DVElPTiwgTk8gUFJPUEVSVFkgTkVTVElOR1xuICAgKiBAcGFyYW0ge1ByaW1pdGl2ZX0ga2V5XG4gICAqIEBwYXJhbSB7UHJpbWl0aXZlIHwgdW5kZWZpbmVkfSBwcm9wXG4gICAqIEBwYXJhbSB7dW5kZWZpbmVkIHwgYW55fSB2YWx1ZSAod2hlbiBubyB2YWx1ZSwgaXQncyBhIGdldHRlcilcbiAgICovXG4gIGZ1bmN0aW9uIG1ldGEoa2V5LCBwcm9wID0gdW5kZWZpbmVkLCB2YWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgIGVuc3VyZUluaXRpYWxpemVkKGtleSlcblxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gIGNvbnNvbGUubG9nKCdVU0lORyBNRVRBJywge2tleSwgcHJvcCwgdmFsdWV9KVxuICAgIC8vIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB3aGVuIHdlIHdhbnQgdG8ganVzdCBhY2Nlc3MgdGhlIHByb3BlcnR5LCByZXR1cm4gYW4gYXJyYXlcbiAgICAgIC8vIEBleGFtcGxlIGAubWV0YSgndHJhbnNmb3JtZXJzJylgXG4gICAgICBpZiAocHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdG9yZVtrZXldLnNpemUgPT09IDAgPyBbXSA6IEFycmF5RnJvbShzdG9yZVtrZXldLnZhbHVlcygpKVxuICAgICAgfSBlbHNlIGlmICghaXNTZXQoc3RvcmVba2V5XSkpIHtcbiAgICAgICAgLy8gQFRPRE86ICEhISEhISBpZiAoZ2V0KGtleSwgcHJvcCkpIGlzU2V0P1xuICAgICAgICAvL1xuICAgICAgICAvLyBvdGhlcndpc2UsIHdlIHdhbnQgdG8gcmV0dXJuIHRoZSBrZXkgZm9yIHRoYXQgc3BlY2lmaWMgcHJvcGVydHlcbiAgICAgICAgLy8gQGV4YW1wbGUgYC5tZXRhKCd0cmFuc2Zvcm1lcnMnLCAnZWgnKWBcbiAgICAgICAgcmV0dXJuIHRvYXJyKGdldChrZXksIHByb3ApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0KGtleSwgcHJvcClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgaGF2ZSBhIHZhbHVlLCBsZXQncyBhZGQgaXRcbiAgICAgIHNldChrZXksIHByb3AsIHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gX3RoaXNcbiAgfVxuICAvLyBmb3IgZGVidWdnaW5nXG4gIG1ldGEuc3RvcmUgPSBzdG9yZVxuICBtZXRhLmRlYnVnID0gZmFsc2VcblxuICByZXR1cm4gbWV0YVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1ldGFcbiJdLCJuYW1lcyI6WyJjb25zdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxZQUFZOztBQUVaQSxHQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDbENBLEdBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUN6Q0EsR0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ25D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