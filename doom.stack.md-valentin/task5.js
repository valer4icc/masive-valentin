const previewImg = document.getElementById("preview");
const changeImgBtn = document.getElementById("change-img-btn");
const newSrc = "via.placeholder.com";
const newAlt = "Second image";
changeImgBtn.addEventListener("click", function () {
  previewImg.src = newSrc;
  previewImg.alt = newAlt;
});
