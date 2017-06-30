import {Obj, Fn, FnHasSingleArg, strings, Primitive} from './generic'
import {Chain, ChainInstanceFn} from './Chain'
import {ParentType, SchemaType} from './_mediator'

// this = ChainInstance
export interface onInvalid {
  (error: TypeError, key: Primitive, arg: any, instance: Chain)
  call?: onInvalid
}
export interface onValid {
  (key: Primitive, arg: any, instance: Chain)
  call?: onValid
}
export interface onCall {
  (key: Primitive, value: any)
  call?: onCall
}
export interface onSet {
  (key: Primitive, value: any)
  call?: onSet
}
export interface onGet {
  (key: Primitive): any
  call?: onGet
}
export interface MethodChainFactory {
  (methodName: string, parent: ParentType): any
}

// https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
// https://github.com/iluwatar/java-design-patterns/tree/master/builder
export class MethodChain extends Chain {
  // --- these 3 are used in every other method (almost) ---

  // defaults to `this.set(key, value)`
  public onSet(fn: onSet): MethodChain
  // defaults to .onSet ^
  public onCall(fn: onCall): MethodChain
  // defaults to `this.get(key)`
  public onGet(fn: onGet): MethodChain

  // --- types ---

  // type validation
  // @example `?string`, `string[]`, `string|boolean`, `boolean[]|string[]`
  public type(type: string | FnHasSingleArg): MethodChain

  // an object that contains nestable types
  // they are mapped to validators
  public schema(schema: SchemaType): Chain

  // when using .encase or .type, defaults to re-throw
  // called when type validation | encased method is invalid
  public onInvalid(fn: onInvalid): MethodChain
  public catch(fn: onInvalid): MethodChain // alias

  // called when type validation | encased method isn't invalid
  public onValid(fn: onValid): MethodChain
  public then(fn: onValid): MethodChain // alias

  // --- decorators/factories - they decorate/build the method ---

  // wraps the method in a try catch, responds to
  public encase(method?: string, rethrow?: boolean): MethodChain

  // binds the method to thisArg, or to parent with no params
  public bind(thisArg?: Obj | boolean): MethodChain

  // wraps the method to return `parent` by default
  public returns(value: any): MethodChain
  // public chainable(): MethodChain // alias ^

  // will make the method call the value in .returns
  public callReturns(should?: boolean): MethodChain

  // aliases an array of methods
  // @example .name('eh).alias('canada')
  //          obj.eh = .onCall
  //
  //          obj.canada = obj.eh
  //           ^ is > Object.define(obj, canada, Object.getDescriptor(obj.eh))
  public alias(methods: strings): MethodChain

  // defaultParamValue
  // @example .default('canada') becomes...
  //           .eh(arg = 'canada' => onCall(arg))
  public default(value?: any): MethodChain

  // sets the value right away
  // @example .name('eh').initial(true)
  //          obj.store: Map<eh, true>
  //          obj.eh = .onCall
  public initial(value?: any): MethodChain

  // defineGetterSetter
  public define(should?: boolean): MethodChain

  // expandNameToSetMethodGetMethod
  // @example .name('eh') decorates an object...
  //           obj.setEh = .onSet
  //          obj.getEh = .onGet
  //           obj.eh    = .onCall
  public getSet(should?: boolean): MethodChain

  // --- important operations ---

  // finish the method building, naming is from the builder pattern,
  // returns the `returnValue` or `this.parent`
  public build(returnValue: Primitive): Primitive
  public build(returnValue?: null | undefined | any): Chain
  // calls .build using Symbol.toPrimative with `+`
  // @example +chain.method(name)
  public toNumber(): number

  // decorate an object, useful when using nested factories
  // this previously was .decorateParent
  public decorate(target: Obj): MethodChain

  // this is called from Chain.method(name) / Chain.methods(names)
  public names(names: strings | Obj): MethodChain
  public name(names: strings | Obj): MethodChain // ^ alias

  // --- simple .factory presets ---

  // is a factory that adds a .onCall & .initial
  // every time the method is called, it auto-increments
  // @example .name('index').autoIncrement()
  //          .index()   // now index is 1
  //          .index(+1) // now index is 2, note the optional arg for clarity
  public autoIncrement(should?: boolean): MethodChain

  // @example .name('created_at')
  //          obj.createdAt = .onCall
  public camelCase(should?: boolean): MethodChain

  // add custom factories that are called **for each .name**
  // used mainly for when building multiple .names
  // so some properties are reset, or retained
  // the above 2 methods use this
  public factory(fn: MethodChainFactory): MethodChain
}
