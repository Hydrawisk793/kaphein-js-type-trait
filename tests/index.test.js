describe("kaphein-js-type-trait", function ()
{
    describe("isUndefined", require("./suites/is-undefined.test").bind(this));
    describe("isDefinedAndNotNull", require("./suites/is-defined-and-not-null.test").bind(this));
    describe("isNonNullObject", require("./suites/is-non-null-object.test").bind(this));
    describe("isBoolean", require("./suites/is-boolean.test").bind(this));
    describe("isNumber", require("./suites/is-number.test").bind(this));
    describe("isString", require("./suites/is-string.test").bind(this));
    describe("isArray", require("./suites/is-array.test").bind(this));
    describe("isArrayLike", require("./suites/is-array-like.test").bind(this));
    describe("isArguments", require("./suites/is-arguments.test").bind(this));
    describe("isFunction", require("./suites/is-function.test").bind(this));
    describe("isCallable", require("./suites/is-callable.test").bind(this));
    describe("isIterable", require("./suites/is-iterable.test").bind(this));
    describe("isPromiseLike", require("./suites/is-promise-like.test").bind(this));
    describe("isReferenceType", require("./suites/is-reference-type.test").bind(this));
    describe("isPrimitiveType", require("./suites/is-primitive-type.test").bind(this));
    describe("getToStringTag", require("./suites/get-to-string-tag.test").bind(this));
});
