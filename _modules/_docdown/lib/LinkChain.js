const {Chain} = require('./chain-able')
const {
  log,
  isReallyReal,
  isUrl,
  isNotFile,
  replace,
  humanizeLinkLabel,
} = require('./util.js')

const hrefStripTransform = href => {
  if (!href) return ''
  return href.replace(/\n/, '')
}
const hrefDotToAnchorTransform = href => {
  if (isNotFile(href)) return replace(href, href.lastIndexOf('.'), '#')
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
  factory(find) {
    const entry = this.get('entry')().get('block')

    const parts = getEntryLinks(entry, find)
    cacheLinks(parts)

    return parts
  }

  // @TODO abstract to render anything referencing any other files to links
  /* prettier-ignore */
  remapSee() {
    const entry = this.get('entry')()
    const files = entry.get('files')

    const linesWithSeeTag = this.factory('@see')

    // now, if we have any @see to local files, remap them

    const remappedSee = linesWithSeeTag
      .map(link => {
        const see = new Chain()
        see
          .methods(['label', 'href'])
          .onInvalid(() => {
            // ignore invalid links
          })
          .type('string')
          .build()

        let found = []
        if (link.label && files)  {
          found = entry.find(files.src.abs)(link.label)
        }

        see.when(found.length, _see => {
          found = found.map(files.toRel)

          if (found.length) {
            const extractedLink = found.shift()
            // when it's a property
            if (extractedLink.includes('.')) {
              // @TODO
            }

            _see.set('href', files.toRepoPath(extractedLink))
          }
        })

        // @see => http
        see.transform('href', x => (x === '@see' ? see.get('label') || '' : x))

        // use label if it's a url
        see.transform('href', href => {
          const label = see.get('label')
          if (isUrl(label)) return label
          else return href
        })

        // if href is not a url, transform toGithubRepoPath
        see.transform('href', href => {
          const label = see.get('label')
          if (isUrl(href)) return href
          else return files.toRepoPath(href || label || '')
        })

        // @example
        // github.com/Class.method //=> github.com/Class#method
        see.transform('href', hrefDotToAnchorTransform)

        // can be scoped, no need for +1 func
        // strip new lines and default fallback
        see.transform('href', hrefStripTransform)

        // grab it from the nameMap
        see.transform('label', label => {
          if (links.has(label)) {
            see.set('href', links.get(label))
          }
          if (isUrl(label)) {
            return humanizeLinkLabel(label)
          }
          return label
        })
        see.transform('label', label => {
          const href = see.get('href')
          if (label === '@see' && href) return humanizeLinkLabel(href)
          return label
        })

        see.label(link.label).href(link.href)

        return see.entries()
      })
      .filter(filterNotReal)

    return remappedSee
  }
}

module.exports = LinkChain
