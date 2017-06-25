import {ArrOrObj, Primitive, Traversable, Matchable, Obj, Fn} from './generic'
import {ChainedMapI} from './ChainedMap'

export type TraverseValue = any

// bind: TraverseContext
export declare function TraverseCallback(
  x: TraverseValue
): TraverseContext | any

export interface TraverseContext {
  node: any
  circular: boolean
  path: undefined | string[]
  parent: undefined | any
  key: undefined | Primitive
  notRoot: boolean
  root: boolean
  isLeaf: boolean
  notLeaf: boolean
  level: number
  update(value: Primitive, stopHere?: boolean): void
  remove(stopHere?: boolean): void
  delete(stopHere?: boolean): void
  before(fn: Fn): void
  after(fn: Fn): void
  pre(fn: Fn): void
  post(fn: Fn): void
}
export interface Traverse {
  value: TraverseValue
  nodes(): ArrOrObj
  map(fn: Fn): any
  forEach(x: TraverseValue, fn: (t: Traverse) => any): void
  reduce(fn, init): ArrOrObj
  paths(): ArrOrObj
  set(path: Primitive, value: any): boolean
  has(path: Primitive): boolean
  get(path: Primitive): any
  clone(): Obj
}
export interface TraverseChain extends ChainedMapI {
  obj(obj: Traversable): TraverseChain
  traverse(shouldReturn: boolean): TraverseChain
  onNonMatch(fn: Fn): TraverseChain
  onMatch(fn?: Fn): TraverseChain
  vals(vals: Matchable): TraverseChain
  keys(vals: Matchable): TraverseChain
}
