// const ffs = require('../_modules/fluent-fs')
const log = require('fliplog')
const jetpack = require('fs-jetpack')
const ConfigStore = require('configstore')
const find = require('chain-able-find')
const {read, write, exists} = require('flipfile')
const {
  curry,
  not,
  includes,
  includesCount,
  camelCase,
  replace,
  first,
  isMatch,
  isString,
  isTrue,
  isFunction,
  isArray,
  isEmpty,
  remove,
  reverse,
  pipe,
  toMatcher,
  construct,
  invoke,
  hasOwnProperty,
  toArr,
  escapeDot,
  includesAny,
  includesAll,
  all,
  and,
  firstToUpperCase,
} = require('../exports')
const {
  forEach,
  wrapForEach,
  replaceLast,
  isNegative,
  // find
  findIndexAt,
  findMatching,
  findKey,
  findValue,
  findValues,
  findFirstMatch,
  // remap
  remapKeys,
  remapValues,
  remapToMatch,
} = require('./util/__fixme')
const {
  getFolderName,
  getFileName,
  getFolderAndFileName,
} = require('./util/_filefolder')
const {
  _res,
  del,
  fromTo,
} = require('./util')

const has = x => includes('_', x)

// includesAny('_', ['/', 'require'])
// const hasRequire = and(includes('/'), includes('require'))
// const hasRequire = and(includes('/'), includes('require'))
const hasRequire = and(has('/'), has('require'))

const entry = process.cwd()
const cwd = process.cwd()
const cwdRes = _res(cwd)
const res = _res(__dirname)

// @HACK @TODO just emulating
// const resRoot = _res(res('../'))
const resRoot = _res(fromTo.folder)
const outputPath = resRoot('.')

// @TODO pipe?
const src = cwdRes('./src')

const isRel = has('./')
const isAbs = has('/Users')
const isSrc = has('/src/')
const isTooDeep = x => x.replace(outputPath, '').split('/').length >= 2

const toRoot = x => {
  // @TODO relative-to
  if (isSrc(x)) return resRoot('./' + x.split('/src/').pop())
  else if (isTooDeep(x)) return resRoot('./' + x.split('/').pop())
  else if (isAbs(x)) return x
  else if (isRel(x)) return resRoot(x)
  else return resRoot('./' + x)
}

// only copying .js ['!*package.json', '!*.DS_Store']
const isNotIndex = not(has('index.js'))
const isIzzez = has('/is/')

const remapKeysToArr = remapKeys(toArr)
const remapValuesToArr = remapValues(toArr)

// when we have files with the same name, .onConflict, log?
const found = find
  .init()
  .recursive(true)
  .ignoreDirs(['ignant', 'node_modules'])
  .abs(true)
  .sync(true)
  // all folders have a filename with the same name as the folder
  // if they did not, we could also rename all index.js files
  // , '!*index.js'
  .matchFiles(['**/*.js'])
  .find(src)
  .results()
  .filter(isNotIndex)


const filesObj = {}
const founds = wrapForEach(found)
const hasDupeFileName = abs => {
  // prop, pipe, lense?
  const rel = filesObj[abs]
  const rels = Object.values(filesObj)
  const count = includesCount(rels, rel)
  // console.log({[rel]: count})
  if (count >= 2) {
    console.log(count, abs)
  }
  return count >= 2
}

const transformFolderAndFileCamel = (abs, folder, filename) => {
  const folderFile = folder + '/' + filename
  const transformed = camelCase(folder + '_' + filename) + '.js'
  return replace(folderFile, transformed, abs)
}


// @TODO either replaceLast, or toRel then replace
const transformIzzes = (abs, folder, filename) => {
  const fileName = getFileName(abs)
  const transformedFileName = camelCase('is_' + fileName)
  // @TODO: replaceLast (could .reverse.replace.reverse)
  let transformedAbs = replaceLast(fileName, transformedFileName, abs)
  return transformedAbs
}

// (x.includes('/deps/') ? x.split('/deps/').pop() : x.split('/src/').pop())
// pipe(replace('/src/', '/'), replace('/deps/', '/'))
const transformToFileName = x => (x ? x.split('/').pop() : x)

const transformSymbol = (abs, folder, fileName) => {
  const beginning = abs.split(`/${folder}/`).shift()
  return beginning + '/Symbol.' + firstToUpperCase(fileName) + '.js'
}
const ignore = () => false

// @TODO transform `compose/` to `nameChain`
//       + root ones `Chain` if they don't already have it
// @TODO !!!!!!!!!!!!!!!!!!! TRANSFORM, THIS-AS-A-CHAIN
// key to matcher
const map = {
  // 'eh': 'eh',
  'index.web': ignore,
  '/conditional/all': 'all',
  '/to/*.js': transformFolderAndFileCamel,
  '/is/*.js': transformIzzes,
  '/symbols/*.js': transformSymbol,
  '*': transformToFileName,
}

// const firstIsFunction = pipe(first, isFunction)
const firstIsFunction = x => isFunction(x[0])

// includesAny
// (['.', '-', '_']).map(has)
const isNotCamelCase = x =>
  x.includes('.') || x.includes('-') || x.includes('_')


const doubleExtHACK = has('.js.js')
const doubleSlashToSingle = replace(/\/{2}/, '/')

// isLast, isFirst ? kind of is .before .after if it's only flat...
let remapped = founds
  .forEach(abs => {
    filesObj[abs] = getFileName(abs)
  })
  .map(abs => {
    // start remap
    let remappedAbs = fromTo.data[abs] || []
    fromTo.data[abs] = remappedAbs
    // const alreadyHas = includes(remappedAbs)
    const add = x => {
      toArr(x).forEach(value => {
        let rootValue = toRoot(value)

        if (!rootValue.endsWith('.js')) {
          rootValue += '.js'
        }
        if (rootValue.endsWith('.js.js')) {
          rootValue = rootValue.replace('.js.js', '.js')
        }
        if (remappedAbs.includes(rootValue)) {
          return
        }

        // remappedAbs.push(value)
        remappedAbs.push(rootValue)
      })
      remappedAbs.forEach((value, index) => {
        remappedAbs[index] = toRoot(value)
        if (doubleExtHACK(remappedAbs[index])) {
          remappedAbs[index] = remappedAbs[index].split('.js').shift() + '.js'
        }
      })

      // if (isNotCamelCase(x)) add(camelCase(escapeDot(x)))
    }

    // find if we need to remap and how we will do so
    const matchFound = findMatching(map, abs)
    if (matchFound) {
      let [key, value, keys] = matchFound

      // console.log('found matching', {abs, key, value, keys})
      let [folderName, fileName] = getFolderAndFileName(abs)

      if (isArray(value) && !isEmpty(value)) {
        if (value.length > 1) {
          value = value.map(x => (isString(x) ? replace(key, value) : x))

          // @TODO was pipe, need best name
          // what's the name for this? reducing with each value updating?
          let transformed = abs
          value.forEach(val => {
            [folderName, fileName] = getFolderAndFileName(abs)
            transformed = val(transformed, folderName, fileName)
          })

          // ignore files that return falsy
          if (transformed) {
            add(transformed)
          }
        }
        else if (firstIsFunction(value)) {
          const transformed = value[0](abs, folderName, fileName)
          add(transformed)
        }
        else {
          console.log('first is not a function', {value: value[0]})
        }
      }
      else {
        const transformed = replace(key, value, abs)
        add(transformed)
      }
    }
    else if (isIzzez(abs)) {
      const transformed = transformIzzes(abs)
      add(transformed)
    }
    // @TODO default the one to use
    else if (hasDupeFileName(abs)) {
      const folderName = getFolderName(abs)
      const fileName = getFileName(abs)
      const folder_file = folderName + '_' + fileName
      const folderWithSlashes = '/' + folderName + '/'
      const beforeFolder = abs.split(folderWithSlashes).shift()
      let transformed = beforeFolder + camelCase(folder_file)

      add(transformed)
    }
    else {
      add(abs)
    }

    const fileName = getFileName(abs)

    // @TODO all snake & all camel
    if (isNotCamelCase(fileName)) {
      const beginning = abs.split(`/${fileName}`).shift()
      let transformed = beginning + '/' + camelCase(fileName) + '.js'
      // let transformed = replace(fileName, camelCase(fileName), abs)
      // log.data({transformed, camel: camelCase(fileName), fileName, abs}).echo()
      add(transformed)
    }

    // @TODO this should check if we resolve the conflict
    //       right now I will default it to first-come-first-serve (else)
    if (!hasDupeFileName(abs)) {
      // add(abs) <- keeps nested folders which is meh
      add(transformToFileName(abs))

      const [folderName] = getFolderAndFileName(abs)
      const [alpha, omega] = abs.split(folderName)
      let transformed = alpha + omega
      // replace doubleslash with 1
      transformed = doubleSlashToSingle(transformed)
      log.data({transformed}).echo()
      if (transformed.endsWith('/')) return remappedAbs
      // @TODO on getter, echo, pre easy log._
      add(transformed)
    }
    else {
      log.red('has dupe').data(abs).echo()
      // already only is added if it has not been added before
      add(abs)
    }

    return remappedAbs
    // return abs
  })


fromTo.del().write()

// @TODO
//  abstract this,
//  should pull in either/and ast parsing for requires
//  depflip
const remapRequire = contents => contents
  .split('\n')
  .map(line => {
    if (!(line.includes('/') && line.includes('require'))) return line
    // if (!hasRequire(line)) return line

    const parts = line.split('=')
    const name = parts.shift().trim()

    // remove all initial dots, and the first slash
    const sanitizeRequire = x => x.replace(/[.]/g, '').replace('/', '')

    const requireReplacer = (match, p1, offset, string) => {
      match = sanitizeRequire(match)

      const findFrom = () => {
        return fromTo.keys().filter(x => {
          const matches =
            isMatch(match, x) ||
            isMatch(x, match) ||
            x.includes(match) ||
            match.includes(x)

          return matches
        })
      }

      const requiresFound = findFrom()
      const requireFound = requiresFound ? requiresFound[0] : requiresFound

      const requireValues = fromTo.data[requireFound]
      const requireValue = requireValues ? requireValues[0] : requireValues
      return requireValue
    }

    if (parts.length === 0) return line


    const ogRequire = parts.pop().trim()

    // @TODO right here can use a new name matching the parts, bingo bango bongo
    const remappedRequires = ogRequire
      .replace(`require('`, '')
      .replace(')', '')
      .replace(`'`, '')
      .replace(/.*/, requireReplacer)
      .split('/')

    const remappedRequire = remappedRequires.pop()

    // remappedRequires
    log
      .bold('require matches')
      .data(({remappedRequire, ogRequire}))
      .echo()

    const comment = `/* remapped from ${ogRequire} */`
    return `${name} = require('./${remappedRequire}') ${comment}`
  })
  .join('\n')


// @TODO file-chain better here
fromTo.keys().forEach(key => {
  const fileNames = fromTo.data[key]

  let contents = read(key)
  contents = `/* FROM-TO: ${key.split('/chain-able/').pop()} */\n${contents}`
  contents = remapRequire(contents)

  log.bold(key).data(fileNames).echo()

  fileNames.forEach(fileName => {
    if (fileName.includes('/src/')) {
      const bad = new Error(fileName)
      log.red('bad filename').data(bad).echo()
      return
    }

    if (!fileName.endsWith('.js')) fileName += '.js'

    // log.bold(fileName).echo()
    // log.green(contents).echo()
    // log.underline('__________ \n').echo()

    if (exists(fileName)) {
      log.red('already exists').data(fileName).echo()
      return
    }

    // log.data({[fileName]: contents}).echo()
    write(fileName, contents)
  })
})
