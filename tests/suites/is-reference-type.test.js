const { expect } = require("chai");

const { isReferenceType } = require("../../src");

module.exports = function ()
{
    it("should return true on reference types.", function ()
    {
        // eslint-disable-next-line brace-style
        function foo() {}
        // eslint-disable-next-line brace-style
        function* bar() {}
        // eslint-disable-next-line brace-style
        async function* baz() {}

        expect(isReferenceType({})).to.equal(true);
        expect(isReferenceType(new Object())).to.equal(true);
        expect(isReferenceType(foo)).to.equal(true);
        // eslint-disable-next-line brace-style
        expect(isReferenceType(() => {})).to.equal(true);
        expect(isReferenceType(bar)).to.equal(true);
        expect(isReferenceType(baz)).to.equal(true);
        expect(isReferenceType(new Function())).to.equal(true);
        expect(isReferenceType(new Boolean(true))).to.equal(true);
        expect(isReferenceType(new Number(1234))).to.equal(true);
        expect(isReferenceType(new String("foo"))).to.equal(true);
    });

    it("should return false on primitive types.", function ()
    {
        expect(isReferenceType(void 0)).to.equal(false);
        expect(isReferenceType(null)).to.equal(false);
        expect(isReferenceType(true)).to.equal(false);
        expect(isReferenceType(Boolean(true))).to.equal(false);
        expect(isReferenceType(1234)).to.equal(false);
        expect(isReferenceType(Number(1234))).to.equal(false);
        expect(isReferenceType("foo")).to.equal(false);
        expect(isReferenceType(String("foo"))).to.equal(false);
        expect(isReferenceType(1234n)).to.equal(false);
        expect(isReferenceType(BigInt(1234))).to.equal(false);
        expect(isReferenceType(Symbol("foo"))).to.equal(false);
    });
};
