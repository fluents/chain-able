const toObject = require('../cast/toObj')

/**
 * @desc prop is in Object(obj)
 * @since 5.0.0
 * @memberOf is
 *
 * @param  {Object} obj object to check property of
 * @param  {Primitive} prop property in obj
 * @return {boolean} property
 *
 * @func
 * @type {Function}
 * @name isIn
 *
 * @example
 *
 *  isIn({eh: true}, 'eh') //=> true
 *  isIn({eh: true}, 'oh') //=> false
 *
 */
module.exports = (obj, prop) => (prop in toObject(obj))

// @TODO
// function isIn(set) {
//   return function(d) {
//     return !set ? false
//       : set.indexOf ? ~set.indexOf(d)
//         : d in set
//   }
// }
