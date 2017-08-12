# _eq.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `Traverse`
* <a href="#Traverse-prototype-eq"  data-meta="eq traverse undefined a undefined b undefined loose undefined"  data-call="eq traverse undefined a undefined b undefined loose undefined"  data-category="Methods"  data-description="Function"  data-name="eq"  data-member="Traverse"  data-see="href https github com fluents chain able search utf8 E2 9C 93 q http dorey github io JavaScript Equality Table type label js equality table href https github com facebook immutable js blob master src utils deepEqual js label immutable js deep equal href https github com substack node deep equal label node deep equal href http ramdajs com docs equals label ramda equals href https lodash com docs 4 17 4 isEqual label lodash is equal href https github com angular angular js blob master src Angular js label angular is equal href https github com jashkenas underscore blob master underscore js L1183 label underscore equal href https github com substack js traverse blob master test lib deep equal js label traverse deep equal href https github com facebook react blob master src mocks deepDiffer js label react deep differ"  data-all="meta eq traverse undefined a undefined b undefined loose undefined call eq traverse undefined a undefined b undefined loose undefined category Methods description Function name eq member Traverse see href https github com fluents chain able search utf8 E2 9C 93 q http dorey github io JavaScript Equality Table type label js equality table href https github com facebook immutable js blob master src utils deepEqual js label immutable js deep equal href https github com substack node deep equal label node deep equal href http ramdajs com docs equals label ramda equals href https lodash com docs 4 17 4 isEqual label lodash is equal href https github com angular angular js blob master src Angular js label angular is equal href https github com jashkenas underscore blob master underscore js L1183 label underscore equal href https github com substack js traverse blob master test lib deep equal js label traverse deep equal href https github com facebook react blob master src mocks deepDiffer js label react deep differ notes todos klassProps" >`Traverse.eq`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Traverse`

<!-- div -->

<h3 id="Traverse-prototype-eq" data-member="Traverse" data-category="Methods" data-name="eq"><code>Traverse.eq(traverse=undefined, a=undefined, b=undefined, [loose=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/_eq.js#L25 "View in source") [&#x24C9;][1]

Function


#### @see 

* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=http://dorey.github.io/JavaScript-Equality-Table/&type=" >js-equality-table</a>
* <a href="https://github.com/facebook/immutable-js/blob/master/src/utils/deepEqual.js" >immutable-js-deep-equal</a>
* <a href="https://github.com/substack/node-deep-equal" >node-deep-equal</a>
* <a href="http://ramdajs.com/docs/#equals" >ramda-equals</a>
* <a href="https://lodash.com/docs/4.17.4#isEqual" >lodash-is-equal</a>
* <a href="https://github.com/angular/angular.js/blob/master/src/Angular.js" >angular-is-equal</a>
* <a href="https://github.com/jashkenas/underscore/blob/master/underscore.js#L1183" >underscore-equal</a>
* <a href="https://github.com/substack/js-traverse/blob/master/test/lib/deep_equal.js" >traverse-deep-equal</a>
* <a href="https://github.com/facebook/react/blob/master/src/__mocks__/deepDiffer.js" >react-deep-differ</a>

#### @extends




#### @Since
3.0.0

#### Arguments
1. `traverse=undefined` *(Traverse): traversejs &#42;(scoped, @FIXME @HACK)*&#42;
2. `a=undefined` *(&#42;)*: compare to b
3. `b=undefined` *(&#42;)*: compare to a
4. `[loose=undefined]` *(boolean)*: compare loosely

#### Returns
*(boolean)*: isEqual: a === b

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
