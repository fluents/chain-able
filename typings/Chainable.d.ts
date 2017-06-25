import {Primitive, Obj, Generator, ToPrimativeHint, condition} from './generic'
import {Class, ParentType} from './_mediator'
import {Composable, ComposedClass, Composed, Composer} from './compose'
import {Chain, ChainInstanceFn} from './Chain'

export interface ChainableI extends Composable {
  parent?: ParentType

  end(): Chain | null | undefined

  // when condition: string, uses this.has(condition)
  when(
    condition: condition,
    trueBrancher?: ChainInstanceFn,
    falseBrancher?: ChainInstanceFn
  ): Chain

  // Map.clear
  clear(): Chain

  delete(key: Primitive): Chain
  has(value: Primitive): boolean
  values(): any[]
  readonly length: number
  [Symbol.iterator](): Generator
  [Symbol.toPrimitive](hint: ToPrimativeHint): string | number | Primitive
  [Symbol.hasInstance](instance: Obj | any): boolean // any of the composed classes
}

export declare class Chainable {
  public parent?: Chain
  constructor(parent?: ParentType)
  public compose: Composer

  public readonly length: number
  public end(): Chain | any
  public when(
    condition: condition,
    trueBrancher?: ChainInstanceFn,
    falseBrancher?: ChainInstanceFn
  ): Chain
  public clear(): Chain
  public delete(key: Primitive): Chain
  public has(value: Primitive): boolean
  public [Symbol.iterator](): Generator
  public [Symbol.hasInstance](instance: Obj | any): boolean
  public [Symbol.toPrimitive](
    hint: ToPrimativeHint
  ): string | number | Primitive
}
