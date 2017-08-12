# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe`
* <a href="#Observe-prototype-"  data-meta="observe properties undefined fn undefined"  data-call="observe properties undefined fn undefined"  data-category="Methods"  data-description="Function observe properties when they change"  data-member="Observe"  data-see="href https github com fluents chain able blob master src deps traversers eq js label traversers eq href https github com fluents chain able blob master src deps to setToArray js label toarr href https github com fluents chain able blob master src deps is matcher js label matcher href https github com fluents chain able search utf8 E2 9C 93 q examples playground TodoStore type label examples playground TodoStore"  data-todos="gotta update data if deleting too un observe should hash these callback properties just throttle the set to allow easier version of commit"  data-all="meta observe properties undefined fn undefined call observe properties undefined fn undefined category Methods description Function observe properties when they change name member Observe see href https github com fluents chain able blob master src deps traversers eq js label traversers eq href https github com fluents chain able blob master src deps to setToArray js label toarr href https github com fluents chain able blob master src deps is matcher js label matcher href https github com fluents chain able search utf8 E2 9C 93 q examples playground TodoStore type label examples playground TodoStore notes todos gotta update data if deleting too n un observe n should hash these callback properties n just throttle the set to allow easier version of commit n klassProps" >`Observe.`</a>
* <a href="#Observe-prototype-exports"  data-meta="ChainedMap DotProp exports Target undefined"  data-call="exports Target undefined"  data-category="Chainable"  data-description="Function subscribe to changes called only on change observers are only called when data they subscribe to changes"  data-name="exports"  data-member="Observe"  data-see="href https github com fluents chain able blob master src ChainedMap js label ChainedMap href https github com fluents chain able blob master src compose DotProp js label DotProp href https github com fluents chain able blob master src deps matcher any key val js label deps matcher href https github com fluents chain able blob master src deps traversers eq js label deps traversers eq href https github com fluents chain able blob master src deps traverse js label deps traverse href https github com fluents chain able blob master src compose DotProp js label DotProp href https github com ReactiveX rxjs blob master src Subscriber ts label reactivex href https github com sindresorhus awesome observables label awesome observables href https medium com benlesh learning observable by building observable d5da57405d87 label building observables href https github com iluwatar java design patterns tree master observer label observer pattern href https github com tusharmath observable air label observable air"  data-all="meta ChainedMap DotProp n n exports Target undefined call exports Target undefined category Chainable description Function subscribe to changes called only on change observers are only called when data they subscribe to changes name exports member Observe see href https github com fluents chain able blob master src ChainedMap js label ChainedMap href https github com fluents chain able blob master src compose DotProp js label DotProp href https github com fluents chain able blob master src deps matcher any key val js label deps matcher href https github com fluents chain able blob master src deps traversers eq js label deps traversers eq href https github com fluents chain able blob master src deps traverse js label deps traverse href https github com fluents chain able blob master src compose DotProp js label DotProp href https github com ReactiveX rxjs blob master src Subscriber ts label reactivex href https github com sindresorhus awesome observables label awesome observables href https medium com benlesh learning observable by building observable d5da57405d87 label building observables href https github com iluwatar java design patterns tree master observer label observer pattern href https github com tusharmath observable air label observable air notes todos klassProps" >`Observe.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Observe`

<!-- div -->

<h3 id="Observe-prototype-" data-member="Observe" data-category="Methods" data-name="Observe"><code>Observe.observe(properties=undefined, fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L48 "View in source") [&#x24C9;][1]

(Function): observe properties when they change


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js" >traversers/eq</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/to/setToArray.js" >toarr</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/matcher.js" >matcher</a>
* <a href="undefined" ></a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=examples/playground/TodoStore&type=" >examples/playground/TodoStore</a>

#### @todos 

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

<h3 id="Observe-prototype-exports" data-member="Observe" data-category="Chainable" data-name="exports"><code>Observe.exports(Target=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L38 "View in source") [&#x24C9;][1]

(Function): > subscribe to changes ❗ called only on **change** observers are only called when data they subscribe to changes


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js" >ChainedMap</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js" >DotProp</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/matcher/any-key-val.js" >deps/matcher</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js" >deps/traversers/eq</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js" >deps/traverse</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/compose/DotProp.js" >DotProp</a>
* <a href="https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts" >reactivex</a>
* <a href="https://github.com/sindresorhus/awesome-observables" >awesome-observables</a>
* <a href="https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87" >building-observables</a>
* <a href="https://github.com/iluwatar/java-design-patterns/tree/master/observer" >observer-pattern</a>
* <a href="https://github.com/tusharmath/observable-air" >observable-air</a>

#### @extends 

* ChainedMap
* DotProp



#### @Since
3.0.1

#### Arguments
1. `Target=undefined` *(Class|Composable)*: composable class

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

 [1]: #observe "Jump back to the TOC."
