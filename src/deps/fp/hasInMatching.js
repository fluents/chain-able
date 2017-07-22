const curry = require('../fp/curry')
const hasIn = require('../is/in')

/**
 * @TODO surely would be better with focusing on a prop, then applying predicate, lense? :s
 * @TODO is it better in fp/ or is/ ? needs some definitions
 *
 * @desc isIn + hasIn ...and also allows a predicate/matcher/specification
 *
 * @memberOf is
 * @since 5.0.0-beta.4
 *
 * @param  {Object} predicate predicate match the property against this
 * @param  {Object} obj object to check
 * @param  {any} prop property to check in object
 * @return {boolean} obj[prop] hasIn & satisfies
 *
 * @see https://github.com/ramda/ramda/blob/master/src/propOr.js
 * @extends hasIn
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
function hasInMatching(predicate, obj, prop) {
  return hasIn(obj, prop) && predicate(obj[prop])
}

module.exports = curry(3, hasInMatching)
