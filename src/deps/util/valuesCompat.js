// const keys = require('./keys')

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 * @since 5.0.0-beta.6
 * @memberOf util
 *
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 *
 * @tests keys
 *
 * @func
 * @fork v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 *
 * @see valuesIn, keys
 *
 * @example
 *
 *      valuesWhile({a: 1, b: 2, c: 3})
 *      //=> [1, 2, 3]
 *
 */
// module.exports = function values(obj) {
//   const props = keys(obj)
//   let len = props.length
//   const vals = preAllocate(len)
//   let idx = 0
//   while (idx < len) {
//     vals[idx] = obj[props[idx]]
//     idx += 1
//   }
//   return vals
// }
