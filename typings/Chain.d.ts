import {
  FnArgIsObj,
  strings,
  Primitive,
  Traversable,
  Obj,
  PlainObj,
  FnHasSingleArg,
} from './generic'

import {ParentType} from './_mediator'
import {Chainable} from './Chainable'
import {Composer, Composed} from './compose'
import {ChainedMap} from './ChainedMap'
import {TraverseChain} from './traverse'

export interface ChainInstanceFn extends FnHasSingleArg {
  (instance: Chain): any
}
export declare class Chain extends ChainedMap implements Composed {
  public traverse(useThis?: boolean | Traversable): Chain
  public compose: Composer

  // ---- transformchain ---

  // stored in .meta
  public transform(key: Primitive, value: any): Chain

  // remaps a key from 1 to another
  public remap(
    from: string | Obj | Primitive,
    to: string | Obj | Primitive
  ): Chain

  // returns traverser using this.entries()
  public traverse(useThis?: boolean): TraverseChain
  // returns traverser using obj
  public traverse(obj: Traversable): TraverseChain

  // --- shorthandchain ---

  // sets a value only when .has is false
  public setIfEmpty(name: Primitive, value: any): Chain

  // .return(anyValue)
  public return(value: any): any

  // wrap a function, call it, return this
  public wrap(fn: ChainInstanceFn): Chain

  // special property in .meta
  public debug(should?: boolean): Chain

  // --- observechain ---

  // stored in .meta
  public observe(properties: strings, fn: FnArgIsObj): Chain

  // --- dotpropchain ---

  // disables dot-prop in .set, .has, .get, .delete
  public dot(enabled: boolean): Chain
}
