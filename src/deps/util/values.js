module.exports = Object.values

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
 * @func
 * @fork v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 *
 * @see R.valuesIn, R.keys
 *
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3})
 *      //=> [1, 2, 3]
 *
 */
// module.exports = function values(obj) {
//   var props = keys(obj)
//   var len = props.length
//   var vals = []
//   var idx = 0
//   while (idx < len) {
//     vals[idx] = obj[props[idx]]
//     idx += 1
//   }
//   return vals
// }


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * @since 5.0.0-beta.1
 *
 * @func
 * @memberOf util
 * @fork v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 *
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 *
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
// module.exports = function valuesIn(obj) {
//   var prop
//   var vs = []
//   for (prop in obj) {
//     vs[vs.length] = obj[prop]
//   }
//   return vs
// }
