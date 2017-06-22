const traverse = require('../traverse')
const toS = require('../is/toS')
const isFunction = require('../is/function')
const isRegExp = require('../is/regexp')
const isDate = require('../is/date')
const hasOwnProperty = require('../util/hasOwnProperty')
const ObjectKeys = require('../util/keys')

// function isArguments(x) {
//   return toS(x) === '[object Arguments]'
// }
// function sameKeysLength(x, y) {
//   return Object.keys(x).length === Object.keys(y).length
// }

/* prettier-ignore */
module.exports = function(a, b, loose) {
  var equal = true
  var node = b

  traverse(a).forEach(function(y) {
    var notEqual = function() {
      equal = false
      // this.stop();
      return undefined
    }

    // if (node === undefined || node === null) return notEqual();
    if (!this.isRoot) {
      // if (!Object.hasOwnProperty.call(node, this.key)) return notEqual()
      if (typeof node !== 'object') {
        return notEqual()
      }
      node = node[this.key]
    }

    var x = node

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
    else if (typeof x !== typeof y) {
      // if (process.env.NODE_ENV !== 'production') {
      //   console.log('diff types')
      // }
      if (loose === true && x == y) {
        // ignore
      }
      else {
        notEqual()
      }
    }
    else if (x === null || y === null || x === undefined || y === undefined) {
      if (x !== y) {
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
    else if (typeof x === 'object') {
      if (toS(y) === '[object Arguments]' || toS(x) === '[object Arguments]') {
        if (toS(x) !== toS(y)) {
          notEqual()
        }
      }
      else if (isRegExp(x) || isRegExp(y)) {
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
        var kx = ObjectKeys(x)
        var ky = ObjectKeys(y).length
        if (kx.length !== ky) {
          return notEqual()
        }
        for (var i = 0; i < kx.length; i++) {
          var k = kx[i]
          if (!hasOwnProperty(y, k)) {
            notEqual()
          }
        }
      }
    }
  })

  return equal
}
