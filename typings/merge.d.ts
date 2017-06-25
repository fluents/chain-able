import {FnHasSingleArg, MergeableArray, Concatable, Obj} from './generic'
import {Class, ParentType, FnTap} from './_mediator'
import {ChainedMapBase} from './ChainedMap'
import {ComposedClass} from './compose'
import {ChainedSet} from './ChainedSet'

export interface ArrayMergeFn {
  (array1: Array<any>, array2: Array<any>): Array<any>
}
// merge
export interface DopeMergeOptions {
  arrayMerge?: ArrayMergeFn
  stringToArray?: boolean // = true
  boolToArray?: boolean // = false
  ignoreTypes?: string[] // = ['null', 'undefined', 'NaN']
  debug?: boolean // = undefined
}
export interface dopemerge {
  (obj1: Obj, obj2: Obj, opts?: DopeMergeOptions)
}
export interface MergeChainI {
  onValue(fn?: MergerFn): MergeChainI
  obj(obj: Obj): MergeChainI
  merge(objToMerge: Obj): MergeChainI
}

export interface MergerFn extends FnHasSingleArg {
  (arg: Obj | MergeableArray): Obj | MergeableArray
}
export interface MergeFnOn extends MergerFn {}

export declare class MergeChain extends ChainedMapBase {
  /**
   * @since 1.0.1
   * @desc can pass in a function to check values, such as ignoring notReal
   * @example .onValue(val => val !== null && val !== undefined)
   */
  public onValue(fn?: MergeFnOn): MergeChain

  /**
   * @desc options for merging with dopemerge
   *       @modifies this.merger | this.opts
   * @param  {Object | Function} opts
   * @return {MergeChain} @chainable
   * @default dopemerge
   */
  public merger(fn?: MergerFn): MergeChain

  /**
   * @since 1.0.1
   * @desc can pass in a function to check values, such as ignoring notReal
   * @example .onValue(val => val !== null && val !== undefined)
   */
  public obj(obj: Obj): MergeChain

  /**
  * @since 1.0.0
  * @desc can pass in a function same as .merge,
  *       but say, .set instead of merge
  * @default dopemerge
  */
  public onExisting(fn?: MergeFnOn)

  /**
   * @since 1.0.0
   * @default this.obj
   */
  public merge(objToMerge?: Obj): MergeChain
}
