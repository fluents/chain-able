# 🎼 compose

use features as needed

## 📘 example

```js
const {compose} = require('chain-able')

const Composed = compose({observe: true})
class Eh extends Composed {}
```

Specifying [SuperClass](#SuperClass)

```js
const {compose} = require('chain-able')

class Canada {}

const Composed = compose(Canada, {observe: true})
class Eh extends Composed {}
```



### how?

<!-- links to the info about this here -->

export classes that dynamically extend a base class

```js
module.exports = SuperClass => class Eh extends SuperClass {}
```





### 🌐 api params

##### `options`

object with properties matching the pre-created compositions

- default: true

```js
// or `options = true` for everything
const options = {
  define: true,
  observe: true,
  shorthands: true,
  transform: true,
  types: true,
  dot: true,
  extend: true,
}
```

### `SuperClass`

- default: `ChainedMap`.
