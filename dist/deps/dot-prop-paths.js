var traverse = require('./traverse')
var cache = require('./cache')

/**
 * @since 4.0.0
 * @NOTE had `onlyLongest` & `asString` but can just .join(',') to match
 * @desc gathers dot.prop from any value, with a prefixed/base key
 * @param  {Primitive}  key
 * @param  {Traversable}  value
 * @return {Array<string>} paths
 */
module.exports = function(key, value) {
  if (cache.has(value)) { return cache.get(value) }

  var paths = []
  var pathsString = ''

  // gather all paths in the object
  // filter to ensure only the longest paths are kept
  //
  // .map the paths to `dot-prop`,
  // `matcher` takes in an array so it will work for all
  traverse(value).forEach(function(x) {
    // ignore
    if (!this.path || !this.path.length) { return }
    if (paths.includes(this.path)) { return }

    // dot-prop the array of paths
    var path = key + '.' + (this.path.join ? this.path.join('.') : this.path)

    // concat a string of all paths so we can unique each branch
    // @example `canada.arr.0` vs `canada.arr`
    if (pathsString.includes(path)) { return }

    pathsString += path
    paths.push(path)
  })

  cache.set(value, paths)

  return paths
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LXByb3AtcGF0aHMuanMiLCJzb3VyY2VzIjpbImRvdC1wcm9wLXBhdGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRyYXZlcnNlID0gcmVxdWlyZSgnLi90cmF2ZXJzZScpXG5jb25zdCBjYWNoZSA9IHJlcXVpcmUoJy4vY2FjaGUnKVxuXG4vKipcbiAqIEBzaW5jZSA0LjAuMFxuICogQE5PVEUgaGFkIGBvbmx5TG9uZ2VzdGAgJiBgYXNTdHJpbmdgIGJ1dCBjYW4ganVzdCAuam9pbignLCcpIHRvIG1hdGNoXG4gKiBAZGVzYyBnYXRoZXJzIGRvdC5wcm9wIGZyb20gYW55IHZhbHVlLCB3aXRoIGEgcHJlZml4ZWQvYmFzZSBrZXlcbiAqIEBwYXJhbSAge1ByaW1pdGl2ZX0gIGtleVxuICogQHBhcmFtICB7VHJhdmVyc2FibGV9ICB2YWx1ZVxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gcGF0aHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gIGlmIChjYWNoZS5oYXModmFsdWUpKSByZXR1cm4gY2FjaGUuZ2V0KHZhbHVlKVxuXG4gIGxldCBwYXRocyA9IFtdXG4gIGxldCBwYXRoc1N0cmluZyA9ICcnXG5cbiAgLy8gZ2F0aGVyIGFsbCBwYXRocyBpbiB0aGUgb2JqZWN0XG4gIC8vIGZpbHRlciB0byBlbnN1cmUgb25seSB0aGUgbG9uZ2VzdCBwYXRocyBhcmUga2VwdFxuICAvL1xuICAvLyAubWFwIHRoZSBwYXRocyB0byBgZG90LXByb3BgLFxuICAvLyBgbWF0Y2hlcmAgdGFrZXMgaW4gYW4gYXJyYXkgc28gaXQgd2lsbCB3b3JrIGZvciBhbGxcbiAgdHJhdmVyc2UodmFsdWUpLmZvckVhY2goZnVuY3Rpb24oeCkge1xuICAgIC8vIGlnbm9yZVxuICAgIGlmICghdGhpcy5wYXRoIHx8ICF0aGlzLnBhdGgubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAocGF0aHMuaW5jbHVkZXModGhpcy5wYXRoKSkgcmV0dXJuXG5cbiAgICAvLyBkb3QtcHJvcCB0aGUgYXJyYXkgb2YgcGF0aHNcbiAgICBjb25zdCBwYXRoID0ga2V5ICsgJy4nICsgKHRoaXMucGF0aC5qb2luID8gdGhpcy5wYXRoLmpvaW4oJy4nKSA6IHRoaXMucGF0aClcblxuICAgIC8vIGNvbmNhdCBhIHN0cmluZyBvZiBhbGwgcGF0aHMgc28gd2UgY2FuIHVuaXF1ZSBlYWNoIGJyYW5jaFxuICAgIC8vIEBleGFtcGxlIGBjYW5hZGEuYXJyLjBgIHZzIGBjYW5hZGEuYXJyYFxuICAgIGlmIChwYXRoc1N0cmluZy5pbmNsdWRlcyhwYXRoKSkgcmV0dXJuXG5cbiAgICBwYXRoc1N0cmluZyArPSBwYXRoXG4gICAgcGF0aHMucHVzaChwYXRoKVxuICB9KVxuXG4gIGNhY2hlLnNldCh2YWx1ZSwgcGF0aHMpXG5cbiAgcmV0dXJuIHBhdGhzXG59XG4iXSwibmFtZXMiOlsiY29uc3QiLCJsZXQiXSwibWFwcGluZ3MiOiJBQUFBQSxHQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdENBLEdBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQVVoQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRTtFQUNwQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUE7O0VBRTdDQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDZEEsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFOzs7Ozs7O0VBT3BCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7O0lBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQSxNQUFNLEVBQUE7SUFDM0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFBLE1BQU0sRUFBQTs7O0lBR3JDRCxHQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7O0lBSTNFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFBLE1BQU0sRUFBQTs7SUFFdEMsV0FBVyxJQUFJLElBQUk7SUFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7R0FDakIsQ0FBQzs7RUFFRixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7O0VBRXZCLE9BQU8sS0FBSztDQUNiOyJ9