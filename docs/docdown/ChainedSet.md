# ChainedSet.js API documentation

<!-- div class="toc-container" -->

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

## `add`

<!-- div -->

<h3 id="add"><a href="#add">#</a>&nbsp;<code>add(value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L51 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `value` *(any)*: any value to add to &#42;&#42;end&#42;&#42; of the store

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
  people
    .add('sam')
    .add('sue')

  for (let name of people) console.log(name)
  //=> sam, sue
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `merge`

<!-- div -->

<h3 id="merge"><a href="#merge">#</a>&nbsp;<code>merge(arr)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L96 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `arr` *(Array|Concatable|Set)*: values to merge in and append

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
  people
    .add('sam')
    .add('sue')
    .prepend('first')
    .merge(['merged'])

  for (let name of people) console.log(name)
  //=> first, sam, sue, merged
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `prepend`

<!-- div -->

<h3 id="prepend"><a href="#prepend">#</a>&nbsp;<code>prepend(value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L72 "View in source") [&#x24C9;][1]



#### Since
0.4.0

#### Arguments
1. `value` *(any)*: any value to add to &#42;&#42;beginning&#42;&#42; the store

#### Returns
*(ChainedSet)*: @chainable

#### Example
```js
const people = new ChainedSet()
  people
    .add('sue')
    .prepend('first')

  for (let name of people) console.log(name)
  //=> first, sue
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #add "Jump back to the TOC."
