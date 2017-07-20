const isObjNotNull = require('../is/objNotNull')
const isUndefined = require('../is/undefined')
const isArray = require('../is/array')
const curry = require('./curry')

// @TODO remove with index, or with value
module.exports = curry(2, function removeFromArrayOrObj(obj, key) {
  if (isArray(obj)) obj.splice(key, 1)
  else if (isObjNotNull(obj)) delete obj[key]
})
