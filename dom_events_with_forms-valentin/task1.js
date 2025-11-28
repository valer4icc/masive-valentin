const message = document.getElementById('message');
const count = document.getElementById('count');
const MAX_LENGTH = 50; 
function updateCounter() {
    const currentLength = message.value.length;
    count.textContent = currentLength;
    remainingSpan.textContent = MAX_LENGTH - currentLength;
}
message.addEventListener('input', updateCounter);
document.addEventListener('DOMContentLoaded', updateCounter);