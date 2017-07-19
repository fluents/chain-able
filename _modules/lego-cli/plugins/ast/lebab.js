const {resolve} = require('path')
const {execSync} = require('child_process')
const log = require('fliplog')
const lebab = require('lebab')
const {read, write, del} = require('flipfile')
const {GlobSync} = require('flipfile/glob')
const ChainedMap = require('chain-able')

/**
 * @TODO:
 * - [ ] should put the transformers as middleware
 * - [ ] use file-chain now that it is extracted
 * - [ ] run eslint on transformed files
 */
class File {
  /**
   * @param  {Object} obj
   */
  constructor(obj) {
    const {debug, abs} = obj
    this.abs = abs
    this._debug = !!debug
  }

  /**
   * reads file
   * @see File.contents
   * @param {boolean} [force=false]
   * @return {File}
   */
  load(force = false) {
    if (this.contents !== undefined && force === false) {
      return this
    }

    this.contents = read(this.abs)

    log.blue('loaded content').data(this.abs, this.contents).echo(this._debug)

    return this
  }

  del() {
    del(this.abs)
    return this
  }

  /**
   * @return {File}
   */
  lebab() {
    const features = ['let', 'arrow', 'commonjs', 'includes']
    const {code, warnings} = lebab.transform(this.contents, features)

    log.bold('label-ed').verbose().data({code, warnings}).echo(this._debug)

    this.contents = code

    return this
  }

  /**
   * @param {string} from
   * @param {string} to
   * @return {File}
   */
  changeExtension(from, to) {
    const abs = this.abs

    this.abs = this.abs.replace(from, to).replace('//', '/')

    log
      .underline('changed path')
      .data({from: abs, to: this.abs})
      .echo(this._debug)

    return this
  }

  /**
   * @param {string} from
   * @param {string} to
   * @return {File}
   */
  changeDir(from, to) {
    // const {input, temp} = dirs

    const abs = this.abs

    this.abs = this.abs.replace(from, to)
    // const toDir = resolve(dir, './ts')  .replace(dir, './')

    log
      .underline('changed dir')
      .data({before: abs, after: this.abs, from, to})
      .echo(this._debug)

    return this
  }

  /**
   * removes public/private/protected class properties
   * since babel does not like them, currently
   *
   * @return {Magic}
   */
  removeModifiers() {
    log.blue('data').verbose().data().echo(this._debug)

    this.contents = this.contents.replace(
      /( {0,4}public|private|protected )/gim,
      ''
    )

    return this
  }

  /**
   * @return {File}
   */
  write() {
    const {abs, contents} = this

    log.green('writing').data({abs, contents}).echo(this._debug)

    write(abs, contents)

    return this
  }
}

class Magic extends ChainedMap {
  /**
   * @param {any} parent
   */
  constructor(parent) {
    super(parent)

    this.globs = {}

    this.files = {
      js: [],
      other: [],
    }

    this.dirs = {}
    this._debug = false
  }

  /**
   * @param  {Boolean} [should=true]
   * @return {Magic}
   */
  debug(should = true) {
    return this.set('debug', should)
  }

  /**
   * @param {string} glob
   * @return {Magic}
   */
  setGlob(glob) {
    this.globs = {
      glob,
      opts: {stat: true, absolute: true},
    }

    return this
  }

  /**
   * @param {Object} dirs
   * @return {Magic}
   */
  setDirs(dirs) {
    let {js, ts, temp, dist, dir} = dirs

    // if not a single folder, split n pop
    // if (js.includes('/')) js = js.split('/').pop()
    // if (ts.includes('/')) ts = ts.split('/').pop()
    // if (temp.includes('/')) temp = temp.split('/').pop()

    // store on instance
    this.dirs = {js, ts, temp, dir}

    return this
  }

  /**
   * @see Magic.files, Magic.globs, File
   * @return {Magic}
   */
  gatherFiles() {
    // extract variables
    const {glob, opts} = this.globs

    // do globbing
    const found = new GlobSync(glob, opts).found

    const debug = this.get('debug')

    // add to instance
    this.files = found.map(abs => new File({abs, debug}))

    // const otherGlob = new GlobSync(other, opts).found
    // other: otherGlob
    //   .filter(abs => !abs.includes('.js'))
    //   .map(abs => new File({abs, debug})),

    return this
  }

  // --- handle

  /**
   * @see File.lebab
   * @return {Magic}
   */
  lebab() {
    this.files.forEach(file => {
      file.load().lebab().write()
    })

    return this
  }

  /**
   * @see Magic.gatherFiles, Magic.setDirs
   * @return {Magic}
   */
  toTypeScript() {
    // clean
    execSync(`rm -f -r ${this.dirs.ts}/`, {stdio: 'inherit'})

    // copy js dir to typescript dir
    execSync(`cp -R -f ${this.dirs.js} ${this.dirs.ts}/`, {stdio: 'inherit'})

    this.setGlob(this.dirs.ts + '/**/*.js')

    return this
  }
  saveTypeScript() {
    // then convert the js files
    this.files.forEach(file => {
      // file._debug = true
      file
        .load()
        .del() // del .js, we already loaded contents
        .changeExtension('.js', '.ts')
        .write()
    })
  }

  /**
   * @see Magic.gatherFiles, Magic.setDirs
   * @return {Magic}
   */
  toTemp() {
    // clean
    execSync(`rm -f -r ${this.dirs.temp}/`, {stdio: 'inherit'})

    // copy ts dir to temp dir
    execSync(`cp -R -f ${this.dirs.ts} ${this.dirs.temp}/`, {stdio: 'inherit'})

    this.setGlob(this.dirs.temp + '/**/*.ts')

    return this
  }
  saveTemp() {
    this.files.forEach(file => {
      file.load().del().changeExtension('.ts', '.js').removeModifiers().write()
    })
    return this
  }
}

// @TODO: add options
// @TODO: also add scripts with scriptflip...
// const dirs = {
//   dir: __dirname,
//   js: 'test',
//   ts: 'typescript',
//   temp: 'temp',
//   dist: 'dist',
// }

const dirs = {
  dir: __dirname,
  ts: 'three/src',
  temp: 'three/temp',
  dist: 'three/dist',
}

let toTypescript = false
let toTemp = false

// toTypescript = true
// toTemp = false

if (toTypescript !== false) {
  const magic = new Magic()

  magic
    .debug(false)
    .setDirs(dirs)
    .toTypeScript()
    .gatherFiles()
    .lebab()
    .saveTypeScript()
}

if (toTemp !== false) {
  const magic = new Magic()

  magic.setDirs(dirs).toTemp().gatherFiles().saveTemp()
}

if (dirs.dist) {
  const execa = require('execa')
  execa('babel', [dirs.temp, '--out-dir=' + dirs.dist], {stdio: 'inherit'})
}

module.exports = Magic

const {resolve} = require('path')
const {execSync} = require('child_process')
const log = require('fliplog')
const lebab = require('lebab')
const {read, write, del} = require('flipfile')
const {GlobSync} = require('flipfile/glob')
const ChainedMap = require('chain-able')

/**
 * @TODO:
 * - [ ] should put the transformers as middleware
 * - [ ] use file-chain now that it is extracted
 * - [ ] run eslint on transformed files
 */
class File {
  /**
   * @param  {Object} obj
   */
  constructor(obj) {
    const {debug, abs} = obj
    this.abs = abs
    this._debug = !!debug
  }

  /**
   * reads file
   * @see File.contents
   * @param {boolean} [force=false]
   * @return {File}
   */
  load(force = false) {
    if (this.contents !== undefined && force === false) {
      return this
    }

    this.contents = read(this.abs)

    log.blue('loaded content').data(this.abs, this.contents).echo(this._debug)

    return this
  }

  del() {
    del(this.abs)
    return this
  }

  /**
   * @return {File}
   */
  lebab() {
    const features = ['let', 'arrow', 'commonjs', 'includes']
    const {code, warnings} = lebab.transform(this.contents, features)

    log.bold('label-ed').verbose().data({code, warnings}).echo(this._debug)

    this.contents = code

    return this
  }

  /**
   * @param {string} from
   * @param {string} to
   * @return {File}
   */
  changeExtension(from, to) {
    const abs = this.abs

    this.abs = this.abs.replace(from, to).replace('//', '/')

    log
      .underline('changed path')
      .data({from: abs, to: this.abs})
      .echo(this._debug)

    return this
  }

  /**
   * @param {string} from
   * @param {string} to
   * @return {File}
   */
  changeDir(from, to) {
    // const {input, temp} = dirs

    const abs = this.abs

    this.abs = this.abs.replace(from, to)
    // const toDir = resolve(dir, './ts')  .replace(dir, './')

    log
      .underline('changed dir')
      .data({before: abs, after: this.abs, from, to})
      .echo(this._debug)

    return this
  }

  /**
   * removes public/private/protected class properties
   * since babel does not like them, currently
   *
   * @return {Magic}
   */
  removeModifiers() {
    log.blue('data').verbose().data().echo(this._debug)

    this.contents = this.contents.replace(
      /( {0,4}public|private|protected )/gim,
      ''
    )

    return this
  }

  /**
   * @return {File}
   */
  write() {
    const {abs, contents} = this

    log.green('writing').data({abs, contents}).echo(this._debug)

    write(abs, contents)

    return this
  }
}

class Magic extends ChainedMap {
  /**
   * @param {any} parent
   */
  constructor(parent) {
    super(parent)

    this.globs = {}

    this.files = {
      js: [],
      other: [],
    }

    this.dirs = {}
    this._debug = false
  }

  /**
   * @param  {Boolean} [should=true]
   * @return {Magic}
   */
  debug(should = true) {
    return this.set('debug', should)
  }

  /**
   * @param {string} glob
   * @return {Magic}
   */
  setGlob(glob) {
    this.globs = {
      glob,
      opts: {stat: true, absolute: true},
    }

    return this
  }

  /**
   * @param {Object} dirs
   * @return {Magic}
   */
  setDirs(dirs) {
    let {js, ts, temp, dist, dir} = dirs

    // if not a single folder, split n pop
    // if (js.includes('/')) js = js.split('/').pop()
    // if (ts.includes('/')) ts = ts.split('/').pop()
    // if (temp.includes('/')) temp = temp.split('/').pop()

    // store on instance
    this.dirs = {js, ts, temp, dir}

    return this
  }

  /**
   * @see Magic.files, Magic.globs, File
   * @return {Magic}
   */
  gatherFiles() {
    // extract variables
    const {glob, opts} = this.globs

    // do globbing
    const found = new GlobSync(glob, opts).found

    const debug = this.get('debug')

    // add to instance
    this.files = found.map(abs => new File({abs, debug}))

    // const otherGlob = new GlobSync(other, opts).found
    // other: otherGlob
    //   .filter(abs => !abs.includes('.js'))
    //   .map(abs => new File({abs, debug})),

    return this
  }

  // --- handle

  /**
   * @see File.lebab
   * @return {Magic}
   */
  lebab() {
    this.files.forEach(file => {
      file.load().lebab().write()
    })

    return this
  }

  /**
   * @see Magic.gatherFiles, Magic.setDirs
   * @return {Magic}
   */
  toTypeScript() {
    // clean
    execSync(`rm -f -r ${this.dirs.ts}/`, {stdio: 'inherit'})

    // copy js dir to typescript dir
    execSync(`cp -R -f ${this.dirs.js} ${this.dirs.ts}/`, {stdio: 'inherit'})

    this.setGlob(this.dirs.ts + '/**/*.js')

    return this
  }
  saveTypeScript() {
    // then convert the js files
    this.files.forEach(file => {
      // file._debug = true
      file
        .load()
        .del() // del .js, we already loaded contents
        .changeExtension('.js', '.ts')
        .write()
    })
  }

  /**
   * @see Magic.gatherFiles, Magic.setDirs
   * @return {Magic}
   */
  toTemp() {
    // clean
    execSync(`rm -f -r ${this.dirs.temp}/`, {stdio: 'inherit'})

    // copy ts dir to temp dir
    execSync(`cp -R -f ${this.dirs.ts} ${this.dirs.temp}/`, {stdio: 'inherit'})

    this.setGlob(this.dirs.temp + '/**/*.ts')

    return this
  }
  saveTemp() {
    this.files.forEach(file => {
      file.load().del().changeExtension('.ts', '.js').removeModifiers().write()
    })
    return this
  }
}

// @TODO: add options
// @TODO: also add scripts with scriptflip...
// const dirs = {
//   dir: __dirname,
//   js: 'test',
//   ts: 'typescript',
//   temp: 'temp',
//   dist: 'dist',
// }

const dirs = {
  dir: __dirname,
  ts: 'three/src',
  temp: 'three/temp',
  dist: 'three/dist',
}

let toTypescript = false
let toTemp = false

// toTypescript = true
// toTemp = false

if (toTypescript !== false) {
  const magic = new Magic()

  magic
    .debug(false)
    .setDirs(dirs)
    .toTypeScript()
    .gatherFiles()
    .lebab()
    .saveTypeScript()
}

if (toTemp !== false) {
  const magic = new Magic()

  magic.setDirs(dirs).toTemp().gatherFiles().saveTemp()
}

if (dirs.dist) {
  const execa = require('execa')
  execa('babel', [dirs.temp, '--out-dir=' + dirs.dist], {stdio: 'inherit'})
}

module.exports = Magic
