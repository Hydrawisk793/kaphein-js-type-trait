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
                && (
                    (("call" in v) && isFunction(v.call))
                    && (("apply" in v) && isFunction(v.apply))
                    && (("bind" in v) && isFunction(v.bind))
                )
            )
        );
    }

    return {
        isCallable : isCallable
    };
})();
