/**
 * @name toBoolean
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @param  {*} x anything
 * @return {boolean} !!x
 *
 * @see https://github.com/chriso/validator.js/blob/master/src/lib/toBoolean.js
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
 */
module.exports = x => !!x
