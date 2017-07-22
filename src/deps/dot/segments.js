const isArray = require('../is/array')
const isUndefined = require('../is/undefined')
const lengthMinusOne = require('../util/lengthMinusOne')

let cache

/**
 * @name dotPropSegments
 * @since 4.0.0
 * @memberOf dot
 *
 * @param  {string | Array<string>} path dot-prop-path
 * @return {Array<string>} array path
 *
 * @example
 *
 *    dotPropSegments('eh.oh') //=> ['eh', 'oh']
 *    dotPropSegments(['eh', 'oh']) //=> ['eh', 'oh']
 *    dotPropSegments('ehoh') //=> ['ehoh']
 *
 */
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
    while (p[lengthMinusOne(p)] === '\\' && !isUndefined(pathArr[i + 1])) {
      p = p.slice(0, -1) + '.' + pathArr[++i]
    }

    parts.push(p)
  }

  cache.set(path, parts)
  return parts
}
