// same thing, but while loop is 3x faster
// function regexed(path) {
//   return path
//     .replace(/\\./g, '__e46__')
//     .replace(/\./g, '__46__')
//     .replace(/(__e46__)/g, '.')
//     .split(/__46__/)
//
//   /* also the same */
//   return path
//     .replace(/\\./g, '__e46__')
//     .split('.')
//     .map(l => l.replace('__e46__', '.'))
// }

// const cache = require('./cache')
var isArray = require('./is/array')

var cache
module.exports = function (path) {
  if (!cache) { cache = new Map() }
  if (cache.has(path)) { return cache.get(path) }
  if (isArray(path)) { return path }

  var pathArr = path.split('.')
  var parts = []

  for (var i = 0; i < pathArr.length; i++) {
    var p = pathArr[i]

    /**
     * @example 1
     *          '\.eh' -1 === '\\'      (true)
     *                +1 !== undefined (true, eh)
     *
     * @example 2
     *          '.eh'  -1 === '\\'      (false, undefined)
     *                 +1 !== undefined (true, eh)
     *
     * @example 3
     *          '\.'  -1 === '\\'      (true)
     *                +1 !== undefined (false, eh)
     */
    while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
      p = p.slice(0, -1) + '.' + pathArr[++i]
    }

    parts.push(p)
  }

  cache.set(path, parts)
  return parts
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LXNlZ21lbnRzLmpzIiwic291cmNlcyI6WyJkb3Qtc2VnbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2FtZSB0aGluZywgYnV0IHdoaWxlIGxvb3AgaXMgM3ggZmFzdGVyXG4vLyBmdW5jdGlvbiByZWdleGVkKHBhdGgpIHtcbi8vICAgcmV0dXJuIHBhdGhcbi8vICAgICAucmVwbGFjZSgvXFxcXC4vZywgJ19fZTQ2X18nKVxuLy8gICAgIC5yZXBsYWNlKC9cXC4vZywgJ19fNDZfXycpXG4vLyAgICAgLnJlcGxhY2UoLyhfX2U0Nl9fKS9nLCAnLicpXG4vLyAgICAgLnNwbGl0KC9fXzQ2X18vKVxuLy9cbi8vICAgLyogYWxzbyB0aGUgc2FtZSAqL1xuLy8gICByZXR1cm4gcGF0aFxuLy8gICAgIC5yZXBsYWNlKC9cXFxcLi9nLCAnX19lNDZfXycpXG4vLyAgICAgLnNwbGl0KCcuJylcbi8vICAgICAubWFwKGwgPT4gbC5yZXBsYWNlKCdfX2U0Nl9fJywgJy4nKSlcbi8vIH1cblxuLy8gY29uc3QgY2FjaGUgPSByZXF1aXJlKCcuL2NhY2hlJylcbmNvbnN0IGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzL2FycmF5JylcblxubGV0IGNhY2hlXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGggPT4ge1xuICBpZiAoIWNhY2hlKSBjYWNoZSA9IG5ldyBNYXAoKVxuICBpZiAoY2FjaGUuaGFzKHBhdGgpKSByZXR1cm4gY2FjaGUuZ2V0KHBhdGgpXG4gIGlmIChpc0FycmF5KHBhdGgpKSByZXR1cm4gcGF0aFxuXG4gIGNvbnN0IHBhdGhBcnIgPSBwYXRoLnNwbGl0KCcuJylcbiAgY29uc3QgcGFydHMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEFyci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwID0gcGF0aEFycltpXVxuXG4gICAgLyoqXG4gICAgICogQGV4YW1wbGUgMVxuICAgICAqICAgICAgICAgICdcXC5laCcgLTEgPT09ICdcXFxcJyAgICAgICh0cnVlKVxuICAgICAqICAgICAgICAgICAgICAgICsxICE9PSB1bmRlZmluZWQgKHRydWUsIGVoKVxuICAgICAqXG4gICAgICogQGV4YW1wbGUgMlxuICAgICAqICAgICAgICAgICcuZWgnICAtMSA9PT0gJ1xcXFwnICAgICAgKGZhbHNlLCB1bmRlZmluZWQpXG4gICAgICogICAgICAgICAgICAgICAgICsxICE9PSB1bmRlZmluZWQgKHRydWUsIGVoKVxuICAgICAqXG4gICAgICogQGV4YW1wbGUgM1xuICAgICAqICAgICAgICAgICdcXC4nICAtMSA9PT0gJ1xcXFwnICAgICAgKHRydWUpXG4gICAgICogICAgICAgICAgICAgICAgKzEgIT09IHVuZGVmaW5lZCAoZmFsc2UsIGVoKVxuICAgICAqL1xuICAgIHdoaWxlIChwW3AubGVuZ3RoIC0gMV0gPT09ICdcXFxcJyAmJiBwYXRoQXJyW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwID0gcC5zbGljZSgwLCAtMSkgKyAnLicgKyBwYXRoQXJyWysraV1cbiAgICB9XG5cbiAgICBwYXJ0cy5wdXNoKHApXG4gIH1cblxuICBjYWNoZS5zZXQocGF0aCwgcGFydHMpXG4gIHJldHVybiBwYXJ0c1xufVxuIl0sIm5hbWVzIjpbImNvbnN0IiwibGV0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQUEsR0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOztBQUVyQ0MsR0FBRyxDQUFDLEtBQUs7QUFDVCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsSUFBSSxDQUFBLENBQUMsQUFBRztFQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUEsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUE7RUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUEsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBO0VBQzNDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUEsT0FBTyxJQUFJLEVBQUE7O0VBRTlCRCxHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQy9CQSxHQUFLLENBQUMsS0FBSyxHQUFHLEVBQUU7O0VBRWhCLEtBQUtDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZDQSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQWVsQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtNQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ2Q7O0VBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0VBQ3RCLE9BQU8sS0FBSztDQUNiOyJ9