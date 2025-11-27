const boxElement = document.getElementById("box");
boxElement.addEventListener("mouseover", function () {
  boxElement.style.backgroundColor = "yellow";
});
boxElement.addEventListener("mouseout", function () {
  boxElement.style.backgroundColor = "";
});
