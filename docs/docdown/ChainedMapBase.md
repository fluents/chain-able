# ChainedMapBase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMapBase.prototype`
* <a href="#ChainedMapBase-prototype-CMC">`ChainedMapBase.prototype.CMC`</a>
* <a href="#ChainedMapBase-prototype-CMC" class="alias">`ChainedMapBase.prototype.ComposeMap` -> `CMC`</a>
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

<h3 id="ChainedMapBase-prototype-CMC"><a href="#ChainedMapBase-prototype-CMC">#</a>&nbsp;<code>ChainedMapBase.prototype.CMC([SuperClass=Chainable])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L29 "View in source") [&#x24C9;][1]



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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L214 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- improved reducing

#### Arguments
1. `[chains=false]` *(boolean)*: if true, returns all properties that are chains

#### Returns
*(Object)*: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries mozilla-map-entries}

#### Example
```js
map.set('a', 'alpha').set('b', 'beta').entries()
   //=> {a: 'alpha', b: 'beta'}
```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-extend"><a href="#ChainedMapBase-prototype-extend">#</a>&nbsp;<code>ChainedMapBase.prototype.extend(methods)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L186 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `methods` *(string&#91;&#93;)*: decorates/extends an object with new shorthand functions to get/set

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

<h3 id="ChainedMapBase-prototype-from"><a href="#ChainedMapBase-prototype-from">#</a>&nbsp;<code>ChainedMapBase.prototype.from(obj)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L144 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Arguments
1. `obj` *(Object)*: object with functions to hydrate from

#### Returns
*(Chainable)*: @chainable

#### Example
```js
const from = new Chain().from({eh: true})
    const eh = new Chain().set('eh', true)
    eq(from, eh)
    // => true
```
---

<!-- /div -->

<!-- div -->

<h3 id="ChainedMapBase-prototype-get"><a href="#ChainedMapBase-prototype-get">#</a>&nbsp;<code>ChainedMapBase.prototype.get(key)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L250 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- moved debug here

#### Arguments
1. `key` *(Primitive)*: Primitive data key used as map property to reference the value

#### Returns
*(any)*: value in .store at key
<br>
<br>
{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get mozilla-map-get}

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

<h3 id="ChainedMapBase-prototype-set"><a href="#ChainedMapBase-prototype-set">#</a>&nbsp;<code>ChainedMapBase.prototype.set(key, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L278 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `key` *(Primitive)*: Primitive to reference the value
2. `value` *(any)*: any data to store

#### Returns
*(ChainedMapBase)*: @chainable
<br>
<br>
{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set mozilla-map-set}

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

<h3 id="ChainedMapBase-prototype-tap"><a href="#ChainedMapBase-prototype-tap">#</a>&nbsp;<code>ChainedMapBase.prototype.tap(name, fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L120 "View in source") [&#x24C9;][1]



#### Since
0.7.0

#### Arguments
1. `name` *(any|string)*: key to `.get`
2. `fn` *(Function)*: function to tap with

#### Returns
*(Chain)*: @chainable
<br>
<br>
{@link https://github.com/sindresorhus/awesome-tap awesome-tap}
{@link https://github.com/midknight41/map-factory map-factory}
{@link https://github.com/webpack/tapable tapable}

#### Example
```js
chain
     .set('moose', {eh: true})
     .tap('moose', moose => {moose.eh = false; return moose})
     .get('moose')

   // => {eh: false}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedmapbase.prototype "Jump back to the TOC."
