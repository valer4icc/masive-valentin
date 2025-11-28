const form = document.getElementById("form");
const errorMessage = document.getElementById("error");
const inputs = form.querySelectorAll("input[required]");
form.addEventListener("submit", (e) => {
  let firstInvalidInput = null;
  for (const input of inputs) {
    if (!input.value.trim()) {
      e.preventDefault();
      if (!firstInvalidInput) {
        firstInvalidInput = input;
      }
    }
  }
  if (firstInvalidInput) {
    errorMessage.classList.remove("hidden");
    firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
    firstInvalidInput.focus();
  } else {
    errorMessage.classList.add("hidden");
  }
});
