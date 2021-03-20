const { expect } = require("chai");

const { isArguments } = require("../../src");

module.exports = function ()
{
    it("should return true on the arguments object.", function ()
    {
        expect(isArguments(arguments)).to.equal(true);
    });
};
