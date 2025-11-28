const passInput = document.getElementById("pass");
const confirmInput = document.getElementById("confirm");
const matchMsg = document.getElementById("matchMsg");
const strengthMeter = document.getElementById("strengthMeter");

function checkMatch() {
  const password = passInput.value;
  const confirm = confirmInput.value;

  matchMsg.textContent = "";
  matchMsg.className = "";

  if (password && confirm) {
    if (password === confirm) {
      matchMsg.textContent = "Passwords match!";
      matchMsg.className = "success";
      passInput.style.borderColor = "green";
      confirmInput.style.borderColor = "green";
    } else {
      matchMsg.textContent = "Passwords do not match.";
      matchMsg.className = "error";
      passInput.style.borderColor = "red";
      confirmInput.style.borderColor = "red";
    }
  } else {
    passInput.style.borderColor = "#ccc";
    confirmInput.style.borderColor = "#ccc";
  }
  checkMinLength();
}
function checkMinLength() {
  const minLength = 8;
  if (passInput.value.length > 0 && passInput.value.length < minLength) {
    if (!matchMsg.classList.contains("error")) {
      matchMsg.textContent = `Password must be at least ${minLength} characters.`;
      matchMsg.className = "error";
      passInput.style.borderColor = "red";
    }
  }
}
function updateStrength() {
  const password = passInput.value;
  let strength = 0;

  if (password.length > 7) strength++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
  if (password.match(/\d/)) strength++;
  if (password.match(/[^a-zA-Z\d]/)) strength++;
}
passInput.addEventListener("input", checkMatch);
passInput.addEventListener("input", updateStrength);
confirmInput.addEventListener("input", checkMatch);
