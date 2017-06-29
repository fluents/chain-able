# TraverseChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `call`
* <a href="#traverse" class="alias">`call` -> `traverse`</a>

<!-- /div -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#traverse">`traverse`</a>

<!-- /div -->

<!-- div -->

## `traversed`
* <a href="#traversed">`traversed`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `call`

<!-- /div -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L31 "View in source") [&#x24C9;][1]



#### Since
1.0.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse([shouldReturn=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L85 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Aliases
*call*

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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L166 "View in source") [&#x24C9;][1]



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

 [1]: #call "Jump back to the TOC."
