# ChainedMapBase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `CMC`
* <a href="#CMC">`CMC`</a>

<!-- /div -->

<!-- div -->

## `ComposeMap`
* <a href="#CMC" class="alias">`ComposeMap` -> `CMC`</a>

<!-- /div -->

<!-- div -->

## `entries`
* <a href="#entries">`entries`</a>

<!-- /div -->

<!-- div -->

## `extend`
* <a href="#extend">`extend`</a>

<!-- /div -->

<!-- div -->

## `from`
* <a href="#from">`from`</a>

<!-- /div -->

<!-- div -->

## `get`
* <a href="#get">`get`</a>

<!-- /div -->

<!-- div -->

## `set`
* <a href="#set">`set`</a>

<!-- /div -->

<!-- div -->

## `tap`
* <a href="#tap">`tap`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `CMC`

<!-- div -->

<h3 id="CMC"><a href="#CMC">#</a>&nbsp;<code>CMC([SuperClass=Chainable])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L25 "View in source") [&#x24C9;][1]



#### Aliases
*ComposeMap*

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

<!-- /div -->

<!-- div -->

## `ComposeMap`

<!-- /div -->

<!-- div -->

## `entries`

<!-- div -->

<h3 id="entries"><a href="#entries">#</a>&nbsp;<code>entries([chains=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L165 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- improved reducing

#### Arguments
1. `[chains=false]` *(boolean)*: if true, returns all properties that are chains

#### Returns
*(Object)*:

#### Example
```js
map.set('a', 'alpha').set('b', 'beta').entries()
   //=> {a: 'alpha', b: 'beta'}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `extend`

<!-- div -->

<h3 id="extend"><a href="#extend">#</a>&nbsp;<code>extend(methods)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L141 "View in source") [&#x24C9;][1]



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

<!-- /div -->

<!-- div -->

## `from`

<!-- div -->

<h3 id="from"><a href="#from">#</a>&nbsp;<code>from(obj)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L101 "View in source") [&#x24C9;][1]



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

<!-- /div -->

<!-- div -->

## `get`

<!-- div -->

<h3 id="get"><a href="#get">#</a>&nbsp;<code>get(key)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L192 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- moved debug here

#### Arguments
1. `key` *(Primitive)*: Primitive data key used as map property to reference the value

#### Returns
*(any)*:

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

<!-- /div -->

<!-- div -->

## `set`

<!-- div -->

<h3 id="set"><a href="#set">#</a>&nbsp;<code>set(key, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L217 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `key` *(Primitive)*: Primitive to reference the value
2. `value` *(any)*: any data to store

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

<!-- /div -->

<!-- div -->

## `tap`

<!-- div -->

<h3 id="tap"><a href="#tap">#</a>&nbsp;<code>tap(name, fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L78 "View in source") [&#x24C9;][1]



#### Since
0.7.0

#### Arguments
1. `name` *(any|string)*: key to `.get`
2. `fn` *(Function)*: function to tap with

#### Returns
*(Chain)*: @chainable

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

 [1]: #cmc "Jump back to the TOC."
