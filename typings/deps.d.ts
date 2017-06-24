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
	Arguments,
	SchemaType,
} from './generic'

import { ChainedMapI, Composable, ChainAble } from './v4types'

// loose = false
export declare function eq(one: any, two: any, loose?: boolean): boolean

export declare function camelCase(str: string): string
export declare function toarr(arr: Arr): Arr

export interface Dot {
	has(object: any, path: string): boolean
	get(object: any, path: string): any
	set(object: any, path: string, value: any): void
	delete(object: any, path: string): void
}
export interface DotPropSegments {
	(paths: strings): Array<string>
}
export interface DotPropPaths {
	(key: Primitive, value: Traversable, longest?: boolean): Array<string>
}
export function escapeStringRegExp(str: string): string
// calls escapeStringRegExp
export function toRegExp(str: string): string
export function toTest(matchable: Matchable): boolean
export function uniq(value: any, index: number, arr: Arr): boolean
export function define(obj: Object, name: Primitive, descriptor: Object): never
export function concat(one: any, two: any): Array<any>

// match
// alphaOmega = false, shouldNegate = false
export interface MagicMatchers {
	make(
		pattern: Matchable | Matchable[],
		shouldNegate?: boolean,
		alphaOmega?: boolean
	): Matchable
	matcher(
		inputs: any[],
		patterns: Matchable[],
		shouldNegate?: boolean,
		alphaOmega?: boolean
	): Array<any>
}

// merge
export interface DopeMergeOptions {
	arrayMerge?: Fn
	stringToArray?: boolean // = true
	boolToArray?: boolean // = false
	ignoreTypes?: string[] // = ['null', 'undefined', 'NaN']
	debug?: boolean // = undefined
}
export declare interface dopemerge {
	(obj1: Obj, obj2: Obj, opts?: DopeMergeOptions)
}
export interface MergeChainI {
	onValue(fn?: Fn): MergeChainI
	obj(obj: Obj): MergeChainI
	merge(objToMerge: Obj): MergeChainI
}



// undefined and null values are removed
export declare function clean(obj: Obj): Obj

// map iterator -> obj
export declare function reduce(map: Map<any, any>): Obj
export declare function argumentor(...args: Arguments[]): Array<any>

export declare interface FnTap {
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
export function validatorMethodFactory(name: Primitive, parent: Obj, built: Obj): Fn
export function schemaFactory(property: Primitive, nestedSchema: Obj): Fn
export function validatorFactory(key: string | Function | Primitive): Fn

export function methodEncasingFactory(name: string, parent: Obj, built: Obj, functionToEncase: Fn, type: SchemaType): MethodChain
