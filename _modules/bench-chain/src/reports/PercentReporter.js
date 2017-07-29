// %%% %%%%%%%%%%%%%%% %%%
// %%%  percent calcs  %%%
// %%% %%%%%%%%%%%%%%% %%%

const log = require('fliplog')
const Table = require('cli-table2')
let {
  padEnd,
  calcTimes,
  flowVals,
  calcPercent,
  flowmax,
  forown,
  replaceAnsi,
} = require('../deps')

/**
 * @see Reporter.avgs
 * @see Reporter.asyncMode
 */
module.exports = class PercentReporter {
  constructor(parent) {
    this.reasoning = parent.reasoning
    this.asyncMode = parent.asyncMode
    this.suiteName = parent.parent.get('suiteName')
    this.avgs = parent.avgs.bind(parent)
  }

  /**
   * @protected
   * @see [x] https://github.com/aretecode/bench-chain/issues/2
   *
   * @desc compares two numbers,
   *       calculates times & percent,
   *       adjusts wording based on results
   *       calculate the positive and negatives * / x / times more/less
   *
   * @NOTE when in not-async mode,
   *       it was using cycle ops instead of microtime diffs
   *       but to simplify now both use the same
   *       also because the hz in ops can be below 0
   *       throwing off the calculations
   *
   * @since 0.4.1
   * @param  {number} value
   * @param  {number} other
   * @return {Object} {end, fixed, percent, word}
   */
  calculatePercent(value, other) {
    const higherIsBetter = !this.asyncMode

    const data = {
      higherIsBetter,
      firstIsMore: value > other,
      negative: false,
      xy: calcTimes(value, other),
      yx: calcTimes(other, value),
      xyf: Math.floor(calcTimes(value, other)),
      yxf: Math.floor(calcTimes(other, value)),
      yxpercent: Math.floor(calcPercent(other, value)),
      xypercent: Math.floor(calcPercent(value, other)),
    }

    // default usually
    const shouldUseTimes = () => {
      return data.xyf !== 0 && data.yxf === 0
    }
    // if higher is better, if the calculates are revered, fix
    const shouldUseTimesFlipped = () => {
      return data.xyf === 0 && data.yxf !== 0 // && higherIsBetter
    }
    // usually used if below 0 && higher is not better
    const shouldUsePercent = () => {
      return data.xyf === 1 || data.yxf === 1
    }
    // check the calculations to return formatted string
    const format = () => {
      if (shouldUseTimes()) {
        return data.xyf + 'X'
      }
      if (shouldUseTimesFlipped()) {
        return data.yxf + 'X'
      }
      if (shouldUsePercent()) {
        return data.yxpercent + '%'
      }

      return data.yxf + 'X'
    }
    const slowerOrFaster = () => {
      // all nots
      if (!higherIsBetter && !data.firstIsMore && !data.negative) {
        return 'faster'
      }
      if (higherIsBetter && data.firstIsMore && !data.negative) {
        return 'faster'
      }

      return 'slower'
    }

    data.calculated = {
      msg: format() + ' ' + slowerOrFaster(),
      slowerOrFaster: slowerOrFaster(),
      shouldUseTimes: shouldUseTimes(),
      shouldUseTimesFlipped: shouldUseTimesFlipped(),
      shouldUsePercent: shouldUsePercent(),
      formatted: format(),
    }

    log.bold('======\n').fmtobj(data).echo(this.reasoning)

    const word = slowerOrFaster()
    const end = format()

    return {end, word}
  }

  /**
   * @TODO needs cleaning
   *
   * @since 0.3.0
   * @desc
   *  uses microtime recordings & benchmarkjs data
   *  to go through an average of averages
   *  then compare each result to each other to show how many times
   *  faster/slower they are
   *
   * @return {Record} @chainable
   */
  echoPercent() {
    const avgs = this.avgs()
    const names = Object.keys(avgs)
    const values = Object.values(avgs)
    const pcts = []
    const parts = {
      name: [],
      val: [],
      diff: [],
      word: [],
      compare: [],
      otherVal: [],
    }

    // add each part in so we know the lengths of each to padd
    const addPart = part => {
      parts.name.push(part.name)
      parts.val.push(part.val)
      parts.word.push(part.word)
      parts.diff.push(part.diff)
      parts.compare.push(part.compare)
      parts.otherVal.push(part.otherVal)
      pcts.push(part)
    }

    // go through each name
    // then go through each other name to compare
    names.forEach((name, n) =>
      names.forEach((compare, i) => {
        if (compare === name) return

        const value = values[n]
        const other = avgs[compare]
        const {end, word} = this.calculatePercent(value, other)

        // format
        let vc = log.colored(value + '', 'green.underline')
        let oc = log.colored(other + '', 'green.underline')
        let ec = log.colored(end, 'bold')
        let wc = log.colored(word, 'italic') + '  than'
        let ns = [log.colored(name, 'cyan'), log.colored(compare, 'blue')]

        // wrap strings
        vc = `(${vc})`
        oc = `(${oc})`

        // put the parts into an array to format padding
        addPart({
          name: ns[0],
          val: vc,
          diff: ec,
          word: wc,
          compare: ns[1],
          otherVal: oc,
        })
      })
    )

    return this.echoPaddedAverages(pcts, names, parts).echoAvgTable(pcts, names)
  }

  /**
   * @protected
   * @since 0.4.1
   * @param  {Array} pcts paddedColoredParts
   * @param  {Array<string>} names testnames
   * @param  {Array<Object>} parts array of parts before padding and coloring
   * @return {Reporter} @chainable
   */
  echoPaddedAverages(pcts, names, parts) {
    console.log('\n')
    let suiteName = this.suiteName

    if (suiteName.includes('/')) {
      suiteName = suiteName.split('/').pop()
    }
    if (suiteName.includes('.json')) {
      suiteName = suiteName.split('.json').shift()
    }

    log.bold(suiteName).echo()
    if (names[0]) {
      console.log('🏆  ' + log.colored(names[0].split(' ').shift(), 'underline'))
    }

    // padd end for pretty string
    const longests = flowVals(flowmax)(Object.assign({}, parts))
    pcts.forEach(pct => {
      let str = ''
      forown(pct, (v, k) => {
        if (k === 'msg') return

        // pad first
        v = v.padEnd(longests[k] + 2)

        // because these emoji have different lengths in chars
        // but not terminal size so we replace here
        if (v.includes('faster')) {
          v = v.replace(/(faster)/g, '🏎️') // 🏎️ ⚡
        }
        else if (v.includes('slower')) {
          v = v.replace(/(slower)/g, '🐌')
        }
        v = v.replace(/(than)/g, log.colored(' than', 'dim'))

        str += v
      })
      console.log(str)
    })
    console.log('\n')

    return this
  }

  /**
   * @protected
   * @since 0.4.1
   * @param  {Array} pcts paddedColoredParts
   * @param  {Array<string>} names testnames
   * @return {Reporter} @chainable
   */
  echoAvgTable(pcts, names) {
    const avgLong = this.avgs()
    const table = new Table({head: pcts.map(p => p.name)})

    const rows = pcts.map((p, i) => {
      const strippedName = replaceAnsi(p.name)
      if (!avgLong[strippedName]) {
        log.red('could not average it out' + p.name).echo()
        // log.quick({avgLong, names, strippedName, i, p})
        return ''
      }

      return avgLong[strippedName]
    })

    table.push(rows)
    console.log(table.toString())
    return this
  }
}
