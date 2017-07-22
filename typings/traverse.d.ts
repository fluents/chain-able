import {Arr, ArrOrObj, Primitive, Traversable, Matchable, Obj, Fn} from './generic'

export type TraverseValue = any

// bind: TraverseContext
export declare function TraverseCallback(
  x: TraverseValue
): TraverseContext | any

export interface TraverseContext {
  node: any // aka iteratee
  isCircular: boolean
  isRoot: boolean
  isLeaf: boolean
  path: string[]
  depth: number
  parent: undefined | any
  parents: Set<any>
  key: undefined | Primitive
  update(value: Primitive, stopHere?: boolean): void
  remove(stopHere?: boolean): void
  // events
  before(fn: Fn): void
  after(fn: Fn): void
  pre(fn: Fn): void
  post(fn: Fn): void
}
export interface Traverse extends TraverseContext {
  value: TraverseValue
  path: Array<string>
  forEach(x: TraverseValue, fn: (t: Traverse) => any): void
  nodes(): ArrOrObj
  // all removed for now
  // map(fn: Fn): any
  // reduce(fn: Fn, init: Obj | Arr | any): ArrOrObj
  // paths(): ArrOrObj
  // set(path: Primitive, value: any): boolean
  // has(path: Primitive): boolean
  // get(path: Primitive): any
}

// loose = false
export declare function eq(one: any, two: any, loose?: boolean): boolean
export declare function eqValue(one: any, two: any, loose?: boolean): boolean
export declare function clone(value: any): any
