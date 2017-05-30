module.exports = function toArr(data) {
  if (!data) return []
  if (Array.isArray(data)) return data
  if (typeof data === 'string' && data.includes(',')) return data.split(',')
  return [data]
}

// module.exports.slice = Array.prototype.slice.call.bind(Array.prototype.slice)
