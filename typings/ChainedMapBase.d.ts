import {Chainable} from './Chainable'
import {Chain} from './Chain'
import {strings, Primitive, Obj, ValidMap} from './generic'
import {Class, FnTap} from './_mediator'
import {Meta} from './meta'

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
  public set(name: Primitive, value: Primitive, dotPropKey?: any): Chain
}
