const messageTextarea = document.getElementById("message");
const charCountSpan = document.getElementById("char-count");
messageTextarea.addEventListener("input", function () {
  const currentLength = messageTextarea.value.length;
  charCountSpan.textContent = currentLength;
});
