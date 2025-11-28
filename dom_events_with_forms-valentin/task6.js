const titleInput = document.getElementById('title');
const descTextarea = document.getElementById('desc');
const pTitle = document.getElementById('pTitle');
const pDesc = document.getElementById('pDesc');
[titleInput, descTextarea].forEach(el => el.addEventListener('input', () => {
  pTitle.textContent = titleInput.value;
  pDesc.innerHTML = descTextarea.value.replace(/\n/g, '<br>');
}));