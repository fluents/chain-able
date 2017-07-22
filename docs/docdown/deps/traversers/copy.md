# copy.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-copy"  data-meta="copy src undefined"  data-call="copy src undefined"  data-category="Methods"  data-description="Function copy any primitive value part of clone"  data-name="copy"  data-member="Traverse"  data-all="meta copy src undefined call copy src undefined category Methods description Function copy any primitive value part of clone name copy member Traverse see notes todos klassProps" >`Traverse.copy`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<h3 id="Traverse-prototype-copy" data-member="Traverse" data-category="Methods" data-name="copy"><code>Traverse.copy(src=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/copy.js#L29 "View in source") [&#x24C9;][1]

(Function): copy any primitive value, part of clone


#### @Since
3.0.0

#### Arguments
1. `src=undefined` *(&#42;)*: value to copy

#### Returns
*(&#42;)*: copied

#### Example
```js
copy(/eh/gim) //=> new RegExp('eh', 'gmi')
copy(new Error('eh')) // => new Error with copied stack + msg
copy([1]) // => [1]
copy({}) // => {}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
