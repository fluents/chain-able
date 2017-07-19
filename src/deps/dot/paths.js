const isTrue = require('../is/true')
const includes = require('../conditional/includes')
const traverse = require('../traverse')
const cache = require('../cache')
const ENV_DEBUG = require('../env/debug')

let run = 0

/* prettier-ignore */
/**
 * @desc   gathers dot.prop from any value, with a prefixed/base key
 * @since  4.0.0
 *
 * @param  {Primitive}  key prefixing key for the paths, root path/key
 * @param  {Traversable}  value traversable value to extract paths from
 * @param  {boolean | undefined} [longest] optionally filter to keep only longest/deepest paths
 * @return {Array<string>} paths[]
 *
 * @see    deps/traverse
 * @TODO   should build a trie if doing this
 * @NOTE   had `onlyLongest` & `asString` but can just .join(',') to match
 *
 * @example
 *
 *  dotPropPaths('', {oh: {eh: true}})
 *  //=> ['oh.eh']
 *
 *  dotPropPaths('moose', {oh: {eh: true}})
 *  //=> ['moose.oh.eh']
 *
 */
module.exports = function(key, value, longest) {
  // if (cache.has(value)) return cache.get(value)

  let paths = []

  /* istanbul-ignore next: debug */
  if (ENV_DEBUG) {
    console.log({value})
  }

  // gather all paths in the object
  // filter to ensure only the longest paths are kept
  //
  // .map the paths to `dot-prop`,
  // `matcher` takes in an array so it will work for all
  traverse(value).forEach(function(x) {
    // const currentPath = this.paths
    const currentPath = this.path

    /* istanbul-ignore next: debug */
    if (ENV_DEBUG) {
      console.log('paths', run++, this.path)
    }

    // ignore
    if (!currentPath) return
    else if (!currentPath.length) return

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

  // cache.set(value, paths)

  return paths
}
