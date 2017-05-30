# parent

a fundemental concept in chain-able is `parent`; when creating functionality, the logic separation becomes easy when the children consume and often decorate the parent.

this allows for continuous chaining through `.end` which returns the parent

<!-- <details>
<summary>
  <span><code>👀  <u><code>code</code>  <a href="#">🔗</a></u></code></span>
</summary>
 -->

```js
const {Chainable, ChainedSet} = require('chain-able')

class Person extends Chainable {
  constructor(parent) {
    super(parent)
    this.extend(['name', 'age', 'email'])
  }

  end() {
    this.parent.people.add(this)
    return this.parent // which is what Chainable.end does by default
  }
}

class Things extends Chainable {
  constructor(parent) {
    super(parent)
    this.people = new ChainedSet(this)
  }
  person() {
    return new Person(this)
  }
}

const things = new Things()
things
  .person()
    .name('joe')
    .age(10)
    .email('@')
    .end()
  .person()
    .name('sue')
    .end()
```
</details>

<br />
<p>
however, `.end` can look kind of ugly, so there is an prettier way to create infinitely nestable chains, with the `ChainableFactory`, and `FactoryChain` (_which is what the TypeChain uses internally_)
</p>
<br />

<!-- <details>
<summary>
  <span><code>👀  <u><code>code</code>  <a href="#">🔗</a></u></code></span>
</summary> -->

```js
const {Chain, FactoryChain, ChainedSet} = require('chain-able')

class Things extends Chain {
  constructor(parent) {
    super(parent)
    this.people = new ChainedSet(this)
  }
  person() {
    const person = new FactoryChain(this)
    person
      // .prop also accepts an optional callback as a second param,
      // for infinitely easily nestable chains
      // .props(['name', 'age', 'email']) works as well
      .prop('name')
      .prop('age')
      .prop('email')
      .chainUpDown(this.person)
      .chainUpDowns(['person'])
      .onDone(personChain => {
        this.people.add(personChain)
        return this
      })

    return person
  }
}

const things = new Things()
things
  .person()
    .name('sue')
  // here it would not .end(),
  // but we call .person, which is a .chainUpDown,
  // so it .end()s & starts another one
  .person()
    .age(100)
    .name('john')
    .email('@')
    // ^ since we called all 3 keys (age, name, email)
    // it auto .end()s

things.people.length === 3
things.people.values().pop() === {
  age: 100,
  name: 'john',
  email: '@',
}
```
<!-- </details> -->

## decorateParent

a shorthand extension method which allows easy decorating & undecorating of a parent for easy chains up & down

<!-- <details>
<summary</summary>
<summary>
  <span><code>👀  <u>a shorthand extension method which allows easy decorating & undecorating of a parent for easy chains up & down  <a href="#">🔗</a></u></code></span>
</summary> -->

```js
class Decorator extends Chain {
  constructor(parent) {
    super(parent)
    this.decorateParent(['easy'])
    this.decorateParent([
      {
        advanced: this.advanced.bind(this),
      },
    ])
  }
  advanced(arg) {
    this.set('advanced', arg)
    return this.parent
  }
  easy(arg) {
    this.parent.set('easy-peasy', arg)
  }
}

class Master extends Chain {
  constructor(parent) {
    super(parent)
    this.eh = new Decorator(this)
  }
}

const master = new Master()
master.advanced('a+')
master.easy(true)
master.get('easy-peasy') === true
master.eh.get('advanced') === 'a+'
```

<!--
### factoryChain: childChain:
```js
chain = new FactoryChain(this)
  .chainUpDown(this.typed)
  .chainUpDowns(['typed'])
```
-->
