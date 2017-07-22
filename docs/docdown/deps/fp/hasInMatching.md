# hasInMatching.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `is`
* <a href="#is-prototype-hasInMatching"  data-meta="hasInMatching predicate undefined obj undefined prop undefined"  data-call="hasInMatching predicate undefined obj undefined prop undefined"  data-category="Methods"  data-description="Function isIn hasIn and also allows a predicate matcher specification"  data-name="hasInMatching"  data-member="is"  data-todos="surely would be better with focusing on a prop then applying predicate lense s is it better in fp or is needs some definitions"  data-all="meta n n hasInMatching predicate undefined obj undefined prop undefined call hasInMatching predicate undefined obj undefined prop undefined category Methods description Function isIn hasIn and also allows a predicate matcher specification name hasInMatching member is see notes todos surely would be better with focusing on a prop then applying predicate lense s n is it better in fp or is needs some definitions n klassProps" >`is.hasInMatching`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `is`

<!-- div -->

<h3 id="is-prototype-hasInMatching" data-member="is" data-category="Methods" data-name="hasInMatching"><code>is.hasInMatching(predicate=undefined, obj=undefined, prop=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/fp/hasInMatching.js#L30 "View in source") [&#x24C9;][1]

(Function): isIn + hasIn ...and also allows a predicate/matcher/specification


#### @todos 

- [ ] surely would be better with focusing on a prop, then applying predicate, lense? :s
- [ ] is it better in fp/ or is/ ? needs some definitions
 

#### @extends 

* undefined
* undefined
* undefined



#### @Since
5.0.0-beta.4

#### Arguments
1. `predicate=undefined` *(Object)*: predicate match the property against this
2. `obj=undefined` *(Object)*: object to check
3. `prop=undefined` *(any)*: property to check in object

#### Returns
*(boolean)*: obj&#91;prop&#93; hasIn & satisfies

#### Example
```js
hasIn({}, 'eh') //=> false
hasIn(null, 'eh') //=> false
hasIn({ eh: true }, 'eh') //=> true

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #is "Jump back to the TOC."
