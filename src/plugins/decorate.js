const isObj = require('../deps/is/obj')
const DECORATED_KEY = require('../deps/meta/decorated')
const meta = require('../deps/meta')

/**
 * decorates a parent when the argument is provided
 * BUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT
 * for easy factory chaining
 *
 * @since 4.0.0-alpha.1
 * @memberOf MethodChain
 * @param  {Object} parentToDecorate object to put the method on instead
 * @return {MethodChain} @chainable
 *
 * @see MethodChain
 *
 * @TODO this is more like a preset since it *adds* plugins?
 *       more of methodFactory now
 *
 * @example
 *
 *   const chain = new Chain()
 *   const obj = {}
 *   chain.method('ehOh').decorate(obj).build()
 *   typeof obj.ehOh
 *   //=> 'function'
 *
 */
module.exports = function(parentToDecorate) {
  // @TODO is objStrict?
  // if (parentToDecorate) {
  this.target(parentToDecorate)

  // can use this to "undecorate"
  // if (!parentToDecorate.meta) <- checks already inside of meta()
  parentToDecorate.meta = meta(parentToDecorate)

  // default returns result of calling function,
  // else .parentToDecorate
  return this.plugin(function(name, parent) {
    parentToDecorate.meta(DECORATED_KEY, name)

    // @NOTE: so we can return...
    /* prettier-ignore */
    return this
      .returns(function returnsFunction(result) {
        return result || parentToDecorate
      })
      .callReturns(true)
  })
}
