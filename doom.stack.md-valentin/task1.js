const mainTitleEl = document.getElementById("main-title");
const changeTitleBtn = document.getElementById("change-title-btn");
changeTitleBtn.addEventListener("click", function () {
  mainTitleEl.textContent = "New amazing title";
});
