const { expect } = require("chai");

const { getToStringTag } = require("../../src");

module.exports = function ()
{
    it("should return 'Undefined' on undefined.", function ()
    {
        expect(getToStringTag(void 0)).to.equal("Undefined");
    });

    it("should return 'Null' on null.", function ()
    {
        expect(getToStringTag(null)).to.equal("Null");
    });

    it("should return 'Boolean' on a boolean literal.", function ()
    {
        expect(getToStringTag(false)).to.equal("Boolean");
    });

    it("should return 'Boolean' on an instane of 'Boolean' class.", function ()
    {
        expect(getToStringTag(new Boolean(false))).to.equal("Boolean");
    });

    it("should return 'Number' on a number literal.", function ()
    {
        expect(getToStringTag(0)).to.equal("Number");
    });

    it("should return 'Number' on an instance of 'Number' class.", function ()
    {
        expect(getToStringTag(new Number(0))).to.equal("Number");
    });

    it("should return 'String' on a string literal.", function ()
    {
        expect(getToStringTag("0")).to.equal("String");
    });

    it("should return 'String' on an instance of 'String' class.", function ()
    {
        expect(getToStringTag(new String("0"))).to.equal("String");
    });

    it("should return 'Array' on an array literal.", function ()
    {
        expect(getToStringTag([0, 1, 2])).to.equal("Array");
    });

    it("should return 'Array' on an instance of 'Array' class.", function ()
    {
        expect(getToStringTag(new Array(4))).to.equal("Array");
    });

    it("should return 'Object' on an object literal.", function ()
    {
        expect(getToStringTag({})).to.equal("Object");
    });

    it("should return 'Object' on an instance of 'Object' class.", function ()
    {
        expect(getToStringTag(new Object())).to.equal("Object");
    });

    it("should return 'Function' on a function literal.", function ()
    {
        // eslint-disable-next-line brace-style
        expect(getToStringTag(function () {})).to.equal("Function");
    });

    it("should return 'Function' on an instance of 'Function' class.", function ()
    {
        expect(getToStringTag(new Function("l", "r", "return l + r"))).to.equal("Function");
    });

    it("should return 'Symbol' on a symbol.", function ()
    {
        expect(getToStringTag(Symbol("foo"))).to.equal("Symbol");
    });

    it("should return 'BigInt' on a number literal.", function ()
    {
        expect(getToStringTag(0n)).to.equal("BigInt");
    });

    it("should return 'RegExp' on a regex literal.", function ()
    {
        expect(getToStringTag(/ /)).to.equal("RegExp");
    });

    it("should return 'RegExp' on an instance of 'RegExp' class.", function ()
    {
        expect(getToStringTag(new RegExp(" "))).to.equal("RegExp");
    });

    it("should return 'Date' on an instance of 'Date' class.", function ()
    {
        expect(getToStringTag(new Date())).to.equal("Date");
    });

    it("should return 'Math' on the 'Math' object.", function ()
    {
        expect(getToStringTag(Math)).to.equal("Math");
    });

    it("should return 'Arguments' on the arguments object.", function ()
    {
        (function ()
        {
            expect(getToStringTag(arguments)).to.equal("Arguments");
        })();
    });

    it("should return 'Object' on an instance of a custom class.", function ()
    {
        class A
        {

        }

        expect(getToStringTag(new A())).to.equal("Object");
    });

    it("should return the value of 'Symbol.toStringTag'.", function ()
    {
        expect(getToStringTag({ [Symbol.toStringTag] : "Foo" })).to.equal("Foo");
        expect(getToStringTag({ [Symbol.toStringTag] : " F ?? o\n o" })).to.equal(" F ?? o\n o");
    });
};
