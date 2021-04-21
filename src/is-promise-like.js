var primitiveTypeTrait = require("./primitive-type-trait");
var isReferenceType = primitiveTypeTrait.isReferenceType;

module.exports = (function ()
{
    /**
     *  @type {<T>(v : any) => v is PromiseLike<T>}
     */
    function isPromiseLike(v)
    {
        return isReferenceType(v)
            && ("then" in v)
        ;
    }

    return {
        isPromiseLike : isPromiseLike
    };
})();
