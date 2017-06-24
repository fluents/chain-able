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
	MergeableArray,
	Concatable,
	Obj,
	PlainObj,
	Fn,
	truthy,
} from './generic'

// MergeChainI
import { Composable, Composer, Composed, ChainedSetI } from './interfaces'
import { eq, camelCase, toarr, Dot, MagicMatchers, clean, reduce, FnTap } from './deps'
import { TraverseChain, Traverse, TraverseContext, TraverseCallback } from './traverse'

export * from './deps'
export * from './generic'
export * from './traverse'
export * from './is'
export * from './interfaces'

export type Class = Chain | Obj
export type ComposedClass = Chain | Chainable | Composable | Class | Fn | Obj
export type ParentType = ComposedClass
export type ChainAble = Chain // ComposedClass | ChainedSetI | ChainedMapI // | any


// ----------- important part starts here -----------

// --- classes ---

export declare interface MethodChainFactory {
	(
		methodName: string,
		parent: Chain | Obj
	): any
}

export type TRANSFORMERS_KEY = string
export type OBSERVERS_KEY = string
export type SHORTHANDS_KEY = string
export type DECORATED_KEY = string
export type META_KEYS =
	| TRANSFORMERS_KEY
	| OBSERVERS_KEY
	| SHORTHANDS_KEY
	| DECORATED_KEY

export interface Meta {
	(storeKeyName: string, prop?: Primitive, value?: any): Concatable

	// depending on arguments when using as a function
	// (if no `value`, use as a Set, with `prop` as `value`)
	store: Map<META_KEYS, any> | Set<any>
	debug?: boolean
}

// extends Set
export declare class ChainedSet extends Chainable implements ChainedSetI {
	public add(value: any): ChainedSet
	public prepend(value: any): ChainedSet
	public merge(arr: MergeableArray): ChainedSet
	public has(value: any): boolean
	public values(): any[]
}

export declare class Chainable {
	public parent?: ChainAble
	constructor(parent: ParentType)
	public compose: Composer

	public readonly length: number
	public end(): ChainAble | any
	public when(
		condition: truthy,
		trueBrancher?: Fn,
		falseBrancher?: Fn
	): ChainAble
	public clear(): ChainAble
	public delete(key: Primitive): ChainAble
	public has(value: Primitive): boolean
	public [Symbol.iterator](): void
	public [Symbol.toPrimitive](hint: string): string | number | any
	public [Symbol.hasInstance]: boolean
}

// extends Map
// this is to avoid circular requires
// because MergeChain & MethodChain extend this
// yet .method & .merge use those chains
export declare class ChainedMapBase extends Chainable {
	public meta: Meta
	public store: Map<any, any> // = new Map()

	public values(): Primitive[]
	public extend(methods: string[]): ChainAble

	// MapIterator -> `{[key]: value}`
	// with all chain properties if they exist
	public entries(reduceInstanceProperties: boolean): Obj

	public from(obj: Obj): ChainAble
	public tap(name: Primitive, fn: FnTap): ChainAble

	public get(name: Primitive): Primitive
	public set(name: Primitive, value: Primitive, dotPropKey?: any): ChainAble
}
export declare interface MergeFn extends FnHasSingleArg {
	(merger: MergeChain): any
}
export declare class ChainedMap extends ChainedMapBase {
	public method(names: strings): MethodChain
	public methods(names: strings): MethodChain
	public merge(objToMerge: Obj, fn?: MergeFn): ChainAble
}

export declare class Chain extends ChainedMap implements Composed {
	public traverse(useThis?: boolean | Traversable): ChainAble

	// ---- transformchain ---

	// stored in .meta
	public transform(key: Primitive, value: any): ChainAble

	// remaps a key from 1 to another
	public remap(from: string | Obj | Primitive, to: string | Obj | Primitive): ChainAble

	// returns traverser using this.entries()
	public traverse(useThis?: boolean): TraverseChain
	// returns traverser using obj
	public traverse(obj: Traversable): TraverseChain

	// --- shorthandchain ---

	// sets a value only when .has is false
	public setIfEmpty(name: Primitive, value: any): ChainAble

	// .return(anyValue)
	public return(value: any): any

	// wrap a function, call it, return this
	public wrap(fn: Fn): ChainAble

	// special property in .meta
	public debug(should?: boolean): ChainAble

	// --- observechain ---

	// stored in .meta
	public observe(properties: strings, fn: FnArgIsObj): ChainAble

	// --- dotpropchain ---

	// disables dot-prop in .set, .has, .get, .delete
	public dot(enabled: boolean): ChainAble
}

export interface onInvalid {
	(error: TypeError, arg: any, chainable: ChainAble)
	call?: onInvalid
}
export interface onValid {
	(arg: any, chainable: ChainAble)
	call?: onValid
	// this = ChainInstance
}

// https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
// https://github.com/iluwatar/java-design-patterns/tree/master/builder
export class MethodChain extends Chain {
	// --- these 3 are used in every other method (almost) ---

	// defaults to `this.set(key, value)`
	public onSet(fn: Fn): MethodChain
	// defaults to .onSet ^
	public onCall(fn: Fn): MethodChain
	// defaults to `this.get(key)`
	public onGet(fn: Fn): MethodChain

	// --- types ---

	// type validation
	// @example `?string`, `string[]`, `string|boolean`, `boolean[]|string[]`
	public type(type: string | FnHasSingleArg): MethodChain

	// an object that contains nestable types
	// they are mapped to validators
	public schema(schema: Obj): ChainAble

	// when using .encase or .type, defaults to re-throw
	// called when type validation | encased method is invalid
	public onInvalid(fn: Fn): MethodChain
	public catch(fn: Fn): MethodChain // alias

	// called when type validation | encased method isn't invalid
	public onValid(fn: Fn): MethodChain
	public then(fn: Fn): MethodChain // alias

	// --- decorators/factories - they decorate/build the method ---

	// wraps the method in a try catch, responds to
	public encase(method?: string, rethrow?: boolean): MethodChain

	// binds the method to thisArg, or to parent with no params
	public bind(thisArg?: Obj | boolean): MethodChain

	// wraps the method to return `parent` by default
	public returns(value: any): MethodChain
	// public chainable(): MethodChain // alias ^

	// will make the method call the value in .returns
	public callReturns(should?: boolean): MethodChain

	// aliases an array of methods
	// @example .name('eh).alias('canada')
	//					obj.eh = .onCall
	//
	//					obj.canada = obj.eh
	// 					^ is > Object.define(obj, canada, Object.getDescriptor(obj.eh))
	public alias(methods: strings): MethodChain

	// defaultParamValue
	// @example .default('canada') becomes...
	// 					.eh(arg = 'canada' => onCall(arg))
	public default(value?: any): MethodChain

	// sets the value right away
	// @example .name('eh').initial(true)
	//					obj.store: Map<eh, true>
	//					obj.eh = .onCall
	public initial(value?: any): MethodChain

	// defineGetterSetter
	public define(should?: boolean): MethodChain

	// expandNameToSetMethodGetMethod
	// @example .name('eh') decorates an object...
	// 					obj.setEh = .onSet
	//					obj.getEh = .onGet
	// 				  obj.eh    = .onCall
	public getSet(should?: boolean): MethodChain

	// --- important operations ---

	// finish the method building, naming is from the builder pattern,
	// returns the `returnValue` or `this.parent`
	public build(returnValue: Primitive): Primitive
	public build(returnValue?: null | undefined | any): Chain
	// calls .build using Symbol.toPrimative with `+`
	// @example +chain.method(name)
	public toNumber(): number

	// decorate an object, useful when using nested factories
	// this previously was .decorateParent
	public decorate(target: Obj): MethodChain

	// this is called from Chain.method(name) / Chain.methods(names)
	public names(names: strings | Obj): MethodChain
	public name(names: strings | Obj): MethodChain // ^ alias

	// --- simple .factory presets ---

	// is a factory that adds a .onCall & .initial
	// every time the method is called, it auto-increments
	// @example .name('index').autoIncrement()
	//					.index()   // now index is 1
	//				  .index(+1) // now index is 2, note the optional arg for clarity
	public autoIncrement(should?: boolean): MethodChain

	// @example .name('created_at')
	//					obj.createdAt = .onCall
	public camelCase(should?: boolean): MethodChain

	// add custom factories that are called **for each .name**
	// used mainly for when building multiple .names
	// so some properties are reset, or retained
	// the above 2 methods use this
	public factory(fn: MethodChainFactory): MethodChain
}

// preset chains
export declare class MergeChain extends ChainedMapBase { }

// these just flow in order...
export declare class ShorthandChain extends Chain { }
export declare class DotPropChain extends Chain { }
export declare class ObserveChain extends Chain { }
export declare class TransformChain extends Chain { }
