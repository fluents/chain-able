const Chainable = require('../Chainable')
const ChainedMap = require('../ChainedMap')
const isClass = require('../deps/is/class')
const Define = require('./Define')
const Observe = require('./Observe')
const Shorthands = require('./Shorthands')
const Transform = require('./Transform')
const Types = require('./Types')
const DotProp = require('./DotProp')
const Extend = require('./Extend')

// @TODO child, immutable, Symbols (take out of Chainable)
// const Symbols = require('./Symbols')

// @TODO ensure speed is not affected with additional checks
// @TODO easy decorating with specific options
//
// optimize this as much as possible
function compose(target = null, o = true) {
  let composed = target
  let opts = o
  if (opts === true) {
    // single arg - using options
    if (typeof composed === 'object' && isClass(composed) === false) {
      // console.log('using options, no class')
      opts = composed
      composed = ChainedMap
      // console.log({opts, o, composed, target})
      // require('fliplog').bold('was not a class').data(composed, opts).exit()
    }
    else {
      // console.log('one arg')
      opts = {
        symbols: true,
        define: true,
        observe: true,
        shorthands: true,
        transform: true,
        types: true,
        dot: true,
        extend: true,
      }

      if (target) {
        // console.log('one arg with class target')
        composed = ChainedMap.compose(Chainable.compose(target))
        // composed = compose(ChainedMap.compose(Chainable.compose(target)))
      }
      else {
        // console.log('one arg with not class target...')
        composed = ChainedMap
      }
    }
  }
  else {
    opts = {}
    // console.log('no options')
  }

  // if (opts.symbols === true) composed = Symbols(composed)
  if (opts.extend === true) composed = Extend(composed)
  if (opts.define === true) composed = Define(composed)
  if (opts.observe === true) composed = Observe(composed)
  if (opts.shorthands === true) composed = Shorthands(composed)
  if (opts.transform === true) composed = Transform(composed)
  if (opts.types === true) composed = Types(composed)
  if (opts.dot === true) composed = DotProp(composed)

  return composed
}

// compose.Symbols = Symbols
compose.Extend = Extend
compose.Define = Define
compose.Observe = Observe
compose.Shorthands = Shorthands
compose.Transform = Transform
compose.Types = Types
compose.DotProp = Types

module.exports = compose
