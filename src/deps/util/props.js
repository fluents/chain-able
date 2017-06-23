const ObjectKeys = require('./keys')

const ObjectProperties = Object.getOwnPropertyNames
const ObjectPropertySymbols = Object.getOwnPropertySymbols
const ObjectPrototypeOf = Object.getPrototypeOf

function allProperties(obj, useProto = true) {
  const proto = ObjectPrototypeOf(obj)
  return ObjectProperties(obj)
    .concat(ObjectPropertySymbols(obj))
    .concat(ObjectKeys(obj))
    .concat(proto ? allProperties(proto) : [])
}

module.exports = allProperties
