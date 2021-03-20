var primitiveTypeTrait = require("./primitive-type-trait");
var isNonNullObject = primitiveTypeTrait.isNonNullObject;
var isArray = primitiveTypeTrait.isArray;

module.exports = (function ()
{
    /**
     *  @type {<T>(v : any) => v is ArrayLike<T>}
     *  @see https://stackoverflow.com/questions/24048547/checking-if-an-object-is-array-like
     */
    function isArrayLike(v)
    {
        return isArray(v)
            || (
                isNonNullObject(v)
                && ("length" in v)
                && Number.isInteger(v.length)
                && (
                    0 === v.length
                    || (v.length > 0 && ((v.length - 1) in v))
                )
            )
        ;
    }

    return {
        isArrayLike : isArrayLike
    };
})();
