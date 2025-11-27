const targetDiv = document.getElementById("targetDiv");
targetDiv.style.backgroundColor = "lightblue";
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => {
  p.style.color = "green";
});
const mainHeading = document.getElementById("mainHeading");
mainHeading.style.textAlign = "center";
const titleElement = document.querySelector(".title");
titleElement.style.fontSize = "30px";
const myImage = document.getElementById("myImage");
myImage.src = "via.placeholder.com";
myImage.alt = "A new placeholder image";
const tooltipDiv = document.getElementById("tooltipDiv");
tooltipDiv.setAttribute("title", "Hover tooltip");
const targetSection = document.getElementById("targetSection");
targetSection.innerHTML =
  "<h2>New Section Heading</h2><p>This content replaced the old HTML.</p>";
const contentWrapper = document.getElementById("contentWrapper");
contentWrapper.innerHTML = `<strong>${contentWrapper.innerHTML}</strong>`;
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.backgroundColor = "#f0f0f0";
  card.style.border = "2px dashed blue";
});
const mainFooter = document.getElementById("mainFooter");
mainFooter.innerHTML = "<a href='https://example.com'>Visit Example</a>";
