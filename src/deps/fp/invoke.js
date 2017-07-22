/* eslint consistent-return: "OFF" */

const curry = require('../fp/curry')
const hasIn = require('../is/hasIn')

/**
 * @desc call a method when it exists
 * @since 5.0.0-beta.4
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
 * {@link https://github.com/lodash/lodash/blob/master/invoke.js lodash-invoke}
 * @see {@link lodash-invoke}
 *
 * @example
 *
 *    var obj = {eh: console.log}
 *    invoke(obj, 'eh', 'eh!')
 *    //=> console.log('eh!')
 *
 */
function _invoke(x, key, args) {
  if (hasIn(x, key)) return x[key](args)
}

module.exports = curry(3, _invoke)
