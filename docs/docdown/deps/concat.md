# concat.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `concat`
* <a href="#concat"  data-meta="concat one undefined two undefined"  data-call="concat one undefined two undefined"  data-category="Methods"  data-description="Function conat two values coerce to arrays"  data-name="concat"  data-all="meta concat one undefined two undefined call concat one undefined two undefined category Methods description Function conat two values coerce to arrays name concat member see notes todos klassProps" >`concat`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `concat`

<!-- div -->

<h3 id="concat" data-member="" data-category="Methods" data-name="concat"><code>concat(one=undefined, two=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/concat.js#L27 "View in source") [&#x24C9;][1]

(Function): conat two values, coerce to arrays


#### @Since
4.0.0

#### Arguments
1. `one=undefined` *(&#42;|Array)*: toArr1
2. `two=undefined` *(&#42;|Array)*: toArr2

#### Returns
*(Array)*: &#91;one, two&#93;

#### Example
```js
concat([1], [2]) //=> [1, 2]
concat([1], 2) //=> [1, 2]
concat(1, 2) //=> [1, 2]
concat(new Set([1]), 2) //=> [1, 2]

// kind of weird...
concat(null, 2) //=> [2]
concat(undefined, 2) //=> [2]
concat(1, null) //=> [1, null]

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #concat "Jump back to the TOC."
