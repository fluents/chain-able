export type truthy = boolean | string | number | null | undefined
export type Fn = Function
export interface PlainObj extends Object {
  (any): any
}
export type Obj = Object | Function | PlainObj // | any
export type Concatable = Array<any> | Set<any> | Map<any, any>
export type MergeableArray = Array<any> | Set<any> // | Concatable
export type Matchable = RegExp | Fn | string | Array<RegExp | Fn | string>
export type Traversable = Obj | Map<any, any> | Set<any>
export type Primitive = string | number | boolean | symbol | null | undefined | void // | any
export type ArrOrObj = Array<any> | Obj
export type Arr = Array<any> | Concatable | string | null | undefined | boolean | number | Obj
export type strings = string | Array<string>

export type Class = Chain | Obj
export type ComposedClass = Chain | Chainable | Composable| Class | Fn | Obj
export type ParentType = ComposedClass
export type AnyChain = Chain // ComposedClass | ChainedSetI | ChainedMapI // | any

export interface FnHasSingleArg extends Function {
  (arg: any): any
}
export interface FnArgIsObj extends FnHasSingleArg {
  (arg: PlainObj): Primitive
}
export interface FnArgIsPrimitive extends FnHasSingleArg {
  (arg: Primitive): Primitive
}
export interface Composer {
  (SuperClass: Class, opts?: any): ComposedClass
}
// https://stackoverflow.com/questions/38338013/can-you-extend-a-function-in-typescript
// https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files
// https://stackoverflow.com/questions/14813804/typescript-function-interface
export declare interface Composable {
  // constructor(parent: ParentType): ComposedClass
  compose: Composer
}

// bind: TraverseContext
declare function TraverseCallback(x: Traverse.value): TraverseContext | any

declare interface TraverseContext {
  node: any
  circular: boolean
  path: undefined | string[]
  parent: undefined | any
  key: undefined | Primitive
  notRoot: boolean
  root: boolean
  isLeaf: boolean
  notLeaf: boolean
  level: number
  update(value: Primitive, stopHere?: boolean): void
  remove(stopHere?: boolean): void
  delete(stopHere?: boolean): void
  before(fn: Fn): void
  after(fn: Fn): void
  pre(fn: Fn): void
  post(fn: Fn): void
}
declare interface Traverse {
  value: any
  nodes(): ArrOrObj
  map(fn: Fn): any
  forEach(x: Traverse.value, fn: (t: Traverse) => any): void
  reduce(fn, init): ArrOrObj
  paths(): ArrOrObj
  set(path: Primitive, value: any): boolean
  has(path: Primitive): boolean
  get(path: Primitive): any
  clone(): Obj
}
export declare interface TraverseChain extends ChainedMapI {
  obj(obj: Traversable): TraverseChain
  traverse(shouldReturn: boolean): TraverseChain
  onNonMatch(fn: Fn): TraverseChain
  onMatch(fn?: Fn): TraverseChain
  vals(vals: Matchable): TraverseChain
  keys(vals: Matchable): TraverseChain
}

// loose = false
export declare function eq(one: any, two: any, loose?: boolean): boolean

// dot-prop
export declare interface DotFactoryChain extends ChainedMapI, Composable {
  dotted(fn: FnHasSingleArg): DotFactoryChain | AnyChain
  otherwise(fn: Function): DotFactoryChain | AnyChain
  value(): DotFactoryChain | AnyChain
}

export declare function camelCase(str: string): string;
export declare function toarr(arr: Arr): Arr;

export declare interface Dot {
  has(object: any, path: string): boolean;
  get(object: any, path: string): any;
  set(object: any, path: string, value: any): void;
  delete(object: any, path: string): void;
}

// match
// alphaOmega = false, shouldNegate = false
export declare interface MagicMatchers {
  make(pattern: Matchable[], shouldNegate?: boolean, alphaOmega?: boolean): Array<any>;
  matcher(inputs: any[], patterns: Matchable[], shouldNegate?: boolean, alphaOmega?: boolean): any[];
}

// merge
export interface DopeMergeOptions {
  arrayMerge?: Fn
  stringToArray?: boolean // = true
  boolToArray?: boolean // = false
  ignoreTypes?: string[] // = ['null', 'undefined', 'NaN']
  debug?: boolean // = true
}
export declare function dopemerge(obj1: Obj, obj2: Obj, opts?: DopeMergeOptions)
export declare interface MergeChainI {
  onValue(fn?: Fn): MergeChainI
  obj(obj: Obj): MergeChainI
  merge(objToMerge: Obj): MergeChainI
}
export declare interface FactoryChainI extends Composable {
  data(prop?: Primitive): Obj
  chainUpDowns(methods: string[]): FactoryChainI
  props(props: string[]): FactoryChainI
  prop(name: string): FactoryChainI
  onDone(callback: Fn): FactoryChainI
  getData(): Obj | any
  factory(obj: Obj): FactoryChainI | ChainableI
}
// compose / chain
export declare function compose(target: Composable, opts?: Object | any): Composable

// declare module Chainable {
export declare interface ChainableI extends Composable {
  parent?: ParentType
  // (SuperClass: Class, opts?: any): ComposedClass
  // constructor(parent: ParentType): ComposedClass
  // compose(SuperClass, opts?: any): ComposedClass

  end(): ChainableI | any;
  when(condition: truthy, trueBrancher?: Fn, falseBrancher?: Fn): AnyChain;
  clear(): AnyChain;
  delete(key: Primitive): AnyChain;
  has(value: Primitive): boolean;
  values(): any[];
  readonly length: number;
  [Symbol.iterator](): void;
  [Symbol.toPrimitive](hint: string): string | number | Primitive
  [Symbol.hasInstance]: boolean // any of the composed classes
}

export declare interface TransformI extends Composable {
  // compute(key, fn) <- todo
  // useThis = false
  traverse(useThis?: boolean | Traversable): TransformI | AnyChain
  transform(key: Primitive, value: any): TransformI | AnyChain
  remap(from: string, to: string): TransformI | AnyChain
}
export declare interface ShorthandsI extends Composable {
  // rethrow = false
  encase(method: string, rethrow?: boolean): ShorthandsI | AnyChain
  bindMethods(methods: strings): ShorthandsI | AnyChain
  chainWrap(name: Primitive, fn?: Fn): ShorthandsI | AnyChain
  setIfEmpty(name: Primitive, value: any): ShorthandsI | AnyChain
  return(value: any): any
  wrap(fn: Fn): ShorthandsI | AnyChain
  then(fn: Fn): ShorthandsI | AnyChain
  catch(fn: Fn): ShorthandsI | AnyChain
}
export declare interface ObserveI extends Composable {
  observe(properties: strings, fn: Fn): ObserveI | AnyChain
}
export declare interface ChainedMapI extends Composable {
  shorthands?: string[]
  store: Map<any, any>
  entries(reduceInstanceProperties: boolean): ChainedMapI | AnyChain
  from(obj: Obj): ChainedMapI | AnyChain
  extend(methods: string[]): ChainedMapI | AnyChain
  tap(name: string | any, fn: Fn): ChainedMapI | AnyChain
}
export declare interface ChainedSetI extends ChainableI {
  add(value: any): ChainedSet;
  prepend(value: any): ChainedSet;
  has(value: any): boolean;
  merge(arr: MergeableArray): ChainedSet;
  [Symbol.species]: Set
  [Symbol.isConcatSpreadable]: boolean
}


export declare interface ExtendI extends Composable {
  // should = false
  debug(should: boolean): ExtendI
  decorateParent(decorations: Array<string | Object>): ExtendI
  extendAlias(methods: strings, name: Primitive, thisArg?: any): ExtendI
  extendWith(methods: strings, defaultValue?: any): ExtendI
  extendIncrement(methods: strings): ExtendI
}


export declare interface DotPropI extends Composable {
  dotter(name?: string): DotPropI | DotFactoryChain
  // protected
  _dotter(name: Primitive): DotPropI | DotFactoryChain
}
export declare interface DefineChainI extends Composable {
  defineGetSet(methods: string[]): DefineChainI
  extendGetSet(methods: string[], thisArg?: Obj): DefineChainI
}

export type AutoEndingTypeChain = TypeChainI | TypeChainFactory
export declare interface TypeChainFactory extends TypeChainI {
  name(name: string): AutoEndingTypeChain
  type(validator: string | Fn): AutoEndingTypeChain
  onValid(fn: Fn): AutoEndingTypeChain
  onInvalid(fn: Fn): AutoEndingTypeChain
}
export declare interface TypeChainI extends Composable {
  validators(validators: Obj): TypeChainI
  typed(name?: string): TypeChainI | FactoryChainI
  // protected
  extendTyped(name?: string, type?: any, onInvalid?: Fn, onValid?: Fn): TypeChain
}

export declare interface Composed extends
  Composable,
  TransformI,
  ShorthandsI,
  ObserveI,
  DotPropI,
  ExtendI,
  ChainableI,
  TypeChainI,
  DefineChainI,
  ChainedMapI
{ }

// --- classes ---


export declare class Chainable  {
  public parent?: AnyChain
  // (SuperClass: Class, opts?: any): ComposedClass
  constructor(parent: ParentType)
  public compose: Composer

  public readonly length: number;
  public end(): AnyChain | any;
  public when(condition: truthy, trueBrancher?: Fn, falseBrancher?: Fn): AnyChain;
  public clear(): AnyChain
  public delete(key: Primitive): AnyChain;
  public has(value: Primitive): boolean;
  public [Symbol.iterator](): void;
  public [Symbol.toPrimitive](hint: string): string | number | any
  public [Symbol.hasInstance]: boolean
}

// extends Map
export declare class ChainedMap extends Chainable {
  public values(): any[];
}
// extends Set
export declare class ChainedSet extends Chainable implements ChainedSetI {
  public add(value: any): ChainedSet;
  public prepend(value: any): ChainedSet;
  public merge(arr: MergeableArray): ChainedSet;
  public has(value: any): boolean;
  public values(): any[];
  [Symbol.species]: Set
  [Symbol.isConcatSpreadable]: boolean
}

export declare class Chain extends ChainedMap implements Composed {
  public shorthands?: string[] // = []
  public store: Map<any, any> // = new Map()

  public traverse(useThis?: boolean | Traversable): AnyChain
  public transform(key: Primitive, value: any): AnyChain
  public remap(from: string, to: string): AnyChain

  public encase(method: string, rethrow?: boolean): AnyChain
  public bindMethods(methods: strings): AnyChain
  public chainWrap(name: Primitive, fn?: Fn): AnyChain
  public setIfEmpty(name: Primitive, value: any): AnyChain
  public return(value: any): any
  public wrap(fn: Fn): AnyChain
  public then(fn: Fn): AnyChain
  public catch(fn: Fn): AnyChain

  public observe(properties: strings, fn: FnArgIsObj): AnyChain

  public entries(reduceInstanceProperties: boolean): AnyChain
  public from(obj: Obj): AnyChain
  public tap(name: Primitive, fn: FnArgIsPrimitive): AnyChain

  public debug(should?: boolean): AnyChain
  public decorateParent(decorations: Array<string | Object>): AnyChain

  public extend(methods: string[]): AnyChain
  public extendAlias(methods: string[], name: Primitive, thisArg?: any): AnyChain
  public extendWith(methods: string[], val?: any): AnyChain
  public extendIncrement(methods: string[]): AnyChain
  public defineGetSet(methods: string[]): AnyChain
  public extendGetSet(methods: string[], thisArg?: Obj): AnyChain
  public extendTyped(name: string, type: any, onInvalid?: Fn, onValid?: Fn): AnyChain

  public dotter(name?: Primitive): AnyChain | DotPropI | DotFactoryChain
  protected _dotter(name: Primitive): AnyChain | DotPropI | DotFactoryChain
  public validators(validators: Obj): AnyChain
  public typed(name?: Primitive): AnyChain | FactoryChainI
}


// preset chains
export declare class MergeChain extends ChainedMap implements MergeChainI { }
export declare class TraverseChain extends ChainedMap implements FactoryChainI { }

// these just flow in order...
export declare class ShorthandChain extends Chain { }
export declare class ExtendChain extends Chain { }
export declare class DotPropChain extends Chain { }
export declare class DefineChain extends Chain { }
export declare class TypeChain extends Chain { }
export declare class ObserveChain extends Chain { }
export declare class TransformChain extends Chain { }

// @TODO: debug, child, immutable, symbols
