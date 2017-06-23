var test = require('ava')
var traverse = require('./')

test('traverse an object with nested functions', t => {
  t.plan(1)

  function Cons(x) {
    t.deepEqual(x, 10)
  }
  traverse(new Cons(10))
})
