import {Variadic} from './FantasyLand'

// https://github.com/types/npm-ramda/blob/master/index.d.ts
// @see https://gist.github.com/donnut/fd56232da58d25ceecf1, comment by @albrow

// interface CurriedFunction1<T1, FP> {
//     (v1: T1): FP;
// }
type CurriedFunction1<T1, FP> = (v1: T1) => FP;

interface CurriedFunction2<T1, T2, FP> {
    (v1: T1): (v2: T2) => FP;
    (v1: T1, v2: T2): FP;
}
interface CurriedFunction3<T1, T2, T3, FP> {
    (v1: T1): CurriedFunction2<T2, T3, FP>;
    (v1: T1, v2: T2): (v3: T3) => FP;
    (v1: T1, v2: T2, v3: T3): FP;
}
interface CurriedFunction4<T1, T2, T3, T4, FP> {
    (v1: T1): CurriedFunction3<T2, T3, T4, FP>;
    (v1: T1, v2: T2): CurriedFunction2<T3, T4, FP>;
    (v1: T1, v2: T2, v3: T3): (v4: T4) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4): FP;
}
interface CurriedFunction5<T1, T2, T3, T4, T5, FP> {
    (v1: T1): CurriedFunction4<T2, T3, T4, T5, FP>;
    (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, FP>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4): (v5: T5) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): FP;
}
interface CurriedFunction6<T1, T2, T3, T4, T5, T6, FP> {
    (v1: T1): CurriedFunction5<T2, T3, T4, T5, T6, FP>;
    (v1: T1, v2: T2): CurriedFunction4<T3, T4, T5, T6, FP>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction3<T4, T5, T6, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction2<T5, T6, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): (v6: T6) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): FP;
}
interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, FP> {
    (v1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, FP>;
    (v1: T1, v2: T2): CurriedFunction5<T3, T4, T5, T6, T7, FP>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction4<T4, T5, T6, T7, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction3<T5, T6, T7, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction2<T6, T7, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): (v7: T7) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): FP;
}
interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, FP> {
    (v1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, FP>;
    (v1: T1, v2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, FP>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction5<T4, T5, T6, T7, T8, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction4<T5, T6, T7, T8, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction3<T6, T7, T8, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction2<T7, T8, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): (v8: T8) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): FP;
}
interface CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, FP> {
    (v1: T1): CurriedFunction8<T2, T3, T4, T5, T6, T7, T8, T9, FP>;
    (v1: T1, v2: T2): CurriedFunction7<T3, T4, T5, T6, T7, T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction6<T4, T5, T6, T7, T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction5<T5, T6, T7, T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction4<T6, T7, T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction3<T7, T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): CurriedFunction2<T8, T9, FP>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): (v9: T9) => FP;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9): FP;
}

/**
 * Returns a curried equivalent of the provided function.
 */
export declare function curry<T1, TResult>(fn: (a: T1) => TResult): CurriedFunction1<T1, TResult>;
export declare function curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
export declare function curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
export declare function curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
export declare function curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7) => TResult): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8) => TResult): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9) => TResult): CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>;
// curry(fn: Function): Function


/**
 * Returns a curried equivalent of the provided function, with the specified arity.
 */
export declare function curryN<T>(length: number, fn: Variadic<T>): Variadic<T>;
// curryN<T>: CurriedFunction2<number, Variadic<T>, Variadic<T>>;


/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly n parameters.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export declare function nAry<T>(n: number, fn: Variadic<T>): Variadic<T>;
export declare function nAry(n: number): <T>(fn: Variadic<T>) => Variadic<T>;
// nAry<T>: CurriedFunction2<number, Variadic<T>, Variadic<T>>;
