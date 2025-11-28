document.addEventListener("DOMContentLoaded", () => {
  const billInput = document.getElementById("bill-amount");
  const tipSlider = document.getElementById("tip-percentage-slider");
  const tipPercentageDisplay = document.getElementById(
    "tip-percentage-display"
  );
  const tipAmountDisplay = document.getElementById("tip-amount");
  const totalAmountDisplay = document.getElementById("total-amount");

  function calculateTip() {
    const billAmount = parseFloat(billInput.value) || 0;
    const tipPercentage = parseInt(tipSlider.value) || 0;
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    tipPercentageDisplay.textContent = `${tipPercentage}%`;
    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
  }

  billInput.addEventListener("input", calculateTip);
  tipSlider.addEventListener("input", calculateTip);

  calculateTip();
});
