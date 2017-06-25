import {Obj, Fn} from './generic'
import {Class, TransformI, ObserveI, DotPropI, ShorthandsI} from './_mediator'
import {ChainedMapI} from './ChainedMap'
import {Chain} from './Chain'
import {ChainableI, Chainable} from './Chainable'

// https://stackoverflow.com/questions/38338013/can-you-extend-a-function-in-typescript
// https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files
// https://stackoverflow.com/questions/14813804/typescript-function-interface
export interface Composer {
  (target: Class, extensions?: Array<Class> | undefined): ComposedClass
}
export interface Composable {
  compose: Composer
}
// compose / chain
export declare function compose(
  target: Composable,
  extensions?: Array<Obj> | undefined
): Composable

export type Class = Chain | Obj
export type ComposedClass = Chain | Chainable | Composable | Class | Fn | Obj
export type ParentType = ComposedClass
// export type ChainAble = Chain // ComposedClass | ChainedSetI | ChainedMapI // | any

export interface Composed extends Composable, TransformI, ShorthandsI, ObserveI, DotPropI, ChainableI, ChainedMapI {}
