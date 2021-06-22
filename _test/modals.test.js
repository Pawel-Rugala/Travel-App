const checkModals = require("../src/client/js/modal");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Testing checkModal func", () => {
 test("Testing if btn spns modals are equal length", () => {
  const dom = new JSDOM(
   `
    <div class="btn"></div>
    <div class="close"></div>
    <div class="modal"></div>
    <div class="btn"></div>
    <div class="close"></div>
    <div class="modal"></div>
  `
  );
  const btns = dom.window.document.getElementsByClassName("btn");
  const spans = dom.window.document.getElementsByClassName("close");
  const modals = dom.window.document.getElementsByClassName("modal");
  expect([...btns].length && [...modals].length).toEqual([...spans].length);
 });
 test("Testing if btn spns modals are not equal length", () => {
  const dom = new JSDOM(
   `
    <div class="btn"></div>
    <div class="close"></div>
    <div class="modal"></div>
    <div class="btn"></div>
    <div class="modal"></div>
  `
  );
  const btns = dom.window.document.getElementsByClassName("btn");
  const spans = dom.window.document.getElementsByClassName("close");
  const modals = dom.window.document.getElementsByClassName("modal");
  expect([...btns].length && [...modals].length).not.toEqual([...spans].length);
 });
});
