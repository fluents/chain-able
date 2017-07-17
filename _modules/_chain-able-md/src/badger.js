const ChainedMap = require('./chains')

/**
 * https://github.com/badges/shields/pull/547
 * https://github.com/badges/shields/commit/52b0369c1494cb692fe1f82f74766af46180b47b
 * ?style=flat-square&colorA=494368
 * https://img.shields.io/badge/%F0%9F%95%B6-awesome_webpack-494368.svg?colorA=CCA6C4
 */
class Badger extends ChainedMap {
  constructor(parent) {
    super(parent)

    // 'flat-square'
    this.extend(['style'])
  }

  static text(left, right) {
    return new Badger().text(left, right)
  }
  static color(left, right) {
    return new Badger().color(left, right)
  }

  text(left, right) {
    this.set('text', {left, right})
    if (this.has('color')) return this.toString()
    return this
  }
  color(left, right) {
    this.set('color', {left, right})
    if (this.has('text')) return this.toString()
    return this
  }

  toString() {
    let str = 'https://img.shields.io/badge/'

    let q = false
    const addQuery = (param, val) => {
      if (q === false) {
        q = true
        str += '?' + param + '=' + val
      }
      else {
        str += '&' + param + '=' + val
      }
    }

    const {text, style, color} = this.entries()

    const leftText = text.left ? encodeURI(text.left) : false
    const rightText = text.right ? encodeURI(text.right) : false

    const rightBgColor = color.right
    const leftBgColor = color.left

    // confusingly, rightBgColor is always included
    str += leftText + '-' + rightText + '-' + rightBgColor
    str += '.svg'

    if (style) addQuery('style', style)

    if (leftBgColor) addQuery('colorA', leftBgColor)

    // no right text color what...
    // const rightTextColor = dot.get(color, 'right.text')
    // if (rightTextColor) addQuery('colorB', rightTextColor)

    // const leftTextColor = dot.get(color, 'left.text')
    // if (leftTextColor) str += '&colorA=' + leftTextColor

    return str
  }
}

/* prettier-ignore */
// const badge = Badger
//   .color('000000', 'ffffff')
//   .text('eh!', '~oh!')
//   .toString()

// log.quick({badge})
module.exports = Badger
