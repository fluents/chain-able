const traverse = require('../traverse')
const defaultTo = require('../cast/defaultTo')
const isMatchWith = require('../is/matchWith')

// moved to deps 5.0.0-beta.6
// https://github.com/fluents/chain-able/issues/32
// module.exports = function find(path, arg, fallback) {
//   const data = defaultTo(x => this.entries(true), arg)
//   let val = null
//   // console.debug(`key: ${key} `)
//   const cb = (key, x, traverser) => {
//     if (isMatchWith(path, key) || traverser.path.includes(key)) {
//       val = x
//       traverser.stop()
//       // console.error({x})
//     }
//     // console.debug(`path: ${traverser.path.join('.')} prop: ${traverser.key}`)
//     // console.dir({x, path: traverser.path, key: traverser.key})
//   }
//
//   traverse(data).forEach(function(x) {
//     cb(x, this)
//   })
//
//   return val
// }
