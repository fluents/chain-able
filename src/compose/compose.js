const ENV_DEBUG = require('../deps/env/debug')
const isUndefined = require('../deps/is/undefined')
const isInstanceOf = require('../deps/is/instanceOf')
const flattenForIn = require('../deps/loop/flattenForIn')
const defaultTo = require('../deps/cast/defaultTo')
const Chainable = require('../Chainable')
const ChainedMapBase = require('../ChainedMapBase')
const ChainedMap = require('../ChainedMap')
const Observe = require('./Observe')
const Shorthands = require('./Shorthands')
const Transform = require('./Transform')
const DotProp = require('./DotProp')

const ComposableExtensions = [Observe, Shorthands, Transform, DotProp]
const isOfInstanceObj = isInstanceOf(Object)

/**
 * @desc compose chains all the way up from Chainable
 * @since 3.0.0
 *
 * @NOTE @IMPORTANT ...really strange, when I do `.compose` in a compose class, say ChainedMap, it loops this... but not .composer...
 *
 * @param  {Class | Function | undefined} [target=ChainedMap] class or function to extend
 * @param  {Array | undefined} [extensions=[Observe, Shorthands, Transform, DotProp]] Array of extensions to compose together left to right
 * @return {Class | Function} composed
 *
 * @tutorial examples/playground/compose
 * @tutorial examples/babel/decorators
 *
 * {@link http://js-bits.blogspot.ca/2010/08/javascript-inheritance-done-right.html javascript-inheritance-done-right}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain mozilla_Inheritance_and_the_prototype_chain}
 * @see {@link mozilla_Inheritance_and_the_prototype_chain}
 * @see {@link javascript-inheritance-done-right}
 *
 * @func
 * @name compose
 * @member compose
 *
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
function _compose(target, extensions) {
  // let extend = defaultTo(ComposableExtensions, extensions)
  let extend = isUndefined(extensions) ? ComposableExtensions : extensions
  let composed = target

  if (isOfInstanceObj(target)) {
    // @NOTE now that we can add composers,
    // it SHOULD start at the top :-)

    composed = Chainable.composer(composed)
    composed = ChainedMapBase.composer(composed)
    composed = ChainedMap.composer(composed)

    // composed = ChainedMap.composer(composed)
    // composed = ChainedMap.composer(ChainedMapBase.compose(Chainable.compose(target)))
  }
  else {
    composed = ChainedMap
  }

  for (let index = 0; index < extend.length; index++) {
    composed = extend[index](composed)

    // @TODO ensure it is safe to ignore these
    // || composed || ChainedMap
  }

  flattenForIn(composed)
  return composed
}

_compose.Observe = Observe
_compose.Shorthands = Shorthands
_compose.Transform = Transform
_compose.DotProp = DotProp

module.exports = _compose
