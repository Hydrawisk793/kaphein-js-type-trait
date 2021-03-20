module.exports = (function ()
{
    /**
     *  @param {*} v
     *  @returns {v is undefined}
     */
    function isUndefined(v)
    {
        return "undefined" === typeof v;
    }

    /**
     *  @template T
     *  @param {T | null | undefined} v
     *  @returns {v is NonNullable<T>}
     *  @see https://stackoverflow.com/questions/28975896/is-there-a-way-to-check-for-both-null-and-undefined
     */
    function isDefinedAndNotNull(v)
    {
        return "undefined" !== typeof v && null !== v;
    }

    /**
     *  @param {*} v
     *  @returns {v is NonNullable<object>}
     */
    function isNonNullObject(v)
    {
        return "object" === typeof v && null !== v;
    }

    /**
     *  @param {*} v
     *  @returns {v is number}
     */
    function isNumber(v)
    {
        return "number" === typeof v || v instanceof Number;
    }

    /**
     *  @param {*} v
     *  @returns {v is string}
     */
    function isString(v)
    {
        return "string" === typeof v || v instanceof String;
    }

    /**
     *  @type {<T>(v : any) => v is Array<T>}
     *  @see https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array
     */
    function isArray(v)
    {
        return "[object Array]" === Object.prototype.toString.call(v);
    }

    /**
     *  @param {*} v
     *  @returns {v is Function}
     */
    function isFunction(v)
    {
        return "function" === typeof v || v instanceof Function;
    }

    return {
        isUndefined : isUndefined,
        isDefinedAndNotNull : isDefinedAndNotNull,
        isNonNullObject : isNonNullObject,
        isNumber : isNumber,
        isString : isString,
        isArray : isArray,
        isFunction : isFunction
    };
})();
