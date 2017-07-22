# mapish.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isMapish"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function"  data-name="isMapish"  data-member="is"  data-all="meta exports x undefined call exports x undefined category Methods description Function name isMapish member is see notes todos klassProps" >`is.isMapish`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isMapish" data-member="is" data-category="Methods" data-name="isMapish"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/mapish.js#L30 "View in source") [&#x24C9;][1]

Function


#### @extends




#### @Since
3.0.0

#### Arguments
1. `x=undefined` *(&#42;)*: value to check

#### Returns
*(boolean)*: isMapish

#### Example
```js
isMapish(new Map())
//=> true

isMapish(new Chain())
//=> true

isMapish({})
//=> false

isMapish(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
