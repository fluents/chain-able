# or.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-or"  data-meta="or left undefined right undefined x undefined"  data-call="or left undefined right undefined x undefined"  data-category="Methods"  data-description="Function first fn second fn curried"  data-name="or"  data-member="conditional"  data-all="meta or left undefined right undefined x undefined call or left undefined right undefined x undefined category Methods description Function first fn second fn curried name or member conditional see notes todos klassProps" >`conditional.or`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-or" data-member="conditional" data-category="Methods" data-name="or"><code>conditional.or(left=undefined, right=undefined, x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/or.js#L33 "View in source") [&#x24C9;][1]

(Function): first fn || second fn, curried


#### @Since
4.0.1

#### Arguments
1. `left=undefined` *(Function)*: first fn
2. `right=undefined` *(Function)*: second fn
3. `x=undefined` *(&#42;)*: value to pass into left & right, curried

#### Returns
*(boolean)*: one of the functions return truthy

#### Example
```js
const { isTrue, isFalse } = require('chain-able')

const either = or(isFalse, isTrue)

either([true])
//=> true

either([new Boolean(true)])
//=> false

either([1])
//=> false

// because curried
or(isTrue, isFalse, true) //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional "Jump back to the TOC."
