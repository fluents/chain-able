const always = require('../fp/always')

/** Used to convert symbols to primitives and strings. */
const symbolProto = Symbol ? Symbol.prototype : undefined

module.exports = symbolProto ? symbolProto.toString : always('')
