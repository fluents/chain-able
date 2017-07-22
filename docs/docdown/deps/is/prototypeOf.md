# prototypeOf.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-isPrototypeOf"  data-meta="isPrototypeOf haystack undefined needle undefined"  data-call="isPrototypeOf haystack undefined needle undefined"  data-category="Methods"  data-description="Function check if arg 1 is prototype of arg 2"  data-name="isPrototypeOf"  data-member="is"  data-see="href https developer mozilla org en US docs Web JavaScript Reference Global Objects Object isPrototypeOf label Developer mozilla org en us docs web java script reference global objects object is prototype of"  data-todos="curry2"  data-all="meta isPrototypeOf haystack undefined needle undefined call isPrototypeOf haystack undefined needle undefined category Methods description Function check if arg 1 is prototype of arg 2 name isPrototypeOf member is see href https developer mozilla org en US docs Web JavaScript Reference Global Objects Object isPrototypeOf label Developer mozilla org en us docs web java script reference global objects object is prototype of notes todos curry2 n klassProps" >`is.isPrototypeOf`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-isPrototypeOf" data-member="is" data-category="Methods" data-name="isPrototypeOf"><code>is.isPrototypeOf(haystack=undefined, needle=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/is/prototypeOf.js#L24 "View in source") [&#x24C9;][1]

(Function): check if arg `1` is prototype of arg `2`


#### @see 

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" >Developer.mozilla.org/en us/docs/web/java script/reference/global objects/object/is prototype of</a>

#### @todos 

- [ ] curry2
 

#### @Since
3.0.0

#### Arguments
1. `haystack=undefined` *(&#42;|Object)*: check needle against
2. `needle=undefined` *(&#42;|Object)*: is prototype of haystack

#### Returns
*(boolean)*: needle isPrototypeOf haystack

#### Example
```js
class Eh extends Function {}
class Canada extends Eh {}
isPrototypeOf(Eh, Function) //=> true
isPrototypeOf(Canada, Function) //=> true
isPrototypeOf(Eh, Date) //=> false

isPrototypeOf({}, Object) //=> true
isPrototypeOf({}, Array) //=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
