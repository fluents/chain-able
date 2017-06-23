// const eq = require('./eq')
var traverse = require('../traverse')
var dot = require('../dot-prop')

// const isObj = require('../is/obj')
// const isReal = require('../is/real')
// isDate
// isRegExp
// isError
// isBoolean
// isNumber
// isString
// isArray
// objectKeys
var ref = require('../is');
var isObjWithKeys = ref.isObjWithKeys;
var isObj = ref.isObj;
var isReal = ref.isReal;
var isPureObj = ref.isPureObj;
var isClass = ref.isClass;
var toS = ref.toS;
var isDate = ref.isDate;
var isRegExp = ref.isRegExp;
var isError = ref.isError;
var isBoolean = ref.isBoolean;
var isNumber = ref.isNumber;
var isString = ref.isString;
var isMap = ref.isMap;
var isSet = ref.isSet;
var isSymbol = ref.isSymbol;
var objectKeys = ref.objectKeys;
var isArray = ref.isArray;
var hasOwnProperty = ref.hasOwnProperty;

function cloneValue(src) {
  var dst = null

  // switch (true) {
  //   case !isReal(src): return src
  //   case isArray(src): return src.slice(0).map(val => {
  //     return traverse(val).map(xx => clone(xx))
  //   })
  //   case isDate(src):
  // }

  if (!isReal(src)) {
    return src
  }
  if (isArray(src)) {
    return src.slice(0).map(function (val) {
      return traverse(val).map(function (xx) { return clone(xx); })
    })
  }
  if (isDate(src)) {
    return new Date(src.getTime ? src.getTime() : src)
  }
  if (isRegExp(src)) {
    return new RegExp(src)
  }
  if (isError(src)) {
    dst = new Error(src.message)
    dst.stack = src.stack
    return dst
  }
  if (isBoolean(src)) {
    return new Boolean(src)
  }
  if (isNumber(src)) {
    return new Number(src)
  }
  if (isString(src)) {
    return new String(src)
  }
  if (isObj(src)) {
    return clone(src)
  }
  if (Object.create && Object.getPrototypeOf) {
    return Object.create(Object.getPrototypeOf(src))
  }
  if (src.constructor === Object) {
    return {}
  }

  // @NOTE: else
  // @NOTE: only happens if above getPrototypeOf does not exist
  var proto = (src.constructor && src.constructor.prototype) ||
  src.__proto__ || {}
  var T = function() {}
  T.prototype = proto
  dst = new T()
  traverse(src).forEach(objectKeys(src), function (key) {
    dst[key] = clone(src[key])
  })
  return dst
}

function clone(obj) {
  // console.log('cloning: ', obj)
  var cloned = {}

  // same as
  // return require('lodash').cloneDeep(obj)
  // return require('immutable').fromJS(obj).toJS()
  traverse(obj).forEach(function(x) {
    var src = x
    var dst = cloneValue(src)
    var path = this.path.join('.')
    if (path === '') {
      // src = dst
    }
    else {
      // require('fliplog').dim(path).data({dst, x, obj}).echo()
      console.log('\n')

      if (!isObj(dst)) {
        dot.set(cloned, path, dst)
      }
      else {
        // if it is an object, use an empty obj
        // require('fliplog').bold(path).data({dst, x, obj}).echo()
        dot.set(cloned, path, {})
      }

      // dot.set(cloned, path, dst)
    }
  })
  return cloned
}

module.exports = clone

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUuanMiLCJzb3VyY2VzIjpbImNsb25lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5jb25zdCB0cmF2ZXJzZSA9IHJlcXVpcmUoJy4uL3RyYXZlcnNlJylcbmNvbnN0IGRvdCA9IHJlcXVpcmUoJy4uL2RvdC1wcm9wJylcblxuLy8gY29uc3QgaXNPYmogPSByZXF1aXJlKCcuLi9pcy9vYmonKVxuLy8gY29uc3QgaXNSZWFsID0gcmVxdWlyZSgnLi4vaXMvcmVhbCcpXG4vLyBpc0RhdGVcbi8vIGlzUmVnRXhwXG4vLyBpc0Vycm9yXG4vLyBpc0Jvb2xlYW5cbi8vIGlzTnVtYmVyXG4vLyBpc1N0cmluZ1xuLy8gaXNBcnJheVxuLy8gb2JqZWN0S2V5c1xuY29uc3Qge1xuICBpc09ialdpdGhLZXlzLFxuICBpc09iaixcbiAgaXNSZWFsLFxuICBpc1B1cmVPYmosXG4gIGlzQ2xhc3MsXG4gIHRvUyxcbiAgaXNEYXRlLFxuICBpc1JlZ0V4cCxcbiAgaXNFcnJvcixcbiAgaXNCb29sZWFuLFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzTWFwLFxuICBpc1NldCxcbiAgaXNTeW1ib2wsXG4gIG9iamVjdEtleXMsXG4gIGlzQXJyYXksXG4gIGhhc093blByb3BlcnR5LFxufSA9IHJlcXVpcmUoJy4uL2lzJylcblxuZnVuY3Rpb24gY2xvbmVWYWx1ZShzcmMpIHtcbiAgbGV0IGRzdCA9IG51bGxcblxuICAvLyBzd2l0Y2ggKHRydWUpIHtcbiAgLy8gICBjYXNlICFpc1JlYWwoc3JjKTogcmV0dXJuIHNyY1xuICAvLyAgIGNhc2UgaXNBcnJheShzcmMpOiByZXR1cm4gc3JjLnNsaWNlKDApLm1hcCh2YWwgPT4ge1xuICAvLyAgICAgcmV0dXJuIHRyYXZlcnNlKHZhbCkubWFwKHh4ID0+IGNsb25lKHh4KSlcbiAgLy8gICB9KVxuICAvLyAgIGNhc2UgaXNEYXRlKHNyYyk6XG4gIC8vIH1cblxuICBpZiAoIWlzUmVhbChzcmMpKSB7XG4gICAgcmV0dXJuIHNyY1xuICB9XG4gIGlmIChpc0FycmF5KHNyYykpIHtcbiAgICByZXR1cm4gc3JjLnNsaWNlKDApLm1hcCh2YWwgPT4ge1xuICAgICAgcmV0dXJuIHRyYXZlcnNlKHZhbCkubWFwKHh4ID0+IGNsb25lKHh4KSlcbiAgICB9KVxuICB9XG4gIGlmIChpc0RhdGUoc3JjKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShzcmMuZ2V0VGltZSA/IHNyYy5nZXRUaW1lKCkgOiBzcmMpXG4gIH1cbiAgaWYgKGlzUmVnRXhwKHNyYykpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzcmMpXG4gIH1cbiAgaWYgKGlzRXJyb3Ioc3JjKSkge1xuICAgIGRzdCA9IG5ldyBFcnJvcihzcmMubWVzc2FnZSlcbiAgICBkc3Quc3RhY2sgPSBzcmMuc3RhY2tcbiAgICByZXR1cm4gZHN0XG4gIH1cbiAgaWYgKGlzQm9vbGVhbihzcmMpKSB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuKHNyYylcbiAgfVxuICBpZiAoaXNOdW1iZXIoc3JjKSkge1xuICAgIHJldHVybiBuZXcgTnVtYmVyKHNyYylcbiAgfVxuICBpZiAoaXNTdHJpbmcoc3JjKSkge1xuICAgIHJldHVybiBuZXcgU3RyaW5nKHNyYylcbiAgfVxuICBpZiAoaXNPYmooc3JjKSkge1xuICAgIHJldHVybiBjbG9uZShzcmMpXG4gIH1cbiAgaWYgKE9iamVjdC5jcmVhdGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHNyYykpXG4gIH1cbiAgaWYgKHNyYy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICAvLyBATk9URTogZWxzZVxuICAvLyBATk9URTogb25seSBoYXBwZW5zIGlmIGFib3ZlIGdldFByb3RvdHlwZU9mIGRvZXMgbm90IGV4aXN0XG4gIHZhciBwcm90byA9IChzcmMuY29uc3RydWN0b3IgJiYgc3JjLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkgfHxcbiAgc3JjLl9fcHJvdG9fXyB8fCB7fVxuICB2YXIgVCA9IGZ1bmN0aW9uKCkge31cbiAgVC5wcm90b3R5cGUgPSBwcm90b1xuICBkc3QgPSBuZXcgVCgpXG4gIHRyYXZlcnNlKHNyYykuZm9yRWFjaChvYmplY3RLZXlzKHNyYyksIGtleSA9PiB7XG4gICAgZHN0W2tleV0gPSBjbG9uZShzcmNba2V5XSlcbiAgfSlcbiAgcmV0dXJuIGRzdFxufVxuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgLy8gY29uc29sZS5sb2coJ2Nsb25pbmc6ICcsIG9iailcbiAgY29uc3QgY2xvbmVkID0ge31cblxuICAvLyBzYW1lIGFzXG4gIC8vIHJldHVybiByZXF1aXJlKCdsb2Rhc2gnKS5jbG9uZURlZXAob2JqKVxuICAvLyByZXR1cm4gcmVxdWlyZSgnaW1tdXRhYmxlJykuZnJvbUpTKG9iaikudG9KUygpXG4gIHRyYXZlcnNlKG9iaikuZm9yRWFjaChmdW5jdGlvbih4KSB7XG4gICAgdmFyIHNyYyA9IHhcbiAgICB2YXIgZHN0ID0gY2xvbmVWYWx1ZShzcmMpXG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aC5qb2luKCcuJylcbiAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgIC8vIHNyYyA9IGRzdFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIHJlcXVpcmUoJ2ZsaXBsb2cnKS5kaW0ocGF0aCkuZGF0YSh7ZHN0LCB4LCBvYmp9KS5lY2hvKClcbiAgICAgIGNvbnNvbGUubG9nKCdcXG4nKVxuXG4gICAgICBpZiAoIWlzT2JqKGRzdCkpIHtcbiAgICAgICAgZG90LnNldChjbG9uZWQsIHBhdGgsIGRzdClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpZiBpdCBpcyBhbiBvYmplY3QsIHVzZSBhbiBlbXB0eSBvYmpcbiAgICAgICAgLy8gcmVxdWlyZSgnZmxpcGxvZycpLmJvbGQocGF0aCkuZGF0YSh7ZHN0LCB4LCBvYmp9KS5lY2hvKClcbiAgICAgICAgZG90LnNldChjbG9uZWQsIHBhdGgsIHt9KVxuICAgICAgfVxuXG4gICAgICAvLyBkb3Quc2V0KGNsb25lZCwgcGF0aCwgZHN0KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGNsb25lZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lXG4iXSwibmFtZXMiOlsiY29uc3QiLCJsZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLEdBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN2Q0EsR0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEMsQUFBSyxBQW1CSixPQUFBLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQWxCbEIsSUFBQSxhQUFhO0FBQ2IsSUFBQSxLQUFLO0FBQ0wsSUFBQSxNQUFNO0FBQ04sSUFBQSxTQUFTO0FBQ1QsSUFBQSxPQUFPO0FBQ1AsSUFBQSxHQUFHO0FBQ0gsSUFBQSxNQUFNO0FBQ04sSUFBQSxRQUFRO0FBQ1IsSUFBQSxPQUFPO0FBQ1AsSUFBQSxTQUFTO0FBQ1QsSUFBQSxRQUFRO0FBQ1IsSUFBQSxRQUFRO0FBQ1IsSUFBQSxLQUFLO0FBQ0wsSUFBQSxLQUFLO0FBQ0wsSUFBQSxRQUFRO0FBQ1IsSUFBQSxVQUFVO0FBQ1YsSUFBQSxPQUFPO0FBQ1AsSUFBQSxjQUFjLHNCQWxCVixBQUNTLEFBQ1IsQUFDQyxBQUNHLEFBQ0YsQUFDSixBQUNHLEFBQ0UsQUFDRCxBQUNFLEFBQ0QsQUFDQSxBQUNILEFBQ0EsQUFDRyxBQUNFLEFBQ0gsQUFDTyxBQUNJOztBQUVwQixTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7RUFDdkJDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSTs7Ozs7Ozs7OztFQVVkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDaEIsT0FBTyxHQUFHO0dBQ1g7RUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtJ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