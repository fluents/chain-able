var ArrayFrom = require('./util/from')

/**
 * @since 4.0.0
 * @desc Map -> Object
 * @param  {Map} map
 * @return {Object}
 */
module.exports = function (map) {
  var reduced = {}

  // only need to do this if we actually have values in our Map
  if (map.size !== 0) {
    var entries = ArrayFrom(map.entries())
    reduced = entries.reduce(function (acc, ref) {
      var key = ref[0];
      var value = ref[1];

      acc[key] = value
      return acc
    }, {})
  }

  return reduced
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlLmpzIiwic291cmNlcyI6WyJyZWR1Y2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXJyYXlGcm9tID0gcmVxdWlyZSgnLi91dGlsL2Zyb20nKVxuXG4vKipcbiAqIEBzaW5jZSA0LjAuMFxuICogQGRlc2MgTWFwIC0+IE9iamVjdFxuICogQHBhcmFtICB7TWFwfSBtYXBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBtYXAgPT4ge1xuICBsZXQgcmVkdWNlZCA9IHt9XG5cbiAgLy8gb25seSBuZWVkIHRvIGRvIHRoaXMgaWYgd2UgYWN0dWFsbHkgaGF2ZSB2YWx1ZXMgaW4gb3VyIE1hcFxuICBpZiAobWFwLnNpemUgIT09IDApIHtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXlGcm9tKG1hcC5lbnRyaWVzKCkpXG4gICAgcmVkdWNlZCA9IGVudHJpZXMucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgYWNjW2tleV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxuICB9XG5cbiAgcmV0dXJuIHJlZHVjZWRcbn1cbiJdLCJuYW1lcyI6WyJjb25zdCIsImxldCJdLCJtYXBwaW5ncyI6IkFBQUFBLEdBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzs7Ozs7Ozs7QUFReEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFBLEdBQUcsQ0FBQSxDQUFDLEFBQUc7RUFDdEJDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7O0VBR2hCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7SUFDbEJELEdBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFBLENBQUMsR0FBRyxFQUFFLEdBQUEsQUFBSSxBQUFPLEFBQUMsRUFBRSxBQUFHLENBQWhCO1VBQUEsR0FBRyxVQUFFO1VBQUEsS0FBSztBQUFPO01BQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO01BQ2hCLE9BQU8sR0FBRztLQUNYLEVBQUUsRUFBRSxDQUFDO0dBQ1A7O0VBRUQsT0FBTyxPQUFPO0NBQ2Y7In0=