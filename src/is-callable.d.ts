/**
 *  Tests if the given value satisfies callable.  
 *  Callable in this context means that a given value is a real function or has `call` and `apply` property that are properties of `Function.prototype`.
 *  @param v A value to test.
 *  @returns `true` if the value satisfies callable, `false` otherwise.
 */
export declare function isCallable(
    v : any
) : v is CallableFunction;
