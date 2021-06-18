const btns = document.getElementsByClassName('btn');
const spans = document.getElementsByClassName('close');
const modals = document.getElementsByClassName('modal');

console.log(btns);
console.log(modals);
console.log(spans);

[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...spans].forEach((span, ind) => {
  span.onclick = () => (modals[ind].style.display = 'none');
});

window.onclick = (e) => {
  [...modals].forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
};
