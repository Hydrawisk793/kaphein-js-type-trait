const { expect } = require("chai");

const { isDefinedAndNotNull } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

    it("should return false on undefined.", function ()
    {
        expect(isDefinedAndNotNull(undefined)).to.equal(false);
        expect(isDefinedAndNotNull(void 0)).to.equal(false);
        expect(isDefinedAndNotNull(({}).foo)).to.equal(false);
        expect(isDefinedAndNotNull(emptyFunc())).to.equal(false);
    });

    it("should return false on null.", function ()
    {
        expect(isDefinedAndNotNull(null)).to.equal(false);
    });
};
