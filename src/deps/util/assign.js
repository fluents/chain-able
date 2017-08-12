/**
 * @memberOf util
 * @since 4.0.0
 *
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L86 mobx-object-assign}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign mozilla-object-assign}
 * {@link https://esdiscuss.org/topic/object-assign-with-several-source-objects esdiscuss-object-assign}
 * {@link https://github.com/facebook/react/blob/4b2eac3de7e1dbf5c2dd742fd9989974a83972cb/scripts/babel/transform-object-assign-require.js react-object-assign}
 * {@link https://github.com/lodash/lodash/blob/master/.internal/assignValue.js lodash-assign}
 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_objectAssign.js ramda-assign}
 * @see {@link react-object-assign}
 * @see {@link ramda-assign}
 * @see {@link lodash-assign}
 * @see {@link mobx-object-assign}
 * @see {@link esdiscuss-object-assign}
 * @see {@link mozilla-object-assign}
 *
 * @type {Function}
 */
module.exports = Object.assign

// const ENV_COMPAT = require('../env/compat')
// @TODO if (ENV_COMPAT) polyfill

// --- check
// function shouldUseNative() {
//   try {
//     if (!Object.assign) {
//       return false
//     }
//
//     // Detect buggy property enumeration order in older V8 versions.
//
//     // https://bugs.chromium.org/p/v8/issues/detail?id=4118
//     var test1 = new String('abc') // eslint-disable-line no-new-wrappers
//     test1[5] = 'de'
//     if (Object.getOwnPropertyNames(test1)[0] === '5') {
//       return false
//     }
//
//     // https://bugs.chromium.org/p/v8/issues/detail?id=3056
//     var test2 = {}
//     for (var i = 0; i < 10; i++) {
//       test2['_' + String.fromCharCode(i)] = i
//     }
//     var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
//       return test2[n]
//     })
//     if (order2.join('') !== '0123456789') {
//       return false
//     }
//
//     // https://bugs.chromium.org/p/v8/issues/detail?id=3056
//     var test3 = {}
//     'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
//       test3[letter] = letter
//     })
//     if (
//       Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst'
//     ) {
//       return false
//     }
//
//     return true
//   }
//   catch (err) {
//     // We don't expect any of the above to throw, but better to be safe.
//     return false
//   }
// }

// --- handle
// function ObjectAssign(target, source) {
//   var from
//   var to = toObject(target)
//   var symbols
//
//   for (var s = 1; s < arguments.length; s++) {
//     from = Object(arguments[s])
//
//     for (var key in from) {
//       if (hasOwnProperty.call(from, key)) {
//         to[key] = from[key]
//       }
//     }
//
//     if (getOwnPropertySymbols) {
//       symbols = getOwnPropertySymbols(from)
//       for (var i = 0; i < symbols.length; i++) {
//         if (propIsEnumerable.call(from, symbols[i])) {
//           to[symbols[i]] = from[symbols[i]]
//         }
//       }
//     }
//   }
//
//   return to
// }

// babel
// function(target) {
//   for (var i = 1; i < arguments.length; i++) {
//     var source = arguments[i]
//     for (var key in source) {
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }
