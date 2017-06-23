const Chainable = require('../Chainable')
const ChainedMap = require('../ChainedMap')
const Observe = require('./Observe')
const Shorthands = require('./Shorthands')
const Transform = require('./Transform')
const DotProp = require('./DotProp')

const ComposableExtensions = [Observe, Shorthands, Transform, DotProp]

/**
 * @param  {Class | Function | undefined} target
 * @param  {Array | undefined} extensions
 * @return {Class | Function}
 */
function compose(target, extensions) {
  let extend = extensions === undefined ? ComposableExtensions : extensions
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
