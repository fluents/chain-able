const pipe = require('../fp/pipe')
const decrement = require('../expressions/decrement')
const length = require('./length')

/**
 * @name lengthMinusOne
 * @since 5.0.0-beta.1
 * @memberOf util
 *
 * @param  {Array | Object} x object with property
 * @return {number}
 *
 * @example
 *  lengthMinusOne(['eh'])       //=> 1
 *  lengthMinusOne({})           //=> 0
 *  lengthMinusOne({length: 10}) //=> 10
 */
// module.exports = pipe(length, decrement)
// module.exports = x => length(x) - 1
module.exports = x => decrement(length(x))
