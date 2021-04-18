const { expect } = require("chai");

const { isPrimitiveType } = require("../../src");

module.exports = function ()
{
    it("should return false on reference types.", function ()
    {
        // eslint-disable-next-line brace-style
        function foo() {}
        // eslint-disable-next-line brace-style
        function* bar() {}
        // eslint-disable-next-line brace-style
        async function* baz() {}

        expect(isPrimitiveType({})).to.equal(false);
        expect(isPrimitiveType(new Object())).to.equal(false);
        expect(isPrimitiveType(foo)).to.equal(false);
        // eslint-disable-next-line brace-style
        expect(isPrimitiveType(() => {})).to.equal(false);
        expect(isPrimitiveType(bar)).to.equal(false);
        expect(isPrimitiveType(baz)).to.equal(false);
        expect(isPrimitiveType(new Function())).to.equal(false);
        expect(isPrimitiveType(new Boolean(true))).to.equal(false);
        expect(isPrimitiveType(new Number(1234))).to.equal(false);
        expect(isPrimitiveType(new String("foo"))).to.equal(false);
    });

    it("should return true on primitive types.", function ()
    {
        expect(isPrimitiveType(void 0)).to.equal(true);
        expect(isPrimitiveType(null)).to.equal(true);
        expect(isPrimitiveType(true)).to.equal(true);
        expect(isPrimitiveType(Boolean(true))).to.equal(true);
        expect(isPrimitiveType(1234)).to.equal(true);
        expect(isPrimitiveType(Number(1234))).to.equal(true);
        expect(isPrimitiveType("foo")).to.equal(true);
        expect(isPrimitiveType(String("foo"))).to.equal(true);
        expect(isPrimitiveType(1234n)).to.equal(true);
        expect(isPrimitiveType(BigInt(1234))).to.equal(true);
        expect(isPrimitiveType(Symbol("foo"))).to.equal(true);
    });
};
