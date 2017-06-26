/* eslint complexity: "off" */
/* eslint func-style: "off" */
/* eslint no-proto: "off" */
/* eslint consistent-return: "off" */
/* eslint eqeqeq: "off" */

const traverse = require('../traverse')
const isNullOrUndefined = require('../is/nullOrUndefined')
const isTrue = require('../is/true')
const isFunction = require('../is/function')
const isRegExp = require('../is/regexp')
const isDate = require('../is/date')
const isPureObj = require('../is/pureObj')
const isObjLoose = require('../is/objLoose')
const isEqEq = require('../is/eqeq')
const hasOwnProperty = require('../util/hasOwnProperty')
const ObjectKeys = require('../util/keys')

// const isArguments = x => toS(x) === '[object Arguments]'
// const sameKeysLength = (x, y) => Object.keys(x).length === Object.keys(y).length

/* prettier-ignore */
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

    // if (process.env.NODE_ENV !== 'production') {
    //   console.log('types: ', {x: toS(x), y: toS(y)})
    // }

    if (this.circular) {
      // if (process.env.NODE_ENV !== 'production') {
      //   console.log('circular')
      // }
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
      // if (process.env.NODE_ENV !== 'production') {
      //   console.log('diff types')
      // }
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
    else if (isFunction(x)) {
      if (isRegExp(x)) {
        // both regexps on account of the __proto__ check
        if (x.toString() != y.toString()) {
          notEqual()
        }
      }
      else if (x !== y) {
        notEqual()
      }
    }
    else if (isPureObj(x)) {
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
  })

  return equal
}
