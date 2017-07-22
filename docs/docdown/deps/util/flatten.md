# flatten.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `util`
* <a href="#util-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function flatten multi dimensional arrays in 1 line"  data-name="exports"  data-member="util"  data-all="meta exports x undefined call exports x undefined category Methods description Function flatten multi dimensional arrays in 1 line name exports member util see notes todos klassProps" >`util.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `util`

<!-- div -->

<h3 id="util-prototype-exports" data-member="util" data-category="Methods" data-name="exports"><code>util.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/util/flatten.js#L20 "View in source") [&#x24C9;][1]

(Function): flatten multi-dimensional arrays in `1` line


#### @Since
4.0.0

#### Arguments
1. `x=undefined` *(Array|any)&#91;&#93;): array(s)* to flatten

#### Returns
*(&#42;)*: flattened arrays

#### Example
```js
flatten([[1], [2]])
//=> [1, 2]
flatten([[1], 2])
//=> [1, 2]
flatten(1)
//=> [1]

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #util "Jump back to the TOC."
