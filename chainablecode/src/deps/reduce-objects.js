// const reduce = require('./reduce-entries')
//
// const indexValueBy = property => x => {
//   const obj = {}
//   Object.keys(x).map(key => obj[property] = x)
// }
// const indexPropBy = key => {}
//
// module.exports = (key, valueProp) => x => {
//   const reduced = reduce(x)
//   const indexed = indexPropBy(key)(reduced)
//   const mapped = indexValueBy(valueProp)(indexed)
//   return mapped
// }
