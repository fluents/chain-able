var toS = require('./toS')

// || typeof x === 'boolean'  || (/true|false/).test(x)
module.exports = function (x) { return x === true || x === false || toS(x) === '[object Boolean]'; }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZXMiOlsiYm9vbGVhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b1MgPSByZXF1aXJlKCcuL3RvUycpXG5cbi8vIHx8IHR5cGVvZiB4ID09PSAnYm9vbGVhbicgIHx8ICgvdHJ1ZXxmYWxzZS8pLnRlc3QoeClcbm1vZHVsZS5leHBvcnRzID0geCA9PlxuICB4ID09PSB0cnVlIHx8IHggPT09IGZhbHNlIHx8IHRvUyh4KSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nXG4iXSwibmFtZXMiOlsiY29uc3QiXSwibWFwcGluZ3MiOiJBQUFBQSxHQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7OztBQUc1QixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsQ0FBQyxDQUFBLENBQUMsQUFDakIsU0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLGtCQUFrQixHQUFBOyJ9