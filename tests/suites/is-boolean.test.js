const { expect } = require("chai");

const { isBoolean } = require("../../src");

module.exports = function ()
{
    it("should return true on boolean literals.", function ()
    {
        expect(isBoolean(true)).to.equal(true);
        expect(isBoolean(false)).to.equal(true);
    });

    it("should return false on instances of `Boolean` class.", function ()
    {
        expect(isBoolean(new Boolean())).to.equal(false);
        expect(isBoolean(new Boolean(true))).to.equal(false);
        expect(isBoolean(new Boolean(false))).to.equal(false);
    });
};
