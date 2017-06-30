# Observe.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Observe.prototype`
* <a href="#Observe-prototype-exports">`Observe.prototype.exports`</a>
* <a href="#Observe-prototype-observe">`Observe.prototype.observe`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Observe.prototype`

<!-- div -->

<h3 id="Observe-prototype-exports"><a href="#Observe-prototype-exports">#</a>&nbsp;<code>Observe.prototype.exports(SuperClass)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L61 "View in source") [&#x24C9;][1]



#### Since
3.0.1

#### Arguments
1. `SuperClass` *(Class|Composable)*: composable class

#### Returns
*(Observe)*: class

#### Example
```js
const {compose} = require('chain-able')
   const {DotProp} = compose
   new DotProp()
   //=> DotProp
```
---

<!-- /div -->

<!-- div -->

<h3 id="Observe-prototype-observe"><a href="#Observe-prototype-observe">#</a>&nbsp;<code>Observe.prototype.observe(properties, fn)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Observe.js#L115 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- refactored with dot-prop

#### Arguments
1. `properties` *(Matchable)*: Matchable properties to observe
2. `fn` *(Function)*: onChanged

#### Returns
*(Chain)*: @chainable

#### Example
```js
const Chain = require('chain-able')

  const chain = new Chain()
  const log = arg => console.log(arg)

  chain
    .extend(['eh'])
    .observe('eh', data => log(data))
    .eh(true)
  //=> {eh: true}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #observe.prototype "Jump back to the TOC."
