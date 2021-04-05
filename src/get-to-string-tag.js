var primitiveTypeTrait = require("./primitive-type-trait");
var isReferenceType = primitiveTypeTrait.isReferenceType;

module.exports = (function ()
{
    /**
     *  @param {any} v
     */
    function getToStringTag(v)
    {
        /** @type {string} */var tag;
        var matches;

        if(
            ("function" === typeof Symbol && ("toStringTag" in Symbol))
            && isReferenceType(v)
            && (Symbol.toStringTag in v)
        )
        {
            tag = v[Symbol.toStringTag];
        }
        else
        {
            matches = /^\[[^\s]+\s([\s\S]+)\]$/.exec(Object.prototype.toString.call(v));
            tag = (matches && matches.length > 1 ? matches[1] : "Object");
        }

        return tag;
    }

    return {
        getToStringTag : getToStringTag
    };
})();
