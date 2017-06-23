var test = require('ava')
var traverse = require('./')

test('json test', t => {
  var id = 54
  var callbacks = {}
  var obj = {moo() {}, foo: [2, 3, 4, function() {}]}

  var scrubbed = traverse(obj).map(function(x) {
    if (typeof x === 'function') {
      callbacks[id] = {id, f: x, path: this.path}
      this.update('[Function]')
      id++
    }
  })

  t.deepEqual(scrubbed.moo, '[Function]', 'obj.moo replaced with "[Function]"')

  t.deepEqual(
    scrubbed.foo[3],
    '[Function]',
    'obj.foo[3] replaced with "[Function]"'
  )

  t.deepEqual(
    scrubbed,
    {
      moo: '[Function]',
      foo: [2, 3, 4, '[Function]'],
    },
    'Full JSON string matches'
  )

  t.deepEqual(typeof obj.moo, 'function', 'Original obj.moo still a function')

  t.deepEqual(
    typeof obj.foo[3],
    'function',
    'Original obj.foo[3] still a function'
  )

  t.deepEqual(
    callbacks,
    {
      54: {id: 54, f: obj.moo, path: ['moo']},
      55: {id: 55, f: obj.foo[3], path: ['foo', '3']},
    },
    'Check the generated callbacks list'
  )

  t.pass()
})
