// can be class or obj
export declare interface PoolableClass {
  (args: any): any
  destructor(): any

  // decorated
  release(instance: PoolableClass): any
  instancePool: Array<PoolableClass>
  getPooled(): PoolableClass
}

// calls .destructor
export declare function standardReleaser(instance: PoolableClass): void

// draws from pool or instantiates
export declare function oneArgumentPooler(copyFieldsFrom: PoolableClass): PoolableClass

// default export
export declare function addPoolingTo(CopyConstructor: PoolableClass, pooler: Function): void
