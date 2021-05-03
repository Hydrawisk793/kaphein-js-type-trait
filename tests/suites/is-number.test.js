const { expect } = require("chai");

const { isNumber } = require("../../src");

module.exports = function ()
{
    it("should return true on number literals.", function ()
    {
        expect(isNumber(793)).to.equal(true);
        expect(isNumber(793.5)).to.equal(true);
    });

    it("should return false on instances of `Number` class.", function ()
    {
        expect(isNumber(new Number())).to.equal(false);
        expect(isNumber(new Number(793))).to.equal(false);
        expect(isNumber(new Number(793.5))).to.equal(false);
    });
};
