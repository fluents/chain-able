const isUndefined = require('../deps/is/undefined')
const Chainable = require('../Chainable')
const ChainedMap = require('../ChainedMap')
const Observe = require('./Observe')
const Shorthands = require('./Shorthands')
const Transform = require('./Transform')
const DotProp = require('./DotProp')

const ComposableExtensions = [Observe, Shorthands, Transform, DotProp]

/**
 * @desc compose chains all the way up from Chainable
 * @since 3.0.0
 *
 * @param  {Class | Function | undefined} [target=ChainedMap] class or function to extend
 * @param  {Array | undefined} [extensions=[Observe, Shorthands, Transform, DotProp]] Array of extensions to compose together left ro right
 * @return {Class | Function} composed
 *
 * @tutorial examples/playground/compose
 * @tutorial examples/babel/decorators
 *
 * @func compose
 * @member compose
 * @tests compose
 * @types compose
 * @symb 🎼
 *
 * @see https://formidable.com/blog/2017/infinite-state-composition-with-freactal/
 * @see https://blog.javascripting.com/2016/02/02/encapsulation-in-redux/
 * @see https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/
 * @see https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257
 * @see https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
 * @see https://github.com/stoeffel/awesome-fp-js
 *
 * @example
 *
 *  class Eh extends compose() {}
 *  new Eh() instanceof Chainable
 *  //=> true
 *
 * @example
 *
 *  class Target {}
 *  class Eh extends compose(Target) {}
 *  new Eh() instanceof Target
 *  //=> true
 *
 * @example
 *
 *  class Target {}
 *  const mixin = SuperClass => class extends SuperClass {}
 *  class Eh extends compose(Target, ) {}
 *  new Eh() instanceof Chainable
 *  //=> true
 *
 * @example
 *
 *    class Winning {}
 *    class Yes extends compose(Winning) {
 *      get winning() {
 *        return true
 *      }
 *    }
 *    const yes = new Yes()
 *    yes instanceof Winning && yes.winning
 *    //=> true
 *
 */
function compose(target, extensions) {
  let extend = isUndefined(extensions) ? ComposableExtensions : extensions
  let composed = target

  if (target && target instanceof Object) {
    composed = ChainedMap.compose(Chainable.compose(target))
  }
  else {
    composed = ChainedMap
  }

  for (let index = 0; index < extend.length; index++) {
    composed = extend[index](composed) || composed || ChainedMap
  }

  return composed
}

compose.Observe = Observe
compose.Shorthands = Shorthands
compose.Transform = Transform
compose.DotProp = DotProp

module.exports = compose
