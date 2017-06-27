const isArray = require('../is/array')
const isNull = require('../is/null')
const {KEY_ARRAY, KEY_NULL, access} = require('../meta/keymap')

/* prettier-ignore */
/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 * @param  {any} x
 * @return {string} type
 */
module.exports = x => {
  // return isArray(x)
  //   ? 'ARRAY'
  //   : isNull(x)
  //     ? 'NULLARY'
  //     : typeof x
  return isArray(x)
    ? access(KEY_ARRAY)
    : isNull(x)
      ? access(KEY_NULL)
      : typeof x
}
