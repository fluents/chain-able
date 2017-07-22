# ChainedMapBase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMapBase`
* <a href="#ChainedMapBase-prototype-ComposeChainedMapBase"  data-meta="Chainable ComposeChainedMapBase"  data-call="ComposeChainedMapBase"  data-category="Chainable"  data-description="Chainable this is to avoid circular requires because MergeChain MethodChain extend this yet method merge use those chains also it serves as a non references creator for extending new instances of Chainable where it splits into Map Set composed prototype decorators"  data-name="ComposeChainedMapBase"  data-member="ChainedMapBase"  data-see="href https ponyfoo com articles es6 maps in depth label pony map href https developer mozilla org en docs Web JavaScript Reference Global Objects Map label mozilla map href https github com fluents chain able search utf8 E2 9C 93 q https tc39 github io ecma262 sec map objects type label emca map href https github com fluents chain able blob master src ChainedMap js label ChainedMap href https github com fluents chain able blob master src Chainable js label Chainable href https github com fluents chain able blob master src MergeChain js label MergeChain href https github com fluents chain able blob master src MethodChain js label MethodChain href https github com fluents chain able blob master src ChainedMap js label ChainedMap"  data-klassProps="meta meta fn store main store"  data-all="meta Chainable n n ComposeChainedMapBase call ComposeChainedMapBase category Chainable description Chainable this is to avoid circular requires nbecause MergeChain MethodChain extend this nyet method merge use those chains n also it serves as a non references creator for extending new instances of Chainable where it splits into Map Set composed prototype decorators name ComposeChainedMapBase member ChainedMapBase see href https ponyfoo com articles es6 maps in depth label pony map href https developer mozilla org en docs Web JavaScript Reference Global Objects Map label mozilla map href https github com fluents chain able search utf8 E2 9C 93 q https tc39 github io ecma262 sec map objects type label emca map href https github com fluents chain able blob master src ChainedMap js label ChainedMap href https github com fluents chain able blob master src Chainable js label Chainable href https github com fluents chain able blob master src MergeChain js label MergeChain href https github com fluents chain able blob master src MethodChain js label MethodChain href https github com fluents chain able blob master src ChainedMap js label ChainedMap notes todos klassProps meta meta fn n store main store n" >`ChainedMapBase.ComposeChainedMapBase`</a>
* <a href="#ChainedMapBase-prototype-compose"  data-meta="cmc Target Chainable"  data-call="cmc Target Chainable"  data-category="Properties"  data-description="Composer ChainedMapBase composer"  data-name="compose"  data-member="ChainedMapBase"  data-all="meta cmc Target Chainable call cmc Target Chainable category Properties description Composer ChainedMapBase composer name compose member ChainedMapBase see notes todos klassProps" >`ChainedMapBase.compose`</a>
* <a href="#ChainedMapBase-prototype-entries"  data-meta="entries chains false"  data-call="entries chains false"  data-category="Methods"  data-description="Function spreads the entries from ChainedMapBase store Map return store entries plus all chain properties if they exist"  data-name="entries"  data-member="ChainedMapBase"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map entries label mozilla map entries"  data-all="meta entries chains false call entries chains false category Methods description Function spreads the entries from ChainedMapBase store Map return store entries plus all chain properties if they exist name entries member ChainedMapBase see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map entries label mozilla map entries notes todos klassProps" >`ChainedMapBase.entries`</a>
* <a href="#ChainedMapBase-prototype-extend"  data-meta="extend methods undefined"  data-call="extend methods undefined"  data-category="Methods"  data-description="Function shorthand methods from strings to functions that call set"  data-name="extend"  data-member="ChainedMapBase"  data-all="meta extend methods undefined call extend methods undefined category Methods description Function shorthand methods from strings to functions that call set name extend member ChainedMapBase see notes todos klassProps" >`ChainedMapBase.extend`</a>
* <a href="#ChainedMapBase-prototype-from"  data-meta="from obj undefined"  data-call="from obj undefined"  data-category="Methods"  data-description="Function checks each property of the object calls the chains accordingly"  data-name="from"  data-member="ChainedMapBase"  data-todos="could also add parsing stringified"  data-all="meta from obj undefined call from obj undefined category Methods description Function checks each property of the object calls the chains accordingly name from member ChainedMapBase see notes todos could also add parsing stringified n klassProps" >`ChainedMapBase.from`</a>
* <a href="#ChainedMapBase-prototype-get"  data-meta="get key undefined"  data-call="get key undefined"  data-category="Methods"  data-description="Function get value for key path in the Map store debug is a special key and is not included into store it goes onto meta"  data-name="get"  data-member="ChainedMapBase"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map get label mozilla map get"  data-all="meta get key undefined call get key undefined category Methods description Function get value for key path in the Map store debug is a special key and is not included into store it goes onto meta name get member ChainedMapBase see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map get label mozilla map get notes todos klassProps" >`ChainedMapBase.get`</a>
* <a href="#ChainedMapBase-prototype-set"  data-meta="set key undefined value undefined"  data-call="set key undefined value undefined"  data-category="Methods"  data-description="Function sets the value using the key on store adds or updates an element with a specified key and value"  data-name="set"  data-member="ChainedMapBase"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map set label mozilla map set href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase store type label ChainedMapBase store"  data-all="meta set key undefined value undefined call set key undefined value undefined category Methods description Function sets the value using the key on store adds or updates an element with a specified key and value name set member ChainedMapBase see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Map set label mozilla map set href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase store type label ChainedMapBase store notes todos klassProps" >`ChainedMapBase.set`</a>
* <a href="#ChainedMapBase-prototype-tap"  data-meta="tap name undefined fn undefined"  data-call="tap name undefined fn undefined"  data-category="Methods"  data-description="Function tap a value with a function"  data-name="tap"  data-member="ChainedMapBase"  data-see="href https github com webpack tapable label tapable href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase set type label ChainedMapBase set href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase get type label ChainedMapBase get"  data-all="meta tap name undefined fn undefined call tap name undefined fn undefined category Methods description Function tap a value with a function name tap member ChainedMapBase see href https github com webpack tapable label tapable href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase set type label ChainedMapBase set href https github com fluents chain able search utf8 E2 9C 93 q ChainedMapBase get type label ChainedMapBase get notes todos klassProps" >`ChainedMapBase.tap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedMapBase`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMapBase.d.ts">🌊  Types: ChainedMapBase.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedMap.js">🔬  Tests: ChainedMap</a>&nbsp;

<h3 id="ChainedMapBase-prototype-ComposeChainedMapBase" data-member="ChainedMapBase" data-category="Chainable" data-name="ComposeChainedMapBase"><code>ChainedMapBase.ComposeChainedMapBase</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L23 "View in source") [&#x24C9;][1]

(Chainable): this is to avoid circular requires
because MergeChain & MethodChain extend this
yet .method & .merge use those chains
...also, it serves as a non-references creator for extending new instances of Chainable, where it splits into *(Map | Set)* -> composed prototype decorators


#### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth" >pony-map</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map" >mozilla-map</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=https://tc39.github.io/ecma262/#sec-map-objects&type=" >emca-map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js" >ChainedMap</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js" >Chainable</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js" >MergeChain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js" >MethodChain</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js" >ChainedMap</a>

#### @classProps 

* {meta} meta fn 
* {store} main store 
 

#### @extends
Chainable



#### @Since
4.0.0-alpha.1

---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-compose" data-member="ChainedMapBase" data-category="Properties" data-name="compose"><code>ChainedMapBase.cmc([Target=Chainable])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L296 "View in source") [&#x24C9;][1]

(Composer): ChainedMapBase composer

#### Arguments
1. `[Target=Chainable]` *(Class|Composable|Object)*: class to extend

#### Returns
*(Class)*: ChainedMapBase

#### Example
```js
const heh = class {}
const composed = ChainedMapBase.compose(heh)
const hehchain = new Composed()
hehchain instanceof heh
//=> true

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-entries" data-member="ChainedMapBase" data-category="Methods" data-name="entries"><code>ChainedMapBase.entries([chains=false])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L17 "View in source") [&#x24C9;][1]

(Function): spreads the entries from ChainedMapBase.store *(Map)* return store.entries, plus all chain properties if they exist


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries" >mozilla-map-entries</a>

#### @Since
0.4.0

#### Arguments
1. `[chains=false]` *(boolean)*: if true, returns all properties that are chains

#### Returns
*(Object)*: reduced object containing all properties from the store, and when `chains` is true, all instance properties, and recursive chains
<br>
<br>
//

#### Example
```js
map.set('a', 'alpha').set('b', 'beta').entries()
//=> {a: 'alpha', b: 'beta'}

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-extend" data-member="ChainedMapBase" data-category="Methods" data-name="extend"><code>ChainedMapBase.extend(methods=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L175 "View in source") [&#x24C9;][1]

(Function): shorthand methods, from strings to functions that call .set


#### @Since
0.4.0

#### Arguments
1. `methods=undefined` *(string&#91;&#93;)*: decorates/extends an object with new shorthand functions to get/set

#### Returns
*(ChainedMapBase)*: @chainable

#### Example
```js
const chain1 = new Chain()
chain1.extend(['eh'])

const chain2 = new Chain()
chain2.eh = val => this.set('eh', val)

eq(chain2.eh, chain1.eh)
//=> true

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-from" data-member="ChainedMapBase" data-category="Methods" data-name="from"><code>ChainedMapBase.from(obj=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L133 "View in source") [&#x24C9;][1]

(Function): checks each property of the object calls the chains accordingly


#### @todos 

- [ ] could also add parsing stringified
 

#### @Since
0.5.0

#### Arguments
1. `obj=undefined` *(Object)*: object with functions to hydrate from

#### Returns
*(Chainable)*: @chainable

#### Example
```js
const from = new Chain().from({ eh: true })
const eh = new Chain().set('eh', true)
eq(from, eh)
// => true

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-get" data-member="ChainedMapBase" data-category="Methods" data-name="get"><code>ChainedMapBase.get(key=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L16 "View in source") [&#x24C9;][1]

(Function): get value for key path in the Map store ❗ `debug` is a special key and is *not* included into .store it goes onto .meta


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get" >mozilla-map-get</a>

#### @Since
0.4.0

#### Arguments
1. `key=undefined` *(Primitive)*: Primitive data key used as map property to reference the value

#### Returns
*(any)*: value in .store at key

#### Example
```js
const chain = new Chain()
chain.set('eh', true)
chain.get('eh')
//=> true

chain.get('nope')
//=> undefined

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-set" data-member="ChainedMapBase" data-category="Methods" data-name="set"><code>ChainedMapBase.set(key=undefined, value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L15 "View in source") [&#x24C9;][1]

(Function): sets the value using the key on store adds or updates an element with a specified key and value


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set" >mozilla-map-set</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=ChainedMapBase.store&type=" >ChainedMapBase.store</a>

#### @Since
0.4.0

#### Arguments
1. `key=undefined` *(Primitive)*: Primitive to reference the value
2. `value=undefined` *(any)*: any data to store

#### Returns
*(ChainedMapBase)*: @chainable

#### Example
```js
const chain = new Chain()
chain.set('eh', true)
chain.get('eh')
//=> true

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-tap" data-member="ChainedMapBase" data-category="Methods" data-name="tap"><code>ChainedMapBase.tap(name=undefined, fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L32 "View in source") [&#x24C9;][1]

(Function): tap a value with a function


#### @see 

* <a href="https://github.com/webpack/tapable" >tapable</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=ChainedMapBase.set&type=" >ChainedMapBase.set</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=ChainedMapBase.get&type=" >ChainedMapBase.get</a>

#### @Since
4.0.0-alpha.1 <- moved from transform & shorthands

#### Arguments
1. `name=undefined` *(any|string)*: key to `.get`
2. `fn=undefined` *(Function)*: function to tap with

#### Returns
*(Chain)*: @chainable

#### Example
```js
chain
  .set('moose', { eh: true })
  .tap('moose', moose => {
    moose.eh = false
    return moose
  })
  .get('moose')

// => {eh: false}

```
#### Example
```js
const entries = new Chain()
  .set('str', 'emptyish')
  .tap('str', str => str + '+')
  .set('arr', [1])
  .tap('arr', arr => arr.concat([2]))
  .entries()

//=> {str: 'emptyish+', arr: [1, 2]}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedmapbase "Jump back to the TOC."
