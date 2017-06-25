import {strings, Primitive, Traversable, Obj, Fn} from './generic'
import {Class, ParentType} from './_mediator'
import {ChainedSet} from './ChainedSet'
import {ComposedClass, Composable} from './compose'
import {ChainableI, Chainable} from './Chainable'
import {Chain} from './Chain'

export interface TransformI extends Composable {
  // useThis = false
  traverse(useThis?: boolean | Traversable): TransformI | Chain
  transform(key: Primitive, value: any): TransformI | Chain
  remap(from: string, to: string): TransformI | Chain
}
export interface ShorthandsI extends Composable {
  setIfEmpty(name: Primitive, value: any): ShorthandsI | Chain
  return(value: any): any
  wrap(fn: Fn): ShorthandsI | Chain
  debug(should: boolean): Chain
}
export interface ObserveI extends Composable {
  observe(properties: strings, fn: Fn): ObserveI | Chain
}

// overrides .set, .has, .get, .delete with dot.prop access
export interface DotPropI extends Composable {
  dot(enabled: boolean): Chain
}

// these just flow in order...
export declare class ShorthandChain extends Chain {}
export declare class DotPropChain extends Chain {}
export declare class ObserveChain extends Chain {}
export declare class TransformChain extends Chain {}
