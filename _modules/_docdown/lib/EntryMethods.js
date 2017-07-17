/* eslint jsdoc/require-example: "OFF" */
/* eslint valid-jsdoc: "OFF" */
/* prettier-ignore */

const fp = require('lodash/fp')
const _ = require('lodash')
const Alias = require('./Alias.js')
const prettierier = require('./prettier')
const {Entry, getEntries} = require('./EntryBase')
const LinkChain = require('./LinkChain')
const {
  isUndefined,
  isString,
  toArr,
  camelCase,
  isNullOrUndefined,
} = require('./chain-able')
const {
  stripPeriodsAndDashes,
  isLowerCaseType,
  matchesFunction,
  formatWithParens,
  toHash,
  getParentParam,
  getFunction,
  getFallbackFunction,
  extractCall,
  log,
  format,
  compareNatural,
  getAsStr,
} = require('./util.js')

// these all augment a fm proto by taking them out of the class into an object
// then onto proto
// -----------------------------

let api

class EntryMax extends Entry {
  constructor(...args) {
    super(...args)
    this.extendValues(['since', 'version', 'license'])

    // this.getTag = _.memoize(this.getTag)
    // this.getValue = _.memoize(this.getValue)
    // this.getCategory = _.memoize(this.getCategory)
    // this.tagFactory = _.memoize(this.tagFactory)
    // this.getMembers = _.memoize(this.getMembers)
    // this.getAliases = _.memoize(this.getAliases)
    // this.getName = _.memoize(this.getName)
    // this.getDesc = _.memoize(this.getDesc)
    // this.getExample = _.memoize(this.getExample)
    // this.getParamType = _.memoize(this.getParamType)
    // this.getParams = _.memoize(this.getParams)
    // this.getType = _.memoize(this.getType)
    // this.isFunction = _.memoize(this.isFunction)
    // this.isPlugin = _.memoize(this.isPlugin)
    // this.isPrivate = _.memoize(this.isPrivate)
    // this.isStatic = _.memoize(this.isStatic)

    // this.set = _.memoize(this.set)
    // this.get = _.memoize(this.get)
    // this.has = _.memoize(this.has)
    // this.entries = _.memoize(this.entries)
  }

  extendValues(names) {
    names.forEach(name => {
      this[camelCase('get-' + name)] = xtended => this.getValue(name)
      this[name] = xtended => this.getValue(name)
    })
    return this
  }

  /**
   * Extracts the entry's `alias` objects.
   *
   * @memberOf Entry
   * @param {number} index The index of the array value to return.
   * @returns {Array|string} Returns the entry's `alias` objects.
   */
  getAliases(index) {
    if (this.has('aliases') === false) {
      const aliasesValue = this.getValue('alias')
      const parsedAliases = _(aliasesValue)
        .split(/,\s*/)
        .compact()
        .sort(compareNatural)
        .map(value => new Alias(value, this))
        .value()

      this.set('aliases', parsedAliases)
    }

    const aliases = this.get('aliases')
    return isUndefined(index) ? aliases : aliases[index]
  }

  /**
   * Extracts the function call from the entry.
   *
   * @memberOf Entry
   * @returns {string} Returns the function call.
   */
  getCall() {
    const entry = this.get('block')
    let calls = getFunction(entry)

    if (!calls) {
      calls = getFallbackFunction(entry)
      calls = extractCall(calls)
    }

    // only check calls for functions
    const name = this.getValue('name') || calls
    if (!this.isFunction()) return name

    // array of params to iterate
    const params = this.getParams()
    calls = _.castArray(calls)

    // Compile the function call syntax.
    _.each(params, param => {
      const paramValue = param[1]
      const parentParam = getParentParam(paramValue)

      let parentIndex = -1
      if (parentParam !== null) {
        const parentPredicate = paramForIndex =>
          _.trim(paramForIndex[1], '[]').split(/\s*=/)[0] === parentParam

        parentIndex = _.findIndex(params, parentPredicate)
      }

      // Skip params that are properties of other params (e.g. `options.leading`).
      if (_.get(params[parentIndex], 0) !== 'Object') {
        calls.push(paramValue)
      }
    })

    // Format the function call.
    return name + '(' + calls.slice(1).join(', ') + ')'
  }

  /**
   * Extracts the entry's `category` data.
   *
   * @memberOf Entry
   * @returns {string} Returns the entry's `category` data.
   */
  getCategory() {
    let category = this.getValue('category')
    if (category) return category

    if (this.getType() === 'Function') category = 'Methods'
    else category = 'Properties'

    return category
  }

  /**
   * Extracts the entry's hash value for permalinking.
   *
   * @memberOf Entry
   * @param {string} [style] The hash style.
   * @returns {string} Returns the entry's hash value (without a hash itself).
   */
  getHash(style) {
    let members = _.toString(this.getMembers(0))

    if (style === 'github') {
      if (members) {
        members += this.isPlugin() ? 'prototype' : ''
      }

      members += this.getCall()
      return toHash(members)
    }

    if (members) {
      members += '-' + (this.isPlugin() ? 'prototype-' : '')
    }

    members += this.isAlias() ? this.getOwner().getName() : this.getName()

    return stripPeriodsAndDashes(members)
  }

  /**
   * Resolves the entry's line number.
   *
   * @memberOf Entry
   * @returns {number} Returns the entry's line number.
   */
  getLineNumber() {
    const source = this.get('source')
    const entry = this.get('block')

    const lines = source
      .slice(0, source.indexOf(entry) + entry.length)
      .match(/\n/g)
      .slice(1)

    // Offset by 2 because the first line number is before a line break and the
    // last line doesn't include a line break.
    return lines.length + 2
  }

  /**
   * Extracts the entry's `member` data.
   *
   * @memberOf Entry
   * @param {number} [index] The index of the array value to return.
   * @returns {Array|string} Returns the entry's `member` data.
   */
  getMembers(index) {
    if (!this.get('members')) {
      const memberSlashOf = this.getValue('member') || this.getValue('memberOf')
      const members = _(memberSlashOf)
        .split(/,\s*/)
        .compact()
        .sort(compareNatural)
        .value()

      this.set('members', members)
    }

    const members = this.get('members') || []
    // if (!members) log.quick(this)
    return isUndefined(index) ? members : members[index]
  }

  /**
   * Extracts the entry's `name` data.
   *
   * @memberOf Entry
   * @returns {string} Returns the entry's `name` data.
   */
  getName() {
    if (this.hasTag('name')) return this.getValue('name')
    if (this.hasTag('func')) return this.getValue('func')
    if (this.hasTag('method')) return this.getValue('method')
    else return _.toString(_.first(this.getCall().split('(')))
  }

  tagFactory(prop) {
    const tag = this.getTag(prop)
    const desc = getAsStr(tag, 'description')
    const type = getAsStr(tag, 'type.name') || '*'
    return {tag, desc, type, prop, entry: this}
  }

  // --------------------------------
  // }
  // class EntryTagOps extends EntryMax {
  // --------------------------------

  // ---- crud ----

  /**
   * Checks if `entry` has a tag of `tagName`.
   *
   * @private
   * @param {string} tagName The name of the tag.
   * @returns {boolean} Returns `true` if the tag is found, else `false`.
   */
  hasTag(tagName) {
    return this.getTag(tagName) !== null
  }

  /**
   * Gets an `entry` tag by `tagName`.
   * @private
   * @param {Object} entry The entry to inspect.
   * @param {string} tagName The name of the tag.
   * @returns {null|Object} Returns the tag.
   *
   * @NOTE was this `tags = _.find(parsed.tags, ['title', tagName]) || null`
   */
  getTag(tagName) {
    const parsed = this.get('parsed')

    // @TODO: re optimize this fn
    // if (this.memoized.get('tag', tagName))

    let tags = parsed.tags.filter(tag => tag.title === tagName)

    if (this.getDebug()) {
      log.bold(tagName).data({tags}).echo()
      log.data(parsed.tags).echo()
    }

    if (tags.length === 1) tags = tags[0]
    else if (tags.length === 0) tags = null

    return tags
  }

  /**
   * Gets an `entry` tag value by `tagName`.
   *
   * @private
   * @param {string} tagName The name of the tag.
   * @returns {string} Returns the tag value.
   */
  getValue(tagName) {
    const tag = this.getTag(tagName)
    const getTagProp = _.partial(_.get, tag, _)

    const parsed = this.get('parsed')
    let description = parsed.description

    if (tagName === 'alias') {
      description = getTagProp('name')

      // Doctrine can't parse alias tags containing multiple values so extract
      // them from the error message.
      const error = _.first(getTagProp('errors'))
      if (error) {
        // '....'
        // 'abc' abc
        description += error.replace(/^[^']*'|'[^']*$/g, '')
      }
    }
    else if (tagName === 'type') {
      description = getTagProp('type.name')
    }
    else if (tagName !== 'description') {
      // fallback?
      description = getTagProp('name') || getTagProp('description')
    }

    // @example
    //  [ { title: 'example',
    //      description: 'chain\n
    //      .set(\'moose\', {eh: true})\n
    //      .tap(\'moose\', moose => {moose.eh = false; return moose})\n
    //       .get(\'moose\')\n\n   // => {eh: false}',
    //      lineNumber: 19 },
    if (tagName === 'example') {
      return toArr(tag).filter(t => t).map(example => example.description)
    }
    else {
      return format(description)
    }
  }

  // }
  // ----------------------------------
  // class EntryTags extends EntryTagOps {
  // ----------------------------------

  /**
   * Extracts the entry's description.
   *
   * @memberOf Entry
   * @returns {string} Returns the entry's description.
   */
  getDesc() {
    const {tags} = this.get('parsed')
    const type = this.getType()
    const value = this.getValue('description') || this.getValue('desc')

    // const isInvalid = type === 'Function' ||
    if (this.getDebug()) {
      log.data({value, type}).echo()
      log.data({tags}).echo()
      console.log('\n\n\n\n\n\n\n\n\n')
    }

    if (type === 'unknown') return type
    // if (type === 'Function') return value
    if (!value) return type

    // if (isInvalid) return type
    // else return formatWithParens(type) + value
    const formatted = formatWithParens(type) + value
    return formatted
  }

  /**
   * Extracts the entry's `example` data.
   *
   * @memberOf Entry
   * @returns {string} Returns the entry's `example` data.
   */
  getExample() {
    let examples = this.getValue('example')

    if (isString(examples)) {
      examples = [examples]
    }
    else if (examples) {
      examples = _.flatten([examples])

      if (this.getDebug()) {
        +log.bold('@examples').data(examples)
      }

      if (isNullOrUndefined(examples[0])) {
        if (this.getDebug()) {
          const msg =
            'WARNING: fix the @example syntax on line: ' +
            this.getLineNumber() +
            ' in file: ' +
            this.get('path')

          log.yellow(msg).data(this.get('parsed')).echo(false)
        }

        examples = []
      }
    }
    else {
      examples = []
    }

    const lang = this.get('lang')
    return examples
      .map(example => prettierier(example))
      .map(example => '```' + lang + '\n' + example + '\n```')
  }

  // }
  // --------------------------------
  // class EntryParams extends EntryTags {
  // --------------------------------

  /**
   * Gets the param type of `tag`.
   *
   * @private
   * @param {Object} tag The param tag to inspect.
   * @returns {string} Returns the param type.
   *
   * @TODO examples
   */
  getParamType(tag) {
    const {type} = tag
    const getParamType = this.getParamType.bind(this)

    let paramType = ''
    let expression = tag.expression

    switch (type) {
      case 'AllLiteral':
        paramType = '*'
        break

      case 'NameExpression':
        paramType = _.toString(tag.name)
        break

      case 'RestType':
        paramType = '...' + paramType
        break

      case 'TypeApplication':
        expression = undefined
        paramType = _(tag)
          .chain()
          .get('applications')
          .map(_.flow(getParamType, fp.add(fp, '[]')))
          .sort(compareNatural)
          .join('|')
          .value()
        break

      case 'UnionType':
        paramType = _(tag)
          .chain()
          .get('elements')
          .map(getParamType)
          .sort(compareNatural)
          .join('|')
          .value()
    }

    if (expression) {
      paramType += getParamType(expression)
    }

    return type === 'UnionType' ? '(' + paramType + ')' : paramType
  }

  /**
   * Extracts the entry's `param` data.
   *
   * @memberOf Entry
   * @param {number} [index] The index of the array value to return.
   * @returns {Array} Returns the entry's `param` data.
   */
  getParams(index) {
    let params = this.get('params')

    if (!params) {
      const tags = this.get('parsed.tags')

      params = _(tags)
        .filter(['title', 'param'])
        .filter('name')
        .map(tag => {
          const defaultValue = tag.default
          const desc = format(tag.description)
          const type = this.getParamType(tag.type)
          let name = _.toString(tag.name)

          if (defaultValue !== null) {
            name += '=' + defaultValue
          }
          if (_.get(tag, 'type.type') === 'OptionalType') {
            name = '[' + name + ']'
          }

          return [type, name, desc]
        })
        .value()

      this.set('params', params)
    }

    return isUndefined(index) ? params : params[index]
  }

  /**
   * Extracts the entry's `type` data.
   *
   * @memberOf Entry
   * @returns {string} Returns the entry's `type` data.
   */
  getType() {
    const type = this.getValue('type')

    if (!type) {
      return this.isFunction() ? 'Function' : 'unknown'
    }
    else if (isLowerCaseType(type) === true) {
      return _.capitalize(type)
    }
    else {
      return type
    }
  }

  // --------------------------------
  // }
  // class EntryIs extends EntryParams {
  // --------------------------------

  /**
   * Checks if the entry is a constructor.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if a constructor, else `false`.
   */
  isCtor() {
    return this.hasTag('constructor')
  }

  /**
   * Checks if the entry is a function reference.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if the entry is a function reference, else `false`.
   */
  isFunction() {
    return !!(
      this.isCtor() ||
      _.size(this.getParams()) ||
      _.size(this.getReturns()) ||
      this.hasTag('function') ||
      matchesFunction(this.get('block'))
    )
  }

  /**
   * Checks if the entry is a license.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if a license, else `false`.
   */
  isLicense() {
    return this.hasTag('license')
  }

  /**
   * Checks if the entry *is* assigned to a prototype.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if assigned to a prototype, else `false`.
   */
  isPlugin() {
    return !this.isCtor() && !this.isPrivate() && !this.isStatic()
  }

  /**
   * Checks if the entry is private.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if private, else `false`.
   */
  isPrivate() {
    if (this.license()) return true
    if (this.hasTag('private')) return true
    if (_.isEmpty(this.get('parsed.tags'))) return true
    return false
  }

  /**
   * actually more like all of our entries
   * @param  {Array<EntryChain>} [_api=undefined]
   * @return {Array} when undefined arg
   */
  api(_api = undefined) {
    if (_api) api = _api
    return api
  }

  /**
   * Checks if the entry is *not* assigned to a prototype.
   *
   * @memberOf Entry
   * @returns {boolean} Returns `true` if not assigned to a prototype, else `false`.
   */
  isStatic() {
    const getParent = () => _.last(_.toString(this.getMembers(0)).split(/[#.]/))
    const isPublic = !this.isPrivate()
    let isStatic = isPublic && this.hasTag('static')

    // Get the isStatic in cases where it isn't explicitly stated.
    if (isPublic && !isStatic) {
      const parent = getParent()
      if (!parent) {
        return true
      }

      // @TODO: ensure this is good to go
      // const source = this.get('source')
      // const entries = this.getEntries(source)
      // const options = this.get('options')

      for (let i = 0; i < api.length; i++) {
        const entry = api[i]
        if (entry.getName() === parent) {
          isStatic = !entry.isCtor()

          // @NOTE: did this mean to actually return outside of the loop?
          return false
        }
      }

      // _.each(entries, entry => {
      //   const entryChain = new EntryAsFunc(entry, source, options)
      //   if (entryChain.getName() === parent) {
      //     isStatic = !entryChain.isCtor()
      //
      //     // @NOTE: did this mean to actually return outside of the loop?
      //     return false
      //   }
      // })
    }
    return isStatic
  }

  // }
  // class TagRemaps extends EntryIs {

  getTests() {
    const files = this.get('files')
    const {tag, desc, type} = this.tagFactory('tests')

    let found = []

    if (tag && files) {
      const findFilesMatching = this.find(files.tests.abs)
      found = findFilesMatching(desc).map(files.toRel)
    }

    if (this.getDebug()) {
      log.bold('@tests').data({type, desc, found}).echo()
    }

    return found || []
  }
  getTypes() {
    const files = this.get('files')
    const {tag, desc, type} = this.tagFactory('types')

    let found = []
    if (tag && files) {
      const findFilesMatching = this.find(files.typings.abs)
      found = findFilesMatching(desc).map(files.toRel)
    }

    if (this.getDebug()) {
      log.bold('@types').data({desc, found}).echo()
    }

    return found || []
  }

  // @return {Array<{{linkHref: string, linkName: string}}>}
  getLinkLines(needle) {
    const linkChain = this.linkChain.factory(needle)
    // console.log({linkChain})
    return linkChain
  }

  /**
   * @TODO ADD @TUTORIAL
   */
  getSee() {
    const linksy = this.get('block').includes('@see')
    if (linksy) {
      const remapChain = this.linkChain.remapSee()
      // log.bold('remapChain').data(remapChain).echo()
      return remapChain
    }

    return []
  }
  getLink() {
    const linksy = this.get('block').includes('@link')
    if (linksy) {
      const linkLines = this.getLinkLines('@link')
      return linkLines
    }
    return []
  }
}

const EntryChainAll = EntryMax

/*----------------------------------------------------------------------------*/
// refactor here out - just is used by isStatic

// let entryChain
let linkChain
let entryChains = new Map()

function EntryAsFunc(entry, source, options = {}) {
  const key = JSON.stringify({entry, source, options})

  if (entryChains.has(key)) {
    return entryChains.get(key)
  }

  const instance = new EntryChainAll(entry, source, options)
  linkChain.entry(x => instance)
  instance.options = options
  instance.linkChain = linkChain

  entryChains.set(key, instance)
  return instance
}

linkChain = linkChain || new LinkChain(x => EntryChainAll.prototype)
EntryAsFunc.getEntries = getEntries

module.exports = EntryAsFunc
