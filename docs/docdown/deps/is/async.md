# async.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isAsync"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function"  data-name="isAsync"  data-member="is"  data-see="href https github com fluents chain able blob master src deps is toS js label is toS"  data-all="meta exports x undefined call exports x undefined category Lang description Function name isAsync member is see href https github com fluents chain able blob master src deps is toS js label is toS notes todos klassProps" >`is.isAsync`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isAsync" data-member="is" data-category="Lang" data-name="isAsync"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/async.js#L24 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/toS.js" >is/toS</a>

#### @Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: isAsync

#### Example
```js
isAsync(async function() {})
//=> true
isAsync(new Promise(r => r()))
//=> false
isAsync({})
//=> false
isAsync(function() {})

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
