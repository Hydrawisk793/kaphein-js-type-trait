/**
 *  Tests if the given value is iterable.  
 *  @param v A value to test.
 *  @returns `true` if the value is iterable, `false` otherwise.
 */
export declare function isIterable<
    T = any
>(
    v : any
) : v is Iterable<T>;
