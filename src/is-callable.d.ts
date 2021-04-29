/**
 *  Tests if the given value is callable.  
 *  This function tests if the given value has `call` and `apply` that are properties of `Function.prototype`.
 *  @param v A value to test.
 *  @returns `true` if the value is callable, `false` otherwise.
 */
export declare function isCallable(
    v : any
) : v is CallableFunction;
