const isWeakMapUsable = require('../is/weakMapUsable')

let weakMap

if (isWeakMapUsable) {
  weakMap = new WeakMap()
}
// else {
//   weakMap =
// }

module.exports = weakMap
