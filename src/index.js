// dep
const ObjectAssign = require('./deps/util/assign')
// core
const ChainedMap = require('./ChainedMap')
const Chainable = require('./Chainable')
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
const construct = require('./deps/fp/construct')

// export
const exp = compose()
exp.chainable = construct(1, exp)
exp.builder = construct(1, MethodChain)
exp.Chain = exp
exp.compose = compose

// deps
exp.traverse = traverse
exp.addMethodFactories = MethodChain.add

exp.toArr = require('./deps/to-arr') // exp.toarr =
exp.camelCase = require('./deps/string/camelCase')
exp.dot = require('./deps/dot')
exp.matcher = require('./deps/matcher')
exp.reduce = require('./deps/reduce')
exp.clean = require('./deps/reduce/clean')
exp.meta = require('./deps/meta')
exp.eq = require('./deps/traversers/eq')
exp.types = require('./deps/validators')
exp.encase = require('./deps/encase')
exp.curry = require('./deps/fp/curry')
exp.replace = require('./deps/fp/replace')

exp.addTypes = exp.types.addTypes

// core
exp.Chainable = Chainable
exp.ChainedSet = ChainedSet
exp.ChainedMap = ChainedMap
exp.FactoryChain = FactoryChain
exp.MethodChain = MethodChain

// merge
exp.MergeChain = MergeChain
exp.merge = dopemerge

exp.is = require('./deps/is')

ObjectAssign(exp, exp.is)

// @NOTE: no need for exporting as an __esModule,
// it adds additional checking wrapper
module.exports = exp
