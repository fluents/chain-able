// Fantasyland export interfaces

// TODO: incorporate generalized inheritance e.g.: `<U extends
// Applicative, V extends Traversable>`; possibly needs [rank 2
// polymorphism](https://github.com/Microsoft/TypeScript/issues/1213).

export interface Setoid<T> {
    equals(b: Setoid<T>): boolean;
}

export interface Semigroup<T> {
    concat(b: Semigroup<T>): Semigroup<T>;
}

export interface Monoid<T> extends Semigroup<T> {
    /* static */ empty<T>(): Monoid<T>;
}

export interface Functor<T> {
    map<U>(fn: (t: T) => U): Functor<U>;
}

export interface Apply<T> extends Functor<T> {
    apply<U>(fn: Apply<(t: T) => U>): Apply<U>;
}

export interface Applicative<T> extends Apply<T> {
    /* static */ of<U>(a: U): Applicative<U>;
}

export interface Alt<T> extends Functor<T> {
    alt(b: T): Alt<T>;
}

export interface Plus<T> extends Alt<T> {
    /* static */ zero<T>(): Plus<T>;
}

export interface Alternative<T> extends Plus<T>, Applicative<T> {
}

export interface Foldable<T> {
    reduce<U>(fn: (u: U, t: T) => U, u: U): U;
}

export interface Traversable<T> extends Functor<T>, Foldable<T> {
    traverse<U, V>(fn: (t: T) => Applicative<U>, of: (v: V) => Applicative<V>): Applicative<Traversable<U>>;
}

export interface FantasyChain<T> extends Apply<T> {
    chain<U>(fn: (t: T) => FantasyChain<U>): FantasyChain<U>;
}

export interface FantasyChainRec<T> extends FantasyChain<T> {
    /* static */ chainRec<A,B,C>(f: (next: (a: A) => C, done: (b: B) => C, value: A) => FantasyChainRec<C>, i: A): FantasyChainRec<B>;
}

export interface Monad<T> extends Applicative<T>, FantasyChain<T> {
}

export interface Extend<T> {
    extend<U>(f: (v: Extend<T>) => U): Extend<U>;
}

export interface Comonad<T> extends Functor<T>, Extend<T> {
    extract<U>(): U; // 'same U as in extend's f -- how to bind?
}

export interface Bifunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
    bimap<B,D>(f: (v: T) => B, g: (v: U) => D): Bifunctor<B,D>;
}

export interface Profunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
    promap<B,D>(f: (v: T) => B, g: (v: U) => D): Profunctor<B,D>;
}

// simple types

type Index = string | number;
type Primitive = string | number | boolean;
type Ord = string | number | boolean | Date;

export interface Dictionary<T> {
    [index: string]: T;
}

type ObjF<T> = Dictionary<T>;
type List<T> = T[] | ArrayLike<T>;
type StringLike = string | StringRepresentable<string>;
type Prop = Index | StringRepresentable<Index>;
type Path = List<Prop>;
type Struct<T> = ObjF<T> | List<T>;
type AccOpts<T,U> = List<any>|ObjF<any>|Transformer<T, U, U>;
type Pred<T> = (v: T) => boolean;
type ObjFPred<T> = (value: T, key: string) => boolean;

// Ramda export interfaces

export interface Type<T> extends Function {
    new (...args: any[]): T;
}

export interface Variadic<T> {
    (...args: any[]): T;
}

export interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }

export interface Transformer<T, Acc, Res> {
    step: (acc: Acc, v: T) => Acc;
    init: () => Acc;
    result: (acc: Acc) => Res; // = R.identity
}

export interface NumericDictionary<T> {
    [index: number]: T;
}

export interface StringRepresentable<T> {
    toString(): T;
}

export interface NestedObj<T> {
    [index: string]: T|NestedObj<T>;
}

// export interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
// export interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
export interface NestedArray <T> {
  [index: number]: T | NestedArray<T>;
  length: number;
}
