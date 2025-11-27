const listItems = document.querySelectorAll("#todo-list li");
const highlightBtn = document.getElementById("highlight-btn");
highlightBtn.addEventListener("click", function () {
  listItems.forEach((item) => {
    item.style.color = "red";
  });
});
