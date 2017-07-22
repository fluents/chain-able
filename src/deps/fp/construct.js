/* eslint max-len: "OFF" */
/* eslint consistent-return: "OFF" */

const isNumberPrimitive = require('../is/numberPrimitive')
const curry = require('./curry')
// const nAry = require('./arity')

/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf fp
 * @symb 👷
 * @since 5.0.0-beta.4
 * @fork v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 *
 * @param {number} n The arity of the constructor function. (aka, number of args)
 * @param {Function} Klass The constructor function to wrap. (class to do `new Klass` on)
 * @return {Function} A wrapped, curried constructor function.
 *
 * @extends R.construct
 * @extends R.constructN
 * @variation with a single *notNumber* arg, it acts as construct, rather than constructN
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/constructN.js ramda-construct}
 * @see {@link ramda-construct}
 * @see isNumberPrimitive
 *
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 *
 */
function constructN(n, Klass) {
  if (!isNumberPrimitive(n)) {
    return constructN(n.length, n)
  }
  else if (n === 0) {
    return () => new Klass()
  }
  else {
    /*, $5, $6, $7, $8, $9 */
    // curry(nAry(n,
    return curry(n, function($0, $1, $2, $3, $4) {
      const len = arguments.length
      if (len === 1 || len > 5) return new Klass($0, $1, $2)
      else if (len === 2) return new Klass($0, $1)
      else if (len === 3) return new Klass($0, $1, $2)
      else if (len === 4) return new Klass($0, $1, $2, $3)
      else if (len === 5) return new Klass($0, $1, $2, $3, $4)
      // else if (len=== 6) return new Klass($0, $1, $2, $3, $4, $5)
      // else if (len=== 7) return new Klass($0, $1, $2, $3, $4, $5, $6)
      // else if (len=== 8) return new Klass($0, $1, $2, $3, $4, $5, $6, $7)
      // else if (len=== 9) return new Klass($0, $1, $2, $3, $4, $5, $6, $7, $8)
      // else if (len === 10) return new Klass($0, $1, $2, $3, $4, $5, $6, $7, $8, $9)
    })
    // ))
  }
}

// module.exports = curry(2, constructN)
module.exports = constructN
