# argumentor.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `argumentor`
* <a href="#argumentor"  data-meta="argumentor"  data-call="argumentor"  data-category="Methods"  data-description="Function turns arguments into an array used as a util for opt"  data-name="argumentor"  data-see="href https github com fluents chain able blob master src deps util lengthFromZero js label fluents chain able blob master src deps util length from zero js"  data-all="meta argumentor call argumentor category Methods description Function turns arguments into an array used as a util for opt name argumentor member see href https github com fluents chain able blob master src deps util lengthFromZero js label fluents chain able blob master src deps util length from zero js notes todos klassProps" >`argumentor`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `argumentor`

<!-- div -->

<h3 id="argumentor" data-member="" data-category="Methods" data-name="argumentor"><code>argumentor()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/argumentor.js#L25 "View in source") [&#x24C9;][1]

(Function): turns arguments into an array, used as a util, for opt


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/util/lengthFromZero.js" >fluents/chain able/blob/master/src/deps/util/length from zero.js</a>

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

 [1]: #argumentor "Jump back to the TOC."
