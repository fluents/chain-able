/* eslint jsdoc/require-example: "OFF" */
/* eslint valid-jsdoc: "OFF" */

var _ = require('lodash')
var Entry = require('./entry.js')
var util = require('./util.js')

var getEntries = Entry.getEntries

var push = Array.prototype.push
var specialCategories = ['Methods', 'Properties']
var token = '@@token@@'

var reCode = /`.*?`/g
var reToken = /@@token@@/g
var reSpecialCategory = RegExp('^(?:' + specialCategories.join('|') + ')$')

var htmlEscapes = {
  '*': '&#42;',
  '[': '&#91;',
  ']': '&#93;',
}

var {log} = util

const isIgnored = group =>
  group.includes('eslint') || group.includes('prettier')

const nullOrEmptyMemberEntry = x =>
  (/[=:]\s*(?:null|undefined)\s*[,;]?$/gi).test(x)

var {maker, makeAnchor} = require('./md')

/*----------------------------------------------------------------------------*/
/*                THIS FILE FOR MAKING THE TOC AND MD                         */
/*----------------------------------------------------------------------------*/

/**
 * Escape special Markdown characters in a string.
 *
 * @private
 * @param {string} string The string to escape.
 * @returns {string} Returns the escaped string.
 */
function escape(string) {
  var snippets = []

  // Replace all code snippets with a token.
  string = string.replace(reCode, function(match) {
    snippets.push(match)
    return token
  })

  _.forOwn(htmlEscapes, function(replacement, chr) {
    string = string.replace(RegExp('(\\\\?)\\' + chr, 'g'), function(
      match,
      backslash
    ) {
      return backslash ? match : replacement
    })
  })

  // Replace all tokens with code snippets.
  return string.replace(reToken, function(match) {
    return snippets.shift()
  })
}

/**
 * Get the seperator (`.` or `.prototype.`)
 *
 * @private
 * @param {Entry} Entry object to get selector for.
 * @returns {string} Returns the member seperator.
 */
function getSeparator(entry) {
  return entry.isPlugin() ? '.prototype.' : '.'
}

/**
 * Modify a string by replacing named tokens with matching associated object values.
 *
 * @private
 * @param {string} string The string to modify.
 * @param {Object} data The template data object.
 * @returns {string} Returns the modified string.
 */
function interpolate(string, data) {
  return util.format(_.template(string)(data))
}

/*----------------------------------------------------------------------------*/

/* prettier-ignore */
/**
 * Generates the documentation from JS source.
 *
 * @param {string} The source code to generate the documentation for.
 * @param {object} The options object.
 * @returns {string} Returns the documentation markdown.
 */
function generateDoc(source, options) {
  const api = []
  const byCategories = options.toc === 'categories'
  const entries = getEntries(source)
  const organized = {}
  const sortEntries = options.sort
  const style = options.style
  const url = options.url
  const files = options.files

  // log.quick(entries)

  // Add entries and aliases to the API list.
  _.each(entries, entry => {
    entry = new Entry(entry, source, options)
    api.push(entry)

    const aliases = entry.getAliases()
    if (!_.isEmpty(aliases)) {
      push.apply(api, aliases)
    }
  })

  // Build the list of categories for the TOC and generate content for each entry.
  _.each(api, entry => {
    // log.quick(entry)
    // Exit early if the entry is private or has no name.
    let name = entry.getName()
    if (entry.isPrivate()) {
      log.yellow('is private: ').data(entry.path).echo()
    }
    if (!name) {
      log
        .red('had no name name: defaulting to basename of path ')
        .data(entry.path)
        .echo()

      name = files
        .toBasename(entry.path)
        .replace(/\.(j|t)s/, '')
    }

    // log.blue('entry').data(entry).echo()

    // ------- handletoc ------- @TODO
    let tocGroup = []
    const member = entry.getMembers(0) || ''
    const separator = member ? getSeparator(entry) : ''

    // Add the entry to the TOC.
    if (byCategories) {
      const category = entry.getCategory()
      tocGroup = organized[category] || (organized[category] = [])
    }
    else {
      let memberGroup
      if (
        !member ||
        entry.isCtor() ||
        (entry.getType() === 'Object' &&
          !nullOrEmptyMemberEntry(entry.entry))
      ) {
        memberGroup = (member ? member + getSeparator(entry) : '') + name
      }
      else if (entry.isStatic()) {
        memberGroup = member
      }
      else if (!entry.isCtor()) {
        memberGroup = member + getSeparator(entry).slice(0, -1)
      }

      tocGroup = organized[memberGroup] || (organized[memberGroup] = [])
    }

    try {
      tocGroup.push(entry)
    }
    catch (e) {
      console.log('bug with tocGroup')
    }

    // ------- markdown ------- @TODO

    // Skip aliases.
    if (entry.isAlias()) {
      log.red('is alias').echo()
      return
    }

    // Start markdown for the entry.
    const entryMarkdown = ['\n<!-- div -->\n']

    const {linksToString, seeToString, makeTypes, makeTests} = maker(files, entry, entryMarkdown)
    const entryData = {
      call: entry.getCall(),
      category: entry.getCategory(),
      // eslint-disable-next-line no-template-curly-in-string
      entryHref: '#${hash}',
      entryLink: _.get(
        options,
        'entryLink',
        // eslint-disable-next-line no-template-curly-in-string
        style === 'github' ? '' : '<a href="${entryHref}">#</a>&nbsp;'
      ),
      hash: entry.getHash(style),
      member,
      name,
      separator,
      sourceHref: url + '#L' + entry.getLineNumber(),

      sourceLink: _.get(
        options,
        'sourceLink',
        // eslint-disable-next-line no-template-curly-in-string
        '[&#x24C8;](${sourceHref} "View in source")'
      ),
      tocHref: '1',
      // eslint-disable-next-line no-template-curly-in-string
      tocLink: _.get(options, 'tocLink', '[&#x24C9;][${tocHref}]'),
      // new
      typings: makeTypes(),
      tests: makeTests(),
    }

    _.each(
      [
        'entryHref',
        'sourceHref',
        'tocHref',
        'entryLink',
        'sourceLink',
        // 'see',
        // 'typings',
        // 'tests',
        'tocLink',
      ],
      function(option) {
        entryData[option] = interpolate(entryData[option], entryData)
      }
    )

    // Add the heading.
    entryMarkdown.push(
      interpolate(
        // eslint-disable-next-line no-template-curly-in-string
        '<h3 id="${hash}">${entryLink}<code>${member}${separator}${call}</code></h3>\n' +
          interpolate(
            // eslint-disable-next-line no-template-curly-in-string
            _(['${sourceLink}', _.get(options, 'sublinks', []), '${tocLink}'])
              .flatten()
              .compact()
              .join(' '),
            entryData
          ).replace(/ {2,}/g, ' '),
        entryData
      )
    )

    // log.quick(entry.getDesc())
    // Add the description.
    entryMarkdown.push('\n' + entry.getDesc() + '\n')

    // ----- new -----
    const links = entry.getLink()
    const see = entry.getSee()
    const notes = entry.getNote()
    const todos = entry.getTodo()
    const sig = entry.getSig()
    const symb = entry.getSymb()
    const klass = entry.getClass()
    const klassDesc = entry.getClassDesc()
    const klassProps = entry.getClassProps()
    const xtends = entry.getExtends()
    const variation = entry.getVariation()

    const news = {
      see,
      links,
      notes,
      todos,
      sig,
      symb,
      class: klass,
      classDesc: klassDesc,
      classProps: klassProps,
      extends: xtends,
      variation,
    }

    log.white('new').data(news).echo(false)

    const newsKeys = Object.keys(news)
    newsKeys.forEach(key => {
      if (util.isNotReal(news[key])) {
        delete news[key]
      }
      else if (news[key].replace && news[key].replace(/[\s\t\n]+/gmi, '') === '') {
        delete news[key]
      }
      else if (Array.isArray(news[key]) && news[key].length === 0) {
        delete news[key]
      }
    })

    // log.data(news).echo()
    Object.keys(news).forEach(key => {
      if (util.isNotReal(news[key])) {
        return
      }
      if (key === 'links') {
        log.yellow('is links').data(linksToString(news[key])).echo(false)

        if (news[key].length !== 0) {
          entryMarkdown.push(linksToString(news[key]))
        }
      }
      else if (key === 'see') {
        log.yellow('is @see').data(seeToString(news[key])).echo(false)

        if (news[key].length !== 0) {
          entryMarkdown.push('\n### @' + key + ' \n')
          entryMarkdown.push(seeToString(news[key]))
        }
      }
      else if (key === 'tests') {
        entryMarkdown.push(news[key] + ' ')
      }
      else if (key === 'extends') {
        var md = '\n### @' + key
        var augments = news[key]
        if (augments.length === 1) {
          entryMarkdown.push(md)
          entryMarkdown.push(augments[0])
        }
        else {
          entryMarkdown.push(md + ' \n')
          augments.map(augmentation => entryMarkdown.push('* ' + augmentation))
        }
        entryMarkdown.push('\n')
      }
      else {
        var str = news[key] + ' '
        log.cyan('\n### @' + key + ' \n').data({data: news[key], str}).echo(false)
        if (str === ' ') return

        // console.log(news[key])
        entryMarkdown.push('\n### @' + key + ' \n')
        entryMarkdown.push(str)
      }
      // console.log('###H3: ' + key + ': ', news[key], news[key] + ' <- ')
    })

    // ----- ;new -----
    // log.quick(entry)
    // Add optional since version.
    var since = entry.getSince()
    if (!_.isEmpty(since)) {
      entryMarkdown.push('#### Since', since, '')
    }
    // @TODO: needs comments not just tag
    // var version = entry.getVersion()
    // if (!_.isEmpty(version)) {
    //   entryMarkdown.push('#### Version', version, '')
    // }

    // Add optional aliases.
    var aliases = entry.getAliases()
    if (!_.isEmpty(aliases)) {
      entryMarkdown.push(
        '#### Aliases',
        '*' +
          _.map(aliases, function(alias) {
            // eslint-disable-next-line no-template-curly-in-string
            return interpolate('${member}${separator}${name}', {
              member,
              name: alias.getName(),
              separator,
            })
          }).join(', ') +
          '*',
        ''
      )
    }

    // ------- params ------- @TODO

    // Add optional function parameters.
    var params = entry.getParams()

    if (!_.isEmpty(params)) {
      entryMarkdown.push('#### Arguments')

      _.each(params, function(param, index) {
        var paramType = param[0]
        if (_.startsWith(paramType, '(')) {
          paramType = _.trim(paramType, '()')
        }

        entryMarkdown.push(
          // eslint-disable-next-line no-template-curly-in-string
          interpolate('${num}. `${name}` (${type}): ${desc}', {
            desc: escape(param[2]),
            name: param[1],
            num: index + 1,
            type: escape(paramType),
          })
        )
      })

      entryMarkdown.push('')
    }

    // @important
    // entry.getTypes(files)
    // entry.getTests(files)

    // Add optional functions returns.
    var returns = entry.getReturns()
    // console.log({returns})

    if (!_.isEmpty(returns)) {
      let returnType = returns[0]
      if (_.startsWith(returnType, '(')) {
        returnType = _.trim(returnType, '()')
      }

      entryMarkdown.push(
        '#### Returns',
        // eslint-disable-next-line no-template-curly-in-string
        interpolate('(${type}): ${desc}', {
          desc: escape(returns[1]),
          type: escape(returnType),
        }),
        ''
      )
    }

    // Add optional function example.
    var examples = entry.getExample()

    if (examples.length) {
      examples.map(example => entryMarkdown.push('#### Example', example))
    }

    // End markdown for the entry.
    entryMarkdown.push('---\n\n<!-- /div -->')

    entry.markdown = entryMarkdown.join('\n')
  })

  // ------- toc-headers/categories ------- @TODO

  // Add TOC headers.
  var tocGroups = _.keys(organized)
  if (byCategories) {
    // Remove special categories before sorting.
    var catogoriesUsed = _.intersection(tocGroups, specialCategories)
    _.pullAll(tocGroups, catogoriesUsed)

    // Sort categories and add special categories back.
    if (sortEntries) {
      tocGroups.sort(util.compareNatural)
    }
    push.apply(tocGroups, catogoriesUsed)
  }
  else {
    tocGroups.sort(util.compareNatural)
  }

  // Start markdown for TOC categories.
  var tocMarkdown = ['<!-- div class="toc-container" -->\n']

  _.each(tocGroups, function(group) {
    if (isIgnored(group)) {
      return
    }

    tocMarkdown.push('<!-- div -->\n', '## `' + group + '`')

    if (sortEntries && organized[group]) {
      // Sort the TOC groups.
      organized[group].sort(function(value, other) {
        var valMember = value.getMembers(0)
        var othMember = other.getMembers(0)

        return util.compareNatural(
          (valMember ? valMember + getSeparator(value) : '') + value.getName(),
          (othMember ? othMember + getSeparator(other) : '') + other.getName()
        )
      })
    }

    // Add TOC entries for each category.
    _.each(organized[group], function(entry) {
      var member = entry.getMembers(0) || ''
      var name = entry.getName()
      var sep = getSeparator(entry)
      var title = escape((member ? member + sep : '') + name)
      if (isIgnored(title)) {
        return
      }

      if (entry.isAlias()) {
        // An alias has a more complex html structure.
        var owner = entry.getOwner()
        tocMarkdown.push(
          '* <a href="#' +
            owner.getHash(style) +
            '" class="alias">`' +
            title +
            '` -> `' +
            owner.getName() +
            '`' +
            '</a>'
        )
      }
      else {
        // Add a simple TOC entry.
        tocMarkdown.push(
          '* ' + makeAnchor('#' + entry.getHash(style), '`' + title + '`')
        )
      }
    })

    tocMarkdown.push('\n<!-- /div -->\n')
  })

  // End markdown for the TOC.
  tocMarkdown.push('<!-- /div -->\n')

  var docMarkdown = ['# ' + options.title + '\n']
  push.apply(docMarkdown, tocMarkdown)

  docMarkdown.push('<!-- div class="doc-container" -->\n')

  _.each(tocGroups, group => {
    docMarkdown.push('<!-- div -->\n')

    var groupName = group
    if (byCategories && !reSpecialCategory.test(group)) {
      groupName = '“' + group + '” Methods'
    }

    docMarkdown.push('## `' + groupName + '`')

    _.each(organized[group], entry => {
      if (entry.markdown) {
        docMarkdown.push(entry.markdown)
      }
    })

    docMarkdown.push('\n<!-- /div -->\n')
  })

  docMarkdown.push('<!-- /div -->\n')

  // Add link back to the top of the TOC.
  const tocHref = _.get(
    options,
    'tocHref',
    '#' + _.get(tocGroups, 0, '').toLowerCase()
  )
  if (tocHref) {
    docMarkdown.push(' [1]: ' + tocHref + ' "Jump back to the TOC."\n')
  }

  return docMarkdown.join('\n')
}

module.exports = generateDoc
