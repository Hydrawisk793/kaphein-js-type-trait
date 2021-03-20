const { expect } = require("chai");

const { isNonNullObject } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

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
};
