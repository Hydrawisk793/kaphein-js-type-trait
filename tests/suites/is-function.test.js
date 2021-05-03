const { expect } = require("chai");

const { isFunction } = require("../../src");

module.exports = function ()
{
    it("should return true on a function.", function ()
    {
        function emptyFunc()
        {}

        async function emptyAsyncFunc()
        {}

        expect(isFunction(emptyFunc)).to.equal(true);
        expect(isFunction(emptyAsyncFunc)).to.equal(true);
        expect(isFunction(() => null)).to.equal(true);
        expect(isFunction(async () => null)).to.equal(true);
    });

    it("should return true on an instance of `Function` class.", function ()
    {
        expect(isFunction(new Function("l", "r", "return l + r"))).to.equal(true);
    });

    it("should return true on an instance of a subclass that extends `Function` class.", function ()
    {
        // eslint-disable-next-line brace-style
        expect(isFunction(new (class A extends Function {}))).to.equal(true);
    });
};
