const pageDiv = document.getElementById("page");
const toggleBtn = document.getElementById("toggle-theme-btn");
toggleBtn.addEventListener("click", function () {
  pageDiv.classList.toggle("dark");
});
