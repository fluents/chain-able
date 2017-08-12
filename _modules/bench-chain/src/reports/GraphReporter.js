const log = require('fliplog')
let {average, getDiv, flowmin, flowmax, flatten} = require('../deps')

const {tillNow} = log.fliptime()

module.exports = class GraphReporter {
  constructor(parent) {
    this.parent = parent
    this.debug = parent.debug
    this.loopResults = parent.loopResults.bind(parent)
    this.filterIfNeeded = parent.filterIfNeeded.bind(parent)
    this.avgs = parent.avgs.bind(parent)
    // this.trend = parent.trend.bind(parent)
  }

  /**
   * @TODO: abstract this
   * @see deps/getDiv
   *
   * @desc go through results,
   *       get max and min,
   *       pretty print numbers
   *
   * @return {Object<points, max, min>} trend graph data
   */
  trend() {
    const trend = {}

    this.loopResults((value, name) => {
      let timesFor
      let nums

      // skip for now
      if (!value || !value[0]) {
        log.yellow(name + ' had no value - yet').echo(this.debug)
        return
      }

      if (value[0].timesFor) {
        // remap
        timesFor = value
          .filter(v => v.timesFor)
          .map(entry => entry.timesFor.map(t => t.diff))

        // flatten
        let nums1 = flatten(timesFor)

        // average
        nums = nums1.map(numnum => average(numnum))
      }
      else {
        // log.quick('good')
        nums = value.map(entry => entry.num)
      }

      // min max
      let min = flowmin(nums)
      let max = flowmax(nums)
      const div = getDiv(max)
      if (this.max < max) this.max = max
      if (this.min < min) this.min = min

      // filter anomolies
      nums = this.filterIfNeeded({nums, min, max, div})

      log.json({max, min, div}).text('trendy').echo(this.debug)

      max = max / div
      min = min / div

      // into graph points
      const points = nums
        .map((r, i) => {
          if (Math.floor(r / (div || 1)) === 0) return 0
          return [i, Math.floor(r / (div || 1))]
        })
        .filter(r => r !== 0)

      // into graph points from date
      const datePoints = nums
        .map((r, i) => {
          let key = i

          const {ms, s, m, h, d, y} = tillNow(value[key].now)
          key = i

          if (m === 0) return 0
          return [key, m]
        })
        .filter(r => r !== 0)

      trend[name] = {points, datePoints, max, min}
    })

    // log.cyan('all trend data').verbose(100).data(trend).echo(this.debug)

    return trend
  }

  /**
   * @see Record.trend
   * @return {Record} @chainable
   */
  echoTrend() {
    const graphs = this.trend()

    Object.keys(graphs).forEach(name => {
      console.log('\n')
      const {points, datePoints, max, min} = graphs[name]

      log
        .magenta('verbose graph:')
        .verbose(100)
        .data(graphs[name])
        .echo(this.debug)

      log.data({points, datePoints, max, min}).echo(this.debug)

      log
        .barStyles({
          color: 'green',
          width: 150,
          height: 10,
          maxY: max,
          yFractions: 0,
          caption: name,
        })
        .bar(points)
        .echo(this.shouldEcho)

      log
        .barStyles({
          color: 'yellow',
          width: 150,
          height: 10,
          yFractions: 0,
          caption: name + ' over time' + log.colored(' (minutes):', 'dim'),
        })
        .bar(datePoints)
        .echo(false)
      // .echo(this.shouldEcho)
    })

    return this
  }

  /**
   * @since 0.0.2
   * @see Record.avgs
   * @TODO transform data to trim
   * @return {Record} @chainable
   */
  echoAvgGraph() {
    const avgs = this.avgs()
    const nums = Object.keys(avgs).map(name => Number(avgs[name]))
    const max = flowmax(nums)
    const min = flowmin(nums)
    const div = getDiv(max) // * 10

    if (this.max < max) this.max = max
    if (this.min < min) this.min = min

    // log.data({avgs, nums, max, min, div}).echo(thisdebug)

    const points = Object.keys(avgs).map((name, i) => {
      return [i, Math.floor(avgs[name] / div)]
    })

    // , {max, min, nums, points}
    log.blue('averages of: ').data(Object.keys(avgs)).echo(this.debug)

    log
      .barStyles({
        color: 'blue',
        maxY: Math.floor(max / div),
        minY: Math.floor(min / div),
        // width: 150,
        // height: 100,
        // yFractions: 0,
        // xFractions: 0,
        caption: 'averages of all:',
      })
      .bar(points)
      .echo(false)
    // .echo(this.shouldEcho)

    return this
  }
}
