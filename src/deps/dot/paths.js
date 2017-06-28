const isTrue = require('../is/true')
const includes = require('../conditional/includes')
const traverse = require('../traverse')
const cache = require('../cache')

/* prettier-ignore */
/**
 * @since 4.0.0
 * @NOTE had `onlyLongest` & `asString` but can just .join(',') to match
 * @desc gathers dot.prop from any value, with a prefixed/base key
 * @param  {Primitive}  key
 * @param  {Traversable}  value
 * @param  {boolean | undefined} longest
 * @return {Array<string>} paths
 */
module.exports = function(key, value, longest) {
  if (cache.has(value)) return cache.get(value)

  let paths = []

  // gather all paths in the object
  // filter to ensure only the longest paths are kept
  //
  // .map the paths to `dot-prop`,
  // `matcher` takes in an array so it will work for all
  traverse(value).forEach(function(x) {
    const currentPath = this.path

    // ignore
    if (!currentPath || !currentPath.length) return

    // dot-prop the array of paths
    // if we have a key, prefix it
    paths.push(
      (key ? key + '.' : '') +
      (currentPath.join ? currentPath.join('.') : currentPath)
    )
  })

  if (isTrue(longest)) {
    // concat a string of all paths so we can unique each branch
    // @example `canada.arr.0` vs `canada.arr`
    paths = paths.filter(path => !paths.some(otherPath =>
      otherPath !== path && includes(otherPath, path)
    ))
  }

  cache.set(value, paths)

  return paths
}
