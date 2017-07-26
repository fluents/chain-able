const matchUnsigned = require('../regexp/matchUnsigned')

/**
 * @TODO use `test` util
 * @param  {number | *} x value to test with regexp
 * @return {boolean} x isUnsignedInteger
 *
 * @see regexp/matchUnsigned
 */
module.exports = function isUnsignedInteger(x) {
  return matchUnsigned.test(x)
}
