// can import with dev, iife, amd, - defaults to umd
// import {compose, Chain} from 'chain-able/dists/dev'
import {MethodChain, Chain} from 'chain-able/src'
import {
  chainMethods,
  decorator,
  observe,
  transform,
  remap,
  schema,
  compose,
} from 'chain-able/src/compose/decorators'

@schema({
  enabled: 'boolean',
  data: '!string',
  name: '?string',
  location: 'number|number[]',
  dates: {
    created: {
      at: 'date',
    },
  },
})
class CommentChain {
  onInvalid(error, arg, instance) {
    console.log({error, arg, instance})
  }
  onValid(key, arg) {
    console.log({[key]: arg})
  }
}

const commentChain = new CommentChain()
commentChain.enabled(true)
commentChain.data(!'bool')
commentChain.name('string')
commentChain.name(['strings!'])
commentChain.name(['? is optional :-)'])
// global.log.verbose(100).data(commentChain).echo()

@transform('key', x => x + 1)
@remap('from', 'to')
@decorator(add => {
  return add.methods('eh').getSet().chainable().define()
})
class Example {
  set winning(is = true) {
    return this.set('winning', true)
  }
  get winning() {
    const winning = this.get('winning')
    console.log('winning', winning)
    return winning
  }
  ez() {
    return true
  }
}

const chain = new Example()
chain.winning = true
chain.winning
console.assert(typeof chain.ez === 'function')

class Target {
  get extended() {
    return true
  }
  extended2() {}
}
class ComposedTarget extends compose(Target) {}
const map = new ComposedTarget({isParent: true})
