# FactoryChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `FactoryChain`
* <a href="#FactoryChain-prototype-"  data-meta="ChainedMapBase"  data-category="Chainable"  data-description="Map"  data-member="FactoryChain"  data-klassProps="data calls"  data-all="meta ChainedMapBase call category Chainable description Map name member FactoryChain see notes todos klassProps data n calls n" >`FactoryChain.`</a>
* <a href="#FactoryChain-prototype-chainUpDowns"  data-meta="chainUpDowns methods undefined"  data-call="chainUpDowns methods undefined"  data-category="Methods"  data-description="Function chain back up to parent for any of these"  data-name="chainUpDowns"  data-member="FactoryChain"  data-todos="should have a debug log for this"  data-all="meta chainUpDowns methods undefined call chainUpDowns methods undefined category Methods description Function chain back up to parent for any of these name chainUpDowns member FactoryChain see notes todos should have a debug log for this n klassProps" >`FactoryChain.chainUpDowns`</a>
* <a href="#FactoryChain-prototype-factory"  data-meta="factory obj"  data-call="factory obj"  data-category="Methods"  data-description="Function creates add the end method which checks how many methods have been called and decides whether to return parent or not"  data-name="factory"  data-member="FactoryChain"  data-all="meta factory obj call factory obj category Methods description Function creates add the end method which checks how many methods have been called and decides whether to return parent or not name factory member FactoryChain see notes todos klassProps" >`FactoryChain.factory`</a>
* <a href="#FactoryChain-prototype-getData"  data-meta="getData prop undefined"  data-call="getData prop undefined"  data-category="Methods"  data-description="Function access data being built when stepping through a factory"  data-name="getData"  data-member="FactoryChain"  data-all="meta getData prop undefined call getData prop undefined category Methods description Function access data being built when stepping through a factory name getData member FactoryChain see notes todos klassProps" >`FactoryChain.getData`</a>
* <a href="#FactoryChain-prototype-prop"  data-meta="prop name undefined onCall undefined"  data-call="prop name undefined onCall undefined"  data-category="Methods"  data-description="Function add property that are counted towards the call count for easy auto ending chaining"  data-name="prop"  data-member="FactoryChain"  data-all="meta prop name undefined onCall undefined call prop name undefined onCall undefined category Methods description Function add property that are counted towards the call count for easy auto ending chaining name prop member FactoryChain see notes todos klassProps" >`FactoryChain.prop`</a>
* <a href="#FactoryChain-prototype-props"  data-meta="props names undefined"  data-call="props names undefined"  data-category="Methods"  data-description="Function adds an array of properties using FactoryChain prop"  data-name="props"  data-member="FactoryChain"  data-all="meta props names undefined call props names undefined category Methods description Function adds an array of properties using FactoryChain prop name props member FactoryChain see notes todos klassProps" >`FactoryChain.props`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `FactoryChain`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/FactoryChain.d.ts">🌊  Types: FactoryChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/FactoryChain.js">🔬  Tests: FactoryChain</a>&nbsp;

<h3 id="FactoryChain-prototype-" data-member="FactoryChain" data-category="Chainable" data-name="FactoryChain"><code>FactoryChain.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L7 "View in source") [&#x24C9;][1]

Map


#### @classProps 

* {data}  
* {_calls}  
 

#### @extends
ChainedMapBase


---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-chainUpDowns" data-member="FactoryChain" data-category="Methods" data-name="chainUpDowns"><code>FactoryChain.chainUpDowns(methods=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L80 "View in source") [&#x24C9;][1]

(Function): chain back up to parent for any of these


#### @todos 

- [ ] should have a debug log for this
 

#### @Since
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

<h3 id="FactoryChain-prototype-factory" data-member="FactoryChain" data-category="Methods" data-name="factory"><code>FactoryChain.factory([obj={}])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L223 "View in source") [&#x24C9;][1]

(Function): creates/add the `.end` method, which checks how many methods have been called, and decides whether to return parent or not


#### @Since
2.0.0

#### Arguments
1. `[obj={}]` *(Object)*: optional object to use for creating .end

#### Returns
*(FactoryChain)*: @chainable

---

<!-- /div -->

<!-- div -->

<h3 id="FactoryChain-prototype-getData" data-member="FactoryChain" data-category="Methods" data-name="getData"><code>FactoryChain.getData([prop=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L204 "View in source") [&#x24C9;][1]

(Function): access data being built when stepping through a factory


#### @Since
2.0.0

#### Arguments
1. `[prop=undefined]` *(Primitive)*: key of the data, or returns all data

#### Returns
*(any)*: this.data

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

<h3 id="FactoryChain-prototype-prop" data-member="FactoryChain" data-category="Methods" data-name="prop"><code>FactoryChain.prop(name=undefined, [onCall=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L146 "View in source") [&#x24C9;][1]

(Function): add property that are counted towards the call count for easy auto-ending chaining


#### @Since
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

<h3 id="FactoryChain-prototype-props" data-member="FactoryChain" data-category="Methods" data-name="props"><code>FactoryChain.props(names=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/FactoryChain.js#L120 "View in source") [&#x24C9;][1]

(Function): adds an *array* of properties, using FactoryChain.prop


#### @Since
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

 [1]: #factorychain "Jump back to the TOC."
