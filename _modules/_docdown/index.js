/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */

const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const generator = require('./lib/generator.js')

/**
 * Generates Markdown documentation based on JSDoc comments.
 *
 * @param {Object} options The options object.
 * @param {string} options.path The input file path.
 * @param {string} options.url The source URL.
 * @param {string} [options.lang='js'] The language indicator for code blocks.
 * @param {boolean} [options.sort=true] Specify whether entries are sorted.
 * @param {string} [options.style='default'] The hash style for links ('default' or 'github').
 * @param {string} [options.title='<%= basename(options.path) %> API documentation'] The documentation title.
 * @param {string} [options.toc='properties'] The table of contents organization style ('categories' or 'properties').
 * @returns {string} The generated Markdown code.
 */
function docdown(options) {
  options = _.defaults(options, {
    lang: 'js',
    sort: true,
    style: 'default',
    title: 'API documentation',
    toc: 'properties',

    // @TODO
    debug: false,
    log: false,
    dev: false,
    // tagBuilders: undefined,
    // ignores: [Matchable],
  })

  const hasPathOrUrl = options.path || options.url
  let source = options.source
  if (!hasPathOrUrl && !source) {
    throw new Error('Path and URL must be specified')
  }

  if (options.path && path.isAbsolute(options.path)) {
    source = fs.readFileSync(options.path, 'utf8')
    options.title = path.basename(options.path) + ' API documentation'
  }

  // console.log(options.title)
  return generator(source, options)
}

module.exports = docdown
