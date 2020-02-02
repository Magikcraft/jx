"use strict";
var _jx = require("@magikcraft/jx");
describe("jx", function () {
    it("is loaded into the global scope", function () {
        return expect(typeof jx !== "undefined");
    });
    it("is available via require @magikcraft/jx", function () {
        return expect(typeof _jx.api !== "undefined");
    });
});
