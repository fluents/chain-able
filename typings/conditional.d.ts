import {List, Pred} from './FantasyLand'

/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 */
export declare function all<T>(pred: Pred<T>, list: List<T>): boolean;
export declare function all<T>(pred: Pred<T>): (list: List<T>) => boolean;
// all<T>: CurriedFunction2<Pred<T>, List<T>, boolean>;

/*
 * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
 * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
 */
// no generics:
export declare function and(v1: any, v2: any): boolean;
export declare function and(v1: any): (v2: any) => boolean;
// and: CurriedFunction2<any, any, boolean>;

/**
 * Returns true if at least one of elements of the list match the predicate, false otherwise.
 */
export declare function any<T>(pred: Pred<T>, list: List<T>): boolean;
export declare function any<T>(fnpred: Pred<T>): (list: List<T>) => boolean;

// any<T>: CurriedFunction2<Pred<T>, List<T>, boolean>;
// dispatch to some `or` method:
export declare function or<T extends {or?: (alt: U) => T|U;}, U>(fn1: T, val2: U): T|U;
export declare function or<T extends {or?: (alt: U) => T|U;}, U>(fn1: T): (val2: U) => T|U;


export declare function not(value: any): boolean;
