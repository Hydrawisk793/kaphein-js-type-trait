/**
 *  Tests if the given value is iterable.  
 *  This function tests if the arguments has `Symbol.iterator` property. If `Symbol.iterator` is not supported, this function will always return `false`.
 *  @param v A value to test.
 *  @returns `true` if the value is iterable, `false` otherwise.
 */
export declare function isIterable<
    T = any
>(
    v : any
) : v is Iterable<T>;
