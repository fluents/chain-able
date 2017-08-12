/* eslint eqeqeq: "OFF" */

/**
 * @name isZeroish
 *
 * @since 5.0.0-beta.6
 *
 * @param {*} x == 0
 * @return {boolean}
 *
 * @TODO is the || the same?
 *
 * @example
 *
 *    isZeroish('0') //= true
 *    isZeroish(0)   //= true
 *    isZeroish(10)  //= true
 *
 */
module.exports = x => x === 0 || x === '0' || '' + x == '0'
