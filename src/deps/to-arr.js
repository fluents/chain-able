// const isReal = require('./is/real')

module.exports = function(ar) {
  // @NOTE: !'' === true
  if (typeof ar === 'string') return ar.includes(',') ? ar.split(',') : [ar]
  if (!ar) return [ar]
  if (Array.isArray(ar)) return ar
  // @NOTE: .values is also on `Object`...
  if (ar instanceof Set || ar instanceof Map || ar.values) {
    return Array.from(ar.values(ar))
    // @NOTE: when using `new Set().values`... no forEach o.o
    // const vals = []
    // ar.values().forEach(v => vals.push(v))
    // return vals
  }

  return [ar]
}

// module.exports.slice = Array.prototype.slice.call.bind(Array.prototype.slice)
