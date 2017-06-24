import {PlainObj, Matchable} from './generic'

// https://basarat.gitbooks.io/typescript/docs/iterators.html
interface Iterator<T> {
	next(value?: any): IteratorResult<T>
	return?(value?: any): IteratorResult<T>
	throw?(e?: any): IteratorResult<T>
}
// https://github.com/Microsoft/TypeScript/issues/2491
// enum ObjectWithKeys {
// 	// [prop: string]: 0...255
// 	[any: Primitive]: 1...Infinity,
// }

export type isArray = Array<any>

// Object.propertyIsEnumerable
export type PropertyIsEnumerable = boolean
export type PrototypeOf = boolean
export type ObjectWithKeys = PlainObj

export type Setish = Set<any>
export type Mapish = Map<any, any>
export type MapIterator = Iterator<any>
export type SetIterator = Iterator<any>
export type notEmptyArray = [any]

// https://github.com/Microsoft/TypeScript/issues/1289
export function toArray(arg): any[]
export function notEmptyArray(o: any): o is notEmptyArray

export function isString(o: any): o is string
export function isNumber(o: any): o is number
export function isStringOrNumber(o: any): o is string | number

export function isNull(o: any): o is null
export function isUndefined(o: any): o is undefined
export function isNullOrUndef(o: any): o is undefined | null

export function isFunction(o: any): o is Function
export function isObj(o: any): o is object
export function isObjWithKeys(o: any): o is ObjectWithKeys

export function isPrototypeOf(o: any, prop: any): PrototypeOf
export function isEnumerable(o: any, prop: any): PropertyIsEnumerable
export function isError(o: any): o is Error

export function isMap(o: any): o is Mapish
export function isSet(o: any): o is Setish
export function isIterator(o: any): o is MapIterator | SetIterator

export function isDate(o: any): o is Date
export function isRegExp(o: any): o is RegExp
export function isPureObj(o: any): o is Object
export function isSymbol(o: any): o is Symbol
export function isReal(o: any): o is '!string | !null | !undefined | !NaN' | any

export function isBoolean(o: any): o is boolean
export function isTrue(o: any): o is true
export function isFalse(o: any): o is false

export function isDot(o: any): o is string | isArray
export function toS(o: any): string
export function isMatcher(o: any): o is Matchable
export function isNodeJS(o: any): boolean
export function isObjLoose(o: any): 'o is typeof Obj' | boolean
export function isClass(o: any): 'o.toString().includes(class)' | boolean
export function isMapish(o: any): o is Mapish

export const is = {
	isArray,
	notEmptyArray,
	isString,
	isNumber,
	isFunction,
	isObj,
	isObjWithKeys,
	isEnumerable,
	isError,
	isMap,
	isSet,
	isIterator,
	isDate,
	isRegExp,
	isPureObj,
	isSymbol,
	isReal,
	isBoolean,
	toS,

	isStringOrNumber,
	isNull,
	isUndefined,
	isNullOrUndef,
	isTrue,
	isFalse,
	isDot,
	isMapish,
}
