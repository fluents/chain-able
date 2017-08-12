const isObjNotNull = require('../is/objNotNull')
const isArray = require('../is/array')
const curry = require('./curry')

/**
 * @desc removes from object or array using `.splice` or `delete`
 * @name remove
 * @since 5.0.0-beta.5
 * @memberOf fp
 * @curried 2
 *
 * @param {Object | Array | *} obj object
 * @param {Primitive | *} key index/property/key to delete from obj
 * @return {void} only deletes
 *
 * @TODO remove with index, or with value
 */
module.exports = curry(2, function removeFromArrayOrObj(obj, key) {
  if (isArray(obj)) obj.splice(key, 1)
  else if (isObjNotNull(obj)) delete obj[key]
})
