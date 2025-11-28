const textInput = document.getElementById('textInput');
const outputArea = document.getElementById('outputArea');
textInput.addEventListener('input', function(event) {
    const currentValue = event.target.value;
    outputArea.textContent = currentValue;
});