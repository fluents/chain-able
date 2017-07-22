// const ffs = require('../_modules/fluent-fs')
const log = require('fliplog')
const jetpack = require('fs-jetpack')
const ConfigStore = require('configstore')
const find = require('chain-able-find')
const {_res} = require('./util')
const {read, write} = require('flipfile')
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
} = require('../index.all')
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
  getFolderName, getFileName, getFolderAndFileName,
} = require('./util/_filefolder')

const has = x => includes('_', x)

// includesAny('_', ['/', 'require'])
// const hasRequire = and(includes('/'), includes('require'))
// const hasRequire = and(includes('/'), includes('require'))
const hasRequire = and(has('/'), has('require'))

// log.quick(hasRequire, hasRequire(`require('./eh')`))
// log.quick([hasRequire('/require'), hasRequire('require'), hasRequire('/'), hasRequire('/eh')])

// SO EASY
//  ....... or ....... way better ....... just replace any `require('./')`


// NOW
// !!!!! SHOULD NOT TRANSFORM FILENAMES WITH THE FOLDERNAME === FILENAME
// E.G. UTIL/UTIL, IS/IS!
// ------- ugh forgot
//
// 0. [ ] !!!!!!!!! NEED TO READ CODE, AND CHANGE ALL KNOWN PATHS TO NEW OUTPUT
//  READ CONTENT
//  ITERATE THROUGH ABSOLUTE FILENAMES
//  USE IS_MATCH
//  E.G. ./deps/is/undefined
//  MATCH AGAINST FILE, PERMUTATE / IF NEEDED
//  RESOLVE TO ONE OF THE OUTPUT FILENAMES
//
//
//
// 1. [x] TOROOT
// 2. [x] PUT IN KEY-VAL AS [FROM]: TO
// 3. [x] SAVE FILE WITH FROM-TO AS .JSON
// 4. [ ] READ .JSON
// 5. [ ] DELETE FILES (IN CLI.JS)
// 6. [x] DO A TEST RUN ON A SUBFOLDER
// 7. [ ] !!! add aliases, so it gets copied to multiple output names

// - [ ] could make docs expandable sections
// - [ ] fix fuzzy search -> the `h2`s are always shown

const entry = process.cwd()
const cwd = process.cwd()
const cwdRes = _res(cwd)
const res = _res(__dirname)

// @HACK @TODO just emulating
// const resRoot = _res(res('../'))
const resRoot = _res(res('./FAKEROOT'))

// @TODO pipe?
const src = cwdRes('./src')

const defaultCopied = { /* ['absFrom']: 'absTo' */ }
const store = new ConfigStore('easy-exports', {copied: defaultCopied})
const fromToFilePath = res('./fromTo.json')

const isRel = has('./')
const isAbs = has('/Users')
const isSrc = has('/src/')

const toRoot = x => {
  // @TODO relative-to
  if (isSrc(x)) return resRoot('./' + x.split('/src/').pop())
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
  // .map(file => {
  //   return {
  //     og: file,
  //     remapped: file.replace(regex, dest),
  //     rel: file.replace(regex, '.'),
  //   }
  // })
  // .filter(file => {
  //   if (exists(file.remapped)) return false
  //
  //   log.dim('copying:').data(file).echo(this.parent.debug)
  //   copied.push(file.rel)
  //
  //   return true
  // })
  // .filter(uniq)


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
const transformToFileName = x => x.split('/').pop()

const transformSymbol = (abs, folder, fileName) => {
  const beginning = abs.split(`/${folder}/`).shift()
  return beginning + '/Symbol.' + firstToUpperCase(fileName) + '.js'
}

// @TODO !!!!!!!!!!!!!!!!!!! TRANSFORM, THIS-AS-A-CHAIN
// key to matcher
const map = {
  // 'eh': 'eh',
  '/conditional/all': 'all',
  '/to/*.js': transformFolderAndFileCamel,
  '/is/*.js': transformIzzes,
  '/symbols/*.js': transformSymbol,
  '*': transformToFileName,
}

// log.quick(findMatching('src/conditional/all'))

// const firstIsFunction = pipe(first, isFunction)
const firstIsFunction = x => isFunction(x[0])

// (['.', '-', '_']).map(has)
const isNotCamelCase = x =>
  x.includes('.') || x.includes('-') || x.includes('_')

const fromTo = {}

const doubleExtHACK = has('.js.js')

// isLast, isFirst ? kind of is .before .after if it's only flat...
let remapped = founds
  .forEach(abs => {
    filesObj[abs] = getFileName(abs)
  })
  .map(abs => {
    // start remap
    let remappedAbs = fromTo[abs] || []
    fromTo[abs] = remappedAbs
    const alreadyHas = includes(remappedAbs)
    const add = x => {
      toArr(x).forEach(value => {
        const rootValue = toRoot(value)
        if (alreadyHas(rootValue)) return
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

          add(transformed)
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

      // if (!transformedAbs.endsWith('js')) transformedAbs += '.js'
      // console.log('hasDupe', {transformed})

      add(transformed)
    }
    else {
      add(abs)
    }

    const fileName = getFileName(abs)

    // @TODO all snake & all camel
    if (isNotCamelCase(fileName)) {
      const beginning = abs.split(`/${fileName}`).shift()
      let transformed = beginning + '/' + camelCase(fileName)
      // let transformed = replace(fileName, camelCase(fileName), abs)
      // log.data({transformed, camel: camelCase(fileName), fileName, abs}).echo()
      add(transformed)
    }

    if (!hasDupeFileName(abs)) {
      // add(abs) <- keeps nested folders which is meh
      add(transformToFileName(abs))

      const [folderName] = getFolderAndFileName(abs)
      const [alpha, omega] = abs.split(folderName)
      const transformed = alpha + omega
      // add(transformed)
    }

    return remappedAbs
    // return abs
  })


const fromToJSON = JSON.stringify(fromTo, null, 2)
write(fromToFilePath, fromToJSON)

// use when needed
// const fromToRead = read.json(fromToFilePath)
// log.quick(fromTo)

// would just be .toMatcher...
// const __map = (obj, transformer) => obj.map(transformer)
// const _map = curry(2, __map)
// const replaceAll = curry(3, (patterns, replacements, str) => {
//   _map(patterns)
// }

const remapRequire = contents => contents
  .split('\n')
  .map(line => {
    // line.includes('/') && line.includes('require')
    if (!hasRequire(line)) return line

    const parts = line.split('=')
    const name = parts.shift().trim()

    // remove all initial dots, and the first slash
    const sanitizeRequire = x => x.replace(/[.]/g, '').replace('/', '')

    const requireReplacer = (match, p1, offset, string) => {
      match = sanitizeRequire(match)

      const findFrom = () => {
        return Object.keys(fromTo).filter(x => {
          const matches =
            isMatch(match, x) ||
            isMatch(x, match) ||
            x.includes(match) ||
            match.includes(x)

          // if (!matches) log.quick(({x, match, matches}))

          return matches
        })
      }

      const requireFoundInFromTo = findFrom()
      // log.data({requireFoundInFromTo}).echo()
      return requireFoundInFromTo
      // findMatching(map, match)
      // return match
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      // return [p1, p2, p3].join(' - ')
    }

    if (parts.length === 0) return line

    const ogRequire = parts.pop().trim()

    // @TODO right here can use a new name matching the parts, bingo bango bongo
    const remappedRequire = ogRequire
      .replace(`require('`, '')
      .replace(')', '')
      .replace(`'`, '')
      .replace(/.*/, requireReplacer)
      .split('/')
      .pop()

    const comment = `/* remapped from ${ogRequire} */`
    return `${name} = require('./${remappedRequire}') ${comment}`
  })
  .join('\n')


// @TODO file-chain better here
Object.keys(fromTo).forEach(key => {
  const fileNames = fromTo[key]

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

    // log.bold(fileName).echo()
    // log.green(contents).echo()
    // log.underline('__________ \n').echo()

    // log.data({[fileName]: contents}).echo()
    write(fileName, contents)
  })
})

// remapped = remapValuesToArr(remapped)
// remapped.forEach(transformed => log.bold(transformed).echo())
// log.verbose(200).data({entry}).exit()


// const from = 'foo_1'
// const to = 'foo_final'
//
// // Copies files from folder foo_1 to foo_final, but overwrites in
// // foo_final only files which are newer in foo_1.
// jetpack.copy(from, to, {
//   overwrite: (srcInspectData, destInspectData) => {
//     console.log('had conflict')
//     return false
//     // return srcInspectData.modifyTime > destInspectData.modifyTime;
//   }
// });

// find.up
// const res = _res(__dirname)
// const resRoot = _res(entry)

//
//
// ----- restructure for copying all to flat! ---
//
// // just have keyval map like I was doing with emoji
// //
// /// helpful for mapping all `toarr`
// // MapValues of object
// // MapKeys
// // MapObjOrArr
// //
// // have each value be a string[], or Transformer which returns say
// // function transformIs(folder, filename) {
// //  return folder + ucFirst(filename)
// // }
// // or false to ignore
//
// // string to upper how to do best?
// // map string?
// // finish !!!!!! chain-able-fs with data chains
// //
// const firstToUpper = str => str.charAt(0).toUpperCase() + str.slice(1)
//
// // treeshake should also add an index with EVERY FILE
// // put as es6 exports.name
// // then easy to remove unused exports
//
// // finish proxy example
//
// -------------------
//
// add test to `require` each file just for errors sake
// add
//
//
// -------------------
//
// perf
//   - argumentor
//   - gc
//   - obj-pooler?
//
//
// arr/
//    - to-arr || to/arr -> **copy-as('to-arr)**
//    - concat
//
// // can also be `coerce`
// to/
//
// traverse/
//   - index
//   - Traverse
//   - traversers
