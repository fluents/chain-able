/* eslint lines-around-comment: "off" */

const log = require('fliplog')
const {Remember} = require('script-chain')
const ChainedMap = require('./_chains')

/**
 * @see configstore
 * @see script-chain
 * @prop {Remember} remember script to remember durations in configstore
 */
module.exports = class BenchChainUserInterface extends ChainedMap {
  constructor(parent) {
    super(parent)
    this.remember = new Remember()
  }

  /**
   * @event onAllComplete
   * @param  {string} name
   * @return {BenchChainUserInterface} @chainable
   */
  onRun(name) {
    this.remember.start(name, true)
    this.spinner()
    return this
  }

  /**
   * @event onAllComplete
   * @param  {string} name
   * @return {BenchChainUserInterface} @chainable
   */
  onAllComplete(name) {
    this.remember.finish(name, true)
    this.clearSpinners()
    return this
  }

  /**
   * @desc add a pseudo animated
   * @since 0.4.1
   * @return {BenchChain} @chainable
   */
  spinner() {
    /**
     * @see this.spinning
     * @desc adds spinner for benchmarking
     * @type {Function}
     */
    this.spin = () => {
      log.addSpinner('benchmarking', 'benchmarking')
      log.startSpinners([
        '       🏋️',
        '       🏋️',
        '       🏎',
        '      🏎 ',
        '     🏎 ∞',
        '    🏎 ∞ ',
        '   🏎 ∞∞ ',
        '  🏎 ∞∞  ',
        ' 🏎 ∞    ',
        '🏎 ∞∞    ',
      ])
    }
    this.spin()

    /**
     * @see this.spinning
     * @desc interval every 10 seconds swaps animated benchmarking for progress
     * @type {Function}
     */
    this.removeSpinner = () => {
      try {
        log.removeSpinner()
      }
      catch (e) {
        // ignore
      }

      // reset and clear terminal
      log.clear()
    }

    /**
     * @see this.spinning
     * @desc interval every 10 seconds swaps animated benchmarking for progress
     * @type {Function}
     */
    this.spinning = setInterval(() => {
      this.removeSpinner()
      this.spinAgain = setTimeout(() => this.spin(), 4000)
    }, 10000)

    /**
     * @see this.spinning
     * @desc function to clear interval and reset back
     * @type {Function}
     */
    this.clearSpinners = () => {
      clearInterval(this.spinning)
      clearTimeout(this.spinAgain)
      this.removeSpinner()
    }

    return this
  }
}
