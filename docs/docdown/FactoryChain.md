# FactoryChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `FactoryChain.prototype`
* <a href="#FactoryChain-prototype-">`FactoryChain.prototype.`</a>
* <a href="#FactoryChain-prototype-chainUpDowns">`FactoryChain.prototype.chainUpDowns`</a>
* <a href="#FactoryChain-prototype-factory">`FactoryChain.prototype.factory`</a>
* <a href="#FactoryChain-prototype-getData">`FactoryChain.prototype.getData`</a>
* <a href="#FactoryChain-prototype-prop">`FactoryChain.prototype.prop`</a>
* <a href="#FactoryChain-prototype-props">`FactoryChain.prototype.props`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `FactoryChain.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/FactoryChain.d.ts">🌊  Types: FactoryChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/FactoryChain.js">🔬  Tests: FactoryChain</a>&nbsp;

<h3 id="FactoryChain-prototype-"><a href="#FactoryChain-prototype-">#</a>&nbsp;<code>FactoryChain.prototype.()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L23 "View in source") [&#x24C9;][1]




[abstract-factory-pattern]: http://robdodson.me/javascript-design-patterns-factory/ <!-- NAMED_LINK -->

#### Returns
*(FactoryChain)*: @chainable

---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-chainUpDowns"><a href="#FactoryChain-prototype-chainUpDowns">#</a>&nbsp;<code>FactoryChain.prototype.chainUpDowns(methods=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L80 "View in source") [&#x24C9;][1]

chain back up to parent for any of these

#### Since
2.0.0

#### Arguments
1. `methods=undefined` *(string&#91;&#93;)*: methods to trigger `onChainUpDown` on

#### Returns
*(FactoryChain)*: @chainable

#### Example
```js
const { Chain, FactoryChain, ChainedSet } = require('chain-able')

class Things extends Chain {
  constructor(parent) {
    super(parent)
    this.people = new ChainedSet(this)
  }
  person() {
    const person = new FactoryChain(this)
    person
      .props(['name', 'age', 'email'])
      .onChainUpDown(this.person)
      .chainUpDowns(['person'])
      .onDone(personChain => {
        this.people.add(personChain)
        return this
      })

    return person
  }
}

const things = new Things()
const returned = things
  .person()
  .name('sue')
  .person()
  .age(100)
  .name('john')
  .email('@')

```
---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-factory"><a href="#FactoryChain-prototype-factory">#</a>&nbsp;<code>FactoryChain.prototype.factory([obj={}])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L221 "View in source") [&#x24C9;][1]

creates/add the `.end` method, which checks how many methods have been called, and decides whether to return parent or not

#### Since
2.0.0

#### Arguments
1. `[obj={}]` *(Object)*: optiona object to use for creating .end

#### Returns
*(FactoryChain)*: @chainable

---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-getData"><a href="#FactoryChain-prototype-getData">#</a>&nbsp;<code>FactoryChain.prototype.getData([prop=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L204 "View in source") [&#x24C9;][1]

access data being built when stepping through a factory

#### Since
2.0.0

#### Arguments
1. `[prop=undefined]` *(Primitive)*: key of the data, or returns all data

#### Returns
*(FactoryChain)*: @chainable

#### Example
```js
.data['prop'] = 'eh'
   .getData('prop')
   //=> 'eh'
   .getData()
   //=> {prop: 'eh'}
```
#### Example
```js
const person = new FactoryChain(this)
const age = person.props(['name', 'age']).age(10).getData('age')
expect(age).toBe(10)

```
---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-prop"><a href="#FactoryChain-prototype-prop">#</a>&nbsp;<code>FactoryChain.prototype.prop(name=undefined, [onCall=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L146 "View in source") [&#x24C9;][1]

add property that are counted towards the call count for easy auto-ending chaining

#### Since
2.0.0

#### Arguments
1. `name=undefined` *(Primitive)*: property name
2. `[onCall=undefined]` *(||Function)*: callback for the property

#### Returns
*(FactoryChain)*: @chainable

#### Example
```js
person
  //.prop also accepts an optional callback,
  //for nestable nestable chains
  .prop('name')
  .prop('age')
  .prop('email')

```
---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-props"><a href="#FactoryChain-prototype-props">#</a>&nbsp;<code>FactoryChain.prototype.props(names=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L120 "View in source") [&#x24C9;][1]

adds an *array* of properties, using FactoryChain.prop

#### Since
2.0.0

#### Arguments
1. `names=undefined` *(string&#91;&#93;)*: property names

#### Returns
*(FactoryChain)*: @chainable

#### Example
```js
person.props(['name', 'age', 'email'])

typeof person.name
//=> 'function'

person.name().age()
//=> FactoryChain

person.name().age().email()
//=> ParentChain

// person.name().age().person()
//=> FactoryChain
//^ because .person is `chainUpDowns`
//^ so it finishes the old chain, and begins a new one

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #factorychain.prototype "Jump back to the TOC."
