# delete.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dot`
* <a href="#dot-prototype-dot-delete"  data-meta="dot delete obj undefined path undefined"  data-call="dot delete obj undefined path undefined"  data-category="Methods"  data-description="Function delete a path on an object"  data-name="dot delete"  data-member="dot"  data-all="meta dot delete obj undefined path undefined call dot delete obj undefined path undefined category Methods description Function delete a path on an object name dot delete member dot see notes todos klassProps" >`dot.dot.delete`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dot`

<!-- div -->

<h3 id="dot-prototype-dot-delete" data-member="dot" data-category="Methods" data-name="dot.delete"><code>dot.dot.delete(obj=undefined, path=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/delete.js#L26 "View in source") [&#x24C9;][1]

(Function): delete a path on an object


#### @extends




#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(Object)*: the object to DELETE the nested property from.
2. `path=undefined` *(Array|Dottable|string)*: dot-prop-path to use

#### Returns
*(void)*:

#### Example
```js
dot.get({ a: { b: 2 } }, 'a.b') //=> 2
dot.get({ a: { b: 2 } }, ['a', 'b']) //=> 2
dot.get({ c: { b: 2 } }, ['a', 'b']) //=> undefined

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dot "Jump back to the TOC."
