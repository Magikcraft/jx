declare const jx;
const _jx = require("@magikcraft/jx");

describe("jx", () => {
  it("is loaded into the global scope", () =>
    expect(typeof jx !== "undefined"));
  it("is available via require @magikcraft/jx", () =>
    expect(typeof _jx.api !== "undefined"));
});
