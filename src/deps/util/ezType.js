const isArray = require('./array')
const isNull = require('./null')

/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 * @param  {any} x
 * @return {string} type
 */
/* prettier-ignore */
const ezType = x => {
  return isArray(x)
    ? 'array'
    : isNull(x)
      ? 'null'
      : typeof x
}
