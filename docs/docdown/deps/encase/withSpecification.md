# withSpecification.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `encase`
* <a href="#encase-prototype-withSpecification"  data-meta="withSpecification specification undefined call undefined onInvalid undefined onInvalid undefined"  data-call="withSpecification specification undefined call undefined onInvalid undefined onInvalid undefined"  data-category="Methods"  data-description="Function a special encased wrapper with no try catch but same api"  data-name="withSpecification"  data-member="encase"  data-see="href https github com fluents chain able blob master src deps fp curry js label fp curry"  data-all="meta withSpecification specification undefined call undefined onInvalid undefined onInvalid undefined call withSpecification specification undefined call undefined onInvalid undefined onInvalid undefined category Methods description Function a special encased wrapper with no try catch but same api name withSpecification member encase see href https github com fluents chain able blob master src deps fp curry js label fp curry notes todos klassProps" >`encase.withSpecification`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `encase`

<!-- div -->

<h3 id="encase-prototype-withSpecification" data-member="encase" data-category="Methods" data-name="withSpecification"><code>encase.withSpecification(specification=undefined, call=undefined, onInvalid=undefined, onInvalid=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/encase/withSpecification.js#L26 "View in source") [&#x24C9;][1]

(Function): a special encased wrapper with no try catch but same api


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/fp/curry.js" >fp/curry</a>

#### @Since
4.0.0

#### Arguments
1. `specification=undefined` *(Function)*: match
2. `call=undefined` *(Function)*: cb to determine valid or invalid
3. `onInvalid=undefined` *(Function)*: cb when invalid
4. `onInvalid=undefined` *(Function)*: cb when valid

#### Returns
*(Function)*: a lot of functions...

#### Example
```js
const onInvalid = console.error
const onValid = console.debug
const onCall = console.log
const encased = withSpecification(x => true)(onCall)(onValid, onInvalid)

encased(1, 2, 3) //=> onCall (did not throw)

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #encase "Jump back to the TOC."
