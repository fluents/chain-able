const curry = require('../fp/curry')

/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 * @memberOf util
 * @since 5.0.0-beta.7
 * @curried 2
 *
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 *
 * @func
 * @fork v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 *
 * @see fp/lastIndexOf
 * @see Ramda/indexOf
 *
 * @example
 *
 *      indexOf(3, [1,2,3,4]); //=> 2
 *      indexOf(10, [1,2,3,4]); //=> -1
 *
 */
const indexOf = function(needle, haystack) {
  return haystack.indexOf(needle)
}
module.exports = curry(2, indexOf)


// @NOTE ramda polyfil
// var equals = require('../equals');
// module.exports = function _indexOf(list, a, idx) {
//   var inf, item;
//   // Array.prototype.indexOf doesn't exist below IE9
//   if (typeof list.indexOf === 'function') {
//     switch (typeof a) {
//       case 'number':
//         if (a === 0) {
//           // manually crawl the list to distinguish between +0 and -0
//           inf = 1 / a;
//           while (idx < list.length) {
//             item = list[idx];
//             if (item === 0 && 1 / item === inf) {
//               return idx;
//             }
//             idx += 1;
//           }
//           return -1;
//         } else if (a !== a) {
//           // NaN
//           while (idx < list.length) {
//             item = list[idx];
//             if (typeof item === 'number' && item !== item) {
//               return idx;
//             }
//             idx += 1;
//           }
//           return -1;
//         }
//         // non-zero numbers can utilise Set
//         return list.indexOf(a, idx);
//
//       // all these types can utilise Set
//       case 'string':
//       case 'boolean':
//       case 'function':
//       case 'undefined':
//         return list.indexOf(a, idx);
//
//       case 'object':
//         if (a === null) {
//           // null can utilise Set
//           return list.indexOf(a, idx);
//         }
//     }
//   }
//   // anything else not covered above, defer to equals
//   while (idx < list.length) {
//     if (equals(list[idx], a)) {
//       return idx;
//     }
//     idx += 1;
//   }
//   return -1;
// };
//
