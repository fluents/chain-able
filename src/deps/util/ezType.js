const isArray = require('../is/array')
const isNull = require('../is/null')

/* prettier-ignore */
/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 * @param  {any} x
 * @return {string} type
 */
module.exports = x => {
  return isArray(x)
    ? 'array'
    : isNull(x)
      ? 'null'
      : typeof x
}
