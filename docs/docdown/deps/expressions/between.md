# between.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `between`
* <a href="#between"  data-meta="between x undefined min undefined max undefined greaterThanOrEqualTo undefined"  data-call="between x undefined min undefined max undefined greaterThanOrEqualTo undefined"  data-category="Methods"  data-description="Function"  data-name="between"  data-all="meta between x undefined min undefined max undefined greaterThanOrEqualTo undefined call between x undefined min undefined max undefined greaterThanOrEqualTo undefined category Methods description Function name between member see notes todos klassProps" >`between`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `between`

<!-- div -->

<h3 id="between" data-member="" data-category="Methods" data-name="between"><code>between(x=undefined, min=undefined, max=undefined, greaterThanOrEqualTo=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/expressions/between.js#L15 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `x=undefined` *(number)*: number between
2. `min=undefined` *(number)*: minimum
3. `max=undefined` *(number)*: maximum
4. `greaterThanOrEqualTo=undefined` *(boolean): strictly between, not equal to &#42;(left right)*&#42;

#### Returns
*(boolean)*: x >= min && x <= max

#### Example
```js
between(100, 0, 200) //=> true
between(100, 100, 100) //=> true
between(100, 10, 99) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #between "Jump back to the TOC."
