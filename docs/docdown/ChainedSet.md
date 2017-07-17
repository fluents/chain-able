# ChainedSet.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedSet`
* <a href="#">``</a>

<!-- /div -->

<!-- div -->

## `add`
* <a href="#add">`add`</a>

<!-- /div -->

<!-- div -->

## `merge`
* <a href="#merge">`merge`</a>

<!-- /div -->

<!-- div -->

## `prepend`
* <a href="#prepend">`prepend`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedSet`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedSet.d.ts">🌊  Types: ChainedSet.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedSet.js">🔬  Tests: ChainedSet</a>&nbsp;

<h3 id=""><a href="#">#</a>&nbsp;<code></code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L23 "View in source") [&#x24C9;][1]

Set


### @notes 

* had Symbol.isConcatSpreadable but it was not useful
 

### @todos 

- [ ] could add .first .last ?
 

### @classProps 

* {store}  
 

### @extends
Chainable


---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `add`

<!-- div -->

<h3 id="add"><a href="#add">#</a>&nbsp;<code>add(value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L55 "View in source") [&#x24C9;][1]

(Function): appends a new element with a specified value to the end of the .store

#### Since
0.4.0

#### Arguments
1. `value=undefined` *(any)*: any value to add to &#42;&#42;end&#42;&#42; of the store

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
people.add('sam').add('sue')

for (let name of people) console.log(name)
//=> sam, sue

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge(arr=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L100 "View in source") [&#x24C9;][1]

(Function): merge any Array/Set/Iteratable/Concatables into the array, at the end

#### Since
0.4.0

#### Arguments
1. `arr=undefined` *(Array|Concatable|Set)*: values to merge in and append

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
people.add('sam').add('sue').prepend('first').merge(['merged'])

for (let name of people) console.log(name)
//=> first, sam, sue, merged

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `prepend`

<!-- div -->

<h3 id="prepend"><a href="#prepend">#</a>&nbsp;<code>prepend(value=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L76 "View in source") [&#x24C9;][1]

(Function): inserts the value at the **beginning** of the Set

#### Since
0.4.0

#### Arguments
1. `value=undefined` *(any)*: any value to add to &#42;&#42;beginning&#42;&#42; the store

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
people.add('sue').prepend('first')

for (let name of people) console.log(name)
//=> first, sue

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedset "Jump back to the TOC."
