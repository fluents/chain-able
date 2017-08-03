
// ---

// with a huge refactor to this, 
// with tons of safety
// configuration like debugging on condition in certain places
// stacktrace & sourcemap forcing on certain builds
// this would provide a lovely debugging tool

// ---
const reStack = /(?:\n {4}at .*)+/;
const errStack = err => {
	const stack = err instanceof Error ? err.stack : err;

	if (!stack) {
		return '';
	}

	const match = stack.match(reStack);

	if (!match) {
		return '';
	}

  return match[0].slice(1);
};

// ---
// https://github.com/ValYouW/njsTrace WRAPS ALL FN1?
// https://github.com/scottnonnenberg/notate/blob/master/src/notate.js#L137
// https://github.com/Breeze/breeze.js.labs/blob/master/breeze.metadata-helper.js
// https://github.com/v8/v8/wiki/Stack-Trace-API
// https://github.com/sindresorhus/callsites
const stacker = () => {
	const _ = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _;
	return stack;
};

// ---
var stringify = x => {
  try {
    const str = JSON.stringify(x, null, 2)
    return str
  }
  catch (e) {
    var str = {}
    str.type = Object.prototype.toString.call(x)
    for (var prop in x) {
      str[prop] = stringify(x[prop])
    }
    return stringify(x)
  }
}

var pretty = x => stringify(x).replace(/["\\[\]\,\']/g, '')

// ---

var weakCache = new WeakMap()
var record = new WeakSet()
var list = new Set()
var cache = new Map()

function debuggableStorage(x) {
  if (weakCache.has(x)) weakCache.get(x).count += 1 
  else weakCache.set(x, x)
  
  if (cache.has(x)) cache.get(x).count += 1 
  else cache.set(x, x)
    
  list.add(x)
  record.add(x)
  return debuggable
}

// ---

function metadata() {
  const time = Date.now()
  const count = 0
  return {time, count}
}

// ---

function stackAt(index = 1) {
  const stacks = stacker()
  const stack = stacks[index]
  const meta = {}

  // huge
  meta.thisArg = stack.getThis()
  meta.fn = stack.getFunction()

  // helpful
  meta.methodName = stack.getMethodName()
  meta.typeName = stack.getTypeName()
  meta.functionName = stack.getFunctionName()
  
  // file
  meta.fileName = stack.getFileName() 
  meta.lineNumber = stack.getLineNumber()
  meta.columnNumber = stack.getColumnNumber()
  meta.origin = stack.getEvalOrigin()

  // bools
  const stackIs = {
    topLevel: stack.isToplevel(),
    constructor: stack.isConstructor(),
    native: stack.isNative(),
  }

  const {
    topLevel, 
    constructor, 
    native,
  } = stackIs
  const {
    methodName, 
    functionName,
    thisArg, 
    fn, 
    fileName, 
    lineNumber, 
    columnNumber, 
    origin,
  } = meta

  let called = {functionName, methodName, fileName, lineNumber}

  if (topLevel || constructor || native) {
    called.is = stackIs
  }
  
  if (origin != fileName) {
    called.origin = origin
  }

  if (called.thisArg === global) called.thisArg = 'global'

  return called
}

// could clone the data too
function debuggable() {
  const stack = stackAt(2)
  const meta = metadata()
  const result = Object.assign({}, stack, {}, meta)
  result.args = arguments 
  result.str = arguments.length !== 0 ? stringify(arguments) : '0 args'

  debuggableStorage(result)

  return result
}
debuggable.list = list
debuggable.record = record
debuggable.cache = cache
debuggable.metadata = metadata
debuggable.stackAt = stackAt

// ---

// where, pluck, evolve
debuggable.values = function(cb) {
  const values = Array.from(debuggable.list.values())

  // for entries
  // let index = 0
  // const keys = Object.keys(where)
  // .reduce(function(reduced, value) {
  //   reduced[index++] = next
  //   return reduced
  // }, {})

  if (cb) return cb(values)
  else return values
}

debuggable.where = function(where) {
  return debuggable.values().filter(where)
}

var queryable = [
  'functionName',
   'methodName',
   'fileName',
   'lineNumber',
   'count',
   'args',
   'str',
   'time'
  ]

// ---

// filter, unique keys, index of the values with the uniq keys
// debuggable.keys()


// --- example ---

// function gogo() {
//   debuggable(arguments)
// }

// class Go {}
// Go.prototype.gogo = gogo
// Go.prototype.zoomzoon = function() {
//   debuggable(arguments)
// }

// // gogo()
// new Go().gogo()
// new Go().gogo(1)
// new Go().gogo(1)
// new Go().zoomzoom('heyya')

// -----

// functionName: 'gogo',
// methodName: 'gogo',
// fileName: '_play.js',
// lineNumber: 189,
// count: 0,
// args: { '0': [Object] },
// str: '{\n  "0": {\n    "0": 1\n  }\n}' } => { functionName: 'gogo',

// const values = debuggable.values()
// const R = require('ramda')
// const propped = R.props(['functionName', 'methodName'], values)
// const result = R.where(R.contains('zoomzoom'), propped)

// console.log({result, propped})

// debuggable.cache.forEach(eh => console.log('list', eh))
// console.log(cache)

// @example ramda filtering 

// const vals = Array.from(debuggable.values())
// const propped = vals.map(val => R.props(['functionName', 'methodName'], val))

// const funcLens = R.lensProp('functionName')
// const funcWhere = R.where(funcLens, R.contains('zoomzoom'))
// const funcSatisfies = R.where({
//     functionName: R.equals('zoomzoom'),
//   })

// const evolved = vals.map(val => {
  
//   const lensed = R.view(funcLens, val)
//   const satisfies = funcSatisfies(val)
  
//   // console.log({lensed, satisfies, val})
  
//   if (satisfies) return R.evolve({functionName: R.identity}, val)
//   else return false
// })
// .filter(Boolean)

// // .map(v => v[0] && v[1] ? R.fromPairs(v): v)
// const result = R.where(R.contains('zoomzoom'), propped)

// // console.log('eh', propped)

// // console.log({result, propped, vals})
// console.log(evolved)

module.exports = debuggable