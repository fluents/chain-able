const ObjectAssign = require('./assign')

/**
 * @desc default to configurable and enumerable, unless configured otherwise
 * @since 4.0.0
 * @memberOf util
 *
 * @param {Object} obj object to define on
 * @param {Primitive} name property name to define
 * @param {Object} descriptor object descriptor
 * @return {void}
 *
 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 *
 * @example
 *
 *    var desc = Object.getOwnPropertyDescriptor(obj, 'eh', {get: () => console.log('eh')})
 *
 */
module.exports = function(obj, name, descriptor) {
  Object.defineProperty(
    obj,
    name,
    ObjectAssign(
      {
        configurable: true,
        enumerable: true,
      },
      descriptor
    )
  )
}
