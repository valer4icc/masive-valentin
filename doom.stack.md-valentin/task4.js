const itemInput = document.getElementById("item-input");
const addItemBtn = document.getElementById("add-item-btn");
const itemsList = document.getElementById("items");

addItemBtn.addEventListener("click", function () {
  const newItemText = itemInput.value;
  if (newItemText.trim() === "") {
    alert("Please enter an item.");
    return;
  }

  const newLi = document.createElement("li");
  newLi.textContent = newItemText;
  itemsList.appendChild(newLi);
  itemInput.value = "";
});
