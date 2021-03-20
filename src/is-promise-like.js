var primitiveTypeTrait = require("./primitive-type-trait");
var isNonNullObject = primitiveTypeTrait.isNonNullObject;
var isFunction = primitiveTypeTrait.isFunction;

module.exports = (function ()
{
    /**
     *  @type {<T>(v : any) => v is PromiseLike<T>}
     */
    function isPromiseLike(v)
    {
        return isNonNullObject(v)
            && ("then" in v)
            && isFunction(v.then)
        ;
    }

    return {
        isPromiseLike : isPromiseLike
    };
})();
