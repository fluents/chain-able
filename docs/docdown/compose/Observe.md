# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe.prototype`
* <a href="#Observe-prototype-">`Observe.prototype.`</a>
* <a href="#Observe-prototype-exports">`Observe.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Observe.prototype`

<!-- div -->

<h3 id="Observe-prototype-"><a href="#Observe-prototype-">#</a>&nbsp;<code>Observe.prototype.observe(properties=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L46 "View in source") [&#x24C9;][1]

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L38 "View in source") [&#x24C9;][1]

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

<!-- /div -->

 [1]: #observe.prototype "Jump back to the TOC."
