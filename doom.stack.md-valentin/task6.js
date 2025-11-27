const secretParagraph = document.getElementById("secret-text");
const toggleButton = document.getElementById("toggle-text-btn");
toggleButton.addEventListener("click", function () {
  if (secretParagraph.style.display !== "none") {
    secretParagraph.style.display = "none";
    toggleButton.textContent = "Show";
  } else {
    secretParagraph.style.display = "";
    toggleButton.textContent = "Hide";
  }
});
