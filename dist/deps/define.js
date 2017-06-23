var ObjectAssign = require('./util/assign')

/**
 * @since 4.0.0
 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @example var desc = Object.getOwnPropertyDescriptor(obj, 'eh')
 * @desc default to configurable and enumerable, unless configured otherwise
 * @param  {Object} obj
 * @param  {Primitive} name
 * @param  {Object} descriptor
 * @return {void}
 */
module.exports = function(obj, name, descriptor) {
  Object.defineProperty(
    obj,
    name,
    ObjectAssign(
      {
        configurable: true,
        enumerable: true,
      },
      descriptor
    )
  )
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlcyI6WyJkZWZpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT2JqZWN0QXNzaWduID0gcmVxdWlyZSgnLi91dGlsL2Fzc2lnbicpXG5cbi8qKlxuICogQHNpbmNlIDQuMC4wXG4gKiBAdHV0b3JpYWwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2RlZmluZVByb3BlcnR5XG4gKiBAZXhhbXBsZSB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAnZWgnKVxuICogQGRlc2MgZGVmYXVsdCB0byBjb25maWd1cmFibGUgYW5kIGVudW1lcmFibGUsIHVubGVzcyBjb25maWd1cmVkIG90aGVyd2lzZVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSAge1ByaW1pdGl2ZX0gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBkZXNjcmlwdG9yXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgb2JqLFxuICAgIG5hbWUsXG4gICAgT2JqZWN0QXNzaWduKFxuICAgICAge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRvclxuICAgIClcbiAgKVxufVxuIl0sIm5hbWVzIjpbImNvbnN0Il0sIm1hcHBpbmdzIjoiQUFBQUEsR0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZN0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0VBQy9DLE1BQU0sQ0FBQyxjQUFjO0lBQ25CLEdBQUc7SUFDSCxJQUFJO0lBQ0osWUFBWTtNQUNWO1FBQ0UsWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLElBQUk7T0FDakI7TUFDRCxVQUFVO0tBQ1g7R0FDRjtDQUNGOyJ9