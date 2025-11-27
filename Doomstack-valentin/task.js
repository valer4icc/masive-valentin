const colorButtons = document.querySelectorAll(".color-btn");
const colorBox = document.getElementById("color-box");
colorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const newColor = this.dataset.color;
    colorBox.style.backgroundColor = newColor;
    colorButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    this.classList.add("selected");
  });
});
