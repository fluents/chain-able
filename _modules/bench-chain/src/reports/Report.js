const log = require('fliplog')
const ChainedMap = require('flipchain/ChainedMapExtendable')
let {average, flowmin, flowmax, flatten, mapown, mapObjArr} = require('../deps')
const TagReporter = require('./TagReporter')
const PercentReporter = require('./PercentReporter')
const GraphReporter = require('./GraphReporter')

/**
 * @TODO
 *  - [ ] deepmerge multi results
 *  - [ ] graph comparisons
 * @type {Class}
 */
module.exports = class Report extends ChainedMap {
  constructor(parent) {
    super(parent)

    const {debug, asyncMode, reasoning} = parent.entries()

    this.fastest = parent.fastest.bind(parent)
    this.getResults = (latest = false) => this.parent.getResults(latest)
    this.getNames = () => this.parent.get('testNames')
    this.getResultsWithNames = () => {
      return {names: this.getNames(), results: this.getResults()}
    }

    // @TODO improve
    this.reasoning = reasoning
    this.shouldEcho = true
    this.shouldFilter = false
    this.asyncMode = asyncMode
    this.debug = debug
    this.max = 0
    this.min = 0
    this.mean = 0

    this.tagReporter = new TagReporter(this)
    this.percentReporter = new PercentReporter(this)
    this.graphReporter = new GraphReporter(this)

    this.echoAvgGraph = this.graphReporter.echoAvgGraph.bind(this.graphReporter)
    this.echoTrend = this.graphReporter.echoTrend.bind(this.graphReporter)
    this.echoPercent = () => {
      this.percentReporter.echoPercent()
    }
    this.echoTags = () => {
      this.tagReporter.echoTagged()
    }
  }

  // --- transformers (fbp here makes sense) ---

  /**
   * @since 0.2.0
   * @see BenchChain.asyncMode
   * @param  {string} prop map to this property to average with that data
   * @return {Averages} averages
   */
  avgs(prop = 'num') {
    const avgs = {}
    const {results, names} = this.getResultsWithNames()

    log.blue('this.results').data({results, names}).echo(this.debug)

    // results(keys[0]).timesFor
    if (this.asyncMode) {
      names.forEach(name => {
        const value = results[name]

        // skip for now
        if (!value || !value[0] || !value[0].timesFor) {
          log.yellow(name + ' had no value - yet').echo(this.debug)
          return
        }

        // gather
        const timesForMulti = value
          .map(entry => {
            log
              .data(entry, entry.timesFor)
              .red('ENTRY ' + entry.name)
              .echo(this.debug)

            if (entry.timesFor === undefined) {
              // log.quick(entry)
              return false
            }
            return entry.timesFor.map(t => t.diff)
          })
          .filter(val => val)

        // flatten
        const timesFor = flatten(timesForMulti).pop()

        const max = flowmax(timesFor)
        const min = flowmax(timesFor)
        if (this.max < max) this.max = max
        if (this.min < min) this.min = min

        const avgavg = Math.abs(average(timesFor))

        // more averages
        const resultsForProp = value.map(result => avgavg)
        const avg = average(resultsForProp)

        log
          .blue('averages')
          .data({name, resultsForProp, avg, avgavg, timesFor})
          .echo(this.debug)

        avgs[name] = avg
      })
    }
    else {
      return this.propAvg()
    }

    return avgs
  }

  /**
   * @desc same as avg, but using a specific prop
   * @since 0.4.1
   * @param  {String} [prop='num']
   * @return {Array<number>}
   */
  propAvg(prop = 'num') {
    const avgs = {}
    const {results, names} = this.getResultsWithNames()

    names.forEach(name => {
      const resultsForProp = results[name].map(result => Number(result[prop]))
      const avg = average(resultsForProp)
      log.blue('averages').data({name, resultsForProp, avg}).echo(this.debug)
      avgs[name] = avg
    })

    return avgs
  }

  // --- echoing helpers 2 ---

  /**
   * @since 0.4.1
   * @param  {Function<value, key, object>} cb
   * @return {Array} mapped results
   */
  loopResults(cb) {
    return mapown(this.getResults(), cb)
  }

  /**
   * @desc filters numbers outside of the usual range if needed
   * @param  {number} nums
   * @param  {number} min
   * @param  {number} max
   * @return {Array<number>}
   */
  filterIfNeeded({nums, min, max}) {
    if (!this.shouldFilter) return nums

    nums = nums.filter(nn => {
      const minp = min * 1.1
      const maxp = max / 1.1

      log
        .data({
          nn,
          minp,
          maxp,
          max,
          min,
          passes: nn >= minp && nn <= maxp,
        })
        .echo(false)

      return nn >= minp // && (nn <= maxp)
    })

    return nums
  }

  /**
   * @param  {number} avg
   * @return {string} color
   */
  colorForAvg(avg) {
    const avgMin = avg > this.min * 1.1
    const minmin = avg > this.min * 1.1
    const minish = avg > this.min * 1.5
    const abvAvg = avg > this.max / 1.3
    const avgish = avg > this.max / 1.1
    const wow = avg > this.max / 1.05
    if (wow) return 'bold'
    if (avgish) return 'green'
    if (abvAvg || minish) return 'dim'
    if (avgMin) return 'yellow'
    if (minmin) return 'red'
    return 'red'
  }

  // --- simple echos ---

  /**
   * @see Record.avgs
   * @TODO transform data to trim
   * @return {Record} @chainable
   */
  echoAvgs() {
    // in async mode, uses microtime diffs as ops are not as reliable
    let msg = 'lower is better, time taken in microseconds'

    // when in sync mode, it is ops/second instead
    if (!this.asyncMode) {
      msg = 'higher is better, operations per second'
    }

    log
      .color('dim.italic')
      .text(msg)
      .echo()

    log
      .fmtobj(this.avgs())
      .bold('averages:')
      .echo(this.shouldEcho)

    return this
  }

  /**
   * @see Record.fastest
   * @return {Record} @chainable
   */
  echoFastest() {
    log
      .verbose(this.fastest().shift())
      .underline('Fastest is ')
      .echo(this.shouldEcho)

    return this
  }

  /**
   * @since 0.4.1
   * @desc very long message echoing
   *       for all cycles of all test echoing,
   *       should filter
   * @return {Record} @chainable
   */
  echoOps() {
    this.getResults()
    const {results, names} = this.getResultsWithNames()
    const msgs = []

    msgs.push('-----')
    names.forEach(name => {
      const value = results[name].slice(0).reverse()
      let limit = 10
      for (let i = 0; i < limit && i < value.length; i++) {
        if (!value[i].msg) {
          limit++
          continue
        }
        msgs.push(value[i].msg)
      }

      msgs.push('-----')
    })

    log.bold('\n\noperations per second\n').echo()
    msgs.forEach(msg => console.log(msg))

    // works too, but harder to filter
    // const msgs = mapObjArr(this.getResults(), data => data.msg).reverse()

    return this
  }
  // --- -------------- ---
  // --- graph building ---
  // --- -------------- ---
}
