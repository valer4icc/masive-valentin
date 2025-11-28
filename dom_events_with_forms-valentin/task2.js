const first = document.getElementById("first");
const last = document.getElementById("last");
const submitBtn = document.getElementById("submitBtn");
const firstIndicator = document.getElementById("first-indicator");
const lastIndicator = document.getElementById("last-indicator");

const requiredFields = [first, last];

function validateField(field, indicator) {
  const isValid = field.value.trim().length > 0;
  if (isValid) {
    indicator.textContent = "✅";
    field.classList.remove("invalid-input");
    field.classList.add("valid-input");
  } else {
    indicator.textContent = "❌";
    field.classList.remove("valid-input");
    field.classList.add("invalid-input");
  }
  return isValid;
}

function evaluate() {
  const allFieldsValid = requiredFields.every((field) => {
    if (field.id === "first") {
      return validateField(field, firstIndicator);
    } else if (field.id === "last") {
      return validateField(field, lastIndicator);
    }
    return false;
  });
  submitBtn.disabled = !allFieldsValid;
}

requiredFields.forEach((el) => el.addEventListener("input", evaluate));
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});

document.addEventListener("DOMContentLoaded", evaluate);
