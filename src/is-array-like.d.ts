/**
 *  Tests if the given value is an array-like object.
 *  @param v A value to test.
 *  @returns `true` if the value is an array-like object, `false` otherwise.
 */
export declare function isArrayLike<
    T = any
>(
    v : any
) : v is ArrayLike<T>;
