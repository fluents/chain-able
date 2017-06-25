import {Primitive, Obj, Fn} from './generic'
import {Chainable, ChainableI, Composable, ParentType} from './_mediator'

// this.data, this.parent, this, arg
export interface OnDoneFactoryFn extends Function {
  (data: Obj, parent: ParentType, instance: FactoryChainI, arg: any): any
}
export interface FactoryChainI extends Composable {
  data(prop?: Primitive): Obj
  onDone(fn: OnDoneFactoryFn): FactoryChainI
  getData(key?: Primitive): Obj | any
  factory(obj: Obj): FactoryChainI | ChainableI

  prop(name: string, fn?: Fn): FactoryChainI
  props(methods: string[]): FactoryChainI
  chainUpDowns(methods: string[]): FactoryChainI
  optional(methods: string[]): FactoryChainI
  required(methods: string[]): FactoryChainI
}
