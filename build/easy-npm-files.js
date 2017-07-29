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
  trim,
  uniq,
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
  isDir,
} = require('./util')

const camelCase = str =>
  str
    // spaces with underscore
    .replace(/\s+/g, '-')
    // < underscores & dashes until whitespace or end
    // > .toUpperCase x & '_'
    .replace(/[.-](\w|$)/g, (m, x) => x.toUpperCase())

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
const resRoot = _res(res('./FAKEROOT'))
// const resRoot = _res(fromTo.folder)
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
const isNotIndex = x => !x.includes('runner') &&
  (!x.includes('index') || x.includes('indexable'))
  // not(has('index.js'))
const isIzzez = has('/deps/is/')

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
  .filter(file => !read(file).trim().startsWith('/** @ignore 🚧 '))


const filesMeta = {}
const filesObj = {}
// const founds = wrapForEach(found)
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
  const transformed = camelCase(folder + '-' + filename) + '.js'
  return replace(folderFile, transformed, abs)
}
const prefixFileNameCamel = (abs, prefix) => {
  const fileName = getFileName(abs)
  const folderName = getFolderName(abs)
  const folderFile = folderName + '/' + fileName
  const transformed = folderName + '/' + camelCase(prefix + '-' + fileName) + '.js'
  return replace(folderFile, transformed, abs)
}


// @TODO either replaceLast, or toRel then replace
const transformIzzes = (abs, folder, filename) => {
  // @HACK @FIXME @TODO
  // if (filename.includes('toS')) return abs

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
const docBlocks = includesCount('_', '/**')
// remove /*, //, *, spaces
const stripCommentsWhitespace = /(\*|\s|\t|\n|\/)*/gmi

// @TODO !!! support returning []
const transformToAlias = (abs, folder, fileName) => {
  let contents = read(abs)

  const docBlocksCount = docBlocks(contents)

  // only keep files that have ONE docblock since we are aliasing a whole file
  if (docBlocksCount > 1 || docBlocksCount <= 0) {
    return abs
  }

  // log.quick(docBlocks(contents), contents)

  let aliases = []

  aliases = contents
    .split('\n')
    .filter(line => line.includes('@alias'))
    .map(line => {
      log.green(line).echo()

      return line
        .trim()
        .replace('@alias', '')
        .replace(stripCommentsWhitespace, '')
    })

  // map each alias to a new filename
  if (aliases.length) {
    if (!folder) folder = getFolderName(abs)
    const aliased = aliases.map(alias => {
      let beginning = abs.split(`/${folder}/`).shift()
      log.data({beginning, folder}).echo()
      return beginning + '/' + alias + '.js'
    })
    log.blue('aliased').data(aliased).echo()
    return aliased
  }

  return abs
}

// @TODO transform `compose/` to `nameChain`
//       + root ones `Chain` if they don't already have it
// @TODO !!!!!!!!!!!!!!!!!!! TRANSFORM, THIS-AS-A-CHAIN
// key to matcher
const map = {
  // 'eh': 'eh',
  'index.web': ignore,
  '/conditional/all': 'all',
  '/cast/*.js': transformFolderAndFileCamel,
  '/deps/is/*.js': transformIzzes,
  '/flipped/*.js': transformFolderAndFileCamel,
  '/native/*.js': transformFolderAndFileCamel,
  // '/symbols/*.js': transformSymbol,
  '*': transformToFileName,
  // '**': transformToAlias,
}

// ignore original
const mapOnlyRename = {
  'native/hasOwnProperty.js': true,
}

// const firstIsFunction = pipe(first, isFunction)
const firstIsFunction = x => isFunction(x[0])

// includesAny
// (['.', '-', '_']).map(has)
const isNotCamelCase = x =>
  x.includes('.') || x.includes('-') || x.includes('_')


const doubleExtHACK = has('.js.js')
const doubleSlashToSingle = replace(/\/{2}/, '/')

let allFound = found.concat(fromTo.keys()).filter(uniq)
allFound.forEach(abs => filesObj[abs] = getFileName(abs))
filesMeta.files = filesObj

// isLast, isFirst ? kind of is .before .after if it's only flat...
let remapped = allFound
  .map(abs => {
    if (!isString(abs)) {
      log.red('NOT_STRING').data({abs}).echo()
      return abs
    }

    // start remap
    fromTo.data[abs] = fromTo.data[abs] || [abs]
    let remappedAbs = fromTo.data[abs]

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
          log.red('already has').data({rootValue})
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

    // @NOTE
    const aliased = transformToAlias(abs)
    toArr(aliased).forEach(alias => add(alias))


    // find if we need to remap and how we will do so
    const matchFound = findMatching(map, abs)
    const ignoreOriginal = findMatching(mapOnlyRename, abs)


    // @TODO @HACK @FIXME --- EXAMPLE NATIVE/HASOWNPROPERTY UGH
    if (ignoreOriginal) {
      // log.quick({abs, ignoreOriginal})
    }

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
            // console.log({folderName, fileName, val, transformed})

            // @NOTE `OR` transformed
            transformed = val(transformed, folderName, fileName) || transformed
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
      // if (!ignoreOriginal)
      else {
        const transformed = replace(key, value, abs)
        add(transformed)
      }

      // @NOTE
      // if (ignoreOriginal) {
      //   return remappedAbs
      // }
    }
    else if (isIzzez(abs)) {
      const transformed = transformIzzes(abs)
      add(transformed)
    }
    // @TODO default the one to use
    else if (hasDupeFileName(abs)) {
      const folderName = getFolderName(abs)
      const fileName = getFileName(abs)
      const folder_file = folderName + '-' + fileName
      const folderWithSlashes = '/' + folderName + '/'
      const beforeFolder = abs.split(folderWithSlashes).shift()
      let transformed = beforeFolder + camelCase(folder_file)

      add(transformed)
    }
    // if (!ignoreOriginal)
    else {
      add(abs)
    }

    // @NOTE
    // if (ignoreOriginal) {
    //   return remappedAbs
    // }

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

    add(abs)

    return remappedAbs
    // return abs
  })


fromTo.del().write()

const sillyRegExpSpecial = /(\s|\^|\$|\#|\@|\!|\&|\=|\+|\t|\n|\?|\>|\<|\{|\}|\[|\]|\|\'|\"|\`|\\|\)|\(|\:|\;|\*|\~|\%|\,)*/gmi
const dotSlash = /(\.\/)/gmi
const matchRequireString = requirePath => requirePath = requirePath
  .replace('require(', '')
  // .replace(/[\W_-]+/g, '')
  .replace(sillyRegExpSpecial, '')
  // .replace(dotSlash, '')
  .replace(/'*/gmi, '')

const isAllCapital = x => (x ? x
  .split('')
  .map(char => {
    // it is a letter
    if (/[A-Z]/i.test(char)) {
      // is it uppercase
      return (/[A-Z]/).test(char)
    }
  })
  .every(isTrue)
  : false)

const onlyLetters = x => x
  .split('')
  .filter(match => {
    if (/[a-zA-Z_-]/i.test(match)) return match
    else return false
  })
  .join('')

// remove all initial dots, and the first slash
const sanitizeRequire = x => x.replace(/[.]/g, '').replace('/', '')
const stripWhitespace = replace(/(\s|\t|\n)+/g, '')
const _isComment = x =>
  x.startsWith('//') ||
  x.startsWith('*') ||
  x.startsWith('/*')
const isComment = pipe(trim, stripWhitespace, _isComment)
function _descend(fn, a, b) {
  var aa = fn(a)
  var bb = fn(b)
  // @NOTE DESCENDING
  return aa > bb ? -1 : aa < bb ? 1 : 0
  // return aa < bb ? -1 : aa > bb ? 1 : 0
}
const descend = curry(3, _descend)


// @TODO
//  abstract this,
//  should pull in either/and ast parsing for requires
//  depflip
const remapRequire = (contents, abs) => contents
  .split('\n')
  .map(line => {
    if (!(line.includes('/') && line.includes('require'))) return line
    // if (!hasRequire(line)) return line
    if (isComment(line)) return line

    const parts = line.split('=')
    const name = parts.shift().trim()

    const requireReplacer = (match, p1, offset, string) => {
      const ogMatch = match
      const matchIsDir = isDir(ogMatch)
      let matchName = match

      match = sanitizeRequire(match)

      // dir... @example deps/util/util.js
      // log.color('white.underline').text('matchIsDir').data(matchIsDir).echo()
      // then use a more specific namespace
      if (matchIsDir) {
        if (match.includes('/')) matchName = match.split('/').pop()

        match = match + '/' + matchName + '.js'
      }
      if (matchIsDir) {
        // log.data(ogMatch).echo()
        // console.log('\n\n\n\n')
        // log.data(fromTo.keys()).echo()
        // log.data({match}).echo()
      }


      const findFrom = () => {
        return fromTo.keys().filter(x => {
          const matches =
            isMatch(match, x) ||
            isMatch(x, match) ||
            x.includes(match) ||
            match.includes(x)

          if (matches) {
            // log.data({match, x}).echo()
          }
          // don't want to require itself, if it is the longest
          return matches && getFileName(abs) !== getFileName(x)
        })
      }

      let requiresFound = []
      // let requiresFound = findFrom()

      // we know it is a dir, and we could not find it
      if (matchIsDir && (requiresFound || requiresFound.length === 0)) {
        const sanitizedMatchName = sanitizeRequire(matchName)
        requiresFound = [sanitizedMatchName]

        // const resolvedMatchName = resRoot(matchName)
        // log
        //   .data({requiresFound, matchName, resolvedMatchName, sanitizedMatchName})
        //   .echo()

        return sanitizedMatchName + '.js'
      }

      const requireFound = requiresFound ? requiresFound[0] : requiresFound

      const descending = descend(x => x.length)
      let requireValues = fromTo.data[requireFound] || []

      let hasIs = false
      requiresFound.forEach(val => {
        if (val.includes('is/') || val.startsWith('is')) {
          hasIs = true
        }
      })
      if (hasIs) {
        requireValues = requireValues.sort(descending)
      }

      let requireValue = requireValues ? requireValues.shift() : requireValues

      // if one is all caps and one is not, that is not correct
      const isRequireCaps = isAllCapital(requireValue)
      const isMatchCaps = isAllCapital(match)
      // if (isRequireCaps && !isMatchCaps) {
      //   requireValue = requireValues.shift() || requireValue
      // }
      // else if (isMatchCaps && !isRequireCaps) {
      //   requireValue = requireValues.shift() || requireValue
      // }

      // we don't want to fuzzy it up with `is`
      // if (!hasIs) {
      //   const FuzzySet = require('./fuzzyset')
      //   const fuzzies = FuzzySet()
      //   requireValues.forEach(val => fuzzies.add(val))
      //   const fuzzyFind = fuzzies.get(match, requireValue) || requireValue
      //   // finding returns [score, find]
      //   requireValue = isArray(fuzzyFind) ? fuzzyFind.pop() : fuzzyFind
      //
      //   // log
      //   //   .bold('FUZZY_FIND')
      //   //   .data(fuzzyFind)
      //   //   .echo()
      // }

      // log
      //   .bold('REQUIRES_FOUND')
      //   .data({requiresFound, requireValues})
      //   .echo()


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

    let strippedRequires = onlyLetters(ogRequire)
    let remappedRequire = remappedRequires.pop() || getFileName(ogRequire)

    // remappedRequires
    // log
    //   .bold('require_matches')
    //   .data(({remappedRequire, ogRequire}))
    //   .echo()

    if (/^undefined$/.test(remappedRequire)) {
      let ogRemappedRequire = remappedRequire
      remappedRequire = name
      if (remappedRequire.includes(' ')) remappedRequire = name.split(' ').pop()
      let fileNameWord = onlyLetters(getFileName(ogRequire))

      // if they are named very differently
      if (!name.includes(fileNameWord)) remappedRequire = fileNameWord

      if (ogRequire.includes('is/')) {
        if (!remappedRequire.includes('is')) {
          remappedRequire = camelCase(`is-${remappedRequire}`)
        }
      }
    }

    const str = matchRequireString(ogRequire)

    const absFileName = getFileName(abs)
    const beforeFolder = abs.split(absFileName + '.js').shift()
    let resolvedish = require('path').resolve(beforeFolder, str)
    log
      .data({
        resolvedish, str, absFileName, abs, beforeFolder,
      })
      .echo()


    let resolved = resolvedish
    try {
      resolved = require.resolve(resolvedish)
    }
    catch (error) {
      console.log({error})
    }

    // log.data({resolved}).echo()

    if (isEmpty(fromTo.data[resolved])) parseFromTo(resolved, true)

    let resolveds = (
      fromTo.data[resolved] ||
      fromTo.data[resolved + '.js'] ||
      fromTo.data[resolvedish] ||
      fromTo.data[resolvedish + '.js'] ||
      []
    )
    // log.quick(fromTo.data)

    // log.data({fromTo, resolveds}).echo()
    // [resolveds.length - 1]
    let reResolved = resolveds.slice(0).pop()
    let finalFull = reResolved || remappedRequire
    let finals = getFileName(finalFull) + '.js'
    // log.data({finals, reResolved}).echo()
    const sanitizedOgRequire = matchRequireString(ogRequire)
    const comment = `/* remapped from ${sanitizedOgRequire} */`
    return `${comment}\n${name} = require('./${finals}')`
  })
  .join('\n')

// fromTo.keys().forEach(key => {
//   log.underline(key).data(fromTo.data[key]).echo()
// })
// process.exit()

const fileMeta = {}
filesMeta.file = fileMeta

// key is abs
function parseFromTo(key, onlyParse = false) {
  const fileNames = fromTo.data[key] || []

  const hash = fileNames.join('__') + key
  fileMeta[hash] = {hash, fileNames, key}

  let contents = read(key)
  contents = `/* FROM-TO: ${key.split('/chain-able/').pop()} */\n${contents}`
  contents = remapRequire(contents, key)
  fileMeta[hash].contents = contents

  if (onlyParse) return null

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
      log.red('already_exists').data(fileName).echo(false)
      return
    }

    // log.italic('writing__ ' + fileName).echo()
    // log.data({[fileName]: contents}).echo()
    write(fileName, contents)
  })
}

// @TODO file-chain better here
const writeAll = () => {
  fromTo.keys().forEach(abs => parseFromTo(abs))
}

writeAll()
// writeAll()

filesMeta.remapped = remapped

remapped.forEach(remap => {
  // log.data({remap}).echo()
})

// process.exit()
Object.values(fileMeta).forEach(meta => {
  let {hash, fileNames, key, contents} = meta

  if (fileNames.length === 0) {
    fileNames.push(toRoot(key))
  }

  // log.bold('hash__ ' + hash).data({fileNames}).echo()
  fileNames.forEach(fileName => {
    // log.italic('writing__ ' + fileName).echo()
    if (exists(fileName)) log.red('already_exists').data(fileName).echo(false)
    else write(fileName, contents)
  })
})

// const replaceContentWeak = content => {
//   // ../ or ../ehoh/anythin
//   // not ../../
//   // /(\'\.\.\/)(?=[A-Z]*?)(?!\.)/
//
//   // easier to just replace first one per line
//   return content
//     .split('\n')
//     // .map(line => line.replace('../', '../../'))
//     .map(line => line.trim().replace(/require\(\'.*\'\)$/gmi), (match, p1, offset, string) => {
//       log.quick({match, p1, offset, string})
//     })
//     .join('\n')
// }
const fromToComeOn = read.json(fromTo.path)
Object.keys(fromToComeOn).forEach(abs => {
  fromToComeOn[abs].forEach(comeOnOut => {
    if (!exists(comeOnOut)) {
      const content = read(abs)
      // write(comeOnOut, remapRequire(content, comeOnOut))
      write(comeOnOut, remapRequire(content, abs))
    }
  })

  if (abs.includes('is/')) {
    fromToComeOn[abs].forEach(comeOnOut => {
      if (comeOnOut.includes('not')) return
      if (!comeOnOut.includes('is')) return

      const fileName = getFileName(comeOnOut)
      let prefixed = prefixFileNameCamel(comeOnOut, 'not')
      prefixed = prefixed.replace('notIs', 'isNot')
      fromToComeOn[abs].push(prefixed)
      const saferFileName = fileName.replace(/notIs|isNot/, 'is')

      let content = `const not = require('./not.js')\n`
      content += `const ${fileName} = require('./${saferFileName}.js')\n`
      content += `module.exports = not(${fileName})`
      // log.data({prefixed, content, fileName, abs}).echo()
      write(prefixed, content)
    })
  }
})

fromTo.write()
// log.prettyformat(fileMeta).echo()
const stripExtJS = replace(/\.js$/gmi, '')

const hackRequire = `
  const _require = (str) => {
    try {
      require.resolve(str)
      return require(str)
    }
    catch (error) {
      // console.log({error})
      return error
    }
  }
`
let es6 = `${hackRequire}`
let exported = `
${hackRequire}
const exported = {}
module.exports = exported
`
const concatUniq = curry(2, (str, toAdd) => {
  if (str.includes(toAdd)) return str
  else str += toAdd
})
const _makeRequire = x => `exported['${x}'] = _require('./${x}')\n`
const _makeExportsRequire = x => `exports.${x} = _require('./${x}')\n`

const makeRequire = pipe(stripExtJS, _makeRequire)
const makeExportsRequire = pipe(stripExtJS, _makeExportsRequire)

// replace('.js', '')
// not(has('-'))
let flatFileNames = jetpack
  .list(outputPath)
  .map(stripExtJS)
  .filter(name =>
    !isEmpty(name) &&
    !name.includes('-') &&
    !name.includes('_exports') &&
    !name.includes('_es6'))

// flatFileNames.forEach(name => log.bold(name).echo())

log.data({flatFileNames}).echo()
const es6Add = x => es6 = concatUniq(es6)
const exportedAdd = x => exported = concatUniq(es6)

flatFileNames.forEach(name => {
  exported += makeRequire(name)
  es6 += makeExportsRequire(name)
})

exported = trim(exported)
es6 = trim(es6)

log.white(exported).echo()
log.blue(es6).echo()

const es6Path = resRoot('_es6.js')
const exportedPath = resRoot('_exported.js')

write(es6Path, es6)
write(exportedPath, exported)
