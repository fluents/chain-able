var traverse = require('./')

test('json test', () => {
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

  expect(scrubbed.moo).toEqual('[Function]')

  expect(scrubbed.foo[3]).toEqual('[Function]')

  expect(scrubbed).toEqual({
    moo: '[Function]',
    foo: [2, 3, 4, '[Function]'],
  })

  expect(typeof obj.moo).toEqual('function')

  expect(typeof obj.foo[3]).toEqual('function')

  expect(callbacks).toEqual({
    54: {id: 54, f: obj.moo, path: ['moo']},
    55: {id: 55, f: obj.foo[3], path: ['foo', '3']},
  })
})
