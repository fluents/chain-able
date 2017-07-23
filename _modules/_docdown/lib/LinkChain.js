const {Chain, isMatch} = require('./chain-able')
const {
  log,
  isReallyReal,
  isUrl,
  isNotFile,
  replace,
  humanizeLinkLabel,
} = require('./util.js')
const presets = require('./presets')

const hrefStripTransform = href => {
  if (!href) return ''
  return href.replace(/\n/, '')
}
const hrefDotToAnchorTransform = href => {
  if (!href) return href || ''
  else if (isNotFile(href)) return replace(href, href.lastIndexOf('.'), '#')
  else return href
}
const filterNotReal = link => {
  const {href, label} = link
  return isReallyReal(label) && isReallyReal(href)
}

const getEntryLinks = (block, find) =>
  block
    .split('*')
    .filter(line => line.includes(find))
    .filter(line => (find === '@link' ? !line.includes('@see') : line))
    .map(line => line.trim())
    .map(link => {
      const pieces = link
        .replace('{@link', '')
        .replace('}\n', '')
        .replace(/\}\s?/, '')
        // .replace('}', '')
        .split(' ')
        .filter(l => l !== '')
        .map(l => l.trim())

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

const cacheLinks = parts =>
  parts
    .filter(link => link.href !== '@see' && link.label !== '@see')
    .forEach(link => links.set(link.label, link.href))

const toRepoSearch = x =>
  `https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=${x}&type=`

const getFileName = x => {
  const parts = x.split('/')
  if (!parts.length) return x
  return parts.pop()
}

class LinkChain extends Chain {
  constructor(parent, files) {
    super(parent)
    this.extend(['entry', 'files'])
  }

  /**
   * @desc doctrine cannot handle
   * @static
   * @param  {string} entry docblock
   * @return {string} stripped of link tags
   */
  static stripLinks(entry) {
    cacheLinks(getEntryLinks(entry, '@link'))

    // remove lines starting with @link
    return entry
      .split('*')
      .filter(line => !line.trim().startsWith('{@link'))
      .join('*')
  }

  /* prettier-ignore */
  factory(block, find) {
    // const entry = this.get('entry')().get('block')

    const parts = getEntryLinks(block, find)
    cacheLinks(parts)

    return parts
  }

  // @TODO abstract to render anything referencing any other files to links
  /* prettier-ignore */
  remapSee(entry, instance) {
    const files = instance.get('files')

    const linesWithSeeTag = this.factory(entry, '@see')

    // now, if we have any @see to local files, remap them
    // log.data({linesWithSeeTag}).echo()

    const remappedSee = linesWithSeeTag
      .map(link => {
        let label = link.label
        let href = link.href

        // find
        let found = []
        let foundRel
        if (label && files)  {
          found = instance.find(files.src.abs)(link.label)

          if (found.length) {
            foundRel = found.map(files.toRel)
            const extractedLink = foundRel.shift()

            href = files.toRepoPath(extractedLink)
          }
        }

        href = hrefDotToAnchorTransform(href)
        // transform
        if (links.has(label)) {
          href = links.get(label)
        }
        if (label === '@see' && href) {
          label = href
        }
        if (href === '@see' && label) {
          href = label
        }
        if (isUrl(label) && !isUrl(href)) {
          href = label
        }
        // not a url, cannot find it, add search
        else if (!isUrl(href) && href) {
          href = toRepoSearch(href)
        }

        const transformed = presets(href, label)
        href = transformed.href
        label = transformed.label

        return {href, label}

        // @TODO fix the weird logic here and order-of-operations
        // @FIXME
        //
        // const see = new Chain()
        // see.extend(['label', 'href'])
        // // @TODO
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
      })
      // .filter(filterNotReal)

    // log.data({remappedSee}).echo()

    return remappedSee
  }
}

module.exports = LinkChain
