module.exports = (function ()
{
    /**
     *  @type {<T>(v : any) => v is Iterable<T>}
     */
    function isIterable(v)
    {
        var result = ("function" === typeof Symbol && "iterator" in Symbol);
        if(result)
        {
            switch(typeof v)
            {
            case "undefined":
                result = false;
                break;
            case "function":
            case "object":
                result = null !== v && Symbol.iterator in v;
                break;
            case "string":
                result = Symbol.iterator in String.prototype;
                break;
            default:
                result = false;
            }
        }

        return result;
    }

    return {
        isIterable : isIterable
    };
})();
