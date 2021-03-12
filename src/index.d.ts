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

export declare function isArrayLike<
    T = any
>(
    v : any
) : v is ArrayLike<T>;

export declare function isFunction(
    v : any
) : v is Function;

export declare function isCallable(
    v : any
) : v is CallableFunction;

export declare function isIterable<
    T = any
>(
    v : any
) : v is Iterable<T>;

export declare function isPromiseLike<
    T = any
>(
    v : any
) : v is PromiseLike<T>;
