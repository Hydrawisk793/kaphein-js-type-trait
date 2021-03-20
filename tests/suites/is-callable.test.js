const { expect } = require("chai");

const { isCallable } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

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
};
