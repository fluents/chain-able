import {
  strings,
  Primitive,
  Traversable,
  Concatable,
  Obj,
  ValidMap,
} from './generic'
import {Composable, Composer} from './compose'
import {Chainable} from './Chainable'
import {MethodChain} from './MethodChain'
import {Meta} from './Meta'
import {MergerFn} from './merge'
import {Class, FnTap} from './_mediator'
import {Chain} from './Chain'

export interface ChainedMapI extends Composable {
  meta: Meta
  store: ValidMap
  entries(reduceInstanceProperties: boolean): Obj
  from(obj: Obj): Chain
  extend(methods: string[]): Chain
  tap(name: Primitive, fn: FnTap): Chain
  merge(objToMerge: Obj, fn?: MergerFn): Chain
  get(name: Primitive): Primitive
  set(name: Primitive, value: Primitive): Chain
}
// extends Map
// this is to avoid circular requires
// because MergeChain & MethodChain extend this
// yet .method & .merge use those chains
export declare class ChainedMapBase extends Chainable {
  public meta: Meta
  public store: ValidMap // = new Map()

  public values(): Primitive[]
  public extend(methods: string[]): Chain

  // MapIterator -> `{[key]: value}`
  // with all chain properties if they exist
  public entries(reduceInstanceProperties: boolean): Obj

  public from(obj: Obj): Chain
  public tap(name: Primitive, fn: FnTap): Chain

  public get(name: Primitive): Primitive
  public set(name: Primitive, value: Primitive, dotPropKey?: any): ChainAble
}
export declare class ChainedMap extends ChainedMapBase {
  public method(names: strings): MethodChain
  public methods(names: strings): MethodChain
  public merge(objToMerge: Obj, fn?: MergerFn): Chain
}
