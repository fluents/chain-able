const isNull = require('../is/null')
const isUndefined = require('../is/undefined')
const ObjectKeys = require('../util/keys')

/** @ignore 🚧 wip */

// module.exports = function mapToIterator(map) {
//   const values = map.values()
//   const size = map.length || map.size
//   const entries = map.entries ? this.entries() : null
//   const keys = isNull(entries) ? new Array(size) : ObjectKeys(entries)
//
//   return {
//     i: 0,
//     next() {
//       let i = this.i
//       let key = i
//       const val = values[i]
//       if (entries) key = keys[i]
//
//       // done - no more values, or iteration reached size
//       if ((isUndefined(key) && isUndefined(val)) || size <= i) {
//         return {value: undefined, done: true}
//       }
//
//       this.i++
//
//       // return
//       return {value: [key, val], done: false}
//     },
//   }
// }
