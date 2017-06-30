/* eslint complexity: "off" */
/* eslint func-style: "off" */
/* eslint no-proto: "off" */
/* eslint consistent-return: "off" */
/* eslint eqeqeq: "off" */

const traverse = require('../traverse')
const ObjectKeys = require('../util/keys')
const hasOwnProperty = require('../util/hasOwnProperty')
const isNullOrUndefined = require('../is/nullOrUndefined')
const isTrue = require('../is/true')
const isRegExp = require('../is/regexp')
const isDate = require('../is/date')
const isObjStrict = require('../is/objStrict')
const isObjLoose = require('../is/objLoose')
const isEqEq = require('../is/eqeq')
const toS = require('../is/toS')
const ENV_DEBUG = require('../env/debug')

// const isFunction = require('../is/function')
// const isString = require('../is/string')
// const isNumber = require('../is/number')
// const isBoolean = require('../is/boolean')
// const isPrimitive = x => isString(x) || isBoolean(x) || isNumber(x)
// const isArguments = x => toS(x) === '[object Arguments]'
// const sameKeysLength = (x, y) => Object.keys(x).length === Object.keys(y).length

/* prettier-ignore */
/**
 * @desc deep traversal of nodes to compare any data types
 *       does not check reference, only value equality
 *
 * @since 3.0.0
 * @symb ⚖️
 * @memberOf traverse
 * @types traverse
 * @tests traverse/equals
 *
 * @param  {any} a compare a with b
 * @param  {any} b compare b with a
 * @param  {boolean} [loose=false] whether to do looser equals check
 * @return {boolean} isEqual
 *
 * @see traverse
 *
 * @example
 *
 *    eq(1, 1)
 *    //=> true
 *
 *    eq(true, false)
 *    //=> false
 *
 *    eq({}, {})
 *    //=> true
 *
 * @example
 *
 *    eq(
 *      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]},
 *      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]}
 *    )
 *    //=> true
 *
 *    eq([new RegExp('x')], [/x/])
 *    //=> true
 *
 *    eq([new String('x')], ['x'])
 *    //=> true
 *
 *    eq([new Boolean(false)], [false])
 *    //=> true
 *
 *    eq([undefined], [null]) || eq(undefined, null)
 *    //=> false
 *
 * @example
 *
 *     var xs = [1, 2, 3, 4]
 *     delete xs[2]
 *
 *     var ys = Object.create(Array.prototype)
 *     ys[0] = 1
 *     ys[1] = 2
 *     ys[3] = 4
 *
 *     eq(xs, ys)
 *     //=> true
 *
 *     eq(xs, [1, 2, undefined, 4])
 *     //=> false
 *
 */
module.exports = function(a, b, loose) {
  let equal = true
  let node = b

  traverse(a).forEach(function(y) {
    const notEqual = function() {
      equal = false
      // this.stop();
      // return undefined;
    }

    // if (node === undefined || node === null) return notEqual();
    if (!this.isRoot) {
      // if (!Object.hasOwnProperty.call(node, this.key)) return notEqual()
      if (!isObjLoose(node)) {
        return notEqual()
      }
      node = node[this.key]
    }

    let x = node

    this.post(function() {
      node = x
    })

    // @@debugger

    /* istanbul ignore next: ENV_DEBUG_OR_DEV */
    if (ENV_DEBUG) {
      console.log('types: ', {x: toS(x), y: toS(y)})
    }

    if (this.circular) {
      /* istanbul ignore next: ENV_DEBUG_OR_DEV */
      if (ENV_DEBUG) {
        console.log('circular', this)
      }
      if (traverse(b).get(this.circular.path) !== x) {
        notEqual()
      }
    }
    else if (isNullOrUndefined(x) || isNullOrUndefined(y)) {
      if (x !== y) {
        notEqual()
      }
    }
    else if (typeof x !== typeof y) {
      /* istanbul ignore next: ENV_DEBUG_OR_DEV */
      if (ENV_DEBUG) {
        console.log('diff types', typeof x, typeof y)
      }
      if (isTrue(loose) && isEqEq(x, y)) {
        // ignore
      }
      else {
        notEqual()
      }
    }
    else if (x.__proto__ !== y.__proto__) {
      notEqual()
    }
    else if (x === y) {
      // nop
    }
    // @NOTE: .toString will be covered for functions and regexes in objStrict
    // else if (isRegExp(x)) {
    //   // both regexps on account of the __proto__ check
    //   if (x.toString() != y.toString()) {
    //     notEqual()
    //   }
    // }
    // else if (isFunction(x)) {
    //   if (x !== y) {
    //     notEqual()
    //   }
    // }
    else if (isObjStrict(x)) {
      // @NOTE: this is never called
      // if (toS(y) === '[object Arguments]' || toS(x) === '[object Arguments]') {
      //   if (toS(x) !== toS(y)) {
      //     notEqual()
      //   }
      // }
      if (isRegExp(x) || isRegExp(y)) {
        if (!x || !y || x.toString() !== y.toString()) {
          notEqual()
        }
      }
      else if (isDate(x) || isDate(y)) {
        if (
          !(isDate(x)) ||
          !(isDate(y)) ||
          x.getTime() !== y.getTime()
        ) {
          notEqual()
        }
      }
      else {
        // @NOTE: it will traverse through values if they are == here
        const xKeys = ObjectKeys(x)
        const yKeys = ObjectKeys(y).length
        if (xKeys.length !== yKeys) {
          return notEqual()
        }
        for (let k = 0; k < xKeys.length; k++) {
          if (!hasOwnProperty(y, xKeys[k])) {
            notEqual()
          }
        }
      }
    }
    // isString(x) || isBoolean(x) || isNumber(x) || isIterator(x)
    else if (toS(x) === toS(y) && x !== y) {
      /* istanbul ignore next: ENV_DEBUG_OR_DEV */
      if (ENV_DEBUG) {
        console.log('same str types - diff values', {s: toS(x), x, y})
      }
      notEqual()
    }
    else if (toS(x) !== toS(y)) {
      /* istanbul ignore next: ENV_DEBUG_OR_DEV */
      if (ENV_DEBUG) {
        console.log('diff str types', {x: toS(x), y: toS(y)})
      }
      notEqual()
    }
  })

  return equal
}
