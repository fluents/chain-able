export interface ValidationFunction {
  (arg: any): any
}

// all `is` validators, or any custom added ones
export type Type =
  | ValidationFunction
  | '?'
  | '|'
  | '[]'
  | 'string'
  | 'number'
  | 'date'
  | 'boolean'
  | 'function'
  | 'error'
  | 'map'
  | 'set'
  | 'object'
  | 'regexp'
  | 'array'
  | 'symbol'
  | 'real'
  | 'iterator'
  | 'objWithKeys'
  | 'null'
  | 'undefined'

export interface Schemable<T> {
  (key: string | any): T
}

export type Schema = Schemable<Type> | Type
