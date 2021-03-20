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

    it("should return true on an object that has 'call', 'apply' and 'bind'.", function ()
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
            },

            bind : function bind(thisArg)
            {
                var _slice = Array.prototype.slice;
                var args = _slice.call(arguments, 1);

                function T()
                {}

                var thisRef = this;
                function W()
                {
                    return thisRef.apply(
                        (this instanceof T ? this : thisArg),
                        args.concat(_slice.call(arguments))
                    );
                }

                if(this.prototype)
                {
                    T.prototype = this.prototype;
                }
                W.prototype = new T();

                return W;
            }
        };

        expect(isCallable(callable)).to.equal(true);
    });
};
