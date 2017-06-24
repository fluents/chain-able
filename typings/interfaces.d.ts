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

import {
	Class,
	ComposedClass,
	ParentType,
	ChainAble,
	FnTap,
	ChainedSet,
} from './v4types'

// https://stackoverflow.com/questions/38338013/can-you-extend-a-function-in-typescript
// https://typescript.codeplex.com/wikipage?title=Writing%20Definition%20%28.d.ts%29%20Files
// https://stackoverflow.com/questions/14813804/typescript-function-interface
export interface Composer {
	(target: Class, extensions?: Array<Class> | undefined): ComposedClass
}
export interface Composable {
	compose: Composer
}
// compose / chain
export declare function compose(
	target: Composable,
	extensions?: Array<Obj> | undefined
): Composable

export interface FactoryChainI extends Composable {
	data(prop?: Primitive): Obj
	chainUpDowns(methods: string[]): FactoryChainI
	props(methods: string[]): FactoryChainI
	prop(name: string, cb?: Fn): FactoryChainI
	onDone(fn: Fn): FactoryChainI
	getData(key?: Primitive): Obj | any
	factory(obj: Obj): FactoryChainI | ChainableI
	optional(methods: string[]): FactoryChainI
	required(methods: string[]): FactoryChainI
}

// declare module Chainable {
export interface ChainableI extends Composable {
	parent?: ParentType

	end(): ChainableI | null

	// when condition: string, uses this.has(condition)
	when(condition: truthy, trueBrancher?: Fn, falseBrancher?: Fn): ChainAble

	// Map.clear
	clear(): ChainAble

	delete(key: Primitive): ChainAble
	has(value: Primitive): boolean
	values(): any[]
	readonly length: number
	[Symbol.iterator](): void
	[Symbol.toPrimitive](hint: string): string | number | Primitive
	[Symbol.hasInstance]: boolean // any of the composed classes
}

export interface TransformI extends Composable {
	// useThis = false
	traverse(useThis?: boolean | Traversable): TransformI | ChainAble
	transform(key: Primitive, value: any): TransformI | ChainAble
	remap(from: string, to: string): TransformI | ChainAble
}
export interface ShorthandsI extends Composable {
	setIfEmpty(name: Primitive, value: any): ShorthandsI | ChainAble
	return(value: any): any
	wrap(fn: Fn): ShorthandsI | ChainAble
	debug(should: boolean): ChainAble
}
export interface ObserveI extends Composable {
	observe(properties: strings, fn: Fn): ObserveI | ChainAble
}

export interface ChainedMapI extends Composable {
	shorthands?: string[]
	store: Map<any, any>
	entries(reduceInstanceProperties: boolean): Obj
	from(obj: Obj): ChainAble
	extend(methods: string[]): ChainAble
	tap(name: Primitive, fn: FnTap): ChainAble
	merge(objToMerge: Obj, fn?: FnHasSingleArg): ChainAble
	get(name: Primitive): Primitive
	set(name: Primitive, value: Primitive): ChainAble
}
export interface ChainedSetI extends ChainableI {
	add(value: any): ChainedSet
	prepend(value: any): ChainedSet
	has(value: any): boolean
	merge(arr: MergeableArray): ChainedSet
	// [Symbol.species]: Set @depreciated
	// [Symbol.isConcatSpreadable]: boolean @depreciated
}

// overrides .set, .has, .get, .delete with dot.prop access
export interface DotPropI extends Composable {
	dot(enabled: boolean): ChainAble
}

export interface Composed extends Composable, TransformI, ShorthandsI, ObserveI, DotPropI, ChainableI, ChainedMapI {}
