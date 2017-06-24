a shorthand extension method which allows easy decorating & undecorating of a parent for easy chains up & down

<!-- <details>
<summary</summary>
<summary>
  <span><code>👀  <u>a shorthand extension method which allows easy decorating & undecorating of a parent for easy chains up & down  <a href="#">🔗</a></u></code></span>
</summary> -->

[test](https://github.com/fluents/chain-able/blob/4.0.2/test/parent.js)

```js
class Decorator extends Chain {
  constructor(parent) {
    super(parent)
    this.methods(['easy']).decorate(parent).build()
    this.methods('advanced')
      .onCall(this.advanced.bind(this))
      .decorate(parent)
      .build()
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
isTrue(master.get('easy-peasy'))
isTrue(master.eh.get('advanced') === 'a+')
```
