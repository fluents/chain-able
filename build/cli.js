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
const {resolve, basename} = require('path')
const jetpack = require('fs-jetpack')
const fwf = require('funwithflags')
const Script = require('script-chain')
const log = require('fliplog')
const {read, write} = require('flipfile')
const eslint = require('eslint')
// const docdown = require('docdown')
const find = require('chain-able-find')
const {replace, pipe, dot, traverse, uniq} = require('../exports')
const {del, _res, fromTo} = require('./util')
const {stripRollup} = require('./plugins/ast')

const {linter, CLIEngine} = eslint
const res = _res(__dirname)
const resRoot = _res('../')

// https://github.com/chalk/ansi-regex/blob/master/index.js
const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
const stripAnsi = replace(ansiRegex, '')

const timer = log.fliptime()
timer.start('cli')
log.registerCatch()

// startsWith '//' || '/*'
// @TODO would also be a invoke
const trim = x => x.trim()
const stripWhitespace = replace(/(\s|\t|\n)+/g, '')
const _isComment = x =>
  x.startsWith('//') ||
  x.startsWith('*') ||
  x.startsWith('/*')
const isComment = pipe(trim, stripWhitespace, _isComment)

// setup args
// src: [rollup, typescript, buble, babel, browserify, copy/strip]
const argvOpts = {
  boolean: [
    'cov',
    'src',
    'copy',
    'production',
    'docs',
    'optimize',
    'diff',
    'doctrine',
    'easyexports',
    'cleaneasyexports',
  ],
  string: ['format'],
  default: {
    optimize: true,
    docs: false,
    clean: false,
    tests: false,
    cov: false,
    quick: false,
    diff: false,
    production: true,
    doctrine: false,
    easyexports: false,
    cleaneasyexports: false,
    format: ['amd', 'iife', 'dev', 'es', 'cjs', 'umd'],
  },
}
const argvs = fwf(process.argv.slice(2), argvOpts)
const {
  production,
  quick,
  tests,
  cov,
  clean,
  docs,
  diff,
  doctrine,
  easyexports,
  cleaneasyexports,
} = argvs

const OPTIMIZE_JS_FILE = '../dists/umd/index.js'
const TSC_SOURCE = '../dists/dev/index.js'
const TSC_OUT = '../dists/tsc/bundle.js'
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
      'dist',
      'compose',
      'plugins',
      'coverage',
      '.nyc_output',
      'deps',
    ],
  }

  toClean.files.map(file => del(res('../' + file + '.js')))
  toClean.files.map(file => del(res('../' + file + '.js.map')))
  toClean.dirs.map(file => del(res('../' + file + '/')))
  process.exit()
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

const root = res('../')
const entry = res('../src')

const srcFiles = find
  .init()
  .recursive(true)
  .ignoreDirs(['ignant'])
  .matchFiles(['**/*.js'])
  .abs(true)
  .sync(true)
  .find(entry)
  .results()

const typings = find
  .init()
  .recursive(true)
  .matchFiles(['**/*.d.ts'])
  .abs(true)
  .sync(true)
  .find(res('../typings'))
  .results()

const testFiles = find
  .init()
  .recursive(true)
  .matchFiles(['**/*.js'])
  .abs(true)
  .sync(true)
  .find(res('../test'))
  .results()

const toRel = filepath => filepath.replace(root, '').replace(entry, '')

const repoPath = 'https://github.com/fluents/chain-able/blob/master'
const repoDocPath =
  'https://github.com/fluents/chain-able/blob/master/docs/docdown'
const toDocPath = filepathBasename =>
  (res('../docs/docdown/') + '/' + filepathBasename).replace('.js', '.md')
const toRepoDocPath = filepathBasename => repoDocPath + filepathBasename
const toBasename = filePath => basename(filePath)
const stripDot = filePath => filePath.replace(/[.]/gim, '')
const escapeDot = filePath => filePath.replace(/[.]/gim, '\\.')
const slashToDot = filePath => filePath.replace(/\//gim, '.')
const toAnchor = (label, href) => `[${basename(label)}](${href || label})`
const stripExt = filePath => filePath.replace(/\.[a-zA-Z0-9]{0,3}/, '')

// ensure there is a `/` between them, say if we just resolve a filename
const toRepoPath = filepathBasename => {
  if (repoPath.endsWith('/') || filepathBasename.startsWith('/')) {
    return repoPath + filepathBasename
  }
  else {
    return repoPath + '/' + filepathBasename
  }
}

// cli class
class CLI {
  copy(toRoot = false) {
    // @TODO: dist & toRoot (does it ever need to be in dist except for buble?)
    const scripts = new Script()
      .add()
      .bin('flow-remove-types')
      .raw('src/')
      .flag('pretty')
      .flag('quiet')
      .flag('all')
      .flag('out-dir')
      .arg('./dist')
    if (toRoot) {
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
  stripRollup(url = OPTIMIZE_JS_FILE) {
    const file = require.resolve(url)
    let code = read(file)

    log.diff(code)
    let optimized = stripRollup(code).toString()

    // no need, but fun
    // const escaped = require('../src/deps/matcher/to-regexp')('Object.create')
    // optimized = optimized.replace(escaped, 'occc')
    // while (optimized.includes('Object.create'))
    //   optimized = optimized.replace('Object.create', 'occc')
    // optimized = 'var occc = Object.create;\n' + optimized

    log.diff(optimized)
    log.echo()
    // log.quick({optimized, code})
    write(file, optimized)

    return Promise.resolve()
  }
  optimizejs(url = OPTIMIZE_JS_FILE) {
    const optimizeJs = require('optimize-js')
    const file = require.resolve(url)
    const code = read(file)
    if (diff) log.diff(code)
    const optimized = optimizeJs(code)
    if (diff) log.diff(optimized)
    write(file, optimized)
    if (diff) log.echo()
    return this.stripRollup()
  }
  rollup(flags = '') {
    if (Array.isArray(flags)) return flags.map(flag => this.rollup(flag))
    const config = ROLLUP_CONFIG_CLI
    return script('rollup', '-c ' + require.resolve(config) + ' ' + flags)
  }
  rollupNode(overrides = {}) {
    return require('./build')(overrides)
  }
  doctrine() {
    var doctrineAPI = require('doctrine')
    var ast = doctrineAPI.parse(
      [
        `
          /**
           * {@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}
           * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}
           * @see {@link pony-map}
           * @see {@link mozilla-map}
           *
           * @see ChainedMap
           * @see Chainable
           * @see MergeChain
           * @see MethodChain
           * @see ChainedMap
           *
           */
        `,
        // `
        //   /**
        //    * @param  {*} x value
        //    * @param  {any} [y] not real, for ast
        //    * @return {boolean} isDate
        //    *
        //    * @since 3.0.0
        //    * @memberOf is
        //    * @func isDate
        //    *
        //    * @example
        //    *
        //    *  isDate(new Date())
        //    *  //=> true
        //    *  isDate(Date.now())
        //    *  //=> false
        //    *  isDate(1)
        //    *  //=> false
        //    *  isDate('')
        //    *  //=> false
        //    *
        //    * @example
        //    *
        //    *  const e = {}
        //    *  eh[Symbol.toStringTag] = '[Object Date]'
        //    *  isDate(eh)
        //    *  //=> true
        //    *
        //    * @example
        //    *
        //    *  class Eh extends Date()
        //    *  isDate(new Eh())
        //    *  //=> true
        //    */
        // `,
        // '/**',
        // ' * This function comment is parsed by doctrine',
        // ' * @param {{ok:String}} userName',
        // '*/',
      ].join('\n'),
      {unwrap: true, sloppy: true}
    )
    log.quick(ast)
  }
  docs() {
    // all the docs in 1 place
    const allInOne = res('../dists/dev/index.js')
    srcFiles.push(allInOne)

    const vfs = {
      toDocPath,
      toRepoPath,
      toRepoDocPath,
      toRel,
      toBasename,
      typings: {
        abs: typings,
        rel: typings.map(toRel),
      },
      tests: {
        abs: testFiles,
        rel: testFiles.map(toRel),
      },
      src: {
        abs: srcFiles,
        rel: srcFiles.map(toRel),
      },
    }

    // ----------- docs -----------

    timer.start('docs')

    srcFiles.map(filepath => {
      // if (!filepath.includes('dists/dev/index.js')) return
      // if (!filepath.includes('_Playground')) return

      const relatived = filepath.replace(root, '')
      // eslint-disable-next-line
      // debugger

      const docdown = require('../_modules/_docdown')

      const markdown = docdown({
        path: filepath,
        url: repoPath + relatived,
        files: vfs,
      })

      let filepathBasename = relatived.replace('/src/', '')
      let docpath = toDocPath(filepathBasename)

      if (docpath.includes('dists/')) {
        filepathBasename = relatived.replace('dists/dev/index', 'aio')
        docpath = toDocPath(filepathBasename)
      }

      write(docpath, markdown)

      // return {[filepath]: markdown}
    })

    timer.stop('docs').log('docs')
    // process.exit()
    this.makeTree({vfs})
    // === create
  }
  makeTree(args) {
    const {vfs} = args
    // ----------- tree -----------

    // === setup
    const allDirs = find
      .init()
      .recursive(true)
      .ignoreDirs(['node_modules'])
      // , 'test/**', 'typings/**', 'docs/**'
      .matchFiles(['src/**'].map(resRoot))
      .abs(true)
      .sync(true)
      .find(resRoot('.'))
      .results()

    let dirs = allDirs
      .map(dir => (dir.includes('.') ? dir.replace(basename(dir), '') : dir))
      .filter(uniq)

    const docFiles = vfs.src.rel
      .map(vfs.toRepoDocPath)
      .map(rel => rel.replace('/src/', '/'))

    const {filesMatcher} = require('../_modules/_docdown/lib/chain-able')

    const findDir = filesMatcher(dirs)

    const docsTree = {}
    docFiles.forEach(doc => {
      let docName = doc.replace(repoDocPath, '')

      // file
      if (doc.includes('.')) {
        docName = stripExt(docName)
      }

      let dotPath = slashToDot(docName)
      if (dotPath.startsWith('.')) dotPath = dotPath.slice(1)
      // let link = `[${basename(docName)}](${doc})`

      dotPath = dotPath.split('.')
      dotPath[dotPath.length - 1] = escapeDot(toAnchor(docName, doc))
      dotPath = dotPath.join('.')
      dot.set(docsTree, dotPath, '')
    })

    // traverse(docsTree)
    // log.quick(docsTree)
    // const tree = log.tree(docsTree).returnVals().datas
    // const treeString = tree
    //   .replace(/(\[39|2m,)/gim, '')
    //   .replace(/\'/gim, '')
    //   .replace(/\,/gim, '')
    const toCode = x => x.replace(/[├─│─┐└─]/gim, '`$&`')
    const treeify = log.requirePkg('treeify')
    const endsWithColon = x => (/\:$/).test(x.trim())

    try {
      const tree = treeify.asTree(docsTree, true, true)

      const treeString = tree
        .split('\n')
        .map(line => '- ' + toCode(line).replace('``', '` `'))
        .map(line => {
          if (line.includes(':')) {
            return line
          }
          else {
            return line.replace(/[a-z0-9]+/gim, x => {
              const resolved =
                findDir(x)
                  .map(dir => (dir.includes('http') ? dir : toRel(dir)))
                  .filter(dir => dir.endsWith(x + '/'))
                  .map(dir => (dir.includes('http') ? dir : toRepoDocPath(dir)))
                  .shift() || x

              // console.log({x, resolved})

              return toAnchor(resolved)
            })
          }
        })
        // ends with `:`
        .map(line => (
          endsWithColon(line)
            ? line.substring(0, line.length - 2)
            : line
        ))
        .join('\n')

      // console.log(treeString)
      write(toDocPath('README.md'), treeString)
    }
    catch (e) {
      // console.log(e)
      // console.log(
      //   '@TODO: fork and fix obj.hasOwnProp -> Object.prototype.hasOwnProperty.call(obj, prop)'
      // )
    }
  }
  // @TODO run versions index
  versions() {}
  cleanEasyExports() {
    const {flatten} = require('../exports')
    const {fromTo} = require('./util')

    const exported = flatten(fromTo.values())

    exported
      // .map(exp => {
      //   if (isNotInOutput(exp)) throw new Error(exp)
      //   return exp
      // })
      .forEach(exp => {
        log.red('deleting').data(exp).echo()
        del(exp)
      })
  }
  lintEasyExports() {
    const temp = fromTo.folder
    const files = jetpack
      .list(temp)
      .filter(filename => filename.includes('.js'))
      .map(filename => res(temp + '/' + filename))

    files.forEach(filename => this.lintEasyExport(filename, temp))
    // log.quick({files})
  }
  // https://github.com/eslint/eslint/issues/4119 Load plugin when using eslint in node via the API
  lintEasyExport(filename, dir) {
    // @HACK @FIXME @TODO just is ignoring this silly copied over files
    if (filename.includes('index.web')) return

    const configPath = require.resolve('../../.eslintrc.js')
    const config = require(configPath)
    config.rules = {
      'import/no-unresolved': 2,
      // 'node/no-missing-require': 'error',
    }
    config.plugins.push('import')
    // log.quick(config)

    let source = read(filename)
    log.bold(filename).echo()

    source
      .split('\n')
      .filter(line => line.includes('require'))
      .map(line => {
        // commented out lines
        if (isComment(line)) return line
        const parts = line.split('=')
        const name = parts.shift().trim()
        let requirePath = parts.pop()
        if (!requirePath) {
          // was just a comment 0.0
          return line
          // log.quick({parts, name})
        }

        // comment from exporting
        requirePath = requirePath
          .split('/*')
          .shift()

        if (requirePath.includes('.js')) {
          // remove .js if needed
          requirePath = requirePath
            .split('.js')
            .shift()
        }

        const sillyRegExpSpecial = /(\s|\^|\$|\#|\@|\!|\&|\=|\+|\t|\n|\?|\>|\<|\{|\}|\[|\]|\|\'|\"|\`|\\)*/gmi
        const dotSlash = /(\.\/)/gmi
        requirePath = requirePath
          .replace('require(', '')
          // .replace(/[\W_-]+/g, '')
          .replace(sillyRegExpSpecial, '')
          .replace(dotSlash, '')
          .replace(/'*/gmi, '')

        log.blue(requirePath).echo()
        if (!requirePath) {
          log.quick(line)
        }

        requirePath = dir + '/' + requirePath

        // ensure all paths exist
        try {
          require.resolve(requirePath)
        }
        catch (error) {
          log.quick({error, requirePath})
          log.catchAndThrow(error)
        }
      })

    const colored = log.colored(source, 'cyan')
    // log.cyan('before\n').data(colored).echo() // "var foo = bar;"
    const eslintCli = new CLIEngine({
      // configFile: configPath,
      config,
    })

    const executed = eslintCli.executeOnText(source)
    const {results} = executed
    const unresolved = results[0]
      .messages
      .filter(msg => msg.ruleId === 'import/no-unresolved')
      // .map(msg => msg.message)

    // log.quick(unresolved)
    // log.quick(eslintCli)

    const verifiedMessages = linter.verify(source, config, {filename})
    const code = linter.getSourceCode()

    // ignoring, linting manually
    // log.yellow('messages').data(verifiedMessages).echo()
    // if (!code || !code.text) {
    //   log.red('could not handle this file ').data({filename}).echo()
    //   return source
    // }
    // log.yellow('code').fmtobj(code).echo()
    // log.blue(code.text).echo() // "var foo = bar;"
    // return code.text
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
  browserify() {
    // `browserify src -o dists/browserified/index.js`
  }
  babel() {
    return new Script().add().bin('babel').raw('src/ --out-dir dist').run()
  }
  test(built = false) {
    return script('ava', !built ? '--verbose' : 'test-dist/built.js')
    // return script('test')
  }
}

// use the cli class, time the operations, use the argv setup

timer.start('go')
const cli = new CLI()

async function src() {
  // copy
  await cli.copy()
}

// @NOTE: not using ts now, got worse as manual optimizations got better
async function rollupTypeScriptRollup() {
  await cli.tsc()

  // rollup the typescripted rollup... o.o
  await cli.rollup('--environment format:tsc')

  log.log('src')
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
      falafel: true,
      env: 'production',
      development: false,
      production: true,
      debug: false,
      uglify: true,
      replace: true,
    },
    opts
  )

// @NOTE this is how rollup can be done with cli flags instead of node api
// await cli.rollup('--environment format:umd --verbose --debug')

async function publishing() {
  const rollupProdWith = opts => cli.rollupNode(prodWith(opts))
  const rollupDevWith = opts => cli.rollupNode(devWith(opts))

  const prodBuilds = [
    {format: 'amd', falafel: false},
    {format: 'iife', falafel: false},
    {format: 'es'},
    {format: 'cjs'},
    // @HACK @FIXME just needs sourceType script
    {format: 'umd', verbose: true, debug: false},
  ]

  const devBuilds = [
    {
      exportName: 'debugger',
      debugger: true,
      debug: true,
      replace: {debugger: true},
    },
    {
      exportName: 'window',
      entry: res('../src/index.web.js'),
    },
    {
      exportName: 'dev',
    },
    {
      exportName: 'node',
    },
  ]

  let devOps = devBuilds.map(dev => rollupDevWith(dev))
  let prodOps = prodBuilds.map(prod => rollupProdWith(prod))
  let builds = [].concat(devOps).concat(prodOps)

  const built = await Promise.all(builds)
  return Promise.resolve(built)
}

async function all() {
  timer.start('cli')

  if (cleaneasyexports) {
    await cli.cleanEasyExports()
    process.exit()
  }
  if (easyexports) {
    await cli.lintEasyExports()
    process.exit()
  }
  if (docs) {
    await cli.docs()
    process.exit()
  }
  if (doctrine) {
    await cli.doctrine()
    process.exit()
  }

  if (!quick) {
    await src()
  }

  // is not really needed now with jest, but should add back tsc
  // if (tests) {
  //   await compileTests()
  //   await test()
  // }

  if (production) await publishing()

  await cli.optimizejs()

  // if (cov) await runCov()

  // all ops are done
  timer.stop('cli').log('cli')
}
all()
