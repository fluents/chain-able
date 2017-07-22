# TraverseChain.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-exports"  data-meta="ChainedMapBase exports"  data-call="exports"  data-category="traverse"  data-description="Map"  data-name="exports"  data-member="Traverse"  data-see="href https github com fluents chain able blob master src deps traverse js label deps traverse"  data-klassProps="obj keys vals onMatch onNonMatch clone"  data-all="meta ChainedMapBase n n exports call exports category traverse description Map name exports member Traverse see href https github com fluents chain able blob master src deps traverse js label deps traverse notes todos klassProps obj n keys n vals n onMatch n onNonMatch n clone n" >`Traverse.exports`</a>

<!-- /div -->

<!-- div -->

## `TraverseChain`
* <a href="#TraverseChain-prototype-traverse"  data-meta="traverse shouldReturn false"  data-call="traverse shouldReturn false"  data-category="Methods"  data-description="Function runs traverser checks the tests calls the onMatch"  data-name="traverse"  data-member="TraverseChain"  data-all="meta traverse shouldReturn false call traverse shouldReturn false category Methods description Function runs traverser checks the tests calls the onMatch name traverse member TraverseChain see notes todos klassProps" >`TraverseChain.traverse`</a>

<!-- /div -->

<!-- div -->

## `traversed`
* <a href="#traversed"  data-meta="traversed"  data-call="traversed"  data-category="Methods"  data-description="Function value traversed in traverse"  data-name="traversed"  data-see="href https github com fluents chain able search utf8 E2 9C 93 q TraverseChain traverse type label TraverseChain traverse"  data-all="meta traversed call traversed category Methods description Function value traversed in traverse name traversed member see href https github com fluents chain able search utf8 E2 9C 93 q TraverseChain traverse type label TraverseChain traverse notes todos klassProps" >`traversed`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/TraverseChain.d.ts">🌊  Types: TraverseChain.d</a>&nbsp;

<a href="https://github.com/fluents/chain-able/blob/master/test/TraverseChain.js">🔬  Tests: TraverseChain</a>&nbsp;

<h3 id="Traverse-prototype-exports" data-member="Traverse" data-category="traverse" data-name="exports"><code>Traverse.exports</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L30 "View in source") [&#x24C9;][1]

Map


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/traverse.js" >deps/traverse</a>

#### @symb 

👣 

#### @classProps 

* {obj}  
* {keys}  
* {vals}  
* {onMatch}  
* {onNonMatch}  
* {clone}  
 

#### @extends
ChainedMapBase



#### @Since
1.0.0

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `TraverseChain`

<!-- div -->

<h3 id="TraverseChain-prototype-traverse" data-member="TraverseChain" data-category="Methods" data-name="traverse"><code>TraverseChain.traverse([shouldReturn=false])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L92 "View in source") [&#x24C9;][1]

(Function): runs traverser, checks the tests, calls the onMatch


#### @Since
1.0.0

#### Arguments
1. `[shouldReturn=false]` *(boolean)*: returns traversed object

#### Returns
*(any)*: this.obj/data cleaned

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

<h3 id="traversed" data-member="" data-category="Methods" data-name="traversed"><code>traversed()</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/TraverseChain.js#L192 "View in source") [&#x24C9;][1]

(Function): value traversed in traverse


#### @see 

* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=TraverseChain.traverse&type=" >TraverseChain.traverse</a>

#### @Since
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

 [1]: #traverse "Jump back to the TOC."
