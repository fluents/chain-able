var assert = require('assert');
var traverse = require('traverse');

exports.deepDates = function () {
    assert.ok(traverse.deepEqual(
        { d : new Date, x : [ 1, 2, 3 ] },
        { d : new Date, x : [ 1, 2, 3 ] },
        'dates should be equal'
    ));
    
    var d0 = new Date;
    setTimeout(function () {
        assert.ok(!traverse.deepEqual(
            { d : d0, x : [ 1, 2, 3 ], },
            { d : new Date, x : [ 1, 2, 3 ] },
            'microseconds should count in date equality'
        ));
    }, 5);
};

exports.deepCircular = function () {
    var a = [1];
    a.push(a); // a = [ 1, a ]
    
    var b = [1];
    b.push(a); // b = [ 1, [ 1, a ] ]
    
    assert.ok(
        !traverse.deepEqual(a, b),
        'circular ref mount points count towards equality'
    );
};

exports.deepInstances = function () {
    assert.ok(!traverse.deepEqual(
        [ new Boolean(false) ], [ false ],
        'boolean instances are not real booleans'
    ));
    
    assert.ok(!traverse.deepEqual(
        [ new String('x') ], [ 'x' ],
        'string instances are not real strings'
    ));
    
    assert.ok(!traverse.deepEqual(
        [ new Number(4) ], [ 4 ],
        'number instances are not real numbers'
    ));
    
    assert.ok(traverse.deepEqual(
        [ new RegExp('x') ], [ /x/ ],
        'regexp instances are real regexps'
    ));
    
    assert.ok(!traverse.deepEqual(
        [ new RegExp(/./) ], [ /../ ],
        'these regexps aren\'t the same'
    ));
    
    assert.ok(!traverse.deepEqual(
        [ function (x) { return x * 2 } ],
        [ function (x) { return x * 2 } ],
        'functions with the same .toString() aren\'t necessarily the same'
    ));
    
    var f = function (x) { return x * 2 };
    assert.ok(traverse.deepEqual(
        [ f ], [ f ],
        'these functions are actually equal'
    ));
};

exports.deepEqual = function () {
    assert.ok(!traverse.deepEqual(
        [ 1, 2, 3 ],
        { 0 : 1, 1 : 2, 2 : 3 },
        'arrays are not objects'
    ));
};

exports.deepArguments = function () {
    assert.ok(!traverse.deepEqual(
        [ 4, 5, 6 ],
        (function () { return arguments })(4, 5, 6),
        'arguments are not arrays'
    ));
    
    assert.ok(traverse.deepEqual(
        (function () { return arguments })(4, 5, 6),
        (function () { return arguments })(4, 5, 6),
        'arguments should equal'
    ));
};
