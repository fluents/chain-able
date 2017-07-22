# curry.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="curryN length undefined received undefined fn undefined Number a a"  data-call="curryN length undefined received undefined fn undefined"  data-category="Function"  data-description="Function Returns a curried equivalent of the provided function with the specified arity The curried function has two unusual capabilities First its arguments needn t be provided one at a time If g is R curryN 3 f the following are equivalent br br br g 1 2 3 br g 1 2 3 br g 1 2 3 br g 1 2 3 br br Secondly the special placeholder value R may be used to specify gaps allowing partial application of any combination of arguments regardless of their positions If g is as above and is R the following are equivalent br br br g 1 2 3 br g 2 3 1 br g 3 1 2 br g 3 1 2 br g 2 1 3 br g 2 1 3 br g 2 3 1"  data-member="fp"  data-all="meta curryN length undefined received undefined fn undefined n Number a a call curryN length undefined received undefined fn undefined category Function description Function Returns a curried equivalent of the provided function with the specified narity The curried function has two unusual capabilities First its narguments needn t be provided one at a time If g is R curryN 3 f the nfollowing are equivalent n br n br n br g 1 2 3 n br g 1 2 3 n br g 1 2 3 n br g 1 2 3 n br n br nSecondly the special placeholder value R may be used to specify n gaps allowing partial application of any combination of arguments nregardless of their positions If g is as above and is R nthe following are equivalent n br n br n br g 1 2 3 n br g 2 3 1 n br g 3 1 2 n br g 3 1 2 n br g 2 1 3 n br g 2 1 3 n br g 2 3 1 name member fp see notes todos klassProps" >`fp.`</a>
* <a href="#fp-prototype-"  data-meta="exports length undefined fn undefined Number a a"  data-call="exports length undefined fn undefined"  data-category="Function"  data-description="Function Returns a curried equivalent of the provided function with the specified arity The curried function has two unusual capabilities First its arguments needn t be provided one at a time If g is R curryN 3 f the following are equivalent br br br g 1 2 3 br g 1 2 3 br g 1 2 3 br g 1 2 3 br br Secondly the special placeholder value R may be used to specify gaps allowing partial application of any combination of arguments regardless of their positions If g is as above and is R the following are equivalent br br br g 1 2 3 br g 2 3 1 br g 3 1 2 br g 3 1 2 br g 2 1 3 br g 2 1 3 br g 2 3 1"  data-member="fp"  data-all="meta exports length undefined fn undefined n Number a a call exports length undefined fn undefined category Function description Function Returns a curried equivalent of the provided function with the specified narity The curried function has two unusual capabilities First its narguments needn t be provided one at a time If g is R curryN 3 f the nfollowing are equivalent n br n br n br g 1 2 3 n br g 1 2 3 n br g 1 2 3 n br g 1 2 3 n br n br nSecondly the special placeholder value R may be used to specify n gaps allowing partial application of any combination of arguments nregardless of their positions If g is as above and is R nthe following are equivalent n br n br n br g 1 2 3 n br g 2 3 1 n br g 3 1 2 n br g 3 1 2 n br g 2 1 3 n br g 2 1 3 n br g 2 3 1 name member fp see notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/fp.d.ts">🌊  Types: fp.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/fp/curry.js">🔬  Tests: curry</a>&nbsp;

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="curry"><code>fp._curryN(length=undefined, received=undefined, fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/curry.js#L45 "View in source") [&#x24C9;][1]

(Function): Returns a curried equivalent of the provided function, with the specified
arity. The curried function has two unusual capabilities. First, its
arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
following are equivalent:
<br>
<br>
<br> * `g(1)(2)(3)`
<br> * `g(1)(2, 3)`
<br> * `g(1, 2)(3)`
<br> * `g(1, 2, 3)`
<br>
<br>
Secondly, the special placeholder value [`R.__`](#__) may be used to specify
"gaps", allowing partial application of any combination of arguments,
regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
the following are equivalent:
<br>
<br>
<br> * `g(1, 2, 3)`
<br> * `g(_, 2, 3)(1)`
<br> * `g(_, _, 3)(1)(2)`
<br> * `g(_, _, 3)(1, 2)`
<br> * `g(_, 2)(1)(3)`
<br> * `g(_, 2)(1, 3)`
<br> * `g(_, 2)(_, 3)(1)`


#### @sig 

Number -> (* -> a) -> (* -> a) 

#### @Since
5.0.0-beta.1

#### Arguments
1. `length=undefined` *(Number)*: The arity of the curried function.
2. `received=undefined` *(Array)*: An array of arguments received thus far.
3. `fn=undefined` *(Function)*: The function to curry.

#### Returns
*(Function)*: A new, curried function.

#### Example
```js
var sumArgs = (...args) => R.sum(args)

var curriedAddFourNumbers = R.curryN(4, sumArgs)
var f = curriedAddFourNumbers(1, 2)
var g = f(3)
g(4) //=> 10

```
---

<!-- /div -->

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="curry"><code>fp.exports(length=undefined, fn=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/curry.js#L139 "View in source") [&#x24C9;][1]

(Function): Returns a curried equivalent of the provided function, with the specified
arity. The curried function has two unusual capabilities. First, its
arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
following are equivalent:
<br>
<br>
<br> * `g(1)(2)(3)`
<br> * `g(1)(2, 3)`
<br> * `g(1, 2)(3)`
<br> * `g(1, 2, 3)`
<br>
<br>
Secondly, the special placeholder value [`R.__`](#__) may be used to specify
"gaps", allowing partial application of any combination of arguments,
regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
the following are equivalent:
<br>
<br>
<br> * `g(1, 2, 3)`
<br> * `g(_, 2, 3)(1)`
<br> * `g(_, _, 3)(1)(2)`
<br> * `g(_, _, 3)(1, 2)`
<br> * `g(_, 2)(1)(3)`
<br> * `g(_, 2)(1, 3)`
<br> * `g(_, 2)(_, 3)(1)`


#### @sig 

Number -> (* -> a) -> (* -> a) 

#### @Since
v0.5.0

#### Arguments
1. `length=undefined` *(Number)*: The arity for the returned function.
2. `fn=undefined` *(Function)*: The function to curry.

#### Returns
*(Function)*: A new, curried function.

#### Example
```js
var sumArgs = (...args) => R.sum(args)

var curriedAddFourNumbers = R.curryN(4, sumArgs)
var f = curriedAddFourNumbers(1, 2)
var g = f(3)
g(4) //=> 10

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
