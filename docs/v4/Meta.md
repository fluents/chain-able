```ts
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
}
```
