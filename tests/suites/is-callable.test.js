const { expect } = require("chai");

const { isCallable } = require("../../src");

module.exports = function ()
{
    function emptyFunc()
    {}

    it("should return true on a function.", function ()
    {
        expect(isCallable(emptyFunc)).to.equal(true);
    });

    it("should return true on an instance of Function class.", function ()
    {
        expect(isCallable(new Function("l", "r", "return l + r"))).to.equal(true);
    });

    it("should return true on an object that has 'call' and 'apply'.", function ()
    {
        const callable = {
            foo : 10,

            call : function call(thisArg, l, r)
            {
                return this.apply(thisArg, [l, r]);
            },

            apply : function apply(thisArg)
            {
                var args = arguments[1] || [];

                return (thisArg.foo) * (args[0] + args[1]);
            }
        };

        expect(isCallable(callable)).to.equal(true);

        const onceCallable = {
            foo : 10,

            call : function call(thisArg)
            {
                return this.apply(thisArg, [arguments[1], arguments[2]]);
            },

            apply : function apply(thisArg, args)
            {
                delete this.call;
                delete this.apply;

                args = args || [];
                var result = (thisArg.foo) * (args[0] + args[1]);

                return result;
            }
        };

        expect(isCallable(onceCallable)).to.equal(true);
        expect(onceCallable.call(onceCallable, 1, 2)).to.equal(30);
        expect(isCallable(onceCallable)).to.equal(false);
    });
};
