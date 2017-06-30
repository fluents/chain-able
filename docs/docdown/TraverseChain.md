# TraverseChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse.prototype`
* <a href="#Traverse-prototype-exports">`Traverse.prototype.exports`</a>

<!-- /div -->

<!-- div -->

## `TraverseChain.prototype`
* <a href="#TraverseChain-prototype-traverse" class="alias">`TraverseChain.prototype.call` -> `traverse`</a>
* <a href="#TraverseChain-prototype-traverse">`TraverseChain.prototype.traverse`</a>

<!-- /div -->

<!-- div -->

## `traversed`
* <a href="#traversed">`traversed`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse.prototype`

<!-- div -->

<h3 id="Traverse-prototype-exports"><a href="#Traverse-prototype-exports">#</a>&nbsp;<code>Traverse.prototype.exports</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L29 "View in source") [&#x24C9;][1]



#### Since
1.0.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `TraverseChain.prototype`

<!-- div -->

<h3 id="TraverseChain-prototype-traverse"><a href="#TraverseChain-prototype-traverse">#</a>&nbsp;<code>TraverseChain.prototype.traverse([shouldReturn=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L90 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Aliases
*TraverseChain.prototype.call*

#### Arguments
1. `[shouldReturn=false]` *(boolean)*: returns traversed object

#### Returns
*(any)*: this.obj/data cleaned

#### Example
```js
const traversed = new Chain()
    .merge({flat: 0, one: {two: true}})
    .traverse(false)
    .vals([/true/])
    .onMatch((current, traverser) => {
      traverser.path.join('.')
      //=> 'one.two'

      current
      //=> true

      typeof traverser.update === typeof traverser.remove
      typeof traverser.update === 'function'
      //=> true

      traverser.remove()
      //=> void
    })
    .onNonMatch(val => {
      // ignore
    })
    .call(true)

  traversed
  //=> {flat: 0}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traversed`

<!-- div -->

<h3 id="traversed"><a href="#traversed">#</a>&nbsp;<code>traversed()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L171 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Returns
*(&#42;)*: traversed

#### Example
```js
const traverser = new Traverser()
  traverser.obj(['duck', 'duck', 'goose'])
  traverser.vals(['g**se'])
  traverser.traverse()

  traverser.traversed()
  // => ['goose']
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse.prototype "Jump back to the TOC."
