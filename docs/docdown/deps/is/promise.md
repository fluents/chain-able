# promise.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isPromise"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Methods"  data-description="Function is a Promise"  data-name="isPromise"  data-member="is"  data-see="href https github com jonschlinkert kind of blob master index js L66 label https github com jonschlinkert kind of blob master index js L66 href https github com sindresorhus promise fun label https github com sindresorhus promise fun"  data-all="meta exports x undefined call exports x undefined category Methods description Function is a Promise name isPromise member is see href https github com jonschlinkert kind of blob master index js L66 label https github com jonschlinkert kind of blob master index js L66 href https github com sindresorhus promise fun label https github com sindresorhus promise fun notes todos klassProps" >`is.isPromise`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isPromise" data-member="is" data-category="Methods" data-name="isPromise"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/promise.js#L38 "View in source") [&#x24C9;][1]

(Function): is a Promise


#### @see 

* <a href="https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66" >https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66</a>
* <a href="https://github.com/sindresorhus/promise-fun" >https://github.com/sindresorhus/promise-fun</a>

#### @Since
4.0.0-beta.2

#### Arguments
1. `x=undefined` *(&#42;)*: value

#### Returns
*(boolean)*: x isPromise

#### Example
```js
isPromise(new Promise(r => r))
//=> true
isPromise(async function() {})
//=> false // on some environments, true

isPromise({})
//=> false
isPromise(Object.create(null))
//=> false
isPromise(null)
//=> false
isPromise(new Set())
//=> false
isPromise(function() {})
//=> false
isPromise('')
//=> false
isPromise(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
