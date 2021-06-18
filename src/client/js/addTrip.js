const btn = document.getElementById('addBtn');
const spn = document.getElementById('closeBtn');
const modal = document.getElementById('addModal');

btn.onclick = () => (modal.style.display = 'block');
spn.onclick = () => (modal.style.display = 'none');
