const ObjectDefine = require('./define')

/**
 * @desc define a hidden property that is not writable, extremely internal hidden last resort
 * @since 5.0.0-beta.5
 * @memberOf util
 * @symb 🔚
 *
 * @extends util/define
 * @variation value is a value for the property, not a descriptor
 *
 * @param {Object} obj object to define on
 * @param {Primitive} name property name to define
 * @param {Object} descriptor object descriptor
 * @return {void}
 *
 * {@link https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts#L117 mobx-definefinal}
 * @see {@link mobx-definefinal}
 *
 * @example
 *
 *    const obj = {}
 *    defineFinal(obj, 'eh', 0)
 *
 *    obj.eh
 *    //=> 0
 *
 *    Object.keys(obj)
 *    //=> []
 *
 */
module.exports = function addHiddenFinalProp(obj, name, value) {
  ObjectDefine(obj, name, {
    enumerable: false,
    writable: false,
    configurable: true,
    value,
  })
}
