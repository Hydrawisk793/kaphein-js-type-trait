const { expect } = require("chai");

const { isIterable } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

    it("should return false on undefined.", function ()
    {
        expect(isIterable(undefined)).to.equal(false);
        expect(isIterable(void 0)).to.equal(false);
        expect(isIterable(({}).foo)).to.equal(false);
        expect(isIterable(emptyFunc())).to.equal(false);
    });

    it("should return false on null.", function ()
    {
        expect(isIterable(null)).to.equal(false);
    });

    it("should return true on string values.", function ()
    {
        expect(isIterable("foo")).to.equal(true);
        expect(isIterable(new String("foo"))).to.equal(true);
    });

    it("should return true on arrays.", function ()
    {
        expect(isIterable([])).to.equal(true);
        expect(isIterable(new Array())).to.equal(true);
        expect(isIterable(new Array(5))).to.equal(true);
    });

    it("should return true on a custom iterable object.", function ()
    {
        const iterable = {};
        iterable[Symbol.iterator] = function ()
        {
            return {
                next : function next()
                {
                    return (
                        this._count < 5
                            ? {
                                value : this._count++,
                                done : false,
                            }
                            : {
                                done : true
                            }
                    );
                },
                _count : 0
            };
        };

        expect(isIterable(iterable)).to.equal(true);
    });

    it("should return true on a generator.", function ()
    {
        function* gen()
        {
            yield 1;
            yield 2;
            yield 3;
        }

        expect(isIterable(gen())).to.equal(true);
    });
};
