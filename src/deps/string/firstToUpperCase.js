/**
 * @name firstToUpperCase
 * @since 2.0.0
 * @memberOf string
 * @param  {string} str take first char to uppercase
 * @return {string} str with uc first
 * @example firstToUpperCase('eh') //=> 'Eh'
 */
module.exports = str => str.charAt(0).toUpperCase() + str.slice(1)
