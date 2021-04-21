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
        var result = isArray(v);
        if(!result)
        {
            result = isNonNullObject(v) && ("length" in v);
            if(result)
            {
                var len = v.length;
                result = Number.isInteger(len)
                    && (
                        0 === len
                        || (len > 0 && ((len - 1) in v))
                    )
                ;
            }
        }

        return result;
    }

    return {
        isArrayLike : isArrayLike
    };
})();
