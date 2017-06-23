const ObjectAssign = require('./util/assign')

/**
 * @since 4.0.0
 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @example var desc = Object.getOwnPropertyDescriptor(obj, 'eh')
 * @desc default to configurable and enumerable, unless configured otherwise
 * @param  {Object} obj
 * @param  {Primitive} name
 * @param  {Object} descriptor
 * @return {void}
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
