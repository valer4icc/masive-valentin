let count = 0;
const button = document.getElementById('clickButton');
const display = document.getElementById('countDisplay');
button.addEventListener('click', function() {
    count++;
    display.textContent = count;
});