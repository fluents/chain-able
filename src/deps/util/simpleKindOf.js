const isArray = require('../is/array')
const isNull = require('../is/null')

/* prettier-ignore */
/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 *
 * @memberOf util
 * @since 4.0.0
 *
 * @param  {any} x value for type
 * @return {string} type
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
