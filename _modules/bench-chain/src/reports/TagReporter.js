// ### ############
// ###   tags   ###
// ### ############

const log = require('fliplog')
const Table = require('cli-table2')
let {forown, mapown, groupBy, prettydate} = require('../deps')

/**
 * @see Reporter.getResultsWithNames
 * @see Reporter.avgs
 * @see Reporter.colorForAvg
 * @see Reporter.debug
 * @see Reporter.loopResults
 */
module.exports = class TableReporter {
  constructor(parent) {
    this.parent = parent
    this.debug = parent.debug
    this.getResultsWithNames = parent.getResultsWithNames.bind(parent)
    this.loopResults = parent.loopResults.bind(parent)
    this.avgs = parent.avgs.bind(parent)
    this.colorForAvg = parent.colorForAvg.bind(parent)
  }

  /**
   * @see this._regroupTags
   * @see this._makeTagTableRows
   * @desc makes a table, regroups tags, puts tags into a table
   * @since 0.4.1
   * @return {Reports} @chainable
   */
  echoTagged() {
    const table = new Table({
      hAlign: 'center',
      head: ['name', 'tags', 'averages', 'time'],
    })

    const regrouped = this._regroupTags()
    const tds = this._makeTagTableRows(regrouped)

    table.push(...tds)
    console.log(table.toString())

    return this
  }

  /**
   * @desc regroup results by tag with pretty dates
   * @since 0.4.1
   * @param  {Object} [grouped={}]
   * @param  {Object} [tagged={}]
   * @param  {Object} [regrouped={}]
   * @return {Object} regrouped
   */
  _regroupTags(grouped = {}, tagged = {}, regrouped = {}) {
    this.loopResults((v, name) => {
      grouped[name] = groupBy(v, 'tags')
      tagged[name] = Object.keys(grouped[name]).map(tag => tag.split(','))
      regrouped[name] = {}
    })

    // scoped vars for following loops
    const tagKeys = Object.keys(tagged)
    let tagIndex = 0

    // go through each test (by name)
    mapown(tagged, (tags, testNameAsTag) => {
      const key = tagKeys[tagIndex]

      // go through each test case (by tag index)
      mapown(tags, (tag, index, obj) => {
        // setup
        let uniqTags = tag.slice(0)
        const tagStr = tag.join(',')

        // get tests for first test for first time tag was used
        const tests = grouped[testNameAsTag][tagStr] // [ti]

        if (!tests) {
          log
            .data({
              group: grouped[testNameAsTag],
              atTag: grouped[testNameAsTag][tagStr],
              tagStr,
              testNameAsTag,
              tagIndex,
            })
            .red('no tests somehow when tagging')
            .echo()
          return
        }

        let firstTest = tests[tagIndex]

        // @NOTE: @TODO:
        //  was putting data on at complete,
        //  not at cycle,
        //  so data needs transforming
        if (!firstTest || !firstTest.now) return

        // prettify
        const uniqTagStr = uniqTags
          .map(t => log.colored(' ' + t + ' ', 'bgBlack.yellow'))
          .join(', ')

        const uniqKey = uniqTagStr + ' @' + prettydate(new Date(firstTest.now))

        log.data({uniqKey, uniqTagStr, uniqTags}).echo(this.debug)

        // change the keys
        regrouped[testNameAsTag][uniqKey] = tests
      })

      tagIndex++
    })

    return regrouped
  }

  /**
   * @protected
   * @since 0.4.1
   * @param  {Object} regrouped results indexed by tagged
   * @param  {Array}  [tds=[]]
   * @return {Array<string>} table rows
   */
  _makeTagTableRows(regrouped, tds = []) {
    forown(regrouped, (v, name) => {
      const groups = Object.keys(regrouped[name])
      const ref = this.getResultsWithNames

      forown(regrouped[name], (groupName, group, obj, i) => {
        this.parent.getResultsWithNames = () => ({
          names: groups,
          results: obj,
        })

        const avgs = this.avgs()

        const td = mapown(avgs, (avg, tag) => {
          const pretty = tag.split('@')
          const pureTag = pretty.shift()
          const time = pretty.pop()
          avg = log.colored(avg, this.colorForAvg(avg))
          return {[name]: [pureTag, avg, time]}
        })

        tds = tds.concat(td)
      })

      // restore
      this.parent.getResultsWithNames = ref
    })

    return tds
  }
}
