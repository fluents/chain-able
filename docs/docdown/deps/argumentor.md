# argumentor.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports"  data-call="exports"  data-category="Methods"  data-description="Function turns arguments into an array used as a util for opt"  data-name="exports"  data-all="meta exports call exports category Methods description Function turns arguments into an array used as a util for opt name exports member see notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/argumentor.js#L21 "View in source") [&#x24C9;][1]

(Function): turns arguments into an array, used as a util, for opt


#### @Since
3.0.0

#### Returns
*(&#42;)*:

#### Example
```js
function eh() {
  const args = argumentor.apply(null, arguments).slice(1)

  console.log(args)
  //=> [1, 10, 100]
}
eh(0, 1, 10, 100)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
