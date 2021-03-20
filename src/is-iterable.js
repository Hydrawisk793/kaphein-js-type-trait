var primitiveTypeTrait = require("./primitive-type-trait");
var isArray = primitiveTypeTrait.isArray;

module.exports = (function ()
{
    /**
     *  @type {<T>(v : any) => v is Iterable<T>}
     */
    function isIterable(v)
    {
        var result;

        switch(typeof v)
        {
        case "undefined":
            result = false;
            break;
        case "function":
        case "object":
            result = (
                null !== v
                && (
                    isArray(v)
                    || (
                        ("function" === typeof Symbol && "iterator" in Symbol)
                        && Symbol.iterator in v
                    )
                )
            );
            break;
        case "string":
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    }

    return {
        isIterable : isIterable
    };
})();
