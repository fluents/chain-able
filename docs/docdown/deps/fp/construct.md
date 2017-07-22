# construct.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `fp`
* <a href="#fp-prototype-"  data-meta="constructN n undefined Klass undefined Number"  data-call="constructN n undefined Klass undefined"  data-category="Function"  data-description="Function Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type The arity of the function returned is specified to allow using variadic constructor functions"  data-member="fp"  data-see="href https github com ramda ramda blob master src constructN js label ramda construct href https github com fluents chain able search utf8 E2 9C 93 q isNumberPrimitive type label isNumberPrimitive"  data-all="meta n n constructN n undefined Klass undefined n Number call constructN n undefined Klass undefined category Function description Function Wraps a constructor function inside a curried function that can be called nwith the same arguments and returns the same type The arity of the function nreturned is specified to allow using variadic constructor functions name member fp see href https github com ramda ramda blob master src constructN js label ramda construct href https github com fluents chain able search utf8 E2 9C 93 q isNumberPrimitive type label isNumberPrimitive notes todos klassProps" >`fp.`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `fp`

<!-- div -->

<h3 id="fp-prototype-" data-member="fp" data-category="Function" data-name="construct"><code>fp.constructN(n=undefined, Klass=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/construct.js#L47 "View in source") [&#x24C9;][1]

(Function): Wraps a constructor function inside a curried function that can be called
with the same arguments and returns the same type. The arity of the function
returned is specified to allow using variadic constructor functions.


#### @see 

* <a href="https://github.com/ramda/ramda/blob/master/src/constructN.js" >ramda-construct</a>
* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=isNumberPrimitive&type=" >isNumberPrimitive</a>

#### @sig 

Number -> (* -> {*}) -> (* -> {*}) 

#### @symb 

👷 

#### @extends 

* undefined
* undefined



#### @Since
5.0.0-beta.4

#### Arguments
1. `n=undefined` *(number): The arity of the constructor function. &#42;(aka, number of args)*&#42;
2. `Klass=undefined` *(Function): The constructor function to wrap. &#42;(class to do `new Klass` on)*&#42;

#### Returns
*(Function)*: A wrapped, curried constructor function.

#### Example
```js
// Variadic Constructor function
function Salad() {
  this.ingredients = arguments
}

Salad.prototype.recipe = function() {
  var instructions = R.map(
    ingredient => 'Add a dollop of ' + ingredient,
    this.ingredients
  )
  return R.join('\n', instructions)
}

var ThreeLayerSalad = R.constructN(3, Salad)

// Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')

console.log(salad.recipe())
// Add a dollop of Mayonnaise
// Add a dollop of Potato Chips
// Add a dollop of Ketchup

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #fp "Jump back to the TOC."
