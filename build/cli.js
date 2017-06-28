// 0. export rollup configs
//   - dev, sourcemap files, amd, cjs, iife, typescript definitions
// 1. compile (tsc, babel, buble)
//   - src -> dist
// 2. compile (babel, buble)
//   - test -> test-dist
// 3. copy:
//   - dist -> root
// 4. bundle (rollup)
//   - dist -> index.bundle
// 5. compile (tsc)
//   - index.bundle -> index.compiled
// 6. bundle (rollup)
//   -> index.compiled -> index.js
// 6. ops:
//   - run test
// - run cov
const {resolve} = require('path')
const fwf = require('funwithflags')
const Script = require('script-chain')
const log = require('fliplog')
const {read, write} = require('flipfile')
const {del} = require('./util')

const res = rel => resolve(__dirname, rel)

const timer = log.fliptime()
timer.start('cli')
log.registerCatch()

// setup args
// src: [rollup, typescript, buble, babel, browserify, copy/strip]
const argvOpts = {
  boolean: ['cov', 'src', 'copy', 'production'],
  string: ['format'],
  default: {
    clean: false,
    tests: false,
    cov: false,
    quick: false,
    production: true,
    format: ['amd', 'iife', 'dev', 'es', 'cjs', 'umd'],
  },
}
const argvs = fwf(process.argv.slice(2), argvOpts)
const {production, quick, tests, cov, clean} = argvs

const OPTIMIZE_JS_FILE = 'dists/umd.index.js'
const TSC_SOURCE = 'dists/dev/index.js'
const TSC_OUT = 'dists/tsc/bundle.js'
const ROLLUP_CONFIG_CLI = './rollup.config.cli.js'

if (clean) {
  const toClean = {
    files: [
      'browserified',
      'MethodChain',
      'Chainable',
      'ChainedMap',
      'ChainedMapBase',
      'FactoryChain',
      'MergeChain',
      'ChainedSet',
      'TraverseChain',
      'index',
    ],
    dirs: [
      'dist',
      'test-dist',
      'disted',
      'dists',
      'compose',
      'plugins',
      'coverage',
      '.nyc_output',
      'deps',
    ],
  }

  toClean.files.map(file => del(res('../' + file + '.js')))
  toClean.files.map(file => del(res('../' + file + '.js.map')))
  toClean.dirs.map(file => del(res(file + '/')))
}

// script factory
const script = (bin = 'rollup', flags = '') => {
  let scripty = new Script()
  scripty.remember = {
    start() {},
    finish() {},
  }

  scripty = scripty.stdout('inherit').debug(false).add().npm(bin)
  flags.split(' ').map(flag => scripty.raw(flag))

  return scripty.run()
}

// cli class
class CLI {
  copy(root = false) {
    // @TODO: dist & root (does it ever need to be in dist except for buble?)
    const scripts = new Script()
      .add()
      .bin('flow-remove-types')
      .raw('src/')
      .flag('pretty')
      .flag('quiet')
      .flag('all')
      .flag('out-dir')
      .arg('./dist')
    if (root) {
      scripts
        .add()
        .bin('flow-remove-types')
        .raw('src/')
        .flag('pretty')
        .flag('quiet')
        .flag('all')
        .flag('out-dir')
        .arg('./')
    }
    scripts.remember = {
      start() {},
      finish() {},
    }
    scripts.toString()
  }

  tsc(buildTests = false) {
    if (buildTests) {
      const flags =
        '--pretty --sourceMap --allowJs --project test --outDir test-dist'
      return script('tsc', flags)
    }
    return script('tsc')
  }
  ts() {
    const ts = require('typescript')
    const source = read(TSC_SOURCE)

    let result = ts.transpileModule(source, {
      compilerOptions: {module: ts.ModuleKind.CommonJS},
    })
    write(require.resolve(TSC_OUT), result.outputText)

    console.log(JSON.stringify(result))
    process.exit()
  }
  optimizejs(url = OPTIMIZE_JS_FILE) {
    const optimizeJs = require('optimize-js')
    const {read, write} = require('flipfile')
    const file = require.resolve(url)
    const code = read(file)
    log.diff(code)
    const optimized = optimizeJs(code)
    log.diff(optimized)
    write(file, optimized)
    log.log()
    return Promise.resolve()
  }
  rollup(flags = '') {
    if (Array.isArray(flags)) return flags.map(flag => this.rollup(flag))
    const config = ROLLUP_CONFIG_CLI
    return script('rollup', '-c ' + require.resolve(config) + ' ' + flags)
  }
  rollupNode(overrides = {}) {
    return require('./build')(overrides)
  }

  buble() {
    const sourcemaps = true
    const scripts = new Script()
      .add()
      .bin('buble')
      .raw('-i dist')
      .raw('-o dist')
      .raw('--no forOf,dangerousForOf,computedProperty,spreadRest')
    if (sourcemaps) scripts.raw('-m inline')
    return scripts.run()
  }
  browserify() {}
  babel() {
    // return new Script().add().bin('babel').raw('src/ --out-dir dist').run()
  }
  coveralls() {
    // 'coveralls < coverage/lcov.info'
  }
  test(built = false) {
    return script('ava', !built ? '--verbose' : 'test-dist/built.js')
    // return script('test')
  }
  cov() {
    // "cov:report": "nyc report"
    // "cov:text": "nyc --reporter=html --reporter=text ava",
    return script('nyc', 'ava')
  }
  lint() {
    return script('eslint', '"src/**"')
  }
}

// use the cli class, time the operations, use the argv setup

timer.start('go')
const cli = new CLI()

async function src() {
  timer.start('src')
  // copy
  timer.start('copy')
  await cli.copy()
  timer.stop('copy')

  // rollup
  // timer.start('dev')
  // await cli.rollup('--environment format:dev')
  // timer.stop('dev')

  // @NOTE: not using ts now, got worse as manual optimizations got better
  // typescript the rollup
  // timer.start('tsc')
  // await cli.tsc()
  // timer.stop('tsc')
  //
  // // rollup the typescripted rollup... o.o
  // timer.start('tsc2')
  // await cli.rollup('--environment format:tsc')
  // timer.stop('tsc2')
  //
  // timer.stop('src')
  // log.log('src')
}

async function compileTests() {
  timer.start('tests')
  await cli.tsc(true)
  timer.stop('tests').log('tests')
}

async function test() {
  timer.start('test')
  await cli.test()
  timer.stop('test')
  if (cov) {
    timer.start('cov')
    await cli.cov()
    timer.stop('cov')
  }
  // cov
}

const devWith = opts =>
  Object.assign(
    {
      format: 'umd',
      verbose: true,
      env: 'development',
      development: true,
      production: false,
      uglify: false,
    },
    opts
  )
const prodWith = opts =>
  Object.assign(
    {
      env: 'production',
      development: false,
      production: true,
      uglify: true,
      replace: true,
    },
    opts
  )

async function publishing() {
  timer.start('publishing')
  timer.start('amd')

  const rollupProdWith = opts => cli.rollupNode(prodWith(opts))

  // await cli.rollup('--environment format:amd')
  await rollupProdWith({format: 'amd'})
  timer.stop('amd')

  timer.start('es')
  // await cli.rollup('--environment format:es')
  await rollupProdWith({format: 'es'})
  timer.stop('es')

  timer.start('cjs')
  // await cli.rollup('--environment format:cjs')
  await rollupProdWith({format: 'cjs'})
  timer.stop('cjs')

  // ignoring this one for now, already so many, don't want to build them all
  // await cli.rollup('--environment format:iife')
  await rollupProdWith({format: 'iife'})

  timer.start('umd')
  // await cli.rollup('--environment format:umd --verbose --debug')
  await rollupProdWith({format: 'umd', verbose: true})

  // debugger
  await cli.rollupNode(
    devWith({
      exportName: 'debugger',
      debugger: true,
      debug: true,
      replace: {debugger: true},
    })
  )
  // dev
  await cli.rollupNode(
    devWith({
      exportName: 'dev',
    })
  )
  // node
  await cli.rollupNode(
    devWith({
      exportName: 'node',
    })
  )
  timer.stop('umd')

  try {
    timer
      .stop('publishing')
      .log('publishing')
      .log('copy')
      .log('dev')
      .log('tsc')
      .log('tsc2')
      .log('tsctests')
      .log('amd')
      .log('es')
  }
  catch (e) {
    // some typo on one timer not running prob tests
  }
}

async function all() {
  if (!quick) await src()
  // if (tests) {
  //   await compileTests()
  //   await test()
  // }
  if (production) await publishing()
  // cli.optimizejs()

  // if (cov) await runCov()
  // // all ops are done
  // timer.stop('go').log('go')
}
all()
