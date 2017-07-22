# and.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `conditional`
* <a href="#conditional-prototype-and"  data-meta="and left undefined right undefined"  data-call="and left undefined right undefined"  data-category="Methods"  data-description="Function first fn second fn"  data-name="and"  data-member="conditional"  data-all="meta and left undefined right undefined call and left undefined right undefined category Methods description Function first fn second fn name and member conditional see notes todos klassProps" >`conditional.and`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `conditional`

<!-- div -->

<h3 id="conditional-prototype-and" data-member="conditional" data-category="Methods" data-name="and"><code>conditional.and(left=undefined, right=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/conditional/and.js#L29 "View in source") [&#x24C9;][1]

(Function): first fn & second fn


#### @Since
4.0.1

#### Arguments
1. `left=undefined` *(Function)*: first fn
2. `right=undefined` *(Function)*: second fn

#### Returns
*(boolean)*: both functions return truthy

#### Example
```js
const both = and(x => typeof x === 'boolean', x => x === true)

both([true])
//=> true

both([false])
//=> false

both([1])
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #conditional "Jump back to the TOC."
