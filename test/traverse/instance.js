var {EventEmitter} = require('events')
var test = require('ava')
var traverse = require('./')

test('check instanceof on node elems', t => {
  var counts = {emitter: 0}

  traverse([
    new EventEmitter(),
    3,
    4,
    {ev: new EventEmitter()},
  ]).forEach(node => {
    if (node instanceof EventEmitter) counts.emitter++
  })

  t.deepEqual(counts.emitter, 2)

  t.pass()
})
