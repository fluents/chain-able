# has.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `dot`
* <a href="#dot-prototype-dot-has"  data-meta="dot has obj undefined path undefined"  data-call="dot has obj undefined path undefined"  data-category="Methods"  data-description="Function"  data-name="dot has"  data-member="dot"  data-all="meta dot has obj undefined path undefined call dot has obj undefined path undefined category Methods description Function name dot has member dot see notes todos klassProps" >`dot.dot.has`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `dot`

<!-- div -->

<h3 id="dot-prototype-dot-has" data-member="dot" data-category="Methods" data-name="dot.has"><code>dot.dot.has(obj=undefined, path=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/dot/has.js#L23 "View in source") [&#x24C9;][1]

Function


#### @extends




#### @Since
3.0.0

#### Arguments
1. `obj=undefined` *(Object)*: the object to retrieve the nested property from.
2. `path=undefined` *(Array|Dottable|string)*: dot-prop-path to use

#### Returns
*(boolean)*: has at path

#### Example
```js
dot.has({ a: { b: 2 } }, 'a.b') //=> true
dot.has({ a: { b: 2 } }, ['a', 'b']) //=> true
dot.has({ c: { b: 2 } }, ['a', 'b']) //=> undefined

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #dot "Jump back to the TOC."
