const { expect } = require("chai");

const { isUndefined } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

    it("should return true on undefined.", function ()
    {
        expect(isUndefined(undefined)).to.equal(true);
        expect(isUndefined(void 0)).to.equal(true);
        expect(isUndefined(({}).foo)).to.equal(true);
        expect(isUndefined(emptyFunc())).to.equal(true);
    });
};
