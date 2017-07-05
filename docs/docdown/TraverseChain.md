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

<a href="https://github.com/fluents/chain-able/blob/master/typings/TraverseChain.d.ts">🌊  Types: TraverseChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/TraverseChain.js">🔬  Tests: TraverseChain</a>&nbsp;

<h3 id="Traverse-prototype-exports"><a href="#Traverse-prototype-exports">#</a>&nbsp;<code>Traverse.prototype.exports()</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L29 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Returns
*(&#42;)*: traversed

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `TraverseChain.prototype`

<!-- div -->

<h3 id="TraverseChain-prototype-traverse"><a href="#TraverseChain-prototype-traverse">#</a>&nbsp;<code>TraverseChain.prototype.traverse([shouldReturn=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L90 "View in source") [&#x24C9;][1]

runs traverser, checks the tests, calls the onMatch

#### Since
1.0.0

#### Aliases
*TraverseChain.prototype.call*

#### Arguments
1. `[shouldReturn=false]` *(boolean)*: returns traversed object

#### Returns
*(&#42;)*: traversed

#### Example
```js
const traversed = new Chain()
  .merge({ flat: 0, one: { two: true } })
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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L172 "View in source") [&#x24C9;][1]

value traversed in traverse

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
//=> ['goose']

```
#### Example
```js
const eh = {
     me: true,
     nested: {
       really: {
         deep: {
           super: false,
           not: 'eh',
           canada: true,
           modules: [{parser: 'hi'}],
         },
         matchme: 'minime',
         notme: 'eh',
       },
     },
   }

   const chain = new Chain()
   Object.assign(chain, eh)

   const traverser = chain
     .merge(eh)
     .traverse(true)
     .keys([/super/, /parser/, /store/, /meta/])
     .vals([/minime/])
     .call(false)

   traverser.traversed()
   //=> {
     className: 'DotProp',
     me: true,
     nested: {
       really: {
         deep: {
           not: 'eh',
           canada: true,
           modules: [{}],
         },
         notme: 'eh',
       },
     },
   }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse.prototype "Jump back to the TOC."
