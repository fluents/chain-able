# encase.js API documentation

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

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(call=undefined, [encaser=tryCatch])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/encase/encase.js#L33 "View in source") [&#x24C9;][1]

Function

#### Since
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

 [1]: #exports "Jump back to the TOC."
