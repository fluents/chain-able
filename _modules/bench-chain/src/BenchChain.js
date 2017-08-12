/* eslint max-lines: "off" */
/* eslint import/no-dynamic-require: "off" */

const {Suite} = require('benchmark')
const log = require('fliplog')
const Fun = require('funwithflags')
const ChainedMap = require('./_chains')
const battery = require('./battery')
const {getCurrentMemory, debounce} = require('./deps')
const Interface = require('./UI')
const Reporter = require('./reports/Report')
const Results = require('./Results')

const fliptime = log.fliptime()
const {microtime} = fliptime

// cli arguments
const argv = Fun(process.argv.slice(2), {
  default: {
    runTimes: 1,
    graph: false,
    dry: false,
    debug: false,
    noTags: false,
    noGraph: false,
    configStore: false,
    reasoning: false,
    help: false,
    noChart: false,
  },
  bool: [
    'graph', 'debug',
    'no-graph',
    'no-tags',
    'silent',
    'configStore',
    'reasoning',
    'help',
    'noChart',
  ],
  alias: {
    noGraph: 'silent',
    configStore: ['file', 'config-store'],
    reasoning: ['calculations'],
  },
  camel: true,
  unknown(arg, fun) {
    if (fun.i === 0) fun.argv.runTimes = Number(arg)
  },
})
let {runTimes, graph, dry, debug, noGraph, noTags, configStore, reasoning, help, noChart} = argv

if (help) {
  const chalk = log.chalk()
  log
    .underline('bench-chain: --help')
    .fmtobj({
      '--runTimes': {
        type: chalk.blue('Number'),
        default: 1,
        description: 'run the benchmarks multiple times',
      },
      '--graph': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'only show the graph',
      },
      '--noGraph': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'do not show the graph',
      },
      '--dry': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'do not run the graph',
      },
      '--debug': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'verbose debugging information',
      },
      '--configStore': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'use configstore instead of the json file in source',
      },
      '--reasoning': {
        type: chalk.blue('Boolean'),
        default: false,
        description: 'show math calculation reasoning for slower/faster',
      },
    })
    .echo()
    .exit()

  process.exit()
}

/**
 * @prop {string}  store.dir directory
 * @prop {boolean} store.debug very verbose
 * @prop {Object}  store.memory memory when started
 * @prop {number}  store.testNames names of tests, useful for length
 * @prop {string}  store.suiteName benchmarkjs suite name, defaults to filename
 * @prop {string}  store.rel relative path to results json file
 * @prop {string}  store.abs absolute path to results json file
 * @prop {Object}  ui class for helping with spinners etc
 * @prop {Object}  results class with json contents of file
 * @prop {Object}  current current event target object
 * @prop {Array}   timesFor microtime | performance.now times
 *
 * @TODO memoize subscriber cb check and normal for loop
 */
class BenchChain extends ChainedMap {
  constructor() {
    super()
    this.timesFor = {}
    this.tag = ''

    /* prettier-ignore */

    this
      .extend([
        'dir',
        'debug',
        'testNames',
        'memory',
        'subscribers',
        'configStore',
        'reasoning',
        // 'showTags',
      ])
      .method('index').autoIncrement().build()
      .debug(debug)
      .reasoning(reasoning)
      // .showTags(!noTags)
      .testNames([])
      .memory(getCurrentMemory())
      .subscribers({
        cycle: [],
        complete: [],
        allComplete: [],
      })
      .set('index', 0)

    this.echo = debounce(this.echo.bind(this), 2000)

    /* prettier-enable */
  }

  /**
   * @param {string} [dir=null] directory for the file with the record
   * @param {string} [filename=null] filename for benchmark
   * @param {string} [debugOverride=false] debugOverride
   * @return {BenchChain} @chainable
   */
  static init(dir = null, filename = null, debugOverride = false) {
    const bench = new BenchChain()

    if (debugOverride !== false) bench.debug(debugOverride)
    if (dir !== null) bench.dir(dir)
    if (filename !== null) bench.filename(filename)

    // for just use as a factory method
    if (!dir && !filename) return bench

    return bench.setup()
  }

  /**
   * @since 0.3.0
   * @param {string} name test name
   * @return {BenchChain} @chainable
   */
  name(name) {
    return this.set('suiteName', name)
  }

  /**
   * @since 0.2.0
   * @param {string} tags tag current benchmarks with
   * @return {BenchChain} @chainable
   */
  tags(tags) {
    return this.set('tags', tags)
  }

  // --- events ---

  /**
   * @event setup
   * @since 0.4.0
   * @param  {Function} cb
   * @return {BenchChain} @chainable
   */
  onSetup(cb) {
    this.get('suite').on('setup', cb)
    return this
  }

  /**
   * @event cycle
   * @since 0.4.0
   * @param  {Function} cb
   * @return {BenchChain} @chainable
   */
  onCycle(cb) {
    this.get('subscribers').cycle.push(cb)
    return this
  }

  /**
   * @event complete
   * @since 0.4.0
   * @param  {Function} cb
   * @return {BenchChain} @chainable
   */
  onComplete(cb) {
    this.get('subscribers').complete.push(cb)
    return this
  }

  /**
   * @event allComplete
   * @since 0.4.0
   * @param  {Function} cb
   * @return {BenchChain} @chainable
   */
  onAllComplete(cb) {
    this.get('subscribers').allComplete.push(cb)
    return this
  }

  /**
   * @event teardown
   * @since 0.4.0
   * @param  {Function} cb
   * @return {BenchChain} @chainable
   */
  onTeardown(cb) {
    this.get('suite').on('teardown', cb)
    return this
  }

  // --- helpers ---

  /**
   * @protected
   * @since 0.4.0
   * @see BenchChain.testName
   * @param {boolean} [latest=false] only use latest data
   * @return {Object} results, with test name when available
   */
  getResults(latest = false) {
    return this.results.getForName(this.get('suiteName'), latest)
  }

  /**
   * @see BenchChain.suite
   * @desc filters benchmark results for fastest
   * @since 0.1.0
   * @return {Array<string>} test case name
   */
  fastest() {
    return this.get('suite').filter('fastest').map('name')
  }

  // --- file ---

  /**
   * @desc   save and load file for the results
   * @since  0.2.0
   * @param  {String} [filename='./results.json']
   * @return {BenchChain} @chainable
   */
  filename(filename = './results.json') {
    this.results = Results.init(this, configStore)
      .setup(this.get('dir'), filename)
      .load()

    return this.setup()
  }

  // --- subscribers ---

  /**
   * @protected
   * @since 0.2.0
   * @desc handles benchmark cycle event
   * @see BenchChain.results, BenchChain.current
   * @param  {Benchmark.Event} event
   * @return {BenchChain} @chainable
   */
  _onCycle(event) {
    const now = Date.now()
    const mem = {
      start: this.get('memory'),
      end: getCurrentMemory(),
    }

    const tags = this.get('tags')
    const suite = this.get('suiteName')
    const hz = event.target.hz < 100 ? 2 : 0
    const num = Number(event.target.hz.toFixed(hz))

    // @example "optimized x 42,951 ops/sec ±3.45% (65 runs sampled)"
    const msg = event.target.toString()
    const sampled = msg.split('% (').pop().split(' runs').shift()
    const variation = msg.split('±').pop().split('%').shift()

    const {target} = event
    const {stats, count, cycles, errors, name} = target
    const timesFor = this.timesFor[name]

    const result = {
      msg,
      name,
      num,
      sampled,
      variation,
      tags,
      suite: [suite],
      timesFor,
      now,
      mem,
      stats,
      count,
      hz: target.hz,
      time: stats.mean * 1000,
      cycles,
    }

    // optimize
    if (battery) result.battery = battery
    if (errors) result.errors = errors

    this.current = result

    this.results.add(this.get('suiteName'), name, result)

    return this
  }

  /**
   * @protected
   * @desc after all benchmarks
   * @since 0.4.0
   * @return {BenchChain} @chainable
   */
  _onAllCompleted() {
    const {subscribers, suiteName} = this.entries()
    subscribers.allComplete.forEach(cb => cb.call(this, this))

    log.cyan('finished! ' + JSON.stringify(suiteName)).echo(this.get('debug'))

    this.ui.onAllComplete(suiteName)

    this.results.save()
    this.echo()

    return this
  }

  /**
   * @protected
   * @since 0.4.0
   * @NOTE complete is called at the end of *EACH* bench
   * @param  {Benchmark.Event} event
   * @return {BenchChain} @chainable
   */
  _onComplete(event) {
    const {testNames, index, subscribers} = this.entries()
    subscribers.complete.forEach(cb => cb.call(this, this))

    const indexSaysDone = index === testNames.length
    const eventSaysDone = event.currentTarget.length === testNames.length

    if (indexSaysDone || eventSaysDone) this._onAllCompleted(event)
    else this.index()

    // log.dim('completed ' + testNames[index]).json(event).echo(this.get('debug'))
    log
      .dim('completed ' + testNames[index])
      .data({
        current: index,
        total: testNames.length,
        targetLen: event.currentTarget.length,
      })
      .echo(this.get('debug'))

    return this
  }

  // --- suite ---

  /**
   * @see BenchChain.setup
   * @param {string} [override=null] defaults to this., or this.paths.abs
   * @return {Benchmark.Suite}
   */
  suite(override = null) {
    const suiteName =
      override || this.get('suiteName') || this.results.get('abs')

    this.name(suiteName)

    this.set('suite', new Suite(suiteName))

    return this.get('suite')
  }

  /**
   * @desc subscribes onCycle and onComplete
   * @since 0.1.0
   * @return {BenchChain} @chainable
   */
  setup() {
    if (!this.has('suite')) this.suite()

    // setup ui
    this.ui = new Interface(this)

    // setup file
    // @TODO

    // setup name
    if (!this.get('suiteName')) {
      const rel = this.results
        .get('rel')
        .replace('json', '')
        .replace(/[./]/g, '')

      this.name(rel)
    }

    // bind the callbacks
    const cycle = this._onCycle.bind(this)
    const onComplete = this._onComplete.bind(this)

    // subscribe
    this.get('suite').on('cycle', event => cycle(event))
    this.get('suite').on('complete', event => onComplete(event))

    return this
  }

  // --- operations / bench helpers when not using suite / ---

  /**
   * @param  {boolean} [asyncs=true]
   * @return {BenchChain} @chainable
   */
  asyncMode(asyncs = true) {
    return this.set('asyncMode', asyncs)
  }

  /**
   * @protected
   * @since 0.4.0
   * @param {string} name
   * @return {BenchChain} @chainable
   */
  addRecorder(name) {
    const results = this.getResults()
    const latest = this.getResults(true)

    // use results object, or a new object
    if (results !== undefined && results[name] === undefined) results[name] = []
    else if (Array.isArray(results[name]) === false) results[name] = []

    // same for latest
    if (latest !== undefined && latest[name] === undefined) latest[name] = []
    else if (Array.isArray(latest[name]) === false) latest[name] = []


    this.get('testNames').push(name)

    return this
  }

  /**
   * @protected
   * @since 0.2.0
   * @desc should return empty calls to see baseline
   *       empty bench to get more raw overhead
   *
   * @see BenchChain.addAsync
   * @param  {string}   name test name
   * @param  {Function} fn function to call deferred
   * @return {BenchChain}   @chainable
   */
  hijackAsync(name, fn) {
    return async cb => {
      if (!cb.reject) {
        cb.reject = e => {
          throw e
        }
      }

      const times = {
        start: null,
        end: null,
      }

      const hjResolve = arg => {
        times.end = microtime.now()
        times.diff = times.end - times.start
        return cb.resolve(arg)
      }
      const hjReject = arg => {
        times.end = microtime.now()
        times.diff = times.end - times.start
        delete times.end
        delete times.start

        return cb.reject(arg)
      }

      hjResolve.reject = hjReject
      hjResolve.resolve = hjResolve

      this.timesFor[name] = this.timesFor[name] || []
      this.timesFor[name].push(times)

      // start timer after setup
      times.start = microtime.now()

      const called = await fn(hjResolve, hjReject)
      if (called && called.then) {
        called.then(arg => cb.resolve(arg))
      }
      return called
    }
  }

  /**
   * @since 0.2.0
   * @desc add benchmark case (with defer)
   * @param {string}   name
   * @param {Function} fn
   * @return {BenchChain} @chainable
   */
  addAsync(name, fn) {
    this.set('asyncMode', true)
    this.get('suite').add(name, {
      defer: true,
      fn: this.hijackAsync(name, fn),
    })

    return this.addRecorder(name)
  }

  /**
   * @desc add benchmark case
   * @since 0.1.0
   * @param {string}   name
   * @param {Function} fn
   * @return {BenchChain} @chainable
   */
  add(name, fn) {
    this.set('asyncMode', false)

    this.get('suite').add(name, fn)

    return this.addRecorder(name)
  }

  // --- ops ---

  /**
   * @since 0.1.0
   * @desc calls setup, runs suite
   * @return {BenchChain} @chainable
   */
  run() {
    const {suiteName, asyncMode} = this.entries()

    if (dry) {
      log.warn('dry run').echo(this.get('debug'))
      return this
    }

    if (graph === true) {
      return this.echo()
    }

    log.cyan('starting! ' + JSON.stringify(suiteName)).echo(this.get('debug'))

    this.ui.onRun(suiteName)
    this.get('suite').run({async: asyncMode})

    return this
  }

  /**
   * @TODO merge with .run, disable logs until end of all
   * @desc runs the suite test x times
   * @since 0.2.0
   * @param  {Number} [times=runTimes] defaults to 1, allows first arg to be number of runs
   * @return {BenchChain} @chainable
   */
  runTimes(times = runTimes) {
    if (times === null) times = runTimes

    const total = log.colored(times, 'bold')

    for (let i = 0; i < times; i++) {
      const current = log.colored(i, 'bold')
      const running = log.colored('running ', 'dim')
      const msg = `${running} ${current}/${total}`

      log.yellow('reset suite: ').data(msg).echo()

      this.get('suite').reset()
      this.get('suite').run({async: this.get('asyncMode')})
    }

    return this
  }

  /**
   * @see this.filename
   * @NOTE debounced
   * @since 0.2.0
   * @desc instantiates Reporter, does echoing of numbers
   * @return {BenchChain} @chainable
   */
  echo() {
    if (noGraph) return this

    const reporter = new Reporter(this)
    console.log('\n')
    reporter.echoFastest()
    reporter.echoAvgs()
    reporter.echoPercent()
    if (!noTags) reporter.echoTags()
    if (!noChart) reporter.echoAvgGraph()
    if (!noChart) reporter.echoTrend()
    reporter.echoOps()

    return this
  }
}

module.exports = BenchChain
