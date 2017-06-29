# Chainable.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ObjectDefine`
* <a href="#ObjectDefine">`ObjectDefine`</a>

<!-- /div -->

<!-- div -->

## `[Iterator]`
* <a href="#[Iterator]">`&#91;Iterator&#93;`</a>

<!-- /div -->

<!-- div -->

## `[Primitive]`
* <a href="#[Primitive]">`&#91;Primitive&#93;`</a>

<!-- /div -->

<!-- div -->

## `clear`
* <a href="#clear">`clear`</a>

<!-- /div -->

<!-- div -->

## `delete`
* <a href="#delete">`delete`</a>

<!-- /div -->

<!-- div -->

## `end`
* <a href="#end">`end`</a>

<!-- /div -->

<!-- div -->

## `has`
* <a href="#has">`has`</a>

<!-- /div -->

<!-- div -->

## `values`
* <a href="#values">`values`</a>

<!-- /div -->

<!-- div -->

## `when`
* <a href="#when">`when`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ObjectDefine`

<!-- div -->

<h3 id="ObjectDefine"><a href="#ObjectDefine">#</a>&nbsp;<code>ObjectDefine()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L231 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Example
```js
for (var i = 0; i < chain.length; i++)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `[Iterator]`

<!-- div -->

<h3 id="[Iterator]"><a href="#[Iterator]">#</a>&nbsp;<code>[Iterator]()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L55 "View in source") [&#x24C9;][1]



#### Since
0.5.0

#### Example
```js
for (var [key, val] of chainable) {}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `[Primitive]`

<!-- div -->

<h3 id="[Primitive]"><a href="#[Primitive]">#</a>&nbsp;<code>[Primitive](hint)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L201 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `hint` *(string)*: enum&#91;default, string, number&#93;

#### Example
```js
chain + 1 (calls this)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `clear`

<!-- div -->

<h3 id="clear"><a href="#clear">#</a>&nbsp;<code>clear([clearPropertiesThatAreChainLike=true])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L142 "View in source") [&#x24C9;][1]



#### Since
4.0.0 *(moved only to Chainable, added option to clear this keys)*

#### Arguments
1. `[clearPropertiesThatAreChainLike=true]` *(|boolean)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `delete`

<!-- div -->

<h3 id="delete"><a href="#delete">#</a>&nbsp;<code>delete(key)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L163 "View in source") [&#x24C9;][1]



#### Since
0.3.0

#### Arguments
1. `key` *(any|string)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `end`

<!-- div -->

<h3 id="end"><a href="#end">#</a>&nbsp;<code>end()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L87 "View in source") [&#x24C9;][1]



#### Since
0.4.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `has`

<!-- div -->

<h3 id="has"><a href="#has">#</a>&nbsp;<code>has(value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L174 "View in source") [&#x24C9;][1]



#### Since
0.3.0

#### Arguments
1. `value` *(any)*:

#### Example
```js
if (chain.has('eh') === false) chain.set('eh', true)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `values`

<!-- div -->

<h3 id="values"><a href="#values">#</a>&nbsp;<code>values()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L188 "View in source") [&#x24C9;][1]



#### Since
0.4.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `when`

<!-- div -->

<h3 id="when"><a href="#when">#</a>&nbsp;<code>when(condition, [trueBrancher=Function], [falseBrancher=Function])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/Chainable.js#L109 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- added string-as-has(condition)

#### Arguments
1. `condition` *(boolean|string)*: when string, checks this.get
2. `[trueBrancher=Function]` *(Function)*: called when true
3. `[falseBrancher=Function]` *(Function)*: called when false

#### Example
```js
const prod = process.env.NODE_ENV === 'production'
 chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #objectdefine "Jump back to the TOC."
