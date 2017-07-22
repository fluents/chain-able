import {
  FnHasSingleArg,
  FnArgIsObj,
  FnArgIsPrimitive,
  Arr,
  strings,
  ArrOrObj,
  Primitive,
  Traversable,
  Matchable,
  Obj,
  Fn,
  Arguments,
  SchemaType,
  ValidMap,
} from './generic'
import { ChainedMapI, Composable, MethodChain } from './_mediator'
import { MergeChain, dopemerge } from './merge'
import { List } from './FantasyLand'
import { Traverse } from './traverse'

export declare function camelCase(str: string): string
export declare function toarr(arr: Arr): Arr
export declare function noop(): void
export declare function simpleKindOf(x: any): string

export interface Dot {
  has(object: Obj, path: strings): boolean
  get(object: Obj, path: strings): any
  set(object: Obj, path: strings, value: any): void
  delete(object: Obj, path: strings): void
  escape(patgh: strings): strings
}
export interface DotPropSegments {
  (paths: strings): Array<string>
}
export interface DotPropPaths extends Traverse {
  (key: Primitive, value: Traversable, longest?: boolean): Array<string>
}

// ------------

export declare function argumentor(...args: Arguments[]): Array<any>

export interface FnTap {
  (arg: Primitive, merger?: dopemerge): any
}

/**
 * @example
 *
 * nestedSchema = {
 *   dates: {
 *      created: {
 *         at: 'date'
 *      }
 *   }
 * }
 *
 * input = {
 *    dates: {
 *      created: {
 *        at: new Date()
 *      }
 *    }
 * }
 *
 * input = new Date()
 * input = {
 *    dates: {
 *      mismatch: true
 *    }
 * }
 *
 */
export function validatorMethodFactory(
  name: Primitive,
  parent: Obj,
  built: Obj
): Fn
export function schemaFactory(property: Primitive, nestedSchema: Obj): Fn
export function validatorFactory(key: string | Function | Primitive): Fn
export function methodEncasingFactory(
  name: string,
  parent: Obj,
  built: Obj,
  functionToEncase: Fn,
  type: SchemaType
): MethodChain
