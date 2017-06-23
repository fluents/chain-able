module.exports = (obj, prop) =>
  Object.prototype.propertyIsEnumerable.call(obj, prop)
