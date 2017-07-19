# entries.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `exports`
* <a href="#exports"  data-meta="exports reduced undefined reduced object isMap object reduced merge object reduced"  data-call="exports reduced undefined"  data-category="Methods"  data-description="Function recursively reduce maps and objects that include reducable data"  data-name="exports"  data-see="href https github com fluents chain able blob master src ChainedMap js label fluents chain able blob master src chained map js"  data-all="meta exports reduced undefined n reduced object isMap object reduced merge object reduced call exports reduced undefined category Methods description Function recursively reduce maps and objects that include reducable data name exports member see href https github com fluents chain able blob master src ChainedMap js label fluents chain able blob master src chained map js notes todos klassProps" >`exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports" data-member="" data-category="Methods" data-name="exports"><code>exports(reduced=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/reduce/entries.js#L65 "View in source") [&#x24C9;][1]

(Function): recursively reduce maps and objects that include reducable data


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/ChainedMap.js" >fluents/chain able/blob/master/src/chained map.js</a>

#### @sig 

reduced => object => isMap(object) -> reduced; merge(object, reduced) 

#### @Since
4.0.0

#### Arguments
1. `reduced=undefined` *(Object|any)*: merged object and reduced

#### Returns
*(Function): Function(values: Object)*

#### Example
```js
const map = new Map()
  map.set('eh', true)
  const nested = new Map()
  nested.set('reduced', true)

  const chain = {
    entries() {
      return {
        nested: reduce(nested),
        key: true,
      }
    },
  }
  const reduced = reduce(map)
  reduceEntries(reduced)({chain})
  // => {
    eh: true,
    chain: {
      nested: {
        reduced: true,
        key: true,
      },
    },
  }
```
#### Example
```js
const reducedIgnored = {
    canada: {
      store: chain,
    },
  }
  const ignored = reduceEntries(reduced)(reducedIgnored)
  //=> {
    eh: true,
    chain: {
      nested: {
        reduced: true,
      },
      key: true,
    },
  }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #exports "Jump back to the TOC."
