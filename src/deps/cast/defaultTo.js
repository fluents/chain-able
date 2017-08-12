const isNill = require('../is/nullOrUndefined')
const curry = require('../fp/curry')

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 *
 * @since 5.0.0-beta.5
 * @memberOf cast
 * @curried 2
 *
 * @param {*} value The default value.
 * @param {*} arg `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/defaultTo.js ramda-default-to}
 * @see {@link ramda-default-to}
 * @see is/real
 *
 * @func
 * @fork v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 *
 * @example
 *
 *      const defaultToOne = defaultTo(1)
 *
 *      defaultToOne(0)           //=> 1
 *      defaultToOne(null)        //=> 1
 *      defaultToOne(undefined)   //=> 1
 *      defaultToOne('eh')        //=> 'eh'
 *
 *      const NotEhNumber = Number(undefined)
 *      defaultToOne(NotEhNumber) //=> 1
 *
 */
module.exports = curry(2, function defaultTo(value, arg) {
  return isNill(arg) ? value : arg
})
