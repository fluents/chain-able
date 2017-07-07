# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe.prototype`
* <a href="#Observe-prototype-">`Observe.prototype.`</a>
* <a href="#Observe-prototype-exports">`Observe.prototype.exports`</a>

<!-- /div -->

<!-- div -->

## `fn.call`
* <a href="#fn-call">`fn.call`</a>

<!-- /div -->

<!-- div -->

## `if`
* <a href="#if">`if`</a>

<!-- /div -->

<!-- div -->

## `m`
* <a href="#m">`m`</a>

<!-- /div -->

<!-- div -->

## `objs`
* <a href="#objs">`objs`</a>

<!-- /div -->

<!-- div -->

## `objs.set`
* <a href="#objs-set">`objs.set`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Observe.prototype`

<!-- div -->

<h3 id="Observe-prototype-"><a href="#Observe-prototype-">#</a>&nbsp;<code>Observe.prototype.observe(properties=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L117 "View in source") [&#x24C9;][1]

(Function): observe properties when they change


### @todos 

- [ ] gotta update `data` if `deleting` too...
- [ ] un-observe
- [ ] should hash these callback properties
- [ ] just throttle the `.set` to allow easier version of .commit
 
#### Arguments
1. `properties=undefined` *(Matchable)*: Matchable properties to observe
2. `fn=undefined` *(Function)*: onChanged

#### Returns
*(Target)*: @chainable

#### Example
```js
const Target = require('chain-able')

const chain = new Target()
const log = arg => console.log(arg)

chain.extend(['eh']).observe('eh', data => log(data)).eh(true)
//=> {eh: true}

```
#### Example
```js
chain
  .extend(['canada', 'timbuck'])
  .observe(['canad*'], data => console.log(data.canada))
  .canada(true)
  .canada(true)
  .timbuck(false)

//=> true
//=> false

// only called when changed,
// otherwise it would be 2 `true` & 1 `false`

```
---

<!-- /div -->

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/test/observe.js">🔬  Tests: observe</a>&nbsp;

<h3 id="Observe-prototype-exports"><a href="#Observe-prototype-exports">#</a>&nbsp;<code>Observe.prototype.exports(Chain=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L61 "View in source") [&#x24C9;][1]

(Function): > subscribe to changes ❗ called only on **change** observers are only called when data they subscribe to changes


### @extends 

* ChainedMap
* DotProp


#### Since
3.0.1

#### Arguments
1. `Chain=undefined` *(Class|Composable)*: composable class

#### Returns
*(Observe)*: class

#### Example
```js
const { compose } = require('chain-able')
const { DotProp } = compose
new DotProp()
//=> DotProp

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `fn.call`

<!-- div -->

<h3 id="fn-call"><a href="#fn-call">#</a>&nbsp;<code>fn.call()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L158 "View in source") [&#x24C9;][1]

(Function): call the observer - it matched & data changed

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L143 "View in source") [&#x24C9;][1]

(Function): if we have called it at least once... and it has not changed, leave it
else clone it call the observer

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `m`

<!-- div -->

<h3 id="m"><a href="#m">#</a>&nbsp;<code>m</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L127 "View in source") [&#x24C9;][1]

unknown

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `objs`

<!-- div -->

<h3 id="objs"><a href="#objs">#</a>&nbsp;<code>objs</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L14 "View in source") [&#x24C9;][1]

(Map): scoped clones

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `objs.set`

<!-- div -->

<h3 id="objs-set"><a href="#objs-set">#</a>&nbsp;<code>objs.set()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L153 "View in source") [&#x24C9;][1]

(Function): it did change - clone it for next deepEquals check

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #observe.prototype "Jump back to the TOC."
