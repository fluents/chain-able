# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `encase`
* <a href="#encase-prototype-exports"  data-meta="exports call undefined encaser tryCatch"  data-call="exports call undefined encaser tryCatch"  data-category="Methods"  data-description="Function"  data-name="exports"  data-member="encase"  data-all="meta n exports call undefined encaser tryCatch call exports call undefined encaser tryCatch category Methods description Function name exports member encase see notes todos klassProps" >`encase.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `encase`

<!-- div -->

<h3 id="encase-prototype-exports" data-member="encase" data-category="Methods" data-name="exports"><code>encase.exports(call=undefined, [encaser=tryCatch])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/encase/encase.js#L37 "View in source") [&#x24C9;][1]

Function


#### @symb 

🛡 

#### @Since
4.0.0

#### Arguments
1. `call=undefined` *(Function)*: function to _encase_
2. `[encaser=tryCatch]` *(|Function)*: function to encase _with_

#### Returns
*(Function)*: -> FunctionObject{onInvalid, onValid, rethrow, call}

#### Example
```js
const throws = x => {
  if (x === false) {
    throw new Error('invalid - cannot be false')
  }
  return true
}
const api = encase(throws)

api.onValid(console.log)
api.onInvalid(console.error)

//--- invalid
api.call(false)
//=> 'invalid - cannot be false'

//--- valid
api.call(true)
//=> 'true'

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #encase "Jump back to the TOC."
