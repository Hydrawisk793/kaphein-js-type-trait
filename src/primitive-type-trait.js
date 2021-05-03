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
     *  @returns {v is boolean}
     */
    function isBoolean(v)
    {
        return "boolean" === typeof v;
    }

    /**
     *  @param {*} v
     *  @returns {v is number}
     */
    function isNumber(v)
    {
        return "number" === typeof v;
    }

    /**
     *  @param {*} v
     *  @returns {v is string}
     */
    function isString(v)
    {
        return "string" === typeof v;
    }

    /**
     *  @type {<T>(v : any) => v is Array<T>}
     *  @see https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array
     */
    function isArray(v)
    {
        return "[object Array]" === Object.prototype.toString.call(v)
            || (isReferenceType(v) && v instanceof Array)
        ;
    }

    /**
     *  @param {*} v
     *  @returns {v is Function}
     */
    function isFunction(v)
    {
        return "function" === typeof v;
    }

    /**
     *  @param {any} v
     *  @returns {v is (object | Function)}
     */
    function isReferenceType(v)
    {
        return Object(v) === v;
    }

    /**
     *  @param {any} v
     *  @returns {v is (string | number | boolean | bigint | symbol | null | undefined)}
     */
    function isPrimitiveType(v)
    {
        return Object(v) !== v;
    }

    return {
        isUndefined : isUndefined,
        isDefinedAndNotNull : isDefinedAndNotNull,
        isNonNullObject : isNonNullObject,
        isBoolean : isBoolean,
        isNumber : isNumber,
        isString : isString,
        isArray : isArray,
        isFunction : isFunction,
        isReferenceType : isReferenceType,
        isPrimitiveType : isPrimitiveType
    };
})();
