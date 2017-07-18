const {Chain, isUndefined, isString, isEmpty} = require('chain-able')

function sanitize(s) {
  return s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}

const lettersUpperCase = 'A-Z'
const lettersLowerCase = 'a-z'
const lettersUpperAndLower = lettersUpperCase + lettersLowerCase
const digit = '(?:\\d)'
const nonDitit = '(?:\\D)'
const start = '(?:^)'
const end = '(?:$)'
const newLine = '(?:\\r\\n|\\r|\\n)'

class RegExpBuilder extends Chain {
  constructor(parent) {
    super()

    // this.methods(['flags', 'literal']).autoGetSet().build()
    this.method('groupsUsed').autoIncrement().build()

    // -------
    // string type so adding is autoMerge plugin type thing :-)
    this.flags = arg => {
      if (isUndefined(arg)) return this.get('flags')
      const flags = this.get('flags') + arg
      return this.set('flags', flags)
    }
    // default/initial
    this.set('flags', '')
    // -------
    // -------
    this.addLiteral = this.literal = arg => {
      if (isUndefined(arg)) return this.get('literal')
      const literal = this.get('literal').push(arg)
      return this.set('literal', literal)
    }
    this.set('literal', [])
    // -------

    this.transform(['of', ''], sanitize)

    // this._flags = ''
    // this._literal = []
    // this._groupsUsed = 0

    this._clear()
  }

  // ------------------ data ------------------

  // -------------- config --------------

  neither(r) {
    if (isString(r)) {
      return this.notAhead(new RegExpBuilder().exactly(1).of(r))
    }
    return this.notAhead(r)
  }

  nor(r) {
    if (this.get('min') === 0 && this.get('ofAny')) {
      this.min(-1).ofAny(false)
    }

    return this.neither(r).min(0).ofAny()
  }

  exactly(n) {
    return this._flushState().min(n).max(n)
  }

  optional(r) {
    this.max(1)
    const like = this._combineGroupNumberingAndGetLiteral(r)
    return this.like(like)
  }

  ignoreCase() {
    return this._addFlag('i')
  }

  multiLine() {
    return this._addFlag('m')
  }

  globalMatch() {
    return this._addFlag('g')
  }

  startOfInput() {
    return this.addLiteral()
  }

  startOfLine() {
    return this.multiLine().startOfInput()
  }

  endOfInput() {
    return this._flushState().addLiteral(end)
  }

  endOfLine() {
    return this.multiLine().endOfInput()
  }

  either(r) {
    if (isString(r)) {
      return this._eitherLike(new RegExpBuilder().exactly(1).of(r))
    }
    else {
      return this._eitherLike(r)
    }
  }

  or(r) {
    if (isString(r)) {
      return this._orLike(new RegExpBuilder().exactly(1).of(r))
    }
    else {
      return this._orLike(r)
    }
  }

  min(min) {
    return this._flushState().set('min', min)
  }

  max(max) {
    return this._flushState().set('max', max)
  }

  of(s) {
    return this.set('of', s)
    // this._of = this._sanitize(s)
    // return this
  }

  ofAny(ofAny = true) {
    return this.set('ofAny', ofAny)
  }

  ofGroup(n) {
    return this.set('ofGroup', n)
  }

  from(s) {
    const from = this._sanitize(s.join(''))
    return this.set('from', from)
  }
  notFrom(s) {
    const notFrom = this._sanitize(s.join(''))
    return this.set('notFrom', notFrom)
  }

  like(r) {
    const like = this._combineGroupNumberingAndGetLiteral(r)
    return this.set('like', like)
  }

  reluctantly() {
    return this.set('reluctant', true)
  }

  ahead(r) {
    return this._flushState().addLiteral(
      '(?=' + this._combineGroupNumberingAndGetLiteral(r) + ')'
    )
  }

  notAhead(r) {
    this._flushState()
    this.addLiteral('(?!' + this._combineGroupNumberingAndGetLiteral(r) + ')')
    return this
  }

  asGroup() {
    return this.groupsUsed(+1).set('capture', true)
  }

  then(s) {
    return this.exactly(1).of(s)
  }

  find(s) {
    return this.then(s)
  }

  some(s) {
    return this.min(1).from(s)
  }

  maybeSome(s) {
    return this.min(0).from(s)
  }

  maybe(s) {
    return this.max(1).of(s)
  }

  something() {
    return this.min(1).ofAny()
  }

  anything() {
    return this.min(0).ofAny()
  }

  anythingBut(s) {
    if (s.length === 1) {
      return this.min(0).notFrom([s])
    }

    this.notAhead(new RegExpBuilder().exactly(1).of(s))
    return this.min(0).ofAny()
  }

  any() {
    return this.exactly(1).ofAny()
  }

  lineBreak() {
    return this._flushState().addLiteral(newLine)
  }

  lineBreaks() {
    return this.like(new RegExpBuilder().lineBreak())
  }

  whitespace() {
    const min = this.get('min')
    const max = this.get('max')

    if (min === -1 && max === -1) {
      return this._flushState().addLiteral('(?:\\s)')
    }

    return this.set('like', '\\s')
  }

  notWhitespace() {
    const min = this.get('min')
    const max = this.get('max')

    if (min === -1 && max === -1) {
      return this._flushState().addLiteral('(?:\\S)')
    }

    return this.like('\\S')
  }

  tab() {
    return this._flushState().addLiteral('(?:\\t)')
  }

  tabs() {
    return this.like(new RegExpBuilder().tab())
  }

  digit() {
    return this._flushState().addLiteral(digit)
  }

  notDigit() {
    return this._flushState().addLiteral(nonDitit)
  }

  digits() {
    return this.like(new RegExpBuilder().digit())
  }

  notDigits() {
    return this.like(new RegExpBuilder().notDigit())
  }

  letter() {
    return this.exactly(1).letters()
  }
  letters() {
    return this.set('from', lettersUpperAndLower)
  }

  notLetter() {
    return this.exactly(1).notLetters()
  }
  notLetters() {
    return this.set('notFrom', 'A-Za-z')
  }

  lowerCaseLetter() {
    return this.exactly(1).lowerCaseLetters()
  }
  lowerCaseLetters() {
    return this.set('from', 'a-z')
  }

  upperCaseLetter() {
    return this.exactly(1).upperCaseLetters()
  }
  upperCaseLetters() {
    return this.set('from', 'A-Z')
  }

  append(r) {
    this.exactly(1)
    this._like = this._combineGroupNumberingAndGetLiteral(r)
    return this
  }

  // --------------------------------------
  // ----------- private ------------------
  // --------------------------------------

  _clear() {
    // @TODO would be better as .delete
    return this.min(-1)
      .max(-1)
      .of('')
      .ofAny(false)
      .ofGroup(-1)
      .from('')
      .notFrom('')
      .like('')
      .either('')
      .reluctant(false)
      .capture(false)
  }

  _flushState() {
    const _of = this.get('of')
    const ofAny = this.get('ofAny')
    const ofGroup = this.get('ofGroup')
    const notFrom = this.get('notFrom')
    const from = this.get('from')
    const like = this.get('like')
    const capture = this.get('capture')
    const reluctant = this.get('reluctant')

    const hasValidState =
      ofAny ||
      ofGroup > 0 ||
      !isEmpty(_of) ||
      !isEmpty(from) ||
      !isEmpty(notFrom) ||
      !isEmpty(like)

    if (hasValidState) {
      const captureLiteral = capture ? '' : '?:'
      const reluctantLiteral = reluctant ? '?' : ''
      const quantityLiteral = this._getQuantityLiteral()
      const characterLiteral = this._getCharacterLiteral()

      const literal =
        '(' +
        captureLiteral +
        '(?:' +
        characterLiteral +
        ')' +
        quantityLiteral +
        reluctantLiteral +
        ')'

      this.addLiteral(literal)
      this._clear()
    }
  }

  _getQuantityLiteral() {
    const min = this.get('min')
    const max = this.get('max')

    if (min !== -1) {
      if (max !== -1) {
        return '{' + min + ',' + max + '}'
      }
      return '{' + min + ',}'
    }
    else {
      return '{0,' + max + '}'
    }
  }

  _getCharacterLiteral() {
    if (!isEmpty(this.get('of'))) {
      return this.get('of')
    }
    else if (this.get('ofAny')) {
      return '.'
    }
    else if (this.get('ofGroup') > 0) {
      return '\\' + this.get('ofGroup')
    }
    else if (!isEmpty(this.get('from'))) {
      return '[' + this.get('from') + ']'
    }
    else if (!isEmpty(this.get('notFrom'))) {
      return '[^' + this.get('notFrom') + ']'
    }
    else if (!isEmpty(this.get('like'))) {
      return this.get('like')
    }
  }

  getLiteral() {
    return this._flushState().get('literal').join('')
  }

  _combineGroupNumberingAndGetLiteral(r) {
    const literal = this._incrementGroupNumbering(
      r.getLiteral(),
      this.get('groupsUsed')
    )
    this.tap('groupsUsed', used => used + r._groupsUsed)
    return literal
  }

  _incrementGroupNumbering(literal, increment) {
    if (increment > 0) {
      literal = literal.replace(/[^\\]\\\d+/g, function(groupReference) {
        var groupNumber = parseInt(groupReference.substring(2)) + increment
        return groupReference.substring(0, 2) + groupNumber
      })
    }
    return literal
  }

  getRegExp() {
    this._flushState()

    const literal = this.get('literal').join('')
    const flags = this.get('flags')
    return new RegExp(literal, flags)
  }

  _addFlag(flag) {
    const flags = this.get('flags')
    if (!flags.includes(flag)) this.addFlag(flag)

    return this
  }

  _eitherLike(r) {
    this._flushState()
    const eitherLike = this._combineGroupNumberingAndGetLiteral(r)
    return this.either(eitherLike)
  }

  _orLike(r) {
    const either = this.get('either')
    const or = this._combineGroupNumberingAndGetLiteral(r)

    if (isEmpty(either)) {
      const literal = this.getLiteral()
      let lastLiteralIndex = lastIndex(literal)
      let lastOr = literal[lastLiteralIndex]
      lastOr = lastOr.substring(0, lastLiteralIndex)

      literal[lastLiteralIndex] = lastOr
      this.addLiteral('|(?:' + or + '))')
    }
    else {
      this.addLiteral('(?:(?:' + either + ')|(?:' + or + '))')
    }

    return this._clear()
  }
}

RegExpBuilder.ignoreCase = () => new RegExpBuilder().ignoreCase()
RegExpBuilder.multiLine = () => new RegExpBuilder().multiLine()
RegExpBuilder.globalMatch = () => new RegExpBuilder().globalMatch()
RegExpBuilder.startOfInput = () => new RegExpBuilder().startOfInput()
RegExpBuilder.startOfLine = () => new RegExpBuilder().startOfLine()
RegExpBuilder.endOfInput = () => new RegExpBuilder().endOfInput()
RegExpBuilder.endOfLine = () => new RegExpBuilder().endOfLine()
RegExpBuilder.either = (r) =>  new RegExpBuilder().either(r)
RegExpBuilder.neither = (r) =>  new RegExpBuilder().neither(r)
RegExpBuilder.exactly = (n) =>  new RegExpBuilder().exactly(n)
RegExpBuilder.min = (n) =>  new RegExpBuilder().min(n)
RegExpBuilder.max = (n) =>  new RegExpBuilder().max(n)
RegExpBuilder.ahead = (r) =>  new RegExpBuilder().ahead(r)
RegExpBuilder.notAhead = (r) =>  new RegExpBuilder().notAhead(r)
RegExpBuilder.then = (s) =>  new RegExpBuilder().then(s)
RegExpBuilder.find = (s) =>  new RegExpBuilder().find(s)
RegExpBuilder.some = (s) =>  new RegExpBuilder().some(s)
RegExpBuilder.maybeSome = (s) =>  new RegExpBuilder().maybeSome(s)
RegExpBuilder.maybe = (s) =>  new RegExpBuilder().maybe(s)
RegExpBuilder.anything = () => new RegExpBuilder().anything()
RegExpBuilder.anythingBut = (s) =>  new RegExpBuilder().anythingBut(s)
RegExpBuilder.any = () => new RegExpBuilder().any()
RegExpBuilder.lineBreak = () => new RegExpBuilder().lineBreak()
RegExpBuilder.whitespace = () => new RegExpBuilder().whitespace()
RegExpBuilder.notWhitespace = () => new RegExpBuilder().notWhitespace()
RegExpBuilder.tab = () => new RegExpBuilder().tab()
RegExpBuilder.digit = () => new RegExpBuilder().digit()
RegExpBuilder.notDigit = () => new RegExpBuilder().notDigit()
RegExpBuilder.letter = () => new RegExpBuilder().letter()
RegExpBuilder.notLetter = () => new RegExpBuilder().notLetter()
RegExpBuilder.lowerCaseLetter = () => new RegExpBuilder().lowerCaseLetter()
RegExpBuilder.upperCaseLetter = () => new RegExpBuilder().upperCaseLetter()
RegExpBuilder.append = (r) =>  new RegExpBuilder().append(r)
RegExpBuilder.optional = (r) =>  new RegExpBuilder().optional(r)
