# _eq.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-eq"  data-meta="eq traverse undefined a undefined b undefined loose undefined scoped undefined"  data-call="eq traverse undefined a undefined b undefined loose undefined scoped undefined"  data-category="Methods"  data-description="Function"  data-name="eq"  data-member="Traverse"  data-all="meta eq traverse undefined a undefined b undefined loose undefined scoped undefined call eq traverse undefined a undefined b undefined loose undefined scoped undefined category Methods description Function name eq member Traverse see notes todos klassProps" >`Traverse.eq`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<h3 id="Traverse-prototype-eq" data-member="Traverse" data-category="Methods" data-name="eq"><code>Traverse.eq(traverse=undefined, a=undefined, b=undefined, [loose=undefined], [scoped=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/_eq.js#L34 "View in source") [&#x24C9;][1]

Function


#### @extends




#### @Since
3.0.0

#### Arguments
1. `traverse=undefined` *(Traverse)*: traversejs
2. `a=undefined` *(&#42;)*: compare to b
3. `b=undefined` *(&#42;)*: compare to a
4. `[loose=undefined]` *(boolean)*: compare loosely
5. `[scoped=undefined]` *(boolean)*: doing a second pass, private

#### Returns
*(boolean)*: isEqual

#### Example
```js
eq(1, 1) //=> true
eq(1, '1') //=> false
eq(1, '1', true) //=> true
eq([1], [1]) //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse "Jump back to the TOC."
