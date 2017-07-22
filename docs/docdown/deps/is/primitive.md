# primitive.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-exports"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="Lang"  data-description="Function Checks if value is classified as a primitive number string boolean null undefined"  data-name="exports"  data-member="is"  data-see="href http www adequatelygood com Object to Primitive Conversions in JavaScript html label http www adequatelygood com Object to Primitive Conversions in JavaScript html href https developer mozilla org en US docs Glossary Primitive label https developer mozilla org en US docs Glossary Primitive href http docs oracle com javase tutorial java nutsandbolts datatypes html label http docs oracle com javase tutorial java nutsandbolts datatypes html"  data-all="meta exports x undefined call exports x undefined category Lang description Function Checks if value is classified as a primitive n number string boolean null undefined name exports member is see href http www adequatelygood com Object to Primitive Conversions in JavaScript html label http www adequatelygood com Object to Primitive Conversions in JavaScript html href https developer mozilla org en US docs Glossary Primitive label https developer mozilla org en US docs Glossary Primitive href http docs oracle com javase tutorial java nutsandbolts datatypes html label http docs oracle com javase tutorial java nutsandbolts datatypes html notes todos klassProps" >`is.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-exports" data-member="is" data-category="Lang" data-name="exports"><code>is.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/primitive.js#L36 "View in source") [&#x24C9;][1]

(Function): Checks if `value` is classified as a **primitive**
`(number|string|boolean|null|undefined)`


#### @see 

* <a href="http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html" >http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html</a>
* <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" >https://developer.mozilla.org/en-US/docs/Glossary/Primitive</a>
* <a href="http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html" >http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html</a>

#### @Since
4.0.0 was in another file

#### Arguments
1. `x=undefined` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: x is number|string|boolean|null|undefined

#### Example
```js
isPrimitive('abc') // => true
isPrimitive(1) // => true
isPrimitive('') // => true
isPrimitive(null) // => true
isPrimitive(undefined) // => true
isPrimitive(void 0) // => true

isPrimitive(new String('abc')) // => false
isPrimitive([]) // => false
isPrimitive(() => {}) // => false
isPrimitive({}) // => false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
