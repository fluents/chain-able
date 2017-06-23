module.exports = (obj, comparator) =>
  Object.prototype.isPrototypeOf.call(obj, comparator)
