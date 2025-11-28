const emailInput = document.getElementById("email");
const emailHint = document.getElementById("emailHint");

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
emailInput.addEventListener("input", () => {
  const value = emailInput.value;

  if (isEmail(value)) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
  if (value === "") {
    emailInput.classList.remove("valid", "invalid");
  }
});
