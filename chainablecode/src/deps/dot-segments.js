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
const isArray = require('./is/array')

let cache
module.exports = path => {
  if (!cache) cache = new Map()
  if (cache.has(path)) return cache.get(path)
  if (isArray(path)) return path

  const pathArr = path.split('.')
  const parts = []

  for (let i = 0; i < pathArr.length; i++) {
    let p = pathArr[i]

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
