const isNull = require('./null')
const isIn = require('./in')

/**
 * @TODO can depreciate now that there is safety in `isIn`
 *
 * @desc isIn, but first checks it is not null
 * @since 5.0.0
 * @memberOf is
 *
 * @param  {Object} obj object to check
 * @param  {any} prop property to check in object
 * @return {boolean}
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1367 underscore-has}
 * @see {@link underscore-has}
 *
 * @extends isNull
 * @extends isIn
 *
 * @example
 *
 *  hasIn({}, 'eh') //=> false
 *  hasIn(null, 'eh') //=> false
 *  hasIn({eh: true}, 'eh') //=> true
 *
 */
function hasIn(obj, prop) {
  return !isNull(obj) && isIn(obj, prop)
}

module.exports = hasIn
