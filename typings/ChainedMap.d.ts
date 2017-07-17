import {strings, Primitive, Obj, ValidMap} from './generic'
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
  entries(reduceInstanceProperties?: boolean): Obj
  from(obj: Obj): Chain
  extend(methods: string[]): Chain
  tap(name: Primitive, fn: FnTap): Chain
  merge(objToMerge: Obj, fn?: MergerFn): Chain
  get(name: Primitive): Primitive
  set(name: Primitive, value: Primitive): Chain
}

export declare class ChainedMap extends ChainedMapBase {
  public method(names: strings): MethodChain
  public methods(names: strings): MethodChain
  public merge(objToMerge: Obj, fn?: MergerFn): Chain
}
