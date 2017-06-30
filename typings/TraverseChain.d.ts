import {ArrOrObj, Primitive, Traversable, Matchable, Obj, Fn} from './generic'
import {ChainedMapI} from './ChainedMap'

export interface TraverseChain extends ChainedMapI {
  obj(obj: Traversable): TraverseChain
  traverse(shouldReturn: boolean): TraverseChain
  onNonMatch(fn: Fn): TraverseChain
  onMatch(fn?: Fn): TraverseChain
  vals(vals: Matchable): TraverseChain
  keys(vals: Matchable): TraverseChain
}
