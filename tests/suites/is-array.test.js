const { expect } = require("chai");

const { isArray } = require("../../src");

module.exports = function ()
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
};
