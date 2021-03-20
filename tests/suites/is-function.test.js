const { expect } = require("chai");

const { isFunction } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

    it("should return true on a function.", function ()
    {
        expect(isFunction(emptyFunc)).to.equal(true);
    });

    it("should return true on an instance of Function class.", function ()
    {
        expect(isFunction(new Function("l", "r", "return l + r"))).to.equal(true);
    });
};
