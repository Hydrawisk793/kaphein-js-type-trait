const { expect } = require("chai");

const { isString } = require("../../src");

module.exports = function ()
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
};
