const loadAnimation = (state) => {
 const ele = document.querySelector(".lds-roller");
 if (state) {
  ele.style.display = "inline-block";
 } else {
  ele.style.display = "none";
 }
};

export default loadAnimation;
