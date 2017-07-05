# ChainedMapBase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMapBase.prototype`
* <a href="#ChainedMapBase-prototype-CMC">`ChainedMapBase.prototype.CMC`</a>
* <a href="#ChainedMapBase-prototype-cmc" class="alias">`ChainedMapBase.prototype.ComposeMap` -> `cmc`</a>
* <a href="#ChainedMapBase-prototype-cmc">`ChainedMapBase.prototype.cmc`</a>
* <a href="#ChainedMapBase-prototype-entries">`ChainedMapBase.prototype.entries`</a>
* <a href="#ChainedMapBase-prototype-extend">`ChainedMapBase.prototype.extend`</a>
* <a href="#ChainedMapBase-prototype-from">`ChainedMapBase.prototype.from`</a>
* <a href="#ChainedMapBase-prototype-get">`ChainedMapBase.prototype.get`</a>
* <a href="#ChainedMapBase-prototype-set">`ChainedMapBase.prototype.set`</a>
* <a href="#ChainedMapBase-prototype-tap">`ChainedMapBase.prototype.tap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedMapBase.prototype`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedMapBase.d.ts">🌊  Types: ChainedMapBase.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedMap.js">🔬  Tests: ChainedMap</a>&nbsp;

<h3 id="ChainedMapBase-prototype-CMC"><a href="#ChainedMapBase-prototype-CMC">#</a>&nbsp;<code>ChainedMapBase.prototype.CMC()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L44 "View in source") [&#x24C9;][1]

(Chainable): this is to avoid circular requires
because MergeChain & MethodChain extend this
yet .method & .merge use those chains


### @see 

* <a href="https://ponyfoo.com/articles/es6-maps-in-depth">articles/es6 maps in depth</a>
* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map">Developer.mozilla.org/en/docs/web/java script/reference/global objects/map</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/Chainable.js">fluents/chain able/blob/master/src/chainable.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MergeChain.js">fluents/chain able/blob/master/src/merge chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>

[pony-map]: https://ponyfoo.com/articles/es6-maps-in-depth <!-- NAMED_LINK -->


[mozilla-map]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map <!-- NAMED_LINK -->

#### Since
4.0.0-alpha.1

#### Returns
*(Class)*: ChainedMapBase

---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-cmc"><a href="#ChainedMapBase-prototype-cmc">#</a>&nbsp;<code>ChainedMapBase.prototype.cmc([SuperClass=Chainable])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L291 "View in source") [&#x24C9;][1]

(Composer): ChainedMapBase composer

#### Aliases
*ChainedMapBase.prototype.ComposeMap*

#### Arguments
1. `[SuperClass=Chainable]` *(Class|Composable|Object)*: class to extend

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

<h3 id="ChainedMapBase-prototype-entries"><a href="#ChainedMapBase-prototype-entries">#</a>&nbsp;<code>ChainedMapBase.prototype.entries([chains=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L200 "View in source") [&#x24C9;][1]

spreads the entries from ChainedMapBase.store *(Map)* return store.entries, plus all chain properties if they exist


### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/entries</a>

[mozilla-map-entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries <!-- NAMED_LINK -->

#### Since
0.4.0

#### Arguments
1. `[chains=false]` *(boolean)*: if true, returns all properties that are chains

#### Returns
*(Class)*: ChainedMapBase

#### Example
```js
map.set('a', 'alpha').set('b', 'beta').entries()
//=> {a: 'alpha', b: 'beta'}

```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-extend"><a href="#ChainedMapBase-prototype-extend">#</a>&nbsp;<code>ChainedMapBase.prototype.extend(methods=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L170 "View in source") [&#x24C9;][1]

shorthand methods, from strings to functions that call .set

#### Since
0.4.0

#### Arguments
1. `methods=undefined` *(string&#91;&#93;)*: decorates/extends an object with new shorthand functions to get/set

#### Returns
*(Class)*: ChainedMapBase

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

<h3 id="ChainedMapBase-prototype-from"><a href="#ChainedMapBase-prototype-from">#</a>&nbsp;<code>ChainedMapBase.prototype.from(obj=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L128 "View in source") [&#x24C9;][1]

checks each property of the object calls the chains accordingly

#### Since
0.5.0

#### Arguments
1. `obj=undefined` *(Object)*: object with functions to hydrate from

#### Returns
*(Class)*: ChainedMapBase

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

<h3 id="ChainedMapBase-prototype-get"><a href="#ChainedMapBase-prototype-get">#</a>&nbsp;<code>ChainedMapBase.prototype.get(key=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L236 "View in source") [&#x24C9;][1]

get value for key path in the Map store ❗ `debug` is a special key and is *not* included into .store it goes onto .meta


### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/get</a>

[mozilla-map-get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get <!-- NAMED_LINK -->

#### Since
0.4.0

#### Arguments
1. `key=undefined` *(Primitive)*: Primitive data key used as map property to reference the value

#### Returns
*(Class)*: ChainedMapBase

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

<h3 id="ChainedMapBase-prototype-set"><a href="#ChainedMapBase-prototype-set">#</a>&nbsp;<code>ChainedMapBase.prototype.set(key=undefined, value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L265 "View in source") [&#x24C9;][1]

sets the value using the key on store adds or updates an element with a specified key and value


### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set">Developer.mozilla.org/en us/docs/web/java script/reference/global objects/map/set</a>

[mozilla-map-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set <!-- NAMED_LINK -->

#### Since
0.4.0

#### Arguments
1. `key=undefined` *(Primitive)*: Primitive to reference the value
2. `value=undefined` *(any)*: any data to store

#### Returns
*(Class)*: ChainedMapBase

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

<h3 id="ChainedMapBase-prototype-tap"><a href="#ChainedMapBase-prototype-tap">#</a>&nbsp;<code>ChainedMapBase.prototype.tap(name=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L104 "View in source") [&#x24C9;][1]

tap a value with a function


### @see 

* <a href="https://github.com/webpack/tapable">webpack/tapable</a>

[awesome-tap]: https://github.com/sindresorhus/awesome-tap <!-- NAMED_LINK -->


[map-factory]: https://github.com/midknight41/map-factory <!-- NAMED_LINK -->


[tapable]: https://github.com/webpack/tapable <!-- NAMED_LINK -->

#### Since
4.0.0-alpha.1 <- moved from transform & shorthands

#### Arguments
1. `name=undefined` *(any|string)*: key to `.get`
2. `fn=undefined` *(Function)*: function to tap with

#### Returns
*(Class)*: ChainedMapBase

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

 [1]: #chainedmapbase.prototype "Jump back to the TOC."
