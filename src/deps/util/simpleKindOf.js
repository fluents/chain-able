const isArray = require('../is/array')
const isNull = require('../is/null')

/* prettier-ignore */
/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 *
 * @since 4.0.0
 * @param  {any} x value for type
 * @return {string} type
 *
 * split at space, replace brackets and space, lowercase
 * @TODO `type.split(' ').pop().replace(/\s\[\]/g, '').toLowerCase()`
 *
 * @example
 *
 *   simpleKindOf([]) //=> 'array'
 *   simpleKindOf(null) //=> 'null'
 *   simpleKindOf({}) //=> 'object'
 *
 */
module.exports = x => {
  return isArray(x)
    ? 'array'
    : isNull(x)
      ? 'null'
      : typeof x
}
