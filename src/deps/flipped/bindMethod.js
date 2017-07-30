const bind = require('../fp/bind')
const flip2 = require('../fp/flip2')
const curry = require('../fp/curry')
const dotSet = require('../dot/set')
const dotGet = require('../dot/get')
const dotHas = require('../dot/has')
const dotDelete = require('../dot/delete')

const set = curry(2, flip2(dotSet))
const get = curry(2, flip2(dotGet))
const has = curry(2, flip2(dotHas))
const del = curry(2, flip2(dotDelete))

const thisBind = flip2(bind)

/**
 * @name bindMethod
 * @since 5.0.0-beta.6
 * @memberOf flipped
 *
 * @param {Object} thisArg context
 * @param {Primitive} method method name
 * @return {Function}
 *
 * @see fp/bind
 * @see fp/flip2
 * @see fp/curry
 * @see dot/get
 *
 * @example
 *    const eh = {oh() {console.log(this)}}
 *    eh.oh = bindMethod(eh, 'oh')
 */
module.exports = (thisArg, method) => {
  const fn = get(thisArg, method)
  return thisBind(thisArg, fn)
}
