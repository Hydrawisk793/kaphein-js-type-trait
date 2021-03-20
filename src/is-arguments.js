var primitiveTypeTrait = require("./primitive-type-trait");
var isFunction = primitiveTypeTrait;
var isArrayLike = require("./is-array-like").isArrayLike;

module.exports = (function ()
{
    var isArguments = (function ()
    {
        var func = (
            /**
             *  @type {(v : any) => v is IArguments}
             */
            function isArguments(v)
            {
                return "[object Arguments]" === Object.prototype.toString.call(v);
            }
        );

        if(!func(arguments))
        {
            func = (
                /**
                 *  @type {(v : any) => v is IArguments}
                 */
                function isArguments(v)
                {
                    return (
                        isArrayLike(v)
                        && (
                            Object.prototype.hasOwnProperty.call(v, "callee")
                            && isFunction(v.callee)
                        )
                    );
                }
            );
        }

        return func;
    })();

    return {
        isArguments : isArguments
    };
})();
