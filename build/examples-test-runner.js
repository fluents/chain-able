/** @ignore 🚧 */

// --- deps ---
const fs = require('fs')
const log = require('fliplog')
const dox = require('doctrine')
const Chainable = require('../exports')

// --- check exported ---
//
// const exported = require('./build/FAKEROOT/_exported')
//
// const {filterMap} = exported
// const izKeys = Object.keys(exported).filter(key => key.startsWith('is'))
// const filterIzKeys = (value, key) => izKeys.includes(key)
// const isses = filterMap(exported, filterIzKeys, value => value)
// require('fliplog').prettyformat(isses).echo()
//
// log.quick(exported)
// log.quick(Object.keys(exported))
// log.quick({exported})


// --- expand out ---

const {Chain} = Chainable
const {toFunction} = Chainable
const {isEmpty, isFunction} = Chainable
const {not, match, define} = Chainable
const {trim, pipe, includes, replace, curry, bind} = Chainable

// @TODO use `not` from `exports`
const isNotEmpty = not(isEmpty)
const isTruthy = x => x
const parse = source => dox.parse(source, {
  lineNumbers: true,
  recoverable: true,
  sloppy: true,
  unwrap: true,
})

// --- todos ---

// @TODO docblocks can handle it, but names are a little mangled so
// const devSource = String(fs.readFileSync('./dists/dev/index.js'))
// @TODO use this for each individual tests & run them safely
// class ExampleTest extends Chain {}
// @TODO so now, we have our stuff,
//       but if we export this way,
//       `module.exports = x =>`
//       it will not be the same...
//       a.
//         1. check for @name
//         2. check module.exports
//         3. check `function name(`
//       b.
//         require the file (read & new Function)
//         assign variable name,
//         use `var name = `
//         & `new function`
//       c.
//        1. with our exports now all named and build,
//        2. just get fn name
//        3. use it on the object imported from generated exports


// --- utils ---

const stripNewLines = replace(/(\r|\n)+/g, '')
const stripWhitespace = replace(/(\s)+/g, '')
const stripEmpty = pipe(stripNewLines, stripWhitespace)
const _isComment = x =>
  x.startsWith('//') ||
  x.startsWith('*') ||
  x.startsWith('/*')
const isComment = pipe(trim, stripWhitespace, _isComment)
const isClosing = x => x.includes('*/')
const stripExt = replace(/\.[a-zA-Z0-9]{0,3}/, '')
const isExpectation = includes('//=>')
const matchComments = /(\/\*.*?\*\/)|(\/\/?.*?$)/gmi
// @TODO regexp chain here
// `/*`...`*/` | `//` | `/`
const _stripComments = x => {
  if (isExpectation(x)) return x
  else return x.replace(matchComments, '')
}
const stripComments = pipe(trim, _stripComments)
// @TODO handle examples that have multi asserts and know which one is which...
const splitExpectation = line => {
  if (isExpectation(line)) return line.split('//=>').reverse()
  else return [null, line]
}
const getDocBlocksFrom = match(/\/\*\*(?![-!])[\s\S]*?\*\/\s*.+/g)

// better to use ast
// const matchFnName = x => {
//   (/^function (\w+)/)
//   (/^module\.exports\s\=/)
// }

// ---- important part ---

const parseExample = example => {
  // previous
  let lineGivingExpectation = null

  // we hit the end, like fliplog error stack parsing
  let hitEnd = false

  // split, transform, filter, extract our expectations
  example = example.description
    .split('\n')
    .map(stripComments)
    .map(stripNewLines)
    .filter(isNotEmpty)
    .map(_line => {
      if (hitEnd || isClosing(_line)) {
        hitEnd = true
        return false
      }

      let line = stripComments(_line)
      let [expectation, rest] = splitExpectation(line)

      if (expectation) expectation = trim(expectation)
      if (rest) rest = trim(rest)

      if (expectation && rest) {
        // return `expect(${rest}).toEqual(${expectation})`
        return [rest, expectation]
      }
      else if (expectation && lineGivingExpectation) {
        // return `expect(${lineGivingExpectation}).toEqual(${expectation})`
        return [lineGivingExpectation, expectation]
      }
      else {
        lineGivingExpectation = line
        if (line.includes('= ')) return line
        else return false
      }
    })
    .filter(isTruthy)

  // last is not example
  example.pop()

  // require('fliplog').quick(example)
  return example
}
const mapExamples = examples => examples.map(parseExample)

// @TODO take source in, inject @name
const evolveDocblocks = (docblocks, source) => {
  return docblocks
    .join('\n')
    .split('\n')
    .filter(line => !line.includes('@link'))
    .join('\n')
}

// --- ast ---

const babel = require('babel-core')
const acorn = require('acorn')
const _falafel = require('falafel')

const falafel = curry(3, _falafel)

/**
 * @icon 🌲⛓
 */
class AbstractSyntaxTreeChain extends Chain {
  constructor(parent) {
    super(parent)

    this.getterOnSet = () => {
      const set = bind(this.set, this)
      this.set = (key, value) => {
        if (!isFunction(this[key])) define(this, key, {value})
        return set(key, value)
      }
    }
    this.getterOnSet()

    this
      .methods(['code', 'source', 'parser'])
      .getSet()
      .build()
      .parser(babel)
      .source(parent)
  }
  parse() {
    const string = this.getSource()
    const config = {}
    // const {parser} = this
    const parser = babel
    parser.parse = parser.transform

    // result = babel.transform(string, {allowReturnOutsideFunction: true})
    const parsedAst = acorn.parse(string, {allowReturnOutsideFunction: true})
    const {code, map, ast} = babel.transformFromAst(parsedAst, string, config)

    return this.from({code, map, ast})
  }
  walk() {
    const code = this.get('code') || this.get('source')

    const parser = acorn
    const opts = {parser, sourceType: 'module'}
    const traverseAst = falafel(code, opts)

    let parent = {}
    const forEach = node => {
      let source = node.source()

      // DeclareFunction
      if (node.type === 'FunctionDeclaration') {
        log.green('FunctionDeclaration').data(source).echo()
      }
      else if (node.type === 'FunctionExpression') {
        log.blue('FunctionExpression').data(source).echo()
      }
      else if (node.type === 'ArrowFunctionExpression') {
        log.blue('FunctionExpression').data(source).echo()
      }

      else if (node.type === 'Literal') {
        // log.green('literal').data(source).echo()
      }

      else if (node.type === 'IfStatement') {
        // log.blue('IfStatement').echo()
      }

      log.yellow(node.type).data(source).echo()

      parent = node
    }

    let output = traverseAst(forEach)
    // log.quick({output})
    return output
  }
}

const ASTChain = toFunction(AbstractSyntaxTreeChain)

// --- examples ---

// and this one is a collection
class ExamplesTest extends Chain {
  constructor(code) {
    super()

    const setExamples = ast => {
      if (this.has('examples')) return
      let examples = ast.dox.tags.filter(tag => tag.title === 'example')
      examples = mapExamples(examples)

      // require('fliplog').quick(ast.dox.tags)

      this.set('examples', examples)
    }

    let docblocks = getDocBlocksFrom(code)
    docblocks = evolveDocblocks(docblocks)

    this
      .transform('dox', parse)
      .observe('dox', setExamples)
      .set('dox', docblocks)
      .set('source', docblocks)
  }
}

// --- test data (@TODO need to do this in loop listing fs) ---

// const path = require.resolve('./src/deps/is/boolean.js')
const path = require.resolve('./src/deps/is/string.js')
const source = String(fs.readFileSync(path))
let name = 'isString'

const examples = new ExamplesTest(source)

const ast = ASTChain(examples)
ast.source(source).walk()

// --- run our actual tests ---

let fn = require(path)
let functionName = fn.name || name
let stripFnName = replace(functionName, '')
let extracted = examples.get('examples')

let expectations = extracted[0]
  .map(example => example.map(stripFnName).map(x => eval(x)))
  .map(example => {
    let [expression, expected] = example
    let passes = fn(expression) == expected
    return {expression, expected, passes}
  })

let data = {expectations, fn}
if (data.expectations.length === 0) {
  data = extracted

  if (data.length === 0) {
    data = examples
  }
}

// --- done ---
require('fliplog').quick(data)


// require('fliplog').quick(isBoolean, expectations)
// require('fliplog').quick(examples.keys())
// require('fliplog').quick(examples.get('examples'))

// const codeSource = source
//   .replace('module.exports =', 'return')
//   .split('\n')
//   .filter(not(isComment))
//   .join('\n')
//
// var isBoolean = new Function(codeSource)
// require('fliplog').quick(String(isBoolean), isBoolean)

// examples.get('examples').map(eval)

// var eh = examples.map(example => new ExampleTest(example))
// require('fliplog').quick({eh})
