/* eslint complexity: "OFF" */

// util
const ENV_DEVELOPMENT = require('../deps/env/dev')
const ObjectKeys = require('../deps/util/keys')
const isObj = require('../deps/is/obj')
const isArray = require('../deps/is/array')
const isUndefined = require('../deps/is/undefined')
// logic
const meta = require('../deps/meta')
const schemaBuilder = require('../deps/validators/schemaBuilder')
const validatorBuilder = require('../deps/validators/validatorBuilder')
const or = require('../deps/conditional/or')

const SCHEMA_KEY = 'schema'
const isObjOrArray = or(isObj, isArray)

/**
 * @desc handles:
 *       1. recursively building nestable schemas,
 *       2. creating MethodChains for all types
 *       3. carrying over the inheritable properties
 *       4. @modifies @injects @decorates .add(customValidators)
 *       @pattern decorator...builder...plugin...
 * @param  {Schema} obj
 * @return {MethodFactory} @chainable
 */
module.exports = function(obj) {
  /**
   * @see deps/validators/validatorFactory
   * @since 4.0.0 <- used with schema, used in method chain
   * @since 3.0.0 <- took out
   * @since 1.0.0
   * @param  {Object} custom
   * @return {MethodChain} @chainable
   */
  this.add = custom => {
    validatorBuilder.merge(custom)
    return this
  }
  if (isUndefined(obj)) return this

  const parent = this.parent
  const {onValid, onInvalid, define, getSet} = this.entries()
  const keys = ObjectKeys(obj)

  for (let k = 0; k < keys.length; k++) {
    const key = keys[k]
    const value = obj[key]

    // parent.method
    //   ? parent.method(key)
    //   :
    //
    let builder = this.newThis().name(key) // MethodChain

    // @TODO: PLUCK METHOD FOR USING VALID KEYS
    // @TODO:
    // const entryKeys = ObjectKeys(entries)
    // const entries = this.entries()
    // for (let e = 0; e < entryKeys.length; e++) {
    //   const entryKey = entryKeys[e]
    //   const entry = entries[entryKey]
    //   builder[entryKey](entry)
    // }
    if (onInvalid) builder.onInvalid(onInvalid)
    if (onValid) builder.onValid(onValid)
    if (define) builder.define()
    if (getSet) builder.getSet()

    let type = value
    if (isObjOrArray(value)) {
      // could just assign to type
      const traversableValidator = schemaBuilder(key, value)

      if (ENV_DEVELOPMENT) {
        traversableValidator.schema = value
      }

      type = traversableValidator
    }

    // @HACK @FIXME @TODO: this should not happen,
    // just when using babel and decorating not calling constructor...
    // likely needs to `return this` on each?
    // parent.store = parent.store || new Map()
    // parent.meta = meta(parent)
    if (parent.meta) {
      parent.meta(SCHEMA_KEY, key, value)
    }

    builder.type(type).build()
  }

  return this
}
