# argumentor.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/argumentor.js#L23 "View in source") [&#x24C9;][1]

turns arguments into an array, used as a util, for opt


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js">fluents/chain able/blob/master/src/deps/traverse.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js">fluents/chain able/blob/master/src/traverse chain.js</a>
#### Since
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
