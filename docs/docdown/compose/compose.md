# compose.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `compose`
* <a href="#compose-compose">`compose.compose`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `compose`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/compose.d.ts">🌊  Types: compose.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/compose.js">🔬  Tests: compose</a>&nbsp;

<h3 id="compose-compose"><a href="#compose-compose">#</a>&nbsp;<code>compose.compose([target=ChainedMap], [extensions=[Observe,Shorthands,Transform,DotProp]])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/compose.js#L69 "View in source") [&#x24C9;][1]

(Function): compose chains all the way up from Chainable


### @symb 

🎼 
#### Since
3.0.0

#### Arguments
1. `[target=ChainedMap]` *(|Class|Function)*: class or function to extend
2. `[extensions=[Observe,Shorthands,Transform,DotProp]]` *(|Array)*: Array of extensions to compose together left ro right

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
