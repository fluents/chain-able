export * from './deps'
export * from './generic'
export * from './traverse'
export * from './is'
export * from './interfaces'
export * from './Meta'
export * from './merge'
export * from './MethodChain'
export * from './Chain'
export * from './Chainable'
export * from './ChainedSet'
export * from './ChainedMap'
export * from './FactoryChain'
export * from './compose'
export * from './schema'

import {
  eq,
  camelCase,
  toarr,
  Dot,
  MagicMatchers,
  clean,
  reduce,
  FnTap,
} from './deps'
import {
  TraverseChain,
  Traverse,
  TraverseContext,
  TraverseCallback,
} from './traverse'
