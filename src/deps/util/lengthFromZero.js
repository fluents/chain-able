module.exports = obj =>
  (obj.length > 1 ? obj.length - 1 : obj.length === 1 ? 1 : 0)
