// @TODO can also use `on-the-fly` to compile into a bundle on the fly

// this file is just when using in dev mode so huge relative paths aren't required
const {resolve} = require('path')
const moduleAlias = require('module-alias')

const res = rel => resolve(__dirname, rel)
moduleAlias.addPath(res('../../../'))
moduleAlias.addPath(res('../../'))
moduleAlias.addPath(res('../../src'))
moduleAlias.addPath(res('./node_modules'))

// const CLI = require('fluent-cli')
// const File = require('file-chain')

const {exists, read, write} = require('flipfile')
const Script = require('script-chain')
const execa = require('execa')
const find = require('chain-able-find')
const fwf = require('funwithflags')
const log = require('fliplog')
const {Chain, isUndefined} = require('chain-able')
const pkg = require('../../package.json')

const deps = {
  find,
  execa,
  Script,
  // CLI,
  resolve,
  fwf,
  log,
  exists,
  read,
  write,
  pkg,
  Chain,
  // File,
  script: () => new Script(),
}

// @TODO: needs yarn-or-npm script
/**
 * @prop {string} dir directory to resolve everything to
 * @type {ChainedMap}
 */
class AppCLI extends Chain {
  dep(name) {
    return isUndefined(name) ? deps : deps[name]
  }
  script() {
    return new Script()
  }
}
