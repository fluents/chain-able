export type Fn = Function
// obj with any properties
export interface PlainObj extends Object {
  (any): any
  call?: Fn
}

export type ArrayOfAny = Array<any>
export type Obj = Object | Function | PlainObj
export type ValidCollectionKey = Obj | Primitive
export type ValidMap = Map<ValidCollectionKey, ValidCollectionKey>
export type ValidSet = Set<ValidCollectionKey>
export type ValidCollection = ValidMap | ValidSet

export interface MatchableObj {
  test(arg?: any): condition
}
export type Matchable =
  | RegExp
  | Fn
  | string
  | Array<RegExp | Fn | string>
  | MatchableObj

export type Concatable = ArrayOfAny | ValidSet | ValidSet
export type MergeableArray = ArrayOfAny | ValidSet

// only when using toArr on map & set, unti l updated
export type Traversable = Obj | ValidMap | ValidSet
export type SchemaType = string | Obj | undefined | null

export type truthy = true | string | number | Obj | Symbol | ValidCollection
export type falsy = false | 0 | null | undefined
export type condition = truthy | falsy

export enum ToPrimativeHint {
  'string',
  'number',
  'default',
}

export type Primitive =
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined
  | void

export type ArrOrObj = ArrayOfAny | Obj
export type Arr =
  | ArrayOfAny
  | Concatable
  | string
  | null
  | undefined
  | boolean
  | number
  | Obj

export type Arguments = any | ArrayOfAny
export type strings = string | Array<string>

export interface FnHasSingleArg extends Function {
  (arg: any): any
}
export interface FnArgIsObj extends FnHasSingleArg {
  (arg: PlainObj): Primitive
}
export interface FnArgIsPrimitive extends FnHasSingleArg {
  (arg: Primitive): Primitive
}

// https://basarat.gitbooks.io/typescript/docs/iterators.html
interface Iterator<T, S> {
  next(value?: any): IteratorResult<T>
  return?(value?: any): IteratorResult<T>
  throw?(e?: any): IteratorResult<T>
  [Symbol.toStringTag]: S
}

export type MapIterator = Iterator<any, 'Map Iterator'>
export type SetIterator = Iterator<any, 'Set Iterator'>
export type Generator = Iterator<any, 'GeneratorFunction'>
