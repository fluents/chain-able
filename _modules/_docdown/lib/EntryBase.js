const {Chain, filesMatcher} = require('./chain-able')
const LinkChain = require('./LinkChain')
const tagBuilders = require('./tagBuilders')
const {
  normalizeEOL,
  parse,
  getDocBlocksFrom,
  slashStarToSlash,
} = require('./util.js')

let files
let path
let parseMap = new Map()

/**
 * @TODO !!!!!!! SPONGE PROPS + MOVE TO STORE
 *
 * The Entry constructor.
 *
 * @constructor
 * @param {string} entry The documentation entry to analyse.
 * @param {string} source The source code.
 * @param {Object} options all options as obj
 */
class Entry extends Chain {
  constructor(entry, source, options = {}) {
    super()

    const strippedEntry = LinkChain.stripLinks(normalizeEOL(entry))
    this.set('entry', strippedEntry).set('source', normalizeEOL(source))

    // scope it, sometimes options change
    files = files || options.files
    path = options.path || path

    if (!parseMap.has(strippedEntry)) {
      const parsed = parse(slashStarToSlash(this.get('entry')))
      parseMap.set(strippedEntry, parsed)
    }

    /* prettier-ignore */
    this
      .set('lang', options.lang || 'js')
      .set('parsed', parseMap.get(strippedEntry))
      .set('block', strippedEntry)
      .set('options', options)
      .set('aliases', undefined)
      .set('members', undefined)
      .set('params', undefined)
      .set('files', files)
      .set('path', path)

    // persistable/scopable
    // if (this.has('files') === false && options.files !== undefined) {
    //   this.set('files', files)
    // }
    // if (options.path !== undefined) {
    //   this.set('path', options.path)
    // }

    // better inspection, no need for 2 refs
    options.files = undefined

    this.getEntries = getDocBlocksFrom

    return this
  }
  find(list) {
    return filesMatcher(list)
  }
  getDebug(level) {
    const debug = this.get('debug')
    if (level !== undefined) return debug === level || debug.includes(level)
    return debug
  }

  // ----- EntryChain ----
}

tagBuilders(Entry.prototype)
Entry.prototype.isAlias = () => false
const getEntries = getDocBlocksFrom
Entry.getEntries = getEntries
// log.quick(Entry)

module.exports = {Entry, getEntries}
