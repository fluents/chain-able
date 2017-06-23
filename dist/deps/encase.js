'use strict'

/**
 * @see https://github.com/fluture-js/Fluture#encase
 * @since 4.0.0 <- moved out into a dep
 * @since 1.0.0
 *
 * @param  {Function} call
 * @return {boolean | any} validation/encased function call result
 */
var encase = function (call) { return function (onValid, onInvalid, rethrow) { return function (a, b, c) {
  var result
  try {
    // console.log(arguments)
    result = call(a, b, c)
    return onValid ? onValid(result) : result
  }
  catch (error) {
    if (onInvalid) { return onInvalid(error) }
    if (rethrow === true) { throw error }
    else { return error }
  }
}; }; }

/**
 * @since 4.0.0
 * @param  {Function} call
 * @return {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
 */
module.exports = function (call) {
  var encased = encase(call)

  // left, right, rethrow
  var onInvalid
  var onValid
  var rethrow

  var config = function (arg) {
    return encased(onValid, onInvalid, rethrow)(arg)
  }

  config.onInvalid = function (fn) {
    onInvalid = fn
    return config
  }
  config.onValid = function (fn) {
    onValid = fn
    return config
  }
  config.rethrow = function (should) {
    rethrow = should
    return config
  }

  config.then = config.onValid
  config.catch = config.onInvalid

  return config
}

// module.exports = encase

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jYXNlLmpzIiwic291cmNlcyI6WyJlbmNhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmx1dHVyZS1qcy9GbHV0dXJlI2VuY2FzZVxuICogQHNpbmNlIDQuMC4wIDwtIG1vdmVkIG91dCBpbnRvIGEgZGVwXG4gKiBAc2luY2UgMS4wLjBcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbFxuICogQHJldHVybiB7Ym9vbGVhbiB8IGFueX0gdmFsaWRhdGlvbi9lbmNhc2VkIGZ1bmN0aW9uIGNhbGwgcmVzdWx0XG4gKi9cbmNvbnN0IGVuY2FzZSA9IGNhbGwgPT4gKG9uVmFsaWQsIG9uSW52YWxpZCwgcmV0aHJvdykgPT4gKGEsIGIsIGMpID0+IHtcbiAgbGV0IHJlc3VsdFxuICB0cnkge1xuICAgIC8vIGNvbnNvbGUubG9nKGFyZ3VtZW50cylcbiAgICByZXN1bHQgPSBjYWxsKGEsIGIsIGMpXG4gICAgcmV0dXJuIG9uVmFsaWQgPyBvblZhbGlkKHJlc3VsdCkgOiByZXN1bHRcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAob25JbnZhbGlkKSByZXR1cm4gb25JbnZhbGlkKGVycm9yKVxuICAgIGlmIChyZXRocm93ID09PSB0cnVlKSB0aHJvdyBlcnJvclxuICAgIGVsc2UgcmV0dXJuIGVycm9yXG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gLT4gRnVuY3Rpb25PYmplY3R7b25JbnZhbGlkLCBvblZhbGlkLCByZXRocm93LCBjYWxsfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGwgPT4ge1xuICBjb25zdCBlbmNhc2VkID0gZW5jYXNlKGNhbGwpXG5cbiAgLy8gbGVmdCwgcmlnaHQsIHJldGhyb3dcbiAgbGV0IG9uSW52YWxpZFxuICBsZXQgb25WYWxpZFxuICBsZXQgcmV0aHJvd1xuXG4gIGNvbnN0IGNvbmZpZyA9IGFyZyA9PiB7XG4gICAgcmV0dXJuIGVuY2FzZWQob25WYWxpZCwgb25JbnZhbGlkLCByZXRocm93KShhcmcpXG4gIH1cblxuICBjb25maWcub25JbnZhbGlkID0gZm4gPT4ge1xuICAgIG9uSW52YWxpZCA9IGZuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG4gIGNvbmZpZy5vblZhbGlkID0gZm4gPT4ge1xuICAgIG9uVmFsaWQgPSBmblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuICBjb25maWcucmV0aHJvdyA9IHNob3VsZCA9PiB7XG4gICAgcmV0aHJvdyA9IHNob3VsZFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIGNvbmZpZy50aGVuID0gY29uZmlnLm9uVmFsaWRcbiAgY29uZmlnLmNhdGNoID0gY29uZmlnLm9uSW52YWxpZFxuXG4gIHJldHVybiBjb25maWdcbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBlbmNhc2VcbiJdLCJuYW1lcyI6WyJjb25zdCIsImxldCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7Ozs7Ozs7OztBQVVaQSxHQUFLLENBQUMsTUFBTSxHQUFHLFVBQUEsSUFBSSxDQUFBLENBQUMsQUFBRyxTQUFBLFNBQUEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxBQUFHLFNBQUEsU0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEFBQUc7RUFDbkVDLEdBQUcsQ0FBQyxNQUFNO0VBQ1YsSUFBSTs7SUFFRixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNO0dBQzFDO0VBQ0QsT0FBTyxLQUFLLEVBQUU7SUFDWixJQUFJLFNBQVMsRUFBRSxFQUFBLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFBO0lBQ3RDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRSxFQUFBLE1BQU0sS0FBSyxFQUFBO1NBQzVCLEVBQUEsT0FBTyxLQUFLLEVBQUE7R0FDbEI7Q0FDRixNQUFBOzs7Ozs7O0FBT0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFBLElBQUksQ0FBQSxDQUFDLEFBQUc7RUFDdkJELEdBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7O0VBRzVCQyxHQUFHLENBQUMsU0FBUztFQUNiQSxHQUFHLENBQUMsT0FBTztFQUNYQSxHQUFHLENBQUMsT0FBTzs7RUFFWEQsR0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFBLEdBQUcsQ0FBQSxDQUFDLEFBQUc7SUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7R0FDakQ7O0VBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFBLEVBQUUsQ0FBQSxDQUFDLEFBQUc7SUFDdkIsU0FBUyxHQUFHLEVBQUU7SUFDZCxPQUFPLE1BQU07R0FDZDtFQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQSxFQUFFLENBQUEsQ0FBQyxBQUFHO0lBQ3JCLE9BQU8sR0FBRyxFQUFFO0lBQ1osT0FBTyxNQUFNO0dBQ2Q7RUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsTUFBTSxDQUFBLENBQUMsQUFBRztJQUN6QixPQUFPLEdBQUcsTUFBTTtJQUNoQixPQUFPLE1BQU07R0FDZDs7RUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPO0VBQzVCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVM7O0VBRS9CLE9BQU8sTUFBTTtDQUNkOzs7In0=