import {Variadic, List, Struct, Prop} from './FantasyLand'

// https://github.com/ramda/ramda/issues/1617
export function always(x: any): any

// --------

/**
 * Returns the first element in a list.
 * In some libraries this function is named `first`.
 */
export declare function first<T extends List<any>>(list: T): T[0] | undefined;
export declare function first(list: string): string;
// tuple attempts; it doesn't like these.
export declare function first<T>(list: [T]): T;
export declare function first<T0, T1>(list: [T0, T1]): T0;
export declare function first<T0, T1, T2>(list: [T0, T1, T2]): T0;

/**
 * Returns the index of the last element of the list which matches the predicate, or
 * `-1` if no element matches.
 */
export declare function findLastIndex<T>(fn: (a: T) => boolean, list: List<T>): number;
export declare function findLastIndex<T>(fn: (a: T) => boolean): (list: List<T>) => number;
// findLastIndex<T>: CurriedFunction2<(a: T) => boolean, List<T>, number>;

/**
 * Returns the last element of the list which matches the predicate, or `undefined` if no
 * element matches.
 */
export declare function findLast<T>(fn: (a: T) => boolean, list: List<T>): T;
export declare function findLast<T>(fn: (a: T) => boolean): (list: List<T>) => T;
// findLast<T>: CurriedFunction2<(a: T) => boolean, List<T>, T>;


// --------

/**
 * Returns a function that when supplied an object returns the indicated export declare function property of that object, if it exists.
 */

// keyof version
export declare function prop<T, K extends keyof T>(p: K, obj: T): T[K];
// export declare function prop<T, K extends keyof T>(p: K): (obj: T) => T[K]; // T info late
// export declare function prop<T, K extends keyof T>: CurriedFunction2<K, T, T[K]>;
// export declare function prop<K extends Prop>(p: K): <T, K extends keyof T>(obj: T) => T[K]; // K redefined, fails
// export declare function prop<T, K extends Prop>: CurriedFunction2<K, T, T[K]>;

// Record version, more curry-friendly
export declare function prop<K extends string, V, T extends Record<K, V>>(p: K, obj: T): V; // uncurried adds value only for {} from e.g. degeneration
// export declare function prop<K extends string>(p: K): <V, T extends Record<K, V>>(obj: T) => V;
// export declare function prop<K extends string, V, T extends Record<K,V>>: CurriedFunction2<K, T, V>;

// manually type with explicit generic
export declare function prop<T>(p: Prop, obj: Struct<any>): T;
// export declare function prop(p: Prop): <T>(obj: Struct<any>) => T;
// export declare function prop<T>: CurriedFunction2<Prop, Struct<any>, T>;

// mixed for currying:
export declare function prop<K extends string>(p: K): {
  // Record version
  <V, T extends Record<K, V>>(obj: T): V;
  // manually typed
  <T>(obj: Struct<any>): T;
};

/**
 * Replace a substring or regex match in a string with a replacement.
 */
// replace(pattern: RegExp|Prop, replacement: Prop, str: string): string;
// replace(pattern: RegExp|Prop, replacement: Prop): (str: string) => string;
// replace(pattern: RegExp|Prop): CurriedFunction2<Prop, string, string>;
// // replace(pattern: RegExp|Prop): (replacement: Prop, str: string) => string;
// // replace(pattern: RegExp|Prop): (replacement: Prop) => (str: string) => string;
// // replace: CurriedFunction3<RegExp|Prop, Prop, string, string>;

// base
export declare function replace(pattern: RegExp|Prop, replacement: Prop, str: string): string;
export declare function replace(pattern: RegExp|Prop, replacement: Prop):{
    (str: string): string;
};
export declare function replace(pattern: RegExp|Prop):{
    (replacement: Prop, str: string): string;
    (replacement: Prop):{
        (str: string): string;
    };
};
