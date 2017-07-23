/**
 * @name firstToLowerCase
 * @since 2.0.0
 * @memberOf string
 * @param  {string} str take first char to uppercase
 * @return {string} str with uc first
 * @example firstToLowerCase('EH') //=> 'eH'
 */
module.exports = str => str.charAt(0).toLowerCase() + str.slice(1)
