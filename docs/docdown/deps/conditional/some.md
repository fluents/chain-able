# some.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-some"  data-meta="some predicate undefined arr undefined"  data-call="some predicate undefined arr undefined"  data-category="Methods"  data-description="Function map all values in an array to see if some match curried"  data-name="some"  data-member="conditional"  data-all="meta some predicate undefined arr undefined call some predicate undefined arr undefined category Methods description Function map all values in an array to see if some match curried name some member conditional see notes todos klassProps" >`conditional.some`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-some" data-member="conditional" data-category="Methods" data-name="some"><code>conditional.some(predicate=undefined, arr=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/some.js#L28 "View in source") [&#x24C9;][1]

(Function): map all values in an array to see if **some** match, curried


#### @Since
4.0.1

#### Arguments
1. `predicate=undefined` *(Function)*: match the value
2. `arr=undefined` *(Array|any)*: values to match on the predicate

#### Returns
*(boolean)*: &#42;&#42;some&#42;&#42; match predicate

#### Example
```js
const someBoolean = some(x => typeof x === 'boolean'q)

   someBoolean([true])
   //=> true

   someBoolean([1])
   //=> false

   someBoolean([1, true])
   //=> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional "Jump back to the TOC."
