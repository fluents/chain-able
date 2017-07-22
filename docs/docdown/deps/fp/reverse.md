# reverse.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="exports x undefined"  data-call="exports x undefined"  data-category="List"  data-description="Function Returns a new list or string with the elements or characters in reverse order"  data-member="fp"  data-see="href https github com ramda ramda blob master src reverse js label ramda ramda blob master src reverse js href https stackoverflow com a 26610963 2855712 label a 26610963 2855712"  data-all="meta n exports x undefined call exports x undefined category List description Function Returns a new list or string with the elements or characters in reverse norder name member fp see href https github com ramda ramda blob master src reverse js label ramda ramda blob master src reverse js href https stackoverflow com a 26610963 2855712 label a 26610963 2855712 notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="List" data-name="reverse"><code>fp.exports(x=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/reverse.js#L30 "View in source") [&#x24C9;][1]

(Function): Returns a new list or string with the elements or characters in reverse
order.


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/reverse.js" >ramda/ramda/blob/master/src/reverse.js</a>
* <a href="https://stackoverflow.com/a/26610963/2855712" >a/26610963/2855712</a>

#### @symb 

⬅️ 

#### @Since
5.0.0-beta.5

#### Arguments
1. `x=undefined` *(Array|String): &#42;(list)*&#42; string or array to reverse

#### Returns
*(&#42;)*:

#### Example
```js
reverse([1, 2, 3]) //=> [3, 2, 1]
reverse([1, 2]) //=> [2, 1]
reverse([1]) //=> [1]
reverse([]) //=> []

reverse('abc') //=> 'cba'
reverse('ab') //=> 'ba'
reverse('a') //=> 'a'
reverse('') //=> ''

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
