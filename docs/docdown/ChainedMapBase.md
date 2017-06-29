# ChainedMapBase.js API documentation

<!-- div class="toc-container" -->

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

## `entries`

<!-- div -->

<h3 id="entries"><a href="#entries">#</a>&nbsp;<code>entries([chains=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L120 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- improved reducing

#### Arguments
1. `[chains=false]` *(boolean)*: if true, returns all properties that are chains

#### Example
```js
map.set('a', 'alpha').set('b', 'beta').entries()
  => {a: 'alpha', b: 'beta'}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `extend`

<!-- div -->

<h3 id="extend"><a href="#extend">#</a>&nbsp;<code>extend(methods)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L98 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `methods` *(string&#91;&#93;)*:

#### Example
```js
this.extend(['eh']) === this.eh = val => this.set('eh', val)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `from`

<!-- div -->

<h3 id="from"><a href="#from">#</a>&nbsp;<code>from(obj)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L69 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Arguments
1. `obj` *(Object)*:

#### Example
```js
chain.from({eh: true}) === chain.eh(true)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `get`

<!-- div -->

<h3 id="get"><a href="#get">#</a>&nbsp;<code>get(key)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L137 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- moved debug here

#### Arguments
1. `key` *(Primitive)*:

#### Example
```js
chain.set('eh', true).get('eh') === true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `set`

<!-- div -->

<h3 id="set"><a href="#set">#</a>&nbsp;<code>set(key, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L151 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `key` *(any)*:
2. `value` *(any)*:

#### Example
```js
chain.set('eh', true).get('eh') === true
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `tap`

<!-- div -->

<h3 id="tap"><a href="#tap">#</a>&nbsp;<code>tap(name, fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedMapBase.js#L47 "View in source") [&#x24C9;][1]



#### Since
0.7.0

#### Arguments
1. `name` *(any|string)*: key to `.get`
2. `fn` *(Function)*: function to tap with

#### Example
```js
chain
   .set('moose', {eh: true})
   .tap('moose', moose => {moose.eh = false; return moose})
   .get('moose') === {eh: false}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #entries "Jump back to the TOC."
