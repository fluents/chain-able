const traverse = require('./traverse')
const cache = require('./cache')

/**
 * @since 4.0.0
 * @NOTE had `onlyLongest` & `asString` but can just .join(',') to match
 * @desc gathers dot.prop from any value, with a prefixed/base key
 * @param  {Primitive}  key
 * @param  {Traversable}  value
 * @return {Array<string>} paths
 */
module.exports = function(key, value) {
  if (cache.has(value)) return cache.get(value)

  let paths = []
  let pathsString = ''

  // gather all paths in the object
  // filter to ensure only the longest paths are kept
  //
  // .map the paths to `dot-prop`,
  // `matcher` takes in an array so it will work for all
  traverse(value).forEach(function(x) {
    // ignore
    if (!this.path || !this.path.length) return
    if (paths.includes(this.path)) return

    // dot-prop the array of paths
    const path = key + '.' + (this.path.join ? this.path.join('.') : this.path)

    // concat a string of all paths so we can unique each branch
    // @example `canada.arr.0` vs `canada.arr`
    if (pathsString.includes(path)) return

    pathsString += path
    paths.push(path)
  })

  cache.set(value, paths)

  return paths
}
