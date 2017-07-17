// if doing virtual file _content_
// would need to define what _types_ of expressions there are
// (using ast pre-defined types)
// but instead of having to create them using existing complex ast tools
// make it `.toAST` able (if needed)
// mainly `.toString` able, could use merging if it is all in objects...
//
// gom lets you make html, and fliphtml can do it,
// but that syntax is made for lots of attributes
//
// would also be super cool to write docs/typehints with it?
// could write out some types, then generate tests based on those types
// use required and optional....
//
// needs indenting levels too
const log = require('fliplog')
const GithubAPI = require('./github')
const Badger = require('./badger')
const {pkgDesc} = require('./pkgr')
const {store, isNum, indent, occurrs} = require('./deps')
const {
  QueueChain,
  ChainedSet,
  merge,
  toArr,
  isString,
  isFunction,
  isObj,
  dot,
} = require('./chains')

const githubAPI = new GithubAPI()
const strs = {
  backticks: '```',
  newline: `\n`,
  tagged: (tag, str, attrs) => `<${tag}>${str}</${tag}>`,
  relLink: (text, relLink) => `[${text}](${relLink})`,
  absLink: (text, absLink) => `[${text}](${absLink})`,
  namedLink: (text, namedLink) => `[${text}][${namedLink}]`,
  // const md = `[![Awesome][awesomebadge]](https://github.com/sindresorhus/awesome)`
  // imglink: (text, img, link) => `[![${text}][${img}]](${link})`,
  imgLink: (text, img, link) => `[![${text}](${img})](${link})`,
}

let filtered = false
function filterDebug(shouldDebug) {
  if (!filtered) log.filter(() => shouldDebug)
}

// bullet: - | *
// num: 1,2,3
class List extends QueueChain {
  type(type) {
    this.index = 0
    this.items = new ChainedSet(this)
    return this.set('type', type)
  }
  li(item) {
    this.items.add(item)
    return this
  }
  mapListStyle(item) {
    if (item.toString) {
      item = item.toString()
    }

    const type = this.get('type')

    let prefix
    if (type === 'dash') prefix = '- '
    if (type === 'bullet') prefix = '* '

    if (prefix) {
      let index = 0
      const eh = item.split('')
      while (eh[index] === ' ') {
        index++
      }
      if (index > 0) {
        item = item.substring(0, index) + prefix + item.substring(index)
        return item
      }
      else {
        return prefix + item
      }

      return item
    }

    return this.index++ + '. ' + item
  }
  toString() {
    return this.items.values().map(this.mapListStyle.bind(this)).join('\n')
  }
}

/**
 * @TODO needs to have specific positions
 *
 * @desc
 * images
 * links
 * create badges
 * image rel links, to be reusable
 *
 * headers
 * table
 * formatting (bold, italic, strikethrough)
 *
 *
 * screenshot-on-demand (use one in stars)
 *
 * @type {QueueChain}
 */
class Markdown extends QueueChain {
  constructor(parent) {
    super(parent)
    this.str = ``
    this.linkMap = new QueueChain(this)
    this.mdChain = new QueueChain(this)
    this.index = 0
    this.headers()

    // @TODO fwf here
    // this.debug(true)
    filterDebug(process.argv.includes('--debug'))
  }

  // --- ops ---

  add(value) {
    this.mdChain.set(this.index++, value)
    // this.last = value
    return this
  }

  // so when we map the tostring, it is in the right order
  sortKeys() {
    const entries = this.mdChain.entries()
    const keys = Object.keys(entries).filter(isNum).map(Number).sort()

    keys.forEach(key => this.mdChain.set(key, entries[key]))
    // log.fmtobj(this.mdChain.entries()).echo(false) // .echo().exit()
    return this
  }

  goto(position = 0) {
    const indexRef = this.index
    const addRef = this.add.bind(this)

    this.index = position

    // actually bump each key, same as `insert-at-index`
    // but when not using arrays
    const bumpKeys = () => {
      const entries = this.mdChain.entries()
      const keys = Object.keys(entries)
      // this.mdChain.clear()
      this.mdChain = new QueueChain(this)

      keys.forEach(key => {
        let newKey =
          isNum(key) && Number(key) >= position ? Number(key) + 1 : key
        this.mdChain.set(newKey, entries[key])
      })
    }

    bumpKeys()

    // change ref so we can
    // - sort keys after,
    // - change index
    // - then restore ref
    this.add = nextValue => {
      this.mdChain.set(this.index, nextValue)
      this.sortKeys()
      // log
      //   .blue('eh')
      //   .fmtobj({
      //     index: this.index,
      //     md: nextValue.md,
      //     indexRef,
      //     stored: this.mdChain.get(this.index),
      //   })
      //   .echo()
      this.index = indexRef
      this.add = addRef
      return this
    }
    return this
  }

  prepend(value) {
    this.goto(0)
    return this
  }

  append(string) {
    const data = this.mdChain.get(this.index)
    if (!data || !data.md || !data.og) return this

    data.md += string
    data.og.appended = (data.og.appended || []).concat([string])

    return this
  }

  plain(plainStr) {
    this.add({plainStr, md: plainStr})
    return this
  }

  // @todo - build mode to build just a string...
  // builder() {
  //   return this.set('builder', true)
  // }

  getLast() {
    return this.mdChain.get(this.index)
    // return this.last
  }

  // --- simple ---

  quote(quote) {
    const md = '> ' + quote + '\n'
    this.add({quote, md})
    return this
  }

  list(type = 'bullet') {
    const list = new List(this).type(type)
    this.add({og: {type}, md: list})
    return list
  }

  // --- links ---

  // , ...moredata
  dotlink(name) {
    const links = this.linkMap.entries()
    const linkData = dot.get(links, name)

    // could detect img too
    if (isString(linkData)) {
      return this.link(name, linkData)
    }

    const {url, img, text} = linkData

    if (url && img) return this.imglink(text || name, img, url)
    return this.link(text || name, url)
  }

  linkobj(obj) {
    if (obj.img) {
      this.imglink(obj.text, obj.img, obj.url)
    }
    else {
      this.link(obj.text, obj.url)
    }

    return this
  }

  imglink(text, imgName, linkName) {
    let links = this.linkMap.entries()
    let linkHref = this.linkMap.get(linkName) || linkName
    let imgHref = this.linkMap.get(imgName) || imgName

    // @TODO abstract
    let linkData = dot.get(links, text)
    if (isString(linkData)) {
      linkHref = this.link(text, linkData)
    }
    else if (isString(linkData)) {
      linkHref = linkData.url // || linkHref
      imgHref = linkData.img // || imgHref
    }
    // log.quick(linkData.url, linkData.img)
    // log.quick(typeof linkData, typeof linkData === 'object')
    // log.quick({linkData, imgHref, linkHref})
    // log.quick({text, imgName, linkName, links})

    const md = strs.imgLink(text, imgHref, linkHref).trim()
    this.add({og: {text, imgName, linkName, imgHref}, md})

    return this
  }

  /**
   * @desc build a linked name or abs name
   *
   * @param  {string} text link name, and if no linkName, is the linkName
   *
   * @param  {string} [linkName=null] optional, defaults to text.
   *                                  name of link, or abs path
   *
   * @return {Markdown} @chainable
   */
  link(text, linkName = null) {
    if (linkName === null) {
      linkName = text
    }

    let md
    let links = this.linkMap.entries()

    let linkData = dot.get(links, linkName) || dot.get(links, text)
    if (isString(linkData)) {
      md = strs.absLink(text, linkData)
      return this.add({og: {text, linkName, linkData}, md})
    }
    else if (isObj(linkData)) {
      md = strs.absLink(linkData.label, linkData.url)
      return this.add({og: {text, linkName, linkData}, md})
    }

    if (!linkName.includes(':')) {
      const href = linkName
      const coloredHref = log.colored(href, 'underline')
      log.blue(`has link for [${linkName}]`).data(coloredHref).echo()
      md = strs.namedLink(text, linkName)
    }
    else if (this.linkMap.has(linkName)) {
      const href = this.linkMap.get(linkName)
      const coloredHref = log.colored(href, 'underline')
      log.blue(`has link for [${linkName}]`).data(coloredHref).echo()
      md = strs.namedLink(text, linkName)
    }
    else {
      // @TODO: if abs...
      log.yellow(`no link for ${linkName}, using absolute`).echo()
      md = strs.absLink(text, linkName)
    }

    return this.add({og: {text, linkName}, md})
  }

  extendMd(methods) {
    this.shorthands = methods
    methods.forEach(method => {
      this[method] = value => {
        if (this.has(method) === false) {
          this.set(method, [])
        }

        this.add(value)

        const merged = merge(this.get(method), toArr(value))

        return this.set(method, merged)
      }
    })

    return this
  }

  // -------

  extendWith(method, cb) {
    this[method] = value => {
      const md = cb(value)
      this.add({og: value, md})
      return this
    }
    return this
  }
  extendTag(methods) {
    this.shorthands = (this.shorthands || []).concat(methods)
    methods.forEach(method => {
      this[method] = value => {
        const md = strs.tagged(method, value)
        this.add({og: value, md})
        return this
      }
    })

    return this
  }

  // ----

  highlight(lang, og) {
    const {backticks, newline} = strs
    const md = backticks + lang + newline + og + newline + backticks

    return this.add({og, md})
  }
  js(content) {
    return this.highlight('js', content)
  }

  // -----

  /**
   * @param  {Object} links {[name]: href}
   * @return {Markdown} @chainable
   */
  links(links) {
    Object.keys(links).forEach(name => {
      this.linkMap.set(name, links[name])
    })
    return this
  }

  /**
   * @protected
   * @return {Markdown} @chainable
   * @methodBuilder
   */
  headers() {
    const headers = []
    for (let i = 1; i < 6; i++) {
      headers.push('#'.repeat(i))
    }

    headers.forEach((header, i) => {
      const num = i + 1
      this['header' + num] = og => {
        const md = strs.newline + header + ' ' + og + strs.newline
        this.add({og, md, type: 'header' + num})
        return this
      }
    })

    return this
  }

  /**
   * @desc adds table of contents
   *       makes a list,
   *       goes through all entries in the store,
   *       gets all headers,
   *       indents them to their respective header type/num
   *
   * @param  {Function | number} [filterCb=null]
   * @return {MD} @chainable
   */
  tableOfContents(filterCb = null) {
    const defaultFilter = value =>
      // && onlyLettersAndSpaces.test(value.og)
      value &&
      value.type &&
      value.type.includes('header') &&
      // ignore existing first h1
      occurrs(value.md, '#') !== 1

    let position = 0
    let filter = defaultFilter
    if (isNum(filterCb)) position = filterCb
    else if (isFunction(filterCb)) filter = filterCb

    /* prettier-ignore */
    const headers = this.mdChain
      .values()
      .filter(filter)
      .map(value => {
        const {md, og} = value
        // so we turn into a link, then indent the link
        const link = strs.relLink(og, encodeURI(og.toLowerCase()))
        // -2 because we always start from second h1
        const indented = indent(link, occurrs(md, '#') - 2)

        // log.quick(indented, occurrs(md, '#'))
        return indented
      })

    // @TODO: .flipback here so can loop through
    const sub = new Markdown().header2('Contents')
    const list = sub.list('dash')
    headers.forEach(header => list.li(header))

    const md = sub.toString()
    this.goto(position).add({og: list, md})

    return this
  }

  toString() {
    // .values()
    this.sortKeys()
    return Object.values(this.mdChain.entries())
      .map(data => {
        const md = data.md
        if (md && md.toString) return md.toString()
        return md
      })
      .join('\n')
  }

  static init(data) {
    const target = new Markdown(data)
    return target
    const proxy = new Proxy(target, {
      get(thisArg, name) {
        if (!(name in thisArg)) {
          thisArg.extendMd([name])
          // thisArg[name] = arg => {
          //   thisArg.set(name, arg)
          //   return proxy
          // }
          // return proxy
        }
        return thisArg[name]
      },
    })
    return proxy
  }
}

let _links = {}

// with all static!
class MD extends Markdown {
  // @FIXME @TODO @HACK
  static links(links) {
    _links = links
  }
  static badger(name) {
    function badgeFactory(named) {
      switch (named) {
        case 'travis':
          return travisBadge
        default:
          throw new Error('had no badge factory for ' + named)
      }
    }
    function travisBadge(org, repo) {
      const badgeLink = `https://travis-ci.org/${org}/${repo}`
      const badgeImg = `${badgeLink}.svg?branch=master`
      return MD.imglink('Build Status', badgeImg, badgeLink)
    }

    return badgeFactory(name)
  }
  static badge() {
    return Badger
  }
  static link(text, linkName) {
    return Markdown.init().links(_links).link(text, linkName).toString().trim()
  }
  static imglink(text, img, link) {
    return Markdown.init()
      .links(_links)
      .imglink(text, img, link)
      .toString()
      .trim()
  }

  // can use markdown parsers here and then output pseudo codegen
  // static fromStr(str) {}
}

/**
 * @TODO !!!!!!!
 * need a way to abstract chaining enough that anything can be chained without .end
 * like the storyline, needs factories for this
 * just needs to define which `.ends` to call
 *
 * should extend the flipback goodness, might make it easier
 *
 */
class AwesomeMarkdown extends MD {
  // @TODO could also use the shorthand methods thisway...
  chainUppable(chain) {
    Object.keys(this)
      .filter(key => isFunction(this[key]) && !chain[key])
      .forEach(key => {
        chain[key] = (...args) => {
          chain.end()
          return this[key](...args)
        }
      })

    return chain
  }

  // @TODO shoould add `.till` here for easier chaining
  //
  // could also be a factory for building an object for md
  // could also be data chain since desc...
  chainFactory(props = [], obj = {end: Function.prototype}) {
    // const data = Object.create(this)
    const data = {}
    const chain = this.chainUppable({})

    const propThis = prop => value => {
      data[prop] = merge(data[prop], value)
      return chain
    }

    props.forEach(prop => (chain[prop] = propThis(prop)))
    chain.end = arg => {
      if (obj.endThen) return obj.endThen(data, this, arg)
      obj.end(data, this, arg)
      return this
    }
    chain.getData = prop => (prop ? data[prop] : data)

    if (obj.toStringData) {
      data.toString = () => {
        return obj.toStringData(data)
      }
    }

    Object.keys(obj).forEach(key => {
      if (key === 'getData') return chain
      if (key === 'end') return chain
      if (key === 'toString') return chain
      chain[key] = obj[key].bind(this)
      return chain
    })

    return chain
  }

  maintainer(name, github, twitter = null) {
    const label = ` -- *Maintainer*: \`${name}\``
    const githubmd = MD.imglink(
      'Github',
      'githubicon',
      'https://github.com/' + github
    )
    let twittermd = ''
    if (twitter) {
      twittermd = MD.imglink(
        'Twitter',
        'twittericon',
        'https://twitter.com/' + twitter
      )
    }

    return label + githubmd + twittermd
  }

  // and also `.inList` for other awesome list badge
  maintainerChain(linkChain, name = null, github = null, twitter = null) {
    let chain
    const obj = {
      endThen: data => {
        log.yellow('ended maintainer chain').json(data).echo()
        const maintainer = this.maintainer(data.name, data.github, data.twitter)

        const ref = linkChain.desc
        linkChain.desc = value => ref(value + maintainer)

        return linkChain
      },
    }
    const props = ['name', 'github', 'twitter', 'avatar']
    chain = this.chainFactory(props, obj)

    chain.getAvatar = () => {
      const maintainer = chain.getData('github')
      // log.quick(chain.getData())
      const key = 'github.data.' + maintainer

      if (store.has(key)) {
        log.cyan('store had avatar, using it').echo()

        return chain.avatar(store.get(key).profile.avatar_url)
      }

      log.yellow('getting avatar for ' + maintainer).echo()
      log.red('rate limit reached :-(').echo()
      return chain.end()

      const task = new Promise(presolve => {
        githubAPI.loadUserData(maintainer, args => {
          if (!args) {
            log.red('could not get github data').echo()
            presolve(args)
            return
          }

          log
            .cyan('got github data, storing in nodeconfig')
            .data(args.profile.avatar_url)
            .echo()

          chain.avatar(args.profile.avatar_url + `| width=48`)
          store.set(key, args)

          presolve(args)
        })
      })

      this.task(task)
      return chain
    }

    // decorate.description to auto call .end
    const ref = linkChain.desc
    chain.desc = description => {
      ref(description)
      chain.getAvatar().end()
      return linkChain
      // return linkChain.end()
    }
    chain.awesome = (awesomename, pkg) => chain.end().awesome(awesomename, pkg)

    if (name) {
      chain.name(name)
      if (github) chain.github(github)
      if (twitter) chain.twitter(twitter)
      return chain.getAvatar() // .end()
    }

    return chain
  }

  linkChain(list) {
    let chain = {}
    const obj = {
      // was this for just link, now is for awesome
      // end: link => this.links([link]),
      end: awesome => list.li(awesome),
      maintainer: (name, github, twitter) => {
        return this.maintainerChain(chain, name, github, twitter)
      },

      // this is also maintainer...
      // toStringData: data => () => Object.values(data).join('\n'),
      toStringData: data => {
        let name
        if (data.img) name = MD.imglink(data.name, data.img, data.url)
        else name = MD.link(data.name, data.url)

        delete data.name
        delete data.url
        delete data.img

        /* prettier-ignore */
        return name + ' ' + Object
          .keys(data)
          .map(key => {
            if (key === 'toString') return false
            return data[key]
          })
          .filter(key => key)
          .join('\n')
      },
    }

    chain = this.chainFactory(['name', 'img', 'url', 'desc'], obj)

    const ref = chain.desc
    chain.desc = desc => {
      // get from pkg description
      // !desc ||
      if (desc.indexOf('pkg') === 0) {
        const name = chain.getData('name') || desc
        const fetchedDescription = pkgDesc(name.toLowerCase())

        log
          .bold('auto getting pkg description')
          .data({name, desc, fetchedDescription})
          .echo()

        // append strings, remove 'pkg'
        return ref(fetchedDescription + desc.slice(3))
      }
      else {
        log.bold('using explicit desc').data({desc}).echo()
      }
      return ref(desc)
    }
    // chain.pkgDescription = name => chain.description(pkgDesc(name))
    chain.awesome = (name, pkg = null) => {
      chain.end()
      return this.awesome(name, pkg)
    }

    return chain
  }

  awesome(name, pkg = null) {
    const list = this.list('dash')
    const chain = this.linkChain(list)

    let named = name.includes('/') ? name.split('/').pop() : name
    if (pkg) named = pkg

    chain.name(pkg || named).url('https://github.com/' + name)

    return chain
  }

  footer(name) {
    /* prettier-ignore */
    this
      .header2('Contribute')
      .plain('Contributions welcome!')
      .plain('Read the [contribution guidelines](contributing.md) first.')
      .header2('License')
      .linkobj({
        text: 'CC0',
        img: `http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg`,
        url: `http://creativecommons.org/publicdomain/zero/1.0`,
      })
      .plain(
        `To the extent possible under law, ` +
        `${name} has waived all copyright and ` +
        `related or neighboring rights to this work.`
      )

    return this
  }
}

module.exports = {AwesomeMarkdown, Markdown, MD, List}
