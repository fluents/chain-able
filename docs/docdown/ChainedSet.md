# ChainedSet.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedSet`
* <a href="#ChainedSet-prototype-"  data-meta="Chainable"  data-category="Properties"  data-description="Set"  data-member="ChainedSet"  data-notes="had Symbol isConcatSpreadable but it was not useful"  data-todos="could add first last"  data-klassProps="store"  data-all="meta Chainable call category Properties description Set name member ChainedSet see notes had Symbol isConcatSpreadable but it was not useful n todos could add first last n klassProps store n" >`ChainedSet.`</a>
* <a href="#ChainedSet-prototype-add"  data-meta="add value undefined"  data-call="add value undefined"  data-category="Methods"  data-description="Function appends a new element with a specified value to the end of the store"  data-name="add"  data-member="ChainedSet"  data-all="meta add value undefined call add value undefined category Methods description Function appends a new element with a specified value to the end of the store name add member ChainedSet see notes todos klassProps" >`ChainedSet.add`</a>
* <a href="#ChainedSet-prototype-merge"  data-meta="merge arr undefined"  data-call="merge arr undefined"  data-category="Methods"  data-description="Function merge any Array Set Iteratable Concatables into the array at the end"  data-name="merge"  data-member="ChainedSet"  data-all="meta merge arr undefined call merge arr undefined category Methods description Function merge any Array Set Iteratable Concatables into the array at the end name merge member ChainedSet see notes todos klassProps" >`ChainedSet.merge`</a>
* <a href="#ChainedSet-prototype-prepend"  data-meta="prepend value undefined"  data-call="prepend value undefined"  data-category="Methods"  data-description="Function inserts the value at the beginning of the Set"  data-name="prepend"  data-member="ChainedSet"  data-all="meta prepend value undefined call prepend value undefined category Methods description Function inserts the value at the beginning of the Set name prepend member ChainedSet see notes todos klassProps" >`ChainedSet.prepend`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedSet`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/ChainedSet.d.ts">🌊  Types: ChainedSet.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/ChainedSet.js">🔬  Tests: ChainedSet</a>&nbsp;

<h3 id="ChainedSet-prototype-" data-member="ChainedSet" data-category="Properties" data-name="ChainedSet"><code>ChainedSet.</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L25 "View in source") [&#x24C9;][1]

Set


#### @notes 

* had Symbol.isConcatSpreadable but it was not useful
 

#### @todos 

- [ ] could add .first .last ?
 

#### @classProps 

* {store}  
 

#### @extends
Chainable


---

<!-- /div -->

<!-- div -->

<h3 id="ChainedSet-prototype-add" data-member="ChainedSet" data-category="Methods" data-name="add"><code>ChainedSet.add(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L16 "View in source") [&#x24C9;][1]

(Function): appends a new element with a specified value to the end of the .store


#### @Since
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

<!-- div -->

<h3 id="ChainedSet-prototype-merge" data-member="ChainedSet" data-category="Methods" data-name="merge"><code>ChainedSet.merge(arr=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L114 "View in source") [&#x24C9;][1]

(Function): merge any Array/Set/Iteratable/Concatables into the array, at the end


#### @Since
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

<!-- div -->

<h3 id="ChainedSet-prototype-prepend" data-member="ChainedSet" data-category="Methods" data-name="prepend"><code>ChainedSet.prepend(value=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/ChainedSet.js#L88 "View in source") [&#x24C9;][1]

(Function): inserts the value at the **beginning** of the Set


#### @Since
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
