var ObjectProperties = require('./util/props')
var traverse = require('./traverse')
var isObj = require('./is/obj')
var isArray = require('./is/array')

// https://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript
// https://v8project.blogspot.ca/2015/08/getting-garbage-collection-for-free.html
// https://github.com/natewatson999/js-gc
// https://github.com/siddMahen/node-gc
// http://buildnewgames.com/garbage-collector-friendly-code/
// https://stackoverflow.com/questions/27597335/ensuring-object-can-be-garbage-collected
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

/**
 * @TODO: , blacklist = []
 * @TODO: put all GC events into a cached map and debounce the operation
 *
 * @since 4.0.0
 * @desc remove all methods, mark for garbage collection
 * @param {Object} obj
 * @param {Array<string>} ignore
 * @return {void}
 */
function markForGarbageCollection(obj, ignore) {
  if ( ignore === void 0 ) ignore = ['parent'];

  // if (!isObj(obj)) return

  var props = ObjectProperties(obj)
  if (props.length > 10) {
    traverse(obj).forEachs(function (traverser) {
      var value = traverser.value;
      var path = traverser.path;

      var shouldIgnore = path
        .map(function (pathPart) { return ignore.includes(pathPart); })
        .includes(true)

      // ensure the longest paths in traverser are used...
      if (!shouldIgnore && !isArray(value) && !isObj(value)) {
        traverser.remove()
      }
    })
  }

  // simple fast easy cleanup
  for (var p = 0; p < props.length; p++) {
    delete obj[p]
  }

  props = undefined
  obj = undefined
}

module.exports = markForGarbageCollection

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VzIjpbImdjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9iamVjdFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL3V0aWwvcHJvcHMnKVxuY29uc3QgdHJhdmVyc2UgPSByZXF1aXJlKCcuL3RyYXZlcnNlJylcbmNvbnN0IGlzT2JqID0gcmVxdWlyZSgnLi9pcy9vYmonKVxuY29uc3QgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXMvYXJyYXknKVxuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTQ3OTk1L3doZW4tc2hvdWxkLWktdXNlLWRlbGV0ZS12cy1zZXR0aW5nLWVsZW1lbnRzLXRvLW51bGwtaW4tamF2YXNjcmlwdFxuLy8gaHR0cHM6Ly92OHByb2plY3QuYmxvZ3Nwb3QuY2EvMjAxNS8wOC9nZXR0aW5nLWdhcmJhZ2UtY29sbGVjdGlvbi1mb3ItZnJlZS5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbmF0ZXdhdHNvbjk5OS9qcy1nY1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpZGRNYWhlbi9ub2RlLWdjXG4vLyBodHRwOi8vYnVpbGRuZXdnYW1lcy5jb20vZ2FyYmFnZS1jb2xsZWN0b3ItZnJpZW5kbHktY29kZS9cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NTk3MzM1L2Vuc3VyaW5nLW9iamVjdC1jYW4tYmUtZ2FyYmFnZS1jb2xsZWN0ZWRcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvTWVtb3J5X01hbmFnZW1lbnRcblxuLyoqXG4gKiBAVE9ETzogLCBibGFja2xpc3QgPSBbXVxuICogQFRPRE86IHB1dCBhbGwgR0MgZXZlbnRzIGludG8gYSBjYWNoZWQgbWFwIGFuZCBkZWJvdW5jZSB0aGUgb3BlcmF0aW9uXG4gKlxuICogQHNpbmNlIDQuMC4wXG4gKiBAZGVzYyByZW1vdmUgYWxsIG1ldGhvZHMsIG1hcmsgZm9yIGdhcmJhZ2UgY29sbGVjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIG1hcmtGb3JHYXJiYWdlQ29sbGVjdGlvbihvYmosIGlnbm9yZSA9IFsncGFyZW50J10pIHtcbiAgLy8gaWYgKCFpc09iaihvYmopKSByZXR1cm5cblxuICBsZXQgcHJvcHMgPSBPYmplY3RQcm9wZXJ0aWVzKG9iailcbiAgaWYgKHByb3BzLmxlbmd0aCA+IDEwKSB7XG4gICAgdHJhdmVyc2Uob2JqKS5mb3JFYWNocyh0cmF2ZXJzZXIgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlLCBwYXRofSA9IHRyYXZlcnNlclxuXG4gICAgICBjb25zdCBzaG91bGRJZ25vcmUgPSBwYXRoXG4gICAgICAgIC5tYXAocGF0aFBhcnQgPT4gaWdub3JlLmluY2x1ZGVzKHBhdGhQYXJ0KSlcbiAgICAgICAgLmluY2x1ZGVzKHRydWUpXG5cbiAgICAgIC8vIGVuc3VyZSB0aGUgbG9uZ2VzdCBwYXRocyBpbiB0cmF2ZXJzZXIgYXJlIHVzZWQuLi5cbiAgICAgIGlmICghc2hvdWxkSWdub3JlICYmICFpc0FycmF5KHZhbHVlKSAmJiAhaXNPYmoodmFsdWUpKSB7XG4gICAgICAgIHRyYXZlcnNlci5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBzaW1wbGUgZmFzdCBlYXN5IGNsZWFudXBcbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBwcm9wcy5sZW5ndGg7IHArKykge1xuICAgIGRlbGV0ZSBvYmpbcF1cbiAgfVxuXG4gIHByb3BzID0gdW5kZWZpbmVkXG4gIG9iaiA9IHVuZGVmaW5lZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtGb3JHYXJiYWdlQ29sbGVjdGlvblxuIl0sIm5hbWVzIjpbImNvbnN0IiwibGV0Il0sIm1hcHBpbmdzIjoiQUFBQUEsR0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDaERBLEdBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0Q0EsR0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2pDQSxHQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JyQyxTQUFTLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxNQUFtQixFQUFFLENBQWY7aUNBQUEsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUFHOzs7RUFHM0RDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0VBQ2pDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7SUFDckIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFBLFNBQVMsQ0FBQSxDQUFDLEFBQUc7TUFDbEMsQUFBSyxBQUFFLElBQUEsS0FBSztNQUFFLElBQUEsSUFBSSxrQkFBWixBQUFNLEFBQU0sQUFBQyxBQUFZOztNQUUvQkQsR0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJO1NBQ3RCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsQ0FBQSxDQUFDLEFBQUcsU0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFBLENBQUM7U0FDMUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7O01BR2pCLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckQsU0FBUyxDQUFDLE1BQU0sRUFBRTtPQUNuQjtLQUNGLENBQUM7R0FDSDs7O0VBR0QsS0FBS0MsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDckMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQ2Q7O0VBRUQsS0FBSyxHQUFHLFNBQVM7RUFDakIsR0FBRyxHQUFHLFNBQVM7Q0FDaEI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyx3QkFBd0I7In0=