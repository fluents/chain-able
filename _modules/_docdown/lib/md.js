const _ = require('lodash')

/**
 * Make an anchor link.
 *
 * @private
 * @param {string} href The anchor href.
 * @param {string} text The anchor text.
 * @param {Object} [metadata] additional data for attriubutes
 * @returns {string} Returns the anchor HTML.
 */
function makeAnchor(href, text, metadata = '') {
  if (typeof metadata === 'object') {
    let attrs = ''
    for (let prop in metadata) {
      let value = metadata[prop]
      if (typeof value === 'object') value = JSON.stringify(value)
      // keep whitespaces as underscores
      value = value.replace(/\s+/, '_')
      // strip everything not letters/nums
      // value = value.replace(/[\W_]+/g, '')
      value = value.replace(/[^a-z0-9]/gmi, ' ')
      // trim empty lines
      // value = value.replace(/\"/gmi, `'`)
      value = value.replace(/\r|\n|\t|\s+/gmi, ' ').trim()

      if (value === '') continue
      attrs += ` data-${prop}="${value}" `
    }
    metadata = attrs
  }

  return `<a href="${href}" ${metadata}>${_.toString(text)}</a>`
}

const maker = (files, entry, entryMarkdown) => {
  const toList = items =>
    (items.length > 1 ? items.map(item => '* ' + item) : items)

  const emojiHref = (filePath, emoji = '') =>
    `<a href="${files.toRepoPath(filePath)}">${emoji}${files
      .toBasename(filePath)
      .replace(/\.(j|t)s/, '')}</a>&nbsp;`

  const makeTypes = types => {
    const hrefs = entry
      .getTypes(files)
      .map(typing => emojiHref(typing, '🌊  Types: '))
    if (hrefs.length === 0) return

    // log.white('types').data(hrefs, entry.getTypes(files)).echo()
    const hrefsList = toList(hrefs).join('\n')
    // const typesHeading = `### Typings\n\n`
    // const typesMarkdown = `${typesHeading}${hrefsList}\n`
    const typesMarkdown = `${hrefsList}\n`

    entryMarkdown.push(typesMarkdown)
  }

  const makeTests = tests => {
    const hrefs = entry
      .getTests(files)
      .map(test => emojiHref(test, '🔬  Tests: '))
    if (hrefs.length === 0) return

    const hrefsList = toList(hrefs).join('\n')
    // const typesHeading = `### Tests\n\n`
    // const typesMarkdown = `${typesHeading}${hrefsList}\n`
    const typesMarkdown = `${hrefsList}\n`

    entryMarkdown.push(typesMarkdown)
  }
  const seeToString = see => {
    const stringed = see
      .map(link => {
        const {href, label} = link
        return '* ' + makeAnchor(href, label)
      })
      .join('\n')

    return stringed
  }
  const linksToString = links => {
    return links
      .map(link => `\n[${link.label}]: ${link.href} <!-- NAMED_LINK -->\n`)
      .join('\n')
  }
  return {linksToString, seeToString, makeTypes, makeTests}
}

module.exports = {
  makeAnchor,
  maker,
}
