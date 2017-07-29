const pipe = require('../fp/pipe')
const decrement = require('../math/decrement')
const length = require('./length')

/**
 * @name lengthMinusOne
 * @version 2.0.0 <- was going to ensure number stays above 0
 * @since 5.0.0-beta.1
 * @memberOf util
 *
 * @param  {Array | Object} x object with property length
 * @return {number}
 *
 * @example
 *
 *    lengthMinusOne(['eh'])         //=> 1
 *    lengthMinusOne({})             //=> 0
 *    lengthMinusOne({length: -1})   //=> 0
 *    lengthMinusOne({length: 10}  ) //=> 10
 *
 */
module.exports = x => decrement(length(x))

// module.exports = pipe(length, decrement)
// module.exports = x => {
//   const len = length(x)
//
//   // keep above 0
//   return len <= 0 ? 0 : decrement(length(x))
// }
// @TODO
// module.exports = pipe(length, decrement)
// module.exports = x => length(x) - 1
// module.exports = x => decrement(length(x)) || 0
