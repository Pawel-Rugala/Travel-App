const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Testing loading animation handler", () => {
 test("Testing if there is only 1 .lds-roller", () => {
  const dom = new JSDOM(
   `
    <div class="lds-roller"></div>
  `
  );

  const ele = dom.window.document.querySelectorAll(".lds-roller");
  expect(ele.length).toBe(1);
 });
 test("Testing error if more than 1 .lds-roller", () => {
  const dom = new JSDOM(
   `
    <div class="lds-roller"></div>
    <div class="lds-roller"></div>
  `
  );

  const ele = dom.window.document.querySelectorAll(".lds-roller");
  expect(ele.length).not.toBe(1);
 });
 test("Testing func if true style display = block", () => {
  const mockFunc = (param) => {
   const dom = new JSDOM(`
      <div class="lds-roller"></div>
    `);
   if (param) {
    const ele = dom.window.document.querySelector(".lds-roller");
    return (ele.style.display = "inline-block");
   }
  };
  expect(mockFunc(true)).toBe('inline-block');
 });
  test("Testing func if false style display = none", () => {
  const mockFunc = (param) => {
   const dom = new JSDOM(`
      <div class="lds-roller"></div>
    `);
   if (!param) {
    const ele = dom.window.document.querySelector(".lds-roller");
    return (ele.style.display = "none");
   }
  };
  expect(mockFunc(false)).toBe('none');
 });
});
