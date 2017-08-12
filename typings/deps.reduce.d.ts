import {
  Arr,
  ArrOrObj,
  Obj,
  Fn,
  ValidMap,
} from './generic'
import {List} from './FantasyLand'

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
