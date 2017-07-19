# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe`
* <a href="#Observe-prototype-"  data-meta="observe properties undefined fn undefined"  data-call="observe properties undefined fn undefined"  data-category="Methods"  data-description="Function observe properties when they change"  data-member="Observe"  data-todos="gotta update data if deleting too un observe should hash these callback properties just throttle the set to allow easier version of commit"  data-all="meta observe properties undefined fn undefined call observe properties undefined fn undefined category Methods description Function observe properties when they change name member Observe see notes todos gotta update data if deleting too n un observe n should hash these callback properties n just throttle the set to allow easier version of commit n klassProps" >`Observe.`</a>
* <a href="#Observe-prototype-exports"  data-meta="ChainedMap DotProp exports Target undefined"  data-call="exports Target undefined"  data-category="Chainable"  data-description="Function subscribe to changes called only on change observers are only called when data they subscribe to changes"  data-name="exports"  data-member="Observe"  data-all="meta ChainedMap DotProp n n exports Target undefined call exports Target undefined category Chainable description Function subscribe to changes called only on change observers are only called when data they subscribe to changes name exports member Observe see notes todos klassProps" >`Observe.exports`</a>

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L39 "View in source") [&#x24C9;][1]

(Function): > subscribe to changes ❗ called only on **change** observers are only called when data they subscribe to changes


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
