import {ArrOrObj, Primitive, Traversable, Matchable, Obj, Fn} from './generic'

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
  // events
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
  reduce(fn: Fn, init: Obj | Arr | any): ArrOrObj
  paths(): ArrOrObj
  set(path: Primitive, value: any): boolean
  has(path: Primitive): boolean
  get(path: Primitive): any
  clone(): Obj
}

// loose = false
export declare function eq(one: any, two: any, loose?: boolean): boolean
