const { expect } = require("chai");
const BluebirdPromise = require("bluebird");

const { isPromiseLike } = require("../../src");

module.exports = function ()
{
    it("should return true on native promises.", function ()
    {
        expect(isPromiseLike(new Promise(function (resolve)
        {
            resolve("foo");
        }))).to.equal(true);
        expect(isPromiseLike(Promise.resolve())).to.equal(true);
        expect(isPromiseLike(Promise.reject())).to.equal(true);
    });

    it("should return true on bluebird promises.", function ()
    {
        expect(isPromiseLike(new BluebirdPromise(function (resolve)
        {
            resolve("foo");
        }))).to.equal(true);
        expect(isPromiseLike(BluebirdPromise.resolve())).to.equal(true);
        expect(isPromiseLike(BluebirdPromise.reject())).to.equal(true);
    });
};
