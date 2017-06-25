these are available in the [`/deps` folder](https://github.com/fluents/chain-able/tree/master/src/deps), and [some are exported on the bundles](https://github.com/fluents/chain-able/wiki/api) see [typings](https://github.com/fluents/chain-able/tree/master/typings)

### definition

```ts
// loose = false
function eq(one: any, two: any, loose?: boolean): boolean

function camelCase(str: string): string
function toarr(arr: Arr): Arr

interface Dot {
  has(object: any, path: string): boolean
  get(object: any, path: string): any
  set(object: any, path: string, value: any): void
  delete(object: any, path: string): void
}
interface DotPropSegments {
  (paths: strings): Array<string>
}
interface DotPropPaths {
  (key: Primitive, value: Traversable, longest?: boolean): Array<string>
}
function escapeStringRegExp(str: string): string
// calls escapeStringRegExp
function toRegExp(str: string): string
function toTest(matchable: Matchable): boolean
function uniq(value: any, index: number, arr: Arr): boolean
function define(obj: Object, name: Primitive, descriptor: Object): never
function concat(one: any, two: any): Array<any>

// match
// alphaOmega = false, shouldNegate = false
interface MagicMatchers {
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
interface DopeMergeOptions {
  arrayMerge?: Fn
  stringToArray?: boolean // = true
  boolToArray?: boolean // = false
  ignoreTypes?: string[] // = ['null', 'undefined', 'NaN']
  debug?: boolean // = undefined
}
interface dopemerge {
  (obj1: Obj, obj2: Obj, opts?: DopeMergeOptions)
}
interface MergeChainI {
  onValue(fn?: Fn): MergeChainI
  obj(obj: Obj): MergeChainI
  merge(objToMerge: Obj): MergeChainI
}

// undefined and null values are removed
function clean(obj: Obj): Obj

// map iterator -> obj
function reduce(map: Map<any, any>): Obj
function argumentor(...args: Arguments[]): Array<any>

interface FnTap {
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
function validatorMethodFactory(
  name: Primitive,
  parent: Obj,
  built: Obj
): Fn
function schemaFactory(property: Primitive, nestedSchema: Obj): Fn
function validatorFactory(key: string | Function | Primitive): Fn

function methodEncasingFactory(
  name: string,
  parent: Obj,
  built: Obj,
  functionToEncase: Fn,
  type: SchemaType
): MethodChain

```
