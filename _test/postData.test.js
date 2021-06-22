const postData = require("../src/client/js/postData");
global.fetch = require("node-fetch");

describe("Testing async postData", () => {
 test("fetch should fail", () => {
  return expect(postData()).rejects.toThrow(Error);
 });
});
