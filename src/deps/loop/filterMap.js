// slower & smaller would be filterWhere, then mapWhere
// faster & bigger would be remake the whole thing, use `base` things

const filterWhere = require('./filter/filterWhere')
const mapObjOrArray = require('./map/mapObjOrArray')

// could use `isMatch`
// filterKey
// filterValue
function filterMapObjOrArray(obj, filter, onValue, onKey, result = {}) {
  result = filterWhere(obj, filter, result)
  result = mapObjOrArray(obj, onValue, onKey, result)
  return result
}

module.exports = filterMapObjOrArray
