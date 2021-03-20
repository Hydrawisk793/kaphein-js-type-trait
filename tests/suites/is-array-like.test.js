const { expect } = require("chai");

const { isArrayLike } = require("../../src");

module.exports = function ()
{
    it("should return true on an array literal.", function ()
    {
        expect(isArrayLike([])).to.equal(true);
    });

    it("should return true on instances of Array class.", function ()
    {
        expect(isArrayLike(new Array())).to.equal(true);
        expect(isArrayLike(new Array(5))).to.equal(true);
    });

    it("should return true on the arguments object.", function ()
    {
        expect(isArrayLike(arguments)).to.equal(true);
    });

    it("should return true on array-like objects.", function ()
    {
        const obj = {};
        obj[0] = 3;
        obj[1] = "foo";
        obj[2] = false;
        obj.length = 3;

        expect(isArrayLike(obj)).to.equal(true);

        class A
        {
            constructor(iterable)
            {
                this.length = 0;
                for(let item of iterable)
                {
                    this[this.length] = item;
                    ++this.length;
                }
            }
        }
        const iterable = [1, 4, 5, 2, 9];
        expect(isArrayLike(new A(iterable))).to.equal(true);

        class B extends A
        {}
        expect(isArrayLike(new B(iterable))).to.equal(true);
    });
};
