const ownPropertyIs = require('../is/ownPropertyIs')
const isString = require('../is/stringPrimitive')
const isFunction = require('../is/function')
const isFalse = require('../is/false')

const getIsFunction = ownPropertyIs('get', isFunction)

/**
 * @desc when the condition is true,
 *       trueBrancher is called,
 *       else, falseBrancher is called
 *
 * @memberOf Chainable
 * @version 5.0.0 <- moved to fp from class
 * @version 4.0.0 <- added string-as-has(condition)
 * @since 2.0.0
 *
 * @param  {boolean | string} condition when string, checks this.get
 * @param  {Function} [trueBrancher=Function] called when true
 * @param  {Function} [falseBrancher=Function] called when false
 * @return {Chainable} @chainable
 *
 * @example
 *
 *
 *  const prod = process.env.NODE_ENV === 'production'
 *  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
 *
 *
 */
module.exports = function when(condition, trueBrancher, falseBrancher) {
  if (condition) {
    if (isFunction(trueBrancher)) {
      if (isString(condition) && getIsFunction(this)) {
        if (this.get(condition)) {
          trueBrancher(this)
        }
      }
      else {
        trueBrancher(this)
      }
    }
  }
  else if (isFunction(falseBrancher)) {
    falseBrancher(this)
  }

  return this
}
