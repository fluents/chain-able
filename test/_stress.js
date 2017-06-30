module.exports = cb => {
  const fullmap = new Map()
  const fullset = new Set()
  fullset.add('eh')
  fullset.add(1)
  fullmap.set(1, 2)
  fullmap.set('bool', true)
  fullmap.set('obj', {})
  function anon() {}
  anon()
  const declaration = function() {}
  declaration()
  const throws = function() {
    throw Error('threw')
  }
  try {
    throws()
  }
  catch (e) {
    // ignore
  }

  /* istanbul ignore next: stress test */
  function* generatorFunction() {
    var index = 0
    while (index < 3) yield index++
  }

  // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md
  /* istanbul ignore next: tests run in node */
  const g = typeof global === 'undefined' ? window : global

  /* istanbul ignore next: tests run in node */
  const xml = g.XMLHttpRequest ? new g.XMLHttpRequest() : require('http')

  const datas = [
    generatorFunction,
    class {},
    [],
    [1],
    new Array(),
    new Array([1].length),
    arguments,
    anon,
    throws,
    declaration,
    new Function(),
    Object.assign(declaration, {keys: true}),
    {},
    new Object(),
    Object.create(null),
    new Error(),
    Symbol('symbols'),
    Symbol.hasInstance,
    '',
    new String('str'),
    'actual string',
    JSON.stringify({stringified: true}),
    null,
    false,
    '',
    undefined,
    void 0,
    new Boolean(0),
    new Boolean(1),
    !0,
    new Date(),
    new RegExp(),
    new RegExp('.*', 'gmi'),
    /me/,
    NaN,
    Number(undefined),
    new Number(1),
    Infinity,
    1,
    0,
    -1,
    +1,
    new Promise(res => res(true)),
    new Map(),
    fullmap,
    fullmap.entries(),
    new Set(),
    fullset,
    fullset.values(),
    Math,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Promise,
    Reflect,
    Proxy,
    JSON,
    Function,
    eval,
    Object,
    Date,
    RegExp,
    Array,
    Set,
    Map,
    g,
    xml,
  ]

  if (cb) datas.map(data => cb(data))
  return datas
}
