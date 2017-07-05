# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe.prototype`
* <a href="#Observe-prototype-exports">`Observe.prototype.exports`</a>
* <a href="#Observe-prototype-observe">`Observe.prototype.observe`</a>

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

<a href="https://github.com/fluents/chain-able/blob/master/test/observe.js">🔬  Tests: observe</a>&nbsp;

<h3 id="Observe-prototype-exports"><a href="#Observe-prototype-exports">#</a>&nbsp;<code>Observe.prototype.exports(SuperClass=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L61 "View in source") [&#x24C9;][1]

> subscribe to changes ❗ called only on **change** observers are only called when data they subscribe to changes


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js">fluents/chain able/blob/master/src/chained map.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js">fluents/chain able/blob/master/src/deps/matcher/any key val.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js">fluents/chain able/blob/master/src/deps/traversers/eq.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js">fluents/chain able/blob/master/src/deps/traverse.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js">fluents/chain able/blob/master/src/compose/dot prop.js</a>
* <a href="https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts">reactive x/rxjs/blob/master/src/subscriber.ts</a>
* <a href="https://github.com/sindresorhus/awesome-observables">sindresorhus/awesome observables</a>
* <a href="https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87">@benlesh/learning observable by building observable d5da57405d87</a>
* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/observer">iluwatar/java design patterns/tree/master/observer</a>

[observer-pattern]: https://github.com/iluwatar/java-design-patterns/tree/master/observer <!-- NAMED_LINK -->


[reactivex]: https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts <!-- NAMED_LINK -->


[awesome-observables]: https://github.com/sindresorhus/awesome-observables <!-- NAMED_LINK -->


[building-observables]: https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 <!-- NAMED_LINK -->


[js-observer-png]: https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/observer.png <!-- NAMED_LINK -->


[pubsub-png]: https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/publishsubscribe.png <!-- NAMED_LINK -->

#### Since
3.0.1

#### Arguments
1. `SuperClass=undefined` *(Class|Composable)*: composable class

#### Example
```js
const { compose } = require('chain-able')
const { DotProp } = compose
new DotProp()
//=> DotProp

```
---

<!-- /div -->

<!-- div -->

<h3 id="Observe-prototype-observe"><a href="#Observe-prototype-observe">#</a>&nbsp;<code>Observe.prototype.observe(properties=undefined, fn=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L117 "View in source") [&#x24C9;][1]

observe properties when they change


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js">fluents/chain able/blob/master/src/deps/traversers/eq.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/matcher.js">fluents/chain able/blob/master/src/deps/is/matcher.js</a>

[undefined]: undefined <!-- NAMED_LINK -->

#### Arguments
1. `properties=undefined` *(Matchable)*: Matchable properties to observe
2. `fn=undefined` *(Function)*: onChanged

#### Example
```js
const Chain = require('chain-able')

const chain = new Chain()
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

<!-- /div -->

<!-- div -->

## `fn.call`

<!-- div -->

<h3 id="fn-call"><a href="#fn-call">#</a>&nbsp;<code>fn.call()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L158 "View in source") [&#x24C9;][1]

call the observer - it matched & data changed

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `if`

<!-- div -->

<h3 id="if"><a href="#if">#</a>&nbsp;<code>if()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L143 "View in source") [&#x24C9;][1]

if we have called it at least once... and it has not changed, leave it
else clone it call the observer

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `m`

<!-- div -->

<h3 id="m"><a href="#m">#</a>&nbsp;<code>m</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L127 "View in source") [&#x24C9;][1]

match the keys, make the data out of it

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

it did change - clone it for next deepEquals check

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #observe.prototype "Jump back to the TOC."
