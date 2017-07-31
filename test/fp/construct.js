const construct = require("../../src/deps/fp/construct");

describe("construct", function() {
  const Rectangle = function(w, h) {
    this.width = w;
    this.height = h;
  };
  Rectangle.prototype.area = function() {
    return this.width * this.height;
  };

  it("turns a constructor function into one that can be called without `new`", function() {
    const rect = construct(Rectangle);
    const r1 = rect(3, 4);
    eq(r1.constructor, Rectangle);
    eq(r1.width, 3);
    eq(r1.area(), 12);

    const regex = construct(RegExp);
    const word = regex("word", "gi");
    eq(word.constructor, RegExp);
    eq(word.source, "word");
    eq(word.global, true);
  });

  it("can be used to create Date object", function() {
    const date = construct(Date)(1984, 3, 26, 0, 0, 0, 0);
    eq(date.constructor, Date);
    eq(date.getFullYear(), 1984);
  });

  it("supports constructors with no arguments", function() {
    function Foo() {}
    const foo = construct(Foo)();
    eq(foo.constructor, Foo);
  });

  it.skip(
    "does not support constructor with greater than ten arguments",
    function() {
      const over10 = function() {
        function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
          this.eleventh = $10;
        }
        construct(Foo);
      };
      expect(over10).toThrow(/Constructor with greater than ten arguments/);
    }
  );

  it("returns a curried function", function() {
    const rect = construct(Rectangle);
    const rect3 = rect(3);
    const r1 = rect3(4);
    eq(r1.constructor, Rectangle);
    eq(r1.width, 3);
    eq(r1.height, 4);
    eq(r1.area(), 12);

    const regex = construct(RegExp);
    const word = regex("word");
    const complete = word("gi");
    eq(complete.constructor, RegExp);
    eq(complete.source, "word");
    eq(complete.global, true);
  });
});

describe("constructN", function() {
  const Circle = function(r) {
    this.r = r;
    this.colors = Array.prototype.slice.call(arguments, 1);
  };
  Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.r, 2);
  };

  it("turns a constructor function into a function with n arguments", function() {
    const circle = construct(2, Circle);
    const c1 = circle(1, "red");
    eq(c1.constructor, Circle);
    eq(c1.r, 1);
    eq(c1.area(), Math.PI);
    eq(c1.colors, ["red"]);

    const regex = construct(1, RegExp);
    const pattern = regex("[a-z]");
    eq(pattern.constructor, RegExp);
    eq(pattern.source, "[a-z]");
  });

  it("can be used to create Date object", function() {
    const date = construct(3, Date)(1984, 3, 26);
    eq(date.constructor, Date);
    eq(date.getFullYear(), 1984);
  });

  it("supports constructors with no arguments", function() {
    function Foo() {}
    const foo = construct(0, Foo)();
    eq(foo.constructor, Foo);
  });

  // is not curried
  it.skip("is curried", function() {
    function G(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    const construct2 = construct(2);
    eq(typeof construct2, "function");
    const g2 = construct2(G);
    eq(typeof g2, "function");
    eq(g2("a", "b").constructor, G);
    eq(g2("a")("b").constructor, G);
  });
});
