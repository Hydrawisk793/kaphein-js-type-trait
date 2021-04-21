/**
 *  Tests if the given value is `undefined`.
 *  @param v A value to test.
 *  @returns `true` if the value is `undefined`, `false` otherwise.
 */
export declare function isUndefined(
    v : any
) : v is undefined;

/**
 *  Tests if the given value is not `undefined` and not `null`.
 *  @param v A value to test.
 *  @returns `true` if the value is not `undefined` and not `null`, `false` otherwise.
 */
export declare function isDefinedAndNotNull<
    T
>(
    v : T | null | undefined
) : v is NonNullable<T>;

/**
 *  Tests if the given value is a non-null object.
 *  @param v A value to test.
 *  @returns `true` if the value is a non-null object, `false` otherwise.
 */
export declare function isNonNullObject(
    v : any
) : v is NonNullable<object>;

/**
 *  Tests if the type of the given value is `boolean`.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is `boolean`, `false` otherwise.
 */
export declare function isBoolean(
    v : any
) : v is boolean;

/**
 *  Tests if the type of the given value is `number`.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is `number`, `false` otherwise.
 */
export declare function isNumber(
    v : any
) : v is number;

/**
 *  Tests if the type of the given value is `string`.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is `string`, `false` otherwise.
 */
export declare function isString(
    v : any
) : v is string;

/**
 *  Tests if the given value is an array.
 *  @param v A value to test.
 *  @returns `true` if the value is an array, `false` otherwise.
 */
export declare function isArray<
    T = any
>(
    v : any
) : v is T[];

/**
 *  Tests if the type of the given value is `function`.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is `function`, `false` otherwise.
 */
export declare function isFunction(
    v : any
) : v is Function;

/**
 *  Tests if the type of the given value is a reference type.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is a reference type, `false` otherwise.
 */
export declare function isReferenceType(
    v : any
) : v is (object | Function);

/**
 *  Tests if the type of the given value is a primitive type.
 *  @param v A value to test.
 *  @returns `true` if the type of the value is a primitive type, `false` otherwise.
 */
export declare function isPrimitiveType(
    v : any
) : v is (string | number | boolean | bigint | symbol | null | undefined);
