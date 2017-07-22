/* eslint consistent-return: "OFF" */

const curry = require('../fp/curry')
const hasIn = require('../is/hasIn')

/**
 * Creates a function that invokes the method at `path` of a given object.
 * Any additional arguments are provided to the invoked method.
 *
 * @ignore
 * @private
 * @name method
 * @NOTE basically this is `invoke` but not curried
 *
 * @since 5.0.0-beta.4
 * @lodash 3.7.0
 * @category Util
 *
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 *
 * @see https://github.com/lodash/lodash/blob/master/method.js
 *
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': () => 2 } },
 *   { 'a': { 'b': () => 1 } }
 * ]
 *
 * map(objects, method('a.b'))
 * // => [2, 1]
 *
 * map(objects, method(['a', 'b']))
 * // => [2, 1]
 */

/**
 * @desc call a method when it exists
 * @since 5.0.0-beta.4
 * @memberOf fp
 * @symb 📞
 *
 * @param {*} x object
 * @param {*} key property with method
 * @param {*} args arguments
 * @return {*}
 *
 * @TODO add `path` calling, fallback to noop
 * @see is/hasIn
 *
 * {@link http://underscorejs.org/docs/underscore.html#section-33 underscore-invoke}
 * {@link https://github.com/lodash/lodash/blob/master/invoke.js lodash-invoke}
 * @see {@link lodash-invoke}
 * @see {@link underscore-invoke}
 *
 * @example
 *
 *    var obj = {eh: console.log}
 *    invoke(obj, 'eh', 'eh!')
 *    //=> console.log('eh!')
 *
 *    var getTag = invoke(Object.prototype.toString, 'call')
 *    getTag([])
 *    //=> '[object Array]'
 *
 */
function _invoke(x, key, args) {
  if (hasIn(x, key)) return x[key](args)
  // return void 0
}

module.exports = curry(3, _invoke)
