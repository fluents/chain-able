import { onValid, onInvalid } from './MethodChain'

export interface EncaseObj {
  onInvalid(fn: onInvalid): EncaseObj
  catch(fn: onInvalid): EncaseObj

  onValid(fn: onValid): EncaseObj
  then(fn: onValid): EncaseObj
}

export interface Encased {
  (a: any, b: any, c: any): boolean | any
}
export declare function encase(call, encaser): EncaseObj
export declare function tryCatch(call, onValid: onValid, onInvalid: onInvalid): Encased
