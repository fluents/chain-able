import {Primitive, Arr, Matchable} from './generic'

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
