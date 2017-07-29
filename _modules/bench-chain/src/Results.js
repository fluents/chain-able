/* eslint import/no-dynamic-require: "off" */
const {resolve} = require('path')
const exists = require('flipfile/exists')
const write = require('flipfile/write')
const log = require('fliplog')
const ObjChain = require('obj-chain-core')
const ChainedMap = require('./_chains')

/**
 * @TODO: should use obj-chain for the file as well so just a file swap, same api
 */
module.exports = class Results extends ChainedMap {
  /**
   * @param  {BenchChain} parent
   * @param  {boolean} [configStore=false] use configstore
   * @return {Results}
   */
  static init(parent, configStore = false) {
    return new Results(parent, configStore)
  }

  /**
   * @param  {BenchChain} parent
   * @param  {boolean} [configStore=false] use configstore
   */
  constructor(parent, configStore = false) {
    super(parent)

    if (configStore) {
      this.configStore(configStore)
    }

    if (parent && parent.has && parent.has('debug')) {
      this.debug(parent.get('debug'))
    }
    else {
      this.debug(false)
    }
  }

  /**
   * @desc use configstore via obj-chain (for easy escaping of `dot` syntax)
   * @since 0.4.4
   * @param  {boolean} use
   * @return {BenchChain} @chainable
   */
  configStore(use = true) {
    const configStore = new ObjChain({}, ['config']).setup().dot(false)
    return this.set('configStore', configStore)
  }

  /**
   * @since 0.5.0
   * @desc   add data to record
   * @param  {string} suiteName bench suite name
   * @param  {string} name   name of test
   * @param  {Object} result data to record
   * @return {Results} @chainable
   */
  add(suiteName, name, result) {
    const data1 = this.getForName(suiteName)
    const data2 = this.getForNameLatest(suiteName)

    if (!data1[name]) data1[name] = []
    if (!data2[name]) data2[name] = []
    data1[name].push(result)
    data2[name].push(result)

    return this
  }

  /**
   * @since 0.5.0
   * @desc latest run results only
   * @param  {string} name suite name
   * @return {Object}      results
   */
  getForNameLatest(name) {
    if (name !== undefined) {
      if (this.latest[name] === undefined) {
        this.latest[name] = {}
      }
      return this.latest[name]
    }
    return this.latest
  }

  /**
   * @since 0.4.1
   * @desc gets results from file keyed
   * @param  {string} name suite name
   * @param  {boolean} [latest=false] latest run results only
   * @return {Object}      results
   */
  getForName(name, latest = false) {
    if (latest === true) {
      return this.getForNameLatest(name)
    }

    if (name !== undefined) {
      if (this.data[name] === undefined) {
        this.data[name] = {}
      }
      return this.data[name]
    }
    return this.data
  }

  /**
   * @desc resolve file, paths to file
   *       sets abs: absolute path
   *       sets rel: relative path
   * @since 0.4.1
   * @param  {string} dir
   * @param  {string} filename
   * @return {BenchChain} @chainable
   */
  setup(dir, filename) {
    if (filename && !filename.includes('.json') && !filename.includes('.js')) {
      filename = filename + '.json'
    }
    const rel = filename || './results.json'
    const abs = resolve(dir, rel)
    return this.set('abs', abs).set('rel', rel)
  }

  /**
   * @protected
   * @desc   load from file or configstore (still a file but diff)
   * @since  0.2.0
   * @see    BenchChain.results
   * @param  {boolean} [force=false] force reload
   * @return {BenchChain} @chainable
   */
  load(force = false) {
    if (this.data && force === false) return this

    let {abs, configStore} = this.entries()
    this.latest = {}

    if (abs.includes('configstore') && !configStore) {
      configStore = this.configStore(true).get('configStore')

      log
        .green('results loaded from configstore: ')
        .json({'(cmd + click)': log.colored(configStore.path, 'underline')})
        .echo()
    }

    // use configstore
    if (configStore) {
      log.underline('using configstore').echo(this.get('debug'))
      if (!configStore.has(abs)) {
        configStore.set(abs, {})
      }
      this.data = configStore.get(abs) || {}

      return this
    }

    if (exists(abs) === false) write(abs, '{}')

    this.data = require(abs)
    log.green('loading').echo(this.get('debug'))

    return this
  }

  /**
   * @protected
   * @since 0.2.0
   * @desc saves to file or configstore
   * @see BenchChain.load, BenchChain.filename
   * @return {BenchChain} @chainable
   */
  save() {
    log.green('saving').echo(this.get('debug'))
    const {configStore, abs} = this.entries()

    if (configStore) {
      configStore.set(abs, JSON.stringify(this.data))

      log
        .green('results saved to: ')
        .json({'(cmd + click)': log.colored(configStore.path, 'underline')})
        .echo()

      return this
    }

    write(abs, JSON.stringify(this.data))

    return this
  }
}
