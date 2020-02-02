var val = require("../library/util").val;
describe("jx.util.val", function() {
  it("mutates the state of a Block", function() {
    const block = __plugin.server.getWorld("world").getSpawnLocation().block;
    const color = block.getHumidity();
  });
});
// val(testData, "itemMeta.blockState", "color", "red");
// console.log({ color: blockState.color }, blockState.color === "red");
