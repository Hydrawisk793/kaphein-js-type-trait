var primitiveTypeTrait = require("./primitive-type-trait");
var isDefinedAndNotNull = primitiveTypeTrait.isDefinedAndNotNull;
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
                isDefinedAndNotNull(v)
                && ("call" in v)
                && isFunction(v.call)
            )
        );
    }

    return {
        isCallable : isCallable
    };
})();
