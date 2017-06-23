var isNotEmptyArray = require('./is/notEmptyArray')
var isReal = require('./is/real')
var isObjWithKeys = require('./is/objWithKeys')
var ObjectKeys = require('./util/keys')

/**
 * @since 4.0.0 <- moved as a dep function
 * @since 0.4.0
 * @desc goes through the maps,
 *       and the map values,
 *       reduces them to array
 *       then to an object using the reduced values
 *
 * @param {Object} obj object to clean, usually .entries()
 * @return {Object}
 */
module.exports = function clean(obj) {
  return ObjectKeys(obj).reduce(function(acc, key) {
    var val = obj[key]

    if (isReal(val) && (isNotEmptyArray(val) || isObjWithKeys(val))) {
      acc[key] = val
    }

    return acc
  }, {})
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4uanMiLCJzb3VyY2VzIjpbImNsZWFuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzTm90RW1wdHlBcnJheSA9IHJlcXVpcmUoJy4vaXMvbm90RW1wdHlBcnJheScpXG5jb25zdCBpc1JlYWwgPSByZXF1aXJlKCcuL2lzL3JlYWwnKVxuY29uc3QgaXNPYmpXaXRoS2V5cyA9IHJlcXVpcmUoJy4vaXMvb2JqV2l0aEtleXMnKVxuY29uc3QgT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vdXRpbC9rZXlzJylcblxuLyoqXG4gKiBAc2luY2UgNC4wLjAgPC0gbW92ZWQgYXMgYSBkZXAgZnVuY3Rpb25cbiAqIEBzaW5jZSAwLjQuMFxuICogQGRlc2MgZ29lcyB0aHJvdWdoIHRoZSBtYXBzLFxuICogICAgICAgYW5kIHRoZSBtYXAgdmFsdWVzLFxuICogICAgICAgcmVkdWNlcyB0aGVtIHRvIGFycmF5XG4gKiAgICAgICB0aGVuIHRvIGFuIG9iamVjdCB1c2luZyB0aGUgcmVkdWNlZCB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIG9iamVjdCB0byBjbGVhbiwgdXN1YWxseSAuZW50cmllcygpXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2xlYW4ob2JqKSB7XG4gIHJldHVybiBPYmplY3RLZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgY29uc3QgdmFsID0gb2JqW2tleV1cblxuICAgIGlmIChpc1JlYWwodmFsKSAmJiAoaXNOb3RFbXB0eUFycmF5KHZhbCkgfHwgaXNPYmpXaXRoS2V5cyh2YWwpKSkge1xuICAgICAgYWNjW2tleV0gPSB2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxufVxuIl0sIm5hbWVzIjpbImNvbnN0Il0sIm1hcHBpbmdzIjoiQUFBQUEsR0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUM7QUFDckRBLEdBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNuQ0EsR0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDakRBLEdBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF6QyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTtFQUNuQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQy9DQSxHQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7O0lBRXBCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHO0tBQ2Y7O0lBRUQsT0FBTyxHQUFHO0dBQ1gsRUFBRSxFQUFFLENBQUM7Q0FDUDsifQ==