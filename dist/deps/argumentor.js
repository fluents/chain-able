'use strict'

module.exports = function() {
  var arguments$1 = arguments;

  var len = arguments.length
  var args = new Array(len)
  for (var i = 0; i < len; ++i)
    { args[i] = arguments$1[i] }
  return args
}

// module.exports = argumentor

// @EXAMPLE
// function eh() {
//   // const args = argumentor(1).apply(null, arguments)
//   const args = argumentor.apply(null, arguments).slice(1)
//   console.log(args)
// }
//
// eh(1, 10, 100)

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJndW1lbnRvci5qcyIsInNvdXJjZXMiOlsiYXJndW1lbnRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGxlbilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gIHJldHVybiBhcmdzXG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gYXJndW1lbnRvclxuXG4vLyBARVhBTVBMRVxuLy8gZnVuY3Rpb24gZWgoKSB7XG4vLyAgIC8vIGNvbnN0IGFyZ3MgPSBhcmd1bWVudG9yKDEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbi8vICAgY29uc3QgYXJncyA9IGFyZ3VtZW50b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5zbGljZSgxKVxuLy8gICBjb25zb2xlLmxvZyhhcmdzKVxuLy8gfVxuLy9cbi8vIGVoKDEsIDEwLCAxMDApXG4iXSwibmFtZXMiOlsiY29uc3QiLCJsZXQiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVosTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7O0FBQUE7RUFDM0JBLEdBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU07RUFDNUJBLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzNCLEtBQUtDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQzFCLEVBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxXQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUE7RUFDeEIsT0FBTyxJQUFJO0NBQ1o7Ozs7Ozs7Ozs7OzsifQ==