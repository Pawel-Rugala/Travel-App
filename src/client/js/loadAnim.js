const { load } = require("dotenv");

const loadAnimation = (state) => {
 const ele = document.querySelector(".lds-roller");
 if (state) {
  return (ele.style.display = "inline-block");
 } else {
  return (ele.style.display = "none");
 }
};

module.exports = loadAnimation;
