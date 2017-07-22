# compose.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `compose`
* <a href="#compose-prototype-compose"  data-meta="compose target ChainedMap extensions Observe Shorthands Transform DotProp"  data-call="compose target ChainedMap extensions Observe Shorthands Transform DotProp"  data-category="Methods"  data-description="Function compose chains all the way up from Chainable"  data-name="compose"  data-member="compose"  data-see="href https formidable com blog 2017 infinite state composition with freactal label https formidable com blog 2017 infinite state composition with freactal href https blog javascripting com 2016 02 02 encapsulation in redux label https blog javascripting com 2016 02 02 encapsulation in redux href https www barbarianmeetscoding com blog 2016 01 04 safer javascript object composition with traits and traits dot js label https www barbarianmeetscoding com blog 2016 01 04 safer javascript object composition with traits and traits dot js href https medium com javascript scene why learn functional programming in javascript composing software ea13afc7a257 label https medium com javascript scene why learn functional programming in javascript composing software ea13afc7a257 href https hackernoon com javascript functional composition for every day use 22421ef65a10 label https hackernoon com javascript functional composition for every day use 22421ef65a10 href https github com stoeffel awesome fp js label https github com stoeffel awesome fp js"  data-all="meta n compose target ChainedMap extensions Observe Shorthands Transform DotProp call compose target ChainedMap extensions Observe Shorthands Transform DotProp category Methods description Function compose chains all the way up from Chainable name compose member compose see href https formidable com blog 2017 infinite state composition with freactal label https formidable com blog 2017 infinite state composition with freactal href https blog javascripting com 2016 02 02 encapsulation in redux label https blog javascripting com 2016 02 02 encapsulation in redux href https www barbarianmeetscoding com blog 2016 01 04 safer javascript object composition with traits and traits dot js label https www barbarianmeetscoding com blog 2016 01 04 safer javascript object composition with traits and traits dot js href https medium com javascript scene why learn functional programming in javascript composing software ea13afc7a257 label https medium com javascript scene why learn functional programming in javascript composing software ea13afc7a257 href https hackernoon com javascript functional composition for every day use 22421ef65a10 label https hackernoon com javascript functional composition for every day use 22421ef65a10 href https github com stoeffel awesome fp js label https github com stoeffel awesome fp js notes todos klassProps" >`compose.compose`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `compose`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/compose.d.ts">🌊  Types: compose.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/compose.js">🔬  Tests: compose</a>&nbsp;

<h3 id="compose-prototype-compose" data-member="compose" data-category="Methods" data-name="compose"><code>compose.compose([target=ChainedMap], [extensions=[Observe,Shorthands,Transform,DotProp]])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/compose.js#L70 "View in source") [&#x24C9;][1]

(Function): compose chains all the way up from Chainable


#### @see 

* <a href="https://formidable.com/blog/2017/infinite-state-composition-with-freactal/" >https://formidable.com/blog/2017/infinite-state-composition-with-freactal/</a>
* <a href="https://blog.javascripting.com/2016/02/02/encapsulation-in-redux/" >https://blog.javascripting.com/2016/02/02/encapsulation-in-redux/</a>
* <a href="https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/" >https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/</a>
* <a href="https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257" >https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257</a>
* <a href="https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10" >https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10</a>
* <a href="https://github.com/stoeffel/awesome-fp-js" >https://github.com/stoeffel/awesome-fp-js</a>

#### @symb 

🎼 

#### @Since
3.0.0

#### Arguments
1. `[target=ChainedMap]` *(|Class|Function)*: class or function to extend
2. `[extensions=[Observe,Shorthands,Transform,DotProp]]` *(|Array)*: Array of extensions to compose together left to right

#### Returns
*(&#42;)*: composed

#### Example
```js
class Eh extends compose() {}
new Eh() instanceof Chainable
//=> true

```
#### Example
```js
class Target {}
class Eh extends compose(Target) {}
new Eh() instanceof Target
//=> true

```
#### Example
```js
class Target {}
const mixin = SuperClass => class extends SuperClass {}
class Eh extends compose(Target) {}
new Eh() instanceof Chainable
//=> true

```
#### Example
```js
class Winning {}
class Yes extends compose(Winning) {
  get winning() {
    return true
  }
}
const yes = new Yes()
yes instanceof Winning && yes.winning
//=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #compose "Jump back to the TOC."
