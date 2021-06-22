const request = require("supertest");
const app = require("../src/server/app");

describe("testing server app", () => {
 test("Testing fetch route", async () => {
  await request(app)
   .post("/fetch")
   .send({
    location: "Toszek",
   })
   .expect(200);
 });

 test("Testing fetch wrong location", async () => {
  await request(app).post("/fetch").send({ location: "$1" }).expect(400);
 });

 test("Testing fetch with no location", async () => {
  await request(app).post("/fetch").expect(400);
 });

 test("Testing fetch content-type for no location", async () => {
  await request(app).post("/fetch").expect("Content-Type", /json/);
 });
});
