// core
const Chainable = require('./Chainable')
const ChainedMap = require('./ChainedMap')
const ChainedSet = require('./ChainedSet')
// merge
const MergeChain = require('./MergeChain')
const dopemerge = require('./deps/dopemerge')
const traverse = require('./deps/traverse')
// easy
const FactoryChain = require('./FactoryChain')
const MethodChain = require('./MethodChain')
// composer
const compose = require('./compose')

// export
const exp = compose()
exp.init = parent => new exp(parent)
exp.Chain = exp
exp.compose = compose

// deps
exp.traverse = traverse
exp.toArr = require('./deps/to-arr') // exp.toarr =
exp.camelCase = require('./deps/camel-case')
exp.dot = require('./deps/dot-prop')
exp.eq = require('./deps/traversers/eq')
exp.matcher = require('./deps/matcher')
exp.is = require('./deps/is')
exp.reduce = require('./deps/reduce')
exp.meta = require('./deps/meta')

// core
exp.Chainable = Chainable
exp.ChainedSet = ChainedSet
exp.ChainedMap = ChainedMap
exp.FactoryChain = FactoryChain
exp.MethodChain = MethodChain

// merge
exp.MergeChain = MergeChain
exp.merge = dopemerge

// @NOTE: no need for exporting as an __esModule,
// it adds additional checking wrapper
module.exports = exp
