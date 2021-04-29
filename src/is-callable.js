var primitiveTypeTrait = require("./primitive-type-trait");
var isNonNullObject = primitiveTypeTrait.isNonNullObject;
var isFunction = primitiveTypeTrait.isFunction;

module.exports = (function ()
{
    /**
     *  @param {*} v
     *  @returns {v is CallableFunction}
     */
    function isCallable(v)
    {
        return (
            isFunction(v)
            || (
                isNonNullObject(v)
                && ("call" in v)
                && ("apply" in v)
            )
        );
    }

    return {
        isCallable : isCallable
    };
})();
