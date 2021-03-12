const { expect } = require("chai");
const BluebirdPromise = require("bluebird");

const {
    isUndefined,
    isDefinedAndNotNull,
    isNonNullObject,
    isNumber,
    isString,
    isArray,
    isArrayLike,
    isFunction,
    isCallable,
    isIterable,
    isPromiseLike,
} = require("../src");

describe("kaphein-js-type-trait", function ()
{
    const emptyFunc = function ()
    {};

    describe("isUndefined", function ()
    {
        it("should return true on undefined.", function ()
        {
            expect(isUndefined(undefined)).to.equal(true);
            expect(isUndefined(void 0)).to.equal(true);
            expect(isUndefined(({}).foo)).to.equal(true);
            expect(isUndefined(emptyFunc())).to.equal(true);
        });
    });

    describe("isDefinedAndNotNull", function ()
    {
        it("should return false on undefined.", function ()
        {
            expect(isDefinedAndNotNull(undefined)).to.equal(false);
            expect(isDefinedAndNotNull(void 0)).to.equal(false);
            expect(isDefinedAndNotNull(({}).foo)).to.equal(false);
            expect(isDefinedAndNotNull(emptyFunc())).to.equal(false);
        });

        it("should return false on null.", function ()
        {
            expect(isDefinedAndNotNull(null)).to.equal(false);
        });
    });

    describe("isNonNullObject", function ()
    {
        it("should return false on undefined.", function ()
        {
            expect(isNonNullObject(undefined)).to.equal(false);
            expect(isNonNullObject(void 0)).to.equal(false);
            expect(isNonNullObject(({}).foo)).to.equal(false);
            expect(isNonNullObject(emptyFunc())).to.equal(false);
        });

        it("should return false on null.", function ()
        {
            expect(isNonNullObject(null)).to.equal(false);
        });

        it("should return true on an empty object.", function ()
        {
            expect(isNonNullObject({})).to.equal(true);
        });

        it("should return false on a function.", function ()
        {
            expect(isNonNullObject(emptyFunc)).to.equal(false);
        });

        it("should return false on an instance of Function class.", function ()
        {
            expect(isNonNullObject(new Function("l", "r", "return l + r"))).to.equal(false);
        });
    });

    describe("isNumber", function ()
    {
        it("should return true on number literals.", function ()
        {
            expect(isNumber(793)).to.equal(true);
            expect(isNumber(793.5)).to.equal(true);
        });

        it("should return true on instances of Number class.", function ()
        {
            expect(isNumber(new Number())).to.equal(true);
            expect(isNumber(new Number(793))).to.equal(true);
            expect(isNumber(new Number(793.5))).to.equal(true);
        });
    });

    describe("isString", function ()
    {
        it("should return true on string literals.", function ()
        {
            expect(isString("")).to.equal(true);
            expect(isString("foo")).to.equal(true);
        });

        it("should return true on instances of String class.", function ()
        {
            expect(isString(new String())).to.equal(true);
            expect(isString(new String(""))).to.equal(true);
            expect(isString(new String("foo"))).to.equal(true);
        });
    });

    describe("isArray", function ()
    {
        it("should return true on an array literal.", function ()
        {
            expect(isArray([])).to.equal(true);
        });

        it("should return true on instances of Array class.", function ()
        {
            expect(isArray(new Array())).to.equal(true);
            expect(isArray(new Array(5))).to.equal(true);
        });
    });

    describe("isArrayLike", function ()
    {
        it("should return true on an array literal.", function ()
        {
            expect(isArrayLike([])).to.equal(true);
        });

        it("should return true on instances of Array class.", function ()
        {
            expect(isArrayLike(new Array())).to.equal(true);
            expect(isArrayLike(new Array(5))).to.equal(true);
        });

        it("should return true on an array-like object.", function ()
        {
            const obj = {};
            obj[0] = 3;
            obj[1] = "foo";
            obj[2] = false;
            obj.length = 3;

            expect(isArrayLike(obj)).to.equal(true);
        });
    });

    describe("isFunction", function ()
    {
        it("should return true on a function.", function ()
        {
            expect(isFunction(emptyFunc)).to.equal(true);
        });

        it("should return true on an instance of Function class.", function ()
        {
            expect(isFunction(new Function("l", "r", "return l + r"))).to.equal(true);
        });
    });

    describe("isCallable", function ()
    {
        it("should return true on a function.", function ()
        {
            expect(isCallable(emptyFunc)).to.equal(true);
        });

        it("should return true on an instance of Function class.", function ()
        {
            expect(isCallable(new Function("l", "r", "return l + r"))).to.equal(true);
        });

        it("should return true on an object that has 'call' field whose type is function.", function ()
        {
            const callable = {
                call : function call(thisArg, l, r)
                {
                    return l + r;
                }
            };

            expect(isCallable(callable)).to.equal(true);
        });
    });

    describe("isIterable", function ()
    {
        it("should return false on undefined.", function ()
        {
            expect(isIterable(undefined)).to.equal(false);
            expect(isIterable(void 0)).to.equal(false);
            expect(isIterable(({}).foo)).to.equal(false);
            expect(isIterable(emptyFunc())).to.equal(false);
        });

        it("should return false on null.", function ()
        {
            expect(isIterable(null)).to.equal(false);
        });

        it("should return true on string values.", function ()
        {
            expect(isIterable("foo")).to.equal(true);
            expect(isIterable(new String("foo"))).to.equal(true);
        });

        it("should return true on arrays.", function ()
        {
            expect(isIterable([])).to.equal(true);
            expect(isIterable(new Array())).to.equal(true);
            expect(isIterable(new Array(5))).to.equal(true);
        });

        it("should return true on a custom iterable object.", function ()
        {
            const iterable = {};
            iterable[Symbol.iterator] = function ()
            {
                return {
                    next : function next()
                    {
                        return (
                            this._count < 5
                                ? {
                                    value : this._count++,
                                    done : false,
                                }
                                : {
                                    done : true
                                }
                        );
                    },
                    _count : 0
                };
            };

            expect(isIterable(iterable)).to.equal(true);
        });

        it("should return true on a generator.", function ()
        {
            const iterable = {};
            iterable[Symbol.iterator] = function* ()
            {
                yield 1;
                yield 2;
                yield 3;
            };

            expect(isIterable(iterable)).to.equal(true);
        });
    });

    describe("isPromiseLike", function ()
    {
        it("should return true on native promises.", function ()
        {
            expect(isPromiseLike(new Promise(function (resolve)
            {
                resolve("foo");
            }))).to.equal(true);
            expect(isPromiseLike(Promise.resolve())).to.equal(true);
            expect(isPromiseLike(Promise.reject())).to.equal(true);
        });

        it("should return true on bluebird promises.", function ()
        {
            expect(isPromiseLike(new BluebirdPromise(function (resolve)
            {
                resolve("foo");
            }))).to.equal(true);
            expect(isPromiseLike(BluebirdPromise.resolve())).to.equal(true);
            expect(isPromiseLike(BluebirdPromise.reject())).to.equal(true);
        });
    });
});
