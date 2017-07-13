/*----------------------------------------------------------------------------*/
class Alias {
  /**
   * The Alias constructor.
   *
   * @constructor
   * @param {string} name The alias name.
   * @param {Object} parent The alias parent (prev owner).
   */
  constructor(name, parent) {
    this.parent = parent
    this._name = name
  }

  /**
   * Extracts the entry's `alias` objects.
   *
   * @memberOf Alias
   * @param {number} [index] The index of the array value to return.
   * @returns {Array|string} Returns the entry's `alias` objects.
   */
  getAliases(index) {
    return index == null ? [] : undefined
  }

  /**
   * Extracts the function call from the owner entry.
   *
   * @memberOf Alias
   * @returns {string} Returns the function call.
   */
  getCall() {
    return this.parent.getCall()
  }

  /**
   * Extracts the owner entry's `category` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `category` data.
   */
  getCategory() {
    return this.parent.getCategory()
  }

  /**
   * Extracts the owner entry's description.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's description.
   */
  getDesc() {
    return this.parent.getDesc()
  }

  /**
   * Extracts the owner entry's `example` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `example` data.
   */
  getExample() {
    return this.parent.getExample()
  }

  /**
   * Extracts the entry's hash value for permalinking.
   *
   * @memberOf Alias
   * @param {string} [style] The hash style.
   * @returns {string} Returns the entry's hash value (without a hash itself).
   */
  getHash(style) {
    return this.parent.getHash(style)
  }

  /**
   * Resolves the owner entry's line number.
   *
   * @memberOf Alias
   * @returns {number} Returns the owner entry's line number.
   */
  getLineNumber() {
    return this.parent.getLineNumber()
  }

  /**
   * Extracts the owner entry's `member` data.
   *
   * @memberOf Alias
   * @param {number} [index] The index of the array value to return.
   * @returns {Array|string} Returns the owner entry's `member` data.
   */
  getMembers(index) {
    return this.parent.getMembers(index)
  }

  /**
   * Extracts the owner entry's `name` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `name` data.
   */
  getName() {
    return this._name
  }

  /**
   * Gets the owner entry object.
   *
   * @memberOf Alias
   * @returns {Object} Returns the owner entry.
   */
  getOwner() {
    return this.parent
  }

  /**
   * Extracts the owner entry's `param` data.
   *
   * @memberOf Alias
   * @param {number} [index] The index of the array value to return.
   * @returns {Array} Returns the owner entry's `param` data.
   */
  getParams(index) {
    return this.parent.getParams(index)
  }

  /**
   * Extracts the owner entry's `returns` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `returns` data.
   */
  getReturns() {
    return this.parent.getReturns()
  }

  /**
   * Extracts the owner entry's `since` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `since` data.
   */
  getSince() {
    return this.parent.getSince()
  }

  /**
   * Extracts the owner entry's `type` data.
   *
   * @memberOf Alias
   * @returns {string} Returns the owner entry's `type` data.
   */
  getType() {
    return this.parent.getType()
  }

  /**
   * Checks if the entry is an alias.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true`.
   */
  isAlias() {
    return true
  }

  /**
   * Checks if the owner entry is a constructor.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if a constructor, else `false`.
   */
  isCtor() {
    return this.parent.isCtor()
  }

  /**
   * Checks if the entry is a function reference.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if the entry is a function reference, else `false`.
   */
  isFunction() {
    return this.parent.isFunction()
  }

  /**
   * Checks if the owner entry is a license.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if a license, else `false`.
   */
  isLicense() {
    return this.parent.isLicense()
  }

  /**
   * Checks if the owner entry *is* assigned to a prototype.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if assigned to a prototype, else `false`.
   */
  isPlugin() {
    return this.parent.isPlugin()
  }

  /**
   * Checks if the owner entry is private.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if private, else `false`.
   */
  isPrivate() {
    return this.parent.isPrivate()
  }

  /**
   * Checks if the owner entry is *not* assigned to a prototype.
   *
   * @memberOf Alias
   * @returns {boolean} Returns `true` if not assigned to a prototype, else `false`.
   */
  isStatic() {
    return this.parent.isStatic()
  }
}

/*----------------------------------------------------------------------------*/

module.exports = Alias
