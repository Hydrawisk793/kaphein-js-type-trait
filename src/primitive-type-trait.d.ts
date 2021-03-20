export declare function isUndefined(
    v : any
) : v is undefined;

export declare function isDefinedAndNotNull<
    T
>(
    v : T | null | undefined
) : v is NonNullable<T>;

export declare function isNonNullObject(
    v : any
) : v is NonNullable<object>;

export declare function isNumber(
    v : any
) : v is number;

export declare function isString(
    v : any
) : v is string;

export declare function isArray<
    T = any
>(
    v : any
) : v is T[];

export declare function isFunction(
    v : any
) : v is Function;
