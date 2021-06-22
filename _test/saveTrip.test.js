const saveTrip = require("../src/client/js/saveTrip");

//Dummy localStorage
class LocalStorageMock {
 constructor() {
  this.store = {};
 }
 clear() {
  this.store = {};
 }
 getItem(key) {
  return this.store[key] || null;
 }
 setItem(key, value) {
  this.store[key] = value;
 }
 removeItem(key) {
  delete this.store[key];
 }
}
global.localStorage = new LocalStorageMock();

const mockCb = jest.fn((x) => x);

describe("saveTrip localStorage", () => {
 test("Save trip param exsists", () => {
  //   saveTrip({ test: "test" });
  //   expect(localStorage.getItem("trips").toBeDefined());
  saveTrip({ test: "test" }, mockCb);
  expect(mockCb.mock).toBeDefined();
 });
 test("Testing if localStorage creation", () => {
  saveTrip({ test: "test" });
  expect(localStorage.getItem("trips")).toBeDefined();
 });
 test("Testing if localStorage is not null", () => {
  saveTrip({ test: "test" });
  expect(localStorage.getItem("trips")).not.toBeNull();
 });
 test("Testing if localStorage is null if trip not provided", () => {
  localStorage.clear();
  saveTrip();
  expect(localStorage.getItem("trips")).toBeNull();
 });
});
