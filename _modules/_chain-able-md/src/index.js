const timer = require('fliptime')
const {log, write, resolve} = require('./deps')
const Badger = require('./badger')
const {AwesomeMarkdown, MD} = require('./md')
// log.quick('+ comparison, + articles, + header, +notes, clean, done')

const md = new AwesomeMarkdown()

// could dot this too
const links = {
  twittericon: 'https://rawgit.com/d3viant0ne/awesome-webpack/master/media/twitter-square.svg',
  githubicon: 'https://rawgit.com/d3viant0ne/awesome-webpack/master/media/github-square.svg',
  // badges: {
  //   travis: {
  //     img: MD.badge().color('CCA6C4', '494368').text('🕶️', '⚔ vorpal'),
  //   }
  // },
  awesome: {
    vorpal: {
      img: MD.badge().color('CCA6C4', '494368').text('🕶️', '⚔ vorpal'),
      url: 'https://github.com/vorpaljs/awesome-vorpal',
    },
    list: {
      url: 'https://github.com/sindresorhus/awesome',
      img: 'https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg',
    },
  },
  articles: {
    modernweb: {
      url: `https://modernweb.com/fluent-apis-and-method-chaining/`,
      label: `fluent apis & method chaining (modernweb)`,
    },
    nikas: {
      label: 'fluent js',
      url: `http://nikas.praninskas.com/javascript/2015/04/26/fluent-javascript/`,
    },
    sitepoint: {
      label: 'js like a boss; understanding fluent apis (sitepoint)',
      url: `https://www.sitepoint.com/javascript-like-boss-understanding-fluent-apis/`,
    },
    thejsguy: {
      label: 'improve readibility with fluent apis',
      url: `http://thejsguy.com/2016/01/05/improve-code-readability-in-javascript-with-fluent-interfaces.html`,
    },
    wikipedia: {
      label: `fluent interface (wikipedia)`,
      url: `https://en.wikipedia.org/wiki/Fluent_interface`,
    },
    smashingmagazine: {
      label: `designing js apis for usability (smashingmagazine)`,
      url: `https://www.smashingmagazine.com/2012/10/designing-javascript-apis-usability/`,
    },
    fowler: {
      label: `Martin Fowler on FluentInterface`,
      url: `https://www.martinfowler.com/bliki/FluentInterface.html`,
    },
  },
}
MD.links(links)

const {vanillajs, chainjs, setupjs} = require('./examples/comparison')

const titleBadge =
  MD.imglink('awesome.list') + MD.badger('travis')('fluents', 'awesome-fluents')

/* prettier-ignore */
const awesome = md
  .extendTag(['p'])
  .extendWith('space', (spaces = 1) => '\n'.repeat(spaces))
  .extendWith('hr', () => '\n---------\n')
  .header1('Awesome Fluent ' + titleBadge)
    .quote(`A collection of awesome fluent interfaces / chainable apis`)
  .header2('NodeJS')
    .awesome('mozilla-neutrino/webpack-chain')
      .maintainer('Eli', 'eliperman')
      .desc('pkg')
    .awesome('fuse-box/fuse-box')
      .maintainer('nchanged', 'nchanged', 'nchanged')
      .desc('pkg')
    .awesome('fliphub/fliplog')
      .maintainer()
        .name('James')
        .twitter('aretecode')
        .github('aretecode')
        .end()
      .desc('pkg')
    .awesome('chalk/chalk')
      .maintainer('Sindre Sorhus', 'sindresorhus', 'sindresorhus')
      .desc('pkg')
    .awesome('expressjs/express')
      .maintainer('dougwilson', 'dougwilson')
      .desc('pkg')
    .awesome('SBoudrias/inquirer.js', 'inquirer')
      .maintainer('dthree', 'dthree', 'dthree')
      .desc('pkg')
    .awesome('yargs/yargs')
      .maintainer('Benjamin E. Coe', 'bcoe', 'benjamincoe')
      .desc('pkg')
    .awesome('visionmedia/supertest')
      .maintainer('mikelax', 'mikelax', 'mikelax')
      .desc('pkg')
    .awesome('DevExpress/testcafe').desc('pkg')

  .header2('Web and NodeJS')
    .awesome('lodash')
      .maintainer('John-David Dalton', 'jdalton', 'jdalton')
      .desc('pkg')
    .awesome('nlp-compromise/compromise')
      .maintainer('Spencer Kelly', 'spencermountain', 'spencermountain')
      .desc('pkg')
    .awesome('fluture-js/fluture')
      .maintainer('Aldwin Vlasblom', 'Avaq')
      .desc('pkg')
    .awesome('VerbalExpressions/JSVerbalExpressions')
      .desc('JS RegularExpressions made easy (& fluent)')
    .awesome('facebook/immutable-js')
      .maintainer('leebyron', 'leebyron', 'leebyron')
      .desc('pkg')
    .awesome('josdejong/mathjs')
      .maintainer('Jos de Jong', 'josdejong')
      .desc('pkg')
    .awesome('hapijs/joi')
      .maintainer('Nicolas Morel', 'marsup')
      .desc('pkg')

  .header2('Classics')
    .awesome('tj/commander.js', 'commander').desc('pkg')
    .awesome('dthree/vorpal').desc('pkg')
    .awesome('gulpjs/gulp').desc('pkg')
    .awesome('jquery/jquery')
      .desc(`a fast, small, & feature-rich JavaScript library.
      It makes things like HTML document traversal & manipulation,
      event handling, animation,
      & Ajax much simpler with an easy-to-use
      chainable API that works across a multitude of browsers.
      With a combination of versatility and extensibility,
      jQuery has changed the way that millions of people write JavaScript.`.replace(/[\s\n\t]+/gmi, ' '))

  .header2('My Fluent Packages')
  .awesome('fliphub/flipchain')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fluents/bench-chain')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fluents/funwithflags')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fliphub/d-l-l')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fluents/script-chain')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fluents/cli-chain')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
  .awesome('fluents/likeaboss')
    .maintainer('James', 'aretecode', 'aretecode')
    .desc('pkg')
    .end()

  .space(3)

  .header2('Articles')
    .list('dash')
      .li(MD.link('articles.smashingmagazine'))
      .li(MD.link('articles.sitepoint'))
      .li(MD.link('articles.modernweb'))
      .li(MD.link('articles.thejsguy'))
      .li(MD.link('articles.nikas'))
      .li(MD.link('articles.wikipedia'))
      .li(MD.link('articles.fowler'))
    .end()

  .header2('Example Comparison')
    .header3('setup').js(setupjs)
    .header3('vanilla js').js(vanillajs)
    .header3('chain').js(chainjs)

  .space(3)
  .footer('James')
  .tableOfContents(2)

async function eh() {
  timer.start('tasks')
  // await awesome.tasks()
  timer.stop('tasks').log('tasks')
  let str = awesome
  if (str.end && str.end()) str = str.end()

  // log.quick({e: Object.values(str.mdChain.entries()), v: str.mdChain.values()})
  // log.quick(str.mdChain.values())

  const readme = resolve('./readme.md')
  str = str.toString().trim() + '\n'

  write(readme, str)

  log.green(str).echo()
}
eh()
