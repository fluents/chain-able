import {MergeableArray} from './generic'
import {ChainableI, Chainable} from './Chainable'

export interface ChainedSetI extends ChainableI {
  add(value: any): ChainedSet
  prepend(value: any): ChainedSet
  has(value: any): boolean
  merge(arr: MergeableArray): ChainedSet
  // [Symbol.species]: Set @depreciated
  // [Symbol.isConcatSpreadable]: boolean @depreciated
}
// extends Set
export declare class ChainedSet extends Chainable implements ChainedSetI {
  public add(value: any): ChainedSet
  public prepend(value: any): ChainedSet
  public merge(arr: MergeableArray): ChainedSet
  public has(value: any): boolean
  public values(): any[]
}
