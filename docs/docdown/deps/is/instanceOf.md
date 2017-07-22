# instanceOf.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `instanceOf`
* <a href="#instanceOf"  data-meta="instanceOf instanceToCheckAgainst undefined isThisInstanceOfThat undefined"  data-call="instanceOf instanceToCheckAgainst undefined isThisInstanceOfThat undefined"  data-category="Methods"  data-description="Function"  data-name="instanceOf"  data-all="meta instanceOf instanceToCheckAgainst undefined isThisInstanceOfThat undefined call instanceOf instanceToCheckAgainst undefined isThisInstanceOfThat undefined category Methods description Function name instanceOf member see notes todos klassProps" >`instanceOf`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `instanceOf`

<!-- div -->

<h3 id="instanceOf" data-member="" data-category="Methods" data-name="instanceOf"><code>instanceOf(instanceToCheckAgainst=undefined, isThisInstanceOfThat=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/instanceOf.js#L26 "View in source") [&#x24C9;][1]

Function


#### @Since
5.0.0-beta.4

#### Arguments
1. `instanceToCheckAgainst=undefined` *(Object)*: check the second arg against this
2. `isThisInstanceOfThat=undefined` *(Object)*: check this against first arg

#### Returns
*(boolean)*: arg2 instanceof arg1

#### Example
```js
const isObjInstance = instanceOf(Object)
isObjInstance({})
//=> true

const isArrInstance = instanceOf(Array)
isArrInstance({})
//=> false

isArrInstance(new Array())
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #instanceof "Jump back to the TOC."
