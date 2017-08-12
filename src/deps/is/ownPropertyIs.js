const hasOwnProperty = require('../util/hasOwnProperty')
const curry = require('../fp/curry')

/**
 * @desc if it has own property, call fnIs(value), else false
 * @curried 3
 * @name ownPropertyIs
 * @alias ownPropertySatisfies
 *
 * @param  {string|Array<string>} propertyPath (@TODO later, lensish)
 * @param  {Function} fnIs (obj[path]): boolean
 * @param  {Object} obj object to check
 * @return {boolean} hasOwnProperty && fnIs
 *
 * @see util/hasOwnProperty
 * @see fp/curry
 * @see is/_core
 *
 * @TODO add just getting the value of the property, as a param option
 * @TODO example
 * @TODO use path here too when needed
 */
module.exports = curry(3, function ownPropertyIs(propertyPath, fnIs, obj) {
  return hasOwnProperty(obj, propertyPath)
    ? fnIs(obj[propertyPath])
    : false
})
