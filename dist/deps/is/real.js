// http://2ality.com/2013/04/quirk-implicit-conversion.html
// https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43
//
// eslint-disable-next-line no-self-compare
// && x !== x
module.exports = function (x) { return x !== null && x !== undefined && !Number.isNaN(x); }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhbC5qcyIsInNvdXJjZXMiOlsicmVhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vMmFsaXR5LmNvbS8yMDEzLzA0L3F1aXJrLWltcGxpY2l0LWNvbnZlcnNpb24uaHRtbFxuLy8gaHR0cHM6Ly9qYXZhc2NyaXB0cmVmaW5lZC5pby9uYW4tYW5kLXR5cGVvZi0zNmNkNmUyYTRlNDNcbi8vXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4vLyAmJiB4ICE9PSB4XG5tb2R1bGUuZXhwb3J0cyA9IHggPT4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQgJiYgIU51bWJlci5pc05hTih4KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQSxDQUFDLENBQUEsQ0FBQyxBQUFHLFNBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBQTsifQ==