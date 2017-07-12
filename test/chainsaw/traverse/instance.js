var {EventEmitter} = require('events')
var traverse = require('./')

test('check instanceof on node elems', () => {
  var counts = {emitter: 0}

  traverse([
    new EventEmitter(),
    3,
    4,
    {ev: new EventEmitter()},
  ]).forEach(node => {
    if (node instanceof EventEmitter) counts.emitter++
  })

  expect(counts.emitter).toEqual(2)
})
