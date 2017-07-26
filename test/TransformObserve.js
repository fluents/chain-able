const log = require('fliplog')
const isUrl = require('../src/deps/is/url')
const replace = require('../src/deps/fp/replace')
const pipe = require('../src/deps/fp/pipe')
const curry = require('../src/deps/fp/curry')
const bind = require('../src/deps/fp/bind')
const includesCount = require('../src/deps/fp/includesCount')
const toArr = require('../src/deps/to-arr')
const camelCase = require('../src/deps/string/camelCase')
const not = require('../src/deps/conditional/not')
const eq = require('../src/deps/traversers/eq')
const isEmpty = require('../src/deps/is/empty')
const isFunction = require('../src/deps/is/function')
const isString = require('../src/deps/is/stringPrimitive')
const isMap = require('../src/deps/is/map')
const debounce = require('../src/deps/_/debounce')
const throttle = require('../src/deps/_/throttle')
const objToMap = require('../src/deps/cast/objToMap')
const {Chain, escapeDot, trim} = require('../exports')
const getMeta = require('../src/deps/meta')
const chainPlus = require('../src/chainPlus')

const notEmpty = not(isEmpty)

const isNotFile = x =>
  !isUrl(x) &&
  x.includes('.') &&
  !x.includes('.js') &&
  !x.includes('.ts') &&
  includesCount(x, '.') >= 2

const hrefStripTransform = href => {
  if (!href) return ''
  return href.replace(/\n/, '')
}
const hrefDotToAnchorTransform = href => {
  if (!href) return href || ''
  else if (isNotFile(href)) return replace(href, href.lastIndexOf('.'), '#')
  else return href
}

const getEntryLinks = (block, find) =>
  block
    .split('*')
    .filter(line => line.includes(find))
    .filter(line => (find === '@link' ? !line.includes('@see') : line))
    .map(trim)
    // .map(replace('*', ''))
    .map(link => {
      const pieces = link
        .replace('{@link', '')
        .replace('}\n', '')
        .replace(/\}\s?/, '')
        .split(' ')
        .filter(notEmpty)
        .map(trim)

      // @link vs @see vs @see {@link}
      if (pieces.length === 2) {
        return {href: pieces[0], label: pieces[1]}
      }
      else if (pieces.length === 1) {
        return {label: pieces[0]}
      }
      else {
        // const e = new Error('@link tag with 0 parts ' + block)
        // console.error(e)
        return {}
      }
    })

let links = new Map()

// we should only ever parse 2x?
// let partsMap = new Map()


const getChain = () => {
  const chain = new Chain().methods(['label', 'href']).autoGetSet().build()
  return chainPlus(chain)
}

const cacheLinks = parts =>
  parts
    .filter(link => link.href !== '@see' && link.label !== '@see')
    .forEach(link => links.set(link.label, link.href))

const toRepoSearch = x =>
  `https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=${x}&type=`

// @TODO abstract to render anything referencing any other files to links
/* prettier-ignore */
function remapSee(entry) {
  const linesWithLinkTag = getEntryLinks(entry, '@link')
  cacheLinks(linesWithLinkTag)

  const linesWithSeeTag = getEntryLinks(entry, '@see')

  // require('fliplog').quick({linesWithSeeTag, entry})

  // mock `find`
  const find = x => (x.includes('is/eh') ? [x] : [])


  const remappedSee = linesWithSeeTag
    .map(link => {
      const chain = getChain()
      // chain.clear()

      // chain.dot(false)

      // let label = link.label
      // let href = link.href

      // find -----
      let found = find(link.label)
      let foundRel
      if (link.label && found.length)  {
        link.href = found
        // foundRel = found.map(files.toRel)
        // const extractedLink = foundRel.shift()
        // href = files.toRepoPath(extractedLink)
      }

      // transform -----

      // chain.transform('label', [
      //   label => links.has(label) ?
      // ])

      // const labelIs = chain.propIs('label')
      // const hrefIs = chain.propIs('href')
      // const setLabel = chain.set('label')
      // const setHref = chain.set('href')
      // const getLabel = chain.view('label')
      // const setHref = chain.view('href')
      const {
        labelIs,
        labelNot,
        setLabel,
        getLabel,
        labelEq,
        transformLabel,
        labelTransforms,
        observeLabel,
      } = chain.lense('label')

      const hrefLense = chain.lense('href')
      const {
        hrefIs,
        hrefEq,
        hrefNot,
        setHref,
        getHref,
        transformHref,
        escapeDotHref,
        freezeHref,
      } = hrefLense

      // escapeDotHref()
      // require('fliplog').bold('lense').quick(chain.lense('href'))
      // require('fliplog').bold('lense').quick(Object.keys(chain.lense('href')))
      // require('fliplog').bold('lense').quick(chain.lense('href').setHref)

      // we have both label, and href...

      // const setHrefToRepoSearch = () => pipe(toRepoSearch, setHref)
      const setHrefToRepoSearch = () => setHref(toRepoSearch(getHref()))
      const labelToHref = pipe(setHref, getLabel)
      const hrefToLabel = pipe(setLabel, getHref)

      observeLabel(data => {
        const label = data.label
        if (links.has(label)) {
          setHref(links.get(label))
          freezeHref()
        }
      })

      chain
        .ifElse(c => labelIs('@see') && getHref())
        .then(c => hrefToLabel())

      chain
        .ifElse(c => {
          // console.log('HREF', getHref(), getLabel(), chain.get('href'), chain.get('label'), chain)
          return hrefEq('@see') && getLabel()
        })
        .then(c => {
          console.log('not see...')
          return labelToHref()
        })

      chain
        .ifElse(c =>
          // chain.propIs('label', isUrl) &&
          // chain.propIsNot('href', isUrl)
          labelIs(isUrl) &&
          hrefNot(isUrl)
        )
        .then(c => labelToHref())
        .elseIf(c => hrefNot(isUrl))
        .then(c => setHrefToRepoSearch())

      // github.com/Class.method //=> github.com/Class#method
      // transformHref(hrefDotToAnchorTransform)

      observeLabel(data => {
        const {label} = data
        console.log({label, 'has': links.has(label)})
        console.log({[label]: links.get(label)})

        if (links.has(label)) {
          setHref(links.get(label))
          // chain.set('href', links.get(label))
          freezeHref()
        }
      })

      // grab it from the nameMap
      // labelTransforms([
      //   label => {
      //     const href = getHref()
      //     if (labelEq('@see') && href) return href
      //     return label
      //   }]
      // )
      transformLabel(label => {
        const href = getHref()
        if (labelEq('@see') && href) return href
        return label
      })
      // toRepoSearch()

      chain.setSilent('label', link.label).setSilent('href', link.href)
      chain.label(link.label).href(link.href)

      // @TODO
      // chain.meta.delete('transformers')
      // require('fliplog').quick({chain, links, meta: chain.meta})

      const {href, label} = chain.entries()
      return {href, label}
    })
    // .filter(filterNotReal)

  // log.data({remappedSee}).echo()

  return remappedSee
}


const docblock = `
  /**
   * @desc spreads the entries from ChainedMap.store.values
   *       allocates a new array, adds the values from the iterator
   *
   * @memberOf Chainable
   * @since 0.4.0
   *
   * @return {Array<any>} toArr(this.store.values())
   *
   * {@link https://kangax.github.io/compat-table/es6/#test-Array_static_methods compat-array-static-methods}
   * {@link https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array set-to-array}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values mozilla-map-values}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values mozilla-set-values}
   *
   * @see {@link mozilla-map-values}
   * @see {@link mozilla-set-values}
   * @see {@link compat-array-static-methods}
   * @see {@link set-to-array}
   * @see is/eh
   * @see not/found
   *
   * @example
   *
   *  const chain = new Chain()
   *  chain.set('eh', 1)
   *  chain.values()
   *  //=> [1]
   *
   */
`

const _expectedLinks = {
  'compat-array-static-methods': 'https://kangax.github.io/compat-table/es6/#test-Array_static_methods',
  'set-to-array': 'https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array',
  'mozilla-map-values': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values',
  'mozilla-set-values': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values',
}

const expectedLinks = objToMap(_expectedLinks)
// _expectedLinks

// throttle, merge all logs into 1
const todo = x => console.log('@TODO: ', x)

todo('lense.set')
todo('lense.freeze')
todo('lense.destructure')
todo('lense.get')
todo('lense.has')
todo('lense.escape')
todo('lense.eq')
todo('lense.is')
todo('lense.not')
todo('lense.silent')
todo('lense.observe')
todo('lense.transform')
todo('ifElse')
todo('unobserve')
todo('untransform')
todo('propIs')
todo('boundMethods')
todo('bind')

test('cast objToMap', () => {
  const linkNames = Object.keys(_expectedLinks)
  expect(isMap(expectedLinks)).toBe(true)
  expect(expectedLinks.size).toBe(linkNames.length)

  const expectEqual = (x, y) => expect(x).toEqual(y)
  linkNames.forEach(name =>
    expectEqual(expectedLinks.get(name), _expectedLinks[name]))
})

test.skip('remapsee', () => {
  const remapped = remapSee(docblock)
  log.quick({remapped})
})


// -----

// href = hrefDotToAnchorTransform(href)
// transform
// if (links.has(label)) {
//   href = links.get(label)
// }
// if (label === '@see' && href) {
//   label = href
// }
// if (href === '@see' && label) {
//   href = label
// }
// if (isUrl(label) && !isUrl(href)) {
//   href = label
// }
// not a url, cannot find it, add search
// else if (!isUrl(href) && href) {
//   href = toRepoSearch(href)
// }

// const transformed = presets(href, label)
// href = transformed.href
// label = transformed.label

// -------

// // .methods(['label', 'href'])
// // .onInvalid(invalidError => {
// //   // ignore invalid links
// // })
// // .type('string')
// // .build()
//
//
// // @TODO need `bestMatch`
// // const foundMatching = found
// // .filter(file => file && isMatch(file, link.label))
//
// if (found.length > 1) {
//   // found = found
//   // .filter(file => file && isMatch(getFileName(file), link.label))
// }
// log.magenta('found').data(found).echo()
//
// const whenFound = _see => {
//   found = found.map(files.toRel)
//
//   if (found.length) {
//     // .filter(isMatch(link.label))
//     const extractedLink = found.shift() || ''
//
//     // when it's a property
//     if (extractedLink.includes('.')) {
//       // @TODO
//     }
//
//     see.set('href', files.toRepoPath(extractedLink))
//   }
// }
// const whenNotFound = _see => {
//   // _see.set('href', link.href)
// }
//
// // we want it before the label transforms
// see.when(found.length, whenFound, whenNotFound)
//
// // @see => http
// see.transform('href', x => (x === '@see' ? see.get('label') || '' : x))
//
// // use label if it's a url
// see.transform('href', href => {
//   const label = see.get('label')
//   if (isUrl(label) && !isUrl(href)) return label
//   else return href
// })
//
// // if href is not a url, transform toGithubRepoPath
// see.transform('href', href => {
//   const label = see.get('label')
//   if (isUrl(href)) return href
//   else return files.toRepoPath(href || label || '')
//   // else return href
// })
//
// // @example
// // github.com/Class.method //=> github.com/Class#method
// see.transform('href', hrefDotToAnchorTransform)
//
// // can be scoped, no need for +1 func
// // strip new lines and default fallback
// see.transform('href', hrefStripTransform)
//
//
// // grab it from the nameMap
// see.transform('label', label => {
//   if (links.has(label)) {
//     see.set('href', links.get(label))
//   }
//   return label
// })
// see.transform('label', label => {
//   const href = see.get('href')
//   if (label === '@see' && href) return href //return humanizeLinkLabel(href)
//   return label
// })
// // ugh this messes with the href...
// // need to tighten up the expected output add more tests
// see.transform('label', label => {
//   if (isUrl(label)) {
//     // return humanizeLinkLabel(label)
//   }
//   return label
// })
//
// // log.data({link, found}).echo()
// // see.when(found.length, whenFound, whenNotFound)
// see.label(link.label).href(link.href)
//
// return see.entries()
