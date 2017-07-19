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
import {List} from './FantasyLand'

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

// undefined and null values are removed
export declare function clean(obj: Obj): Obj

// -----------

export interface Reduced {}

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce and
 * transduce functions. The returned value should be considered a black box: the internal
 * structure is not guaranteed to be stable.
 */
export type reduced<T>(elem: T): Reduced;

// map iterator -> obj
export declare function reduce(map: ValidMap): Obj
/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 */
export declare function reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult, list: R): TResult;
export declare function reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult):{
    (list: R): TResult;
};
export declare function reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced):{
    (acc: TResult, list: R): TResult;
    (acc: TResult):{
        (list: R): TResult;
    };
};

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
