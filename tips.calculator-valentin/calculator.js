function calculateTip() {
  const billInput = document.getElementById("billAmount");
  const tipInput = document.getElementById("tipPercentage");
  const tipAmountEl = document.getElementById("tipAmount");
  const totalBillEl = document.getElementById("totalBill");
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value) || 0;
  if (isNaN(bill)) {
    tipAmountEl.textContent = "$0.00";
    totalBillEl.textContent = "$0.00";
    return;
  }
  const tipAmount = bill * (tipPercent / 100);
  const totalBill = bill + tipAmount;
  tipAmountEl.textContent = `$${tipAmount.toFixed(2)}`;
  totalBillEl.textContent = `$${totalBill.toFixed(2)}`;
}

calculateTip();
