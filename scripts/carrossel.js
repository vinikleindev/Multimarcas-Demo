// Carrossel
const cardWidth = 300;
const cardGap = 15;
const itemsPerGroup = 4;
const cardsMain = document.querySelector(".cards-main");
const cards = document.querySelectorAll(".card-offer-main");
const dotsContainer = document.querySelector(".carousel-dots");
const totalGroups = Math.ceil(cards.length / itemsPerGroup);

dotsContainer.innerHTML = "";
for (let i = 0; i < totalGroups; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showGroup(i));
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll(".carousel-dots .dot");
function showGroup(groupIdx) {
  cardsMain.style.transform = `translateX(-${
    groupIdx * (itemsPerGroup * cardWidth + itemsPerGroup * cardGap)
  }px)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === groupIdx));
}
showGroup(0);
