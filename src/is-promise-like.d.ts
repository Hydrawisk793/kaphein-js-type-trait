/**
 *  Tests if the given value is a promise-like object.  
 *  @param v A value to test.
 *  @returns `true` if the value is a promise-like object, `false` otherwise.
 */
export declare function isPromiseLike<
    T = any
>(
    v : any
) : v is PromiseLike<T>;
