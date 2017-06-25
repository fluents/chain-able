a shorthand extension method which allows easy decorating & undecorating of a parent for easy chains up & down

## declaration
```ts
interface FactoryChain extends Composable, ChainedMapBase {
  data(prop?: Primitive): Obj
  chainUpDowns(methods: string[]): FactoryChain
  props(methods: string[]): FactoryChain
  prop(name: string, cb?: Fn): FactoryChain
  onDone(fn: Fn): FactoryChain
  getData(key?: Primitive): Obj | any
  factory(obj: Obj): FactoryChain | ChainAble
  optional(methods: string[]): FactoryChain
  required(methods: string[]): FactoryChain
}
```

## example

```js
class Decorator extends Chain {
  constructor(parent) {
    super(parent)
    this.methods(['easy']).decorate(parent).build()
    this.methods('advanced')
      .onCall(this.advanced.bind(this))
      .decorate(parent)
      .build()
  }
  advanced(arg) {
    this.set('advanced', arg)
    return this.parent
  }
  easy(arg) {
    this.parent.set('easy-peasy', arg)
  }
}

class Master extends Chain {
  constructor(parent) {
    super(parent)
    this.eh = new Decorator(this)
  }
}

const master = new Master()

master.advanced('a+')
master.easy(true)
isTrue(master.get('easy-peasy'))
isTrue(master.eh.get('advanced') === 'a+')
```

## related
- [source](https://github.com/fluents/chain-able/tree/master/src/FactoryChain.js)
- [test](https://github.com/fluents/chain-able/tree/master/test/parent.js)
