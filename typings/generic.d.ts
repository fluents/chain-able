export type Fn = Function
// obj with any properties
export interface PlainObj extends Object {
	(any): any
	call?: Fn
}
export type Obj = Object | Fn | PlainObj
export type Arguments = any | Array<any>
export type Concatable = Array<any> | Set<any> | Map<any, any>
export type MergeableArray = Array<any> | Set<any>
export type Matchable = RegExp | Fn | string | Array<RegExp | Fn | string>
export type Traversable = Obj | Map<any, any> | Set<any>
export type SchemaType = string | Obj | undefined | null

export type truthy =
	| boolean
	| string
	| number
	| null
	| undefined
	| Object
	| Function
	| Map<any, any>
	| Set<any>

export type Primitive =
	| string
	| number
	| boolean
	| symbol
	| null
	| undefined
	| void

export type ArrOrObj = Array<any> | Obj
export type Arr =
	| Array<any>
	| Concatable
	| string
	| null
	| undefined
	| boolean
	| number
	| Obj

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
