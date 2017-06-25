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
import {ChainedMapI, Composable, MethodChain} from './_mediator'
import {MergeChain, dopemerge} from './merge'

// loose = false
export declare function eq(one: any, two: any, loose?: boolean): boolean

export declare function camelCase(str: string): string
export declare function toarr(arr: Arr): Arr

export interface Dot {
  has(object: Obj, path: strings): boolean
  get(object: Obj, path: strings): any
  set(object: Obj, path: strings, value: any): void
  delete(object: Obj, path: strings): void
}
export interface DotPropSegments {
  (paths: strings): Array<string>
}
export interface DotPropPaths {
  (key: Primitive, value: Traversable, longest?: boolean): Array<string>
}
export function escapeStringRegExp(str: string): string
// calls escapeStringRegExp
export function toRegExp(str: string): string
export function toTest(matchable: Matchable): boolean
export function uniq(value: any, index: number, arr: Arr): boolean
export function define(obj: Object, name: Primitive, descriptor: Object): never
export function concat(one: any, two: any): Array<any>

// match
// alphaOmega = false, shouldNegate = false
export interface MagicMatchers {
  make(
    pattern: Matchable | Matchable[],
    shouldNegate?: boolean,
    alphaOmega?: boolean
  ): Matchable
  matcher(
    inputs: any[],
    patterns: Matchable[],
    shouldNegate?: boolean,
    alphaOmega?: boolean
  ): Array<any>
}

// undefined and null values are removed
export declare function clean(obj: Obj): Obj

// map iterator -> obj
export declare function reduce(map: ValidMap): Obj
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
