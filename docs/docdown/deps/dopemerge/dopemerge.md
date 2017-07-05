# dopemerge.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dopemerge`
* <a href="#dopemerge-cloneIfNeeded">`dopemerge.cloneIfNeeded`</a>
* <a href="#dopemerge-defaultArrayMerge">`dopemerge.defaultArrayMerge`</a>
* <a href="#dopemerge-dopemerge">`dopemerge.dopemerge`</a>
* <a href="#dopemerge-emptyTarget">`dopemerge.emptyTarget`</a>
* <a href="#dopemerge-isMergeableObj">`dopemerge.isMergeableObj`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dopemerge`

<!-- div -->

<h3 id="dopemerge-cloneIfNeeded"><a href="#dopemerge-cloneIfNeeded">#</a>&nbsp;<code>dopemerge.cloneIfNeeded(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L90 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-defaultArrayMerge"><a href="#dopemerge-defaultArrayMerge">#</a>&nbsp;<code>dopemerge.defaultArrayMerge(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L129 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-dopemerge"><a href="#dopemerge-dopemerge">#</a>&nbsp;<code>dopemerge.dopemerge(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L255 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex


### @see 

* <a href="https://github.com/KyleAMathews/deepmerge">kyle a mathews/deepmerge</a>

[deepmerge}]: https://github.com/KyleAMathews/deepmerge <!-- NAMED_LINK -->

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-emptyTarget"><a href="#dopemerge-emptyTarget">#</a>&nbsp;<code>dopemerge.emptyTarget(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L61 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- div -->

<h3 id="dopemerge-isMergeableObj"><a href="#dopemerge-isMergeableObj">#</a>&nbsp;<code>dopemerge.isMergeableObj(x=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dopemerge/dopemerge.js#L41 "View in source") [&#x24C9;][1]

(Function): 1: not null object `2`: object toString is not a date or regex

#### Since
2.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*:

#### Example
```js
isMergeableObj({})
//=> true

isMergeableObj(Object.create(null))
// => true

isMergeableObj(new Date())
//=> false

isMergeableObj(/eh/)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dopemerge "Jump back to the TOC."
