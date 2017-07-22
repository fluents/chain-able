# get.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dot`
* <a href="#dot-prototype-dot-get"  data-meta="dot get obj undefined path undefined fallback undefined"  data-call="dot get obj undefined path undefined fallback undefined"  data-category="Methods"  data-description="Function"  data-name="dot get"  data-member="dot"  data-all="meta dot get obj undefined path undefined fallback undefined call dot get obj undefined path undefined fallback undefined category Methods description Function name dot get member dot see notes todos klassProps" >`dot.dot.get`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dot`

<!-- div -->

<h3 id="dot-prototype-dot-get" data-member="dot" data-category="Methods" data-name="dot.get"><code>dot.dot.get(obj=undefined, path=undefined, fallback=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/get.js#L27 "View in source") [&#x24C9;][1]

Function


#### @extends




#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(Object)*: the object to retrieve the nested property from.
2. `path=undefined` *(Array|Dottable|string)*: dot-prop-path to use
3. `fallback=undefined` *(&#42;)*: use when there is no value at specified path

#### Returns
*(&#42;)*: value at path or fallback

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
