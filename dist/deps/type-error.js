var toS = require('./is/toS')
var ObjectAssign = require('./util/assign')

// @TODO: js stringify if development
// , validator, thisArg
module.exports = function (method, type) { return function (arg, e) {
  var data = {
    [method]: {
      type: type,
      argument: {value: arg, type: toS(arg)},
      thrown: e,
      // thisArg,
      // validator,
    },
  }

  var error = ObjectAssign(new TypeError('!='), data)

  /* istanbul ignore next: dev */
  if (process.env.NODE_ENV !== 'production') {
    // since we are just inspecting the metadata on dev
    error.inspect = function () {
      // data.error = error
      return data
    }
  }

  error.reThrow = function () {
    /* istanbul ignore next: dev */
    if (process.env.NODE_ENV !== 'production') { console.log(error) }
    throw error
  }

  return error
}; }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1lcnJvci5qcyIsInNvdXJjZXMiOlsidHlwZS1lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b1MgPSByZXF1aXJlKCcuL2lzL3RvUycpXG5jb25zdCBPYmplY3RBc3NpZ24gPSByZXF1aXJlKCcuL3V0aWwvYXNzaWduJylcblxuLy8gQFRPRE86IGpzIHN0cmluZ2lmeSBpZiBkZXZlbG9wbWVudFxuLy8gLCB2YWxpZGF0b3IsIHRoaXNBcmdcbm1vZHVsZS5leHBvcnRzID0gKG1ldGhvZCwgdHlwZSkgPT4gKGFyZywgZSkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIFttZXRob2RdOiB7XG4gICAgICB0eXBlLFxuICAgICAgYXJndW1lbnQ6IHt2YWx1ZTogYXJnLCB0eXBlOiB0b1MoYXJnKX0sXG4gICAgICB0aHJvd246IGUsXG4gICAgICAvLyB0aGlzQXJnLFxuICAgICAgLy8gdmFsaWRhdG9yLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBlcnJvciA9IE9iamVjdEFzc2lnbihuZXcgVHlwZUVycm9yKCchPScpLCBkYXRhKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBkZXYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBzaW5jZSB3ZSBhcmUganVzdCBpbnNwZWN0aW5nIHRoZSBtZXRhZGF0YSBvbiBkZXZcbiAgICBlcnJvci5pbnNwZWN0ID0gKCkgPT4ge1xuICAgICAgLy8gZGF0YS5lcnJvciA9IGVycm9yXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgfVxuXG4gIGVycm9yLnJlVGhyb3cgPSAoKSA9PiB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGRldiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmV0dXJuIGVycm9yXG59XG4iXSwibmFtZXMiOlsiY29uc3QiXSwibWFwcGluZ3MiOiJBQUFBQSxHQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDL0JBLEdBQUssQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7OztBQUk3QyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQUEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEFBQUcsU0FBQSxTQUFBLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxBQUFHO0VBQzdDQSxHQUFLLENBQUMsSUFBSSxHQUFHO0lBQ1gsQ0FBQyxNQUFNLEdBQUc7TUFDUixNQUFBLElBQUk7TUFDSixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDdEMsTUFBTSxFQUFFLENBQUM7OztLQUdWO0dBQ0Y7O0VBRURBLEdBQUssQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQzs7O0VBR3JELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFOztJQUV6QyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQUEsR0FBRyxBQUFHOztNQUVwQixPQUFPLElBQUk7S0FDWjtHQUNGOztFQUVELEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBQSxHQUFHLEFBQUc7O0lBRXBCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFLEVBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTtJQUM3RCxNQUFNLEtBQUs7R0FDWjs7RUFFRCxPQUFPLEtBQUs7Q0FDYixHQUFBOyJ9