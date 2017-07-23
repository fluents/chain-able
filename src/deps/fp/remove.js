const isObjNotNull = require('../is/objNotNull')
const isUndefined = require('../is/undefined')
const isArray = require('../is/array')
const curry = require('./curry')

/**
 * @desc removes from object or array using `.splice` or `delete`
 * @TODO remove with index, or with value
 * @name remove
 * @memberOf fp
 * @curried
 * @param  {Object | Array | *} obj object
 * @param  {Primitive | *} key index/property/key to delete from obj
 * @return {void} onlly deletes
 */
module.exports = curry(2, function removeFromArrayOrObj(obj, key) {
  if (isArray(obj)) obj.splice(key, 1)
  else if (isObjNotNull(obj)) delete obj[key]
})
