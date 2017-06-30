const isUndefined = require('../deps/is/undefined')

/**
 * @memberOf MethodChain
 * @plugin
 *
 * @param  {Primitive} name method name being built
 * @param  {Object} parent parent containing the method
 * @return {MethodChain} @chainable
 *
 * @see MethodChain
 *
 * @example
 *
 *    const chain = new Chain()
 *    chain.methods('eh').plugin(autoGetSet).build()
 *
 *    chain.eh(1)
 *    //=> Chain
 *    chain.eh()
 *    //=> 1
 */
function autoGetSet(name, parent) {
  const auto = arg =>
    (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))

  // so we know if we defaulted them
  auto.autoGetSet = true
  return this.onSet(auto).onGet(auto).onCall(auto)
}

module.exports = autoGetSet
